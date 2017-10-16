import React, { Component } from 'react';
import Lightbox from './lightbox.js';
import * as analyticsHelper from './analyticsHelper.js';

let images = [];
/* global BV */

class CurationGrid extends Component {
    constructor(props) {
      super(props);
      this.viewProfile = this.viewProfile.bind(this);
      this.loadMore = this.loadMore.bind(this);
      this.state = {
        response: [],
      };
    }
    viewProfile(channel, profile) {
      console.log('viewProfile');
      const featureSpecifics = {
        name: 'profileClick',
        component: '', //widgetName
        detail1: channel,  //Facebook/Twitter/Pinterest
        detail2: profile //URL of User ID / author
      }
      analyticsHelper.featureUse(featureSpecifics);
    }
    loadMore(contentId) {
      console.log('loadMore');
      const featureSpecifics = {
        name: 'loadMore',
        component: '',  //widgetName
        detail1: '',  
        detail2: ''  //contentID 
      }
      analyticsHelper.featureUse(featureSpecifics);   
    }
    
    //API call here. 
    componentDidMount() {
      const url = 'https://api.curations.bazaarvoice.com/display/content/get?client=profserv-test&passkey=cuDvEkc6B3bp0hkkgvPB9Vjk6W9FTPwHZ7owrKzW9j5H8&limit=21&display=beerapp&has_photo=true%27'
      
      fetch(url)
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then((data) => this.setState(
        {
          response: data.updates
        })
      );
      analyticsHelper.pageViewCategory();
      analyticsHelper.inView();
    }

  render() {
    console.log(this.state);
    for(var i=0; i < this.state.response.length; i++){
      images.push(this.state.response[i].data.photos[0].image_service_url);
      analyticsHelper.impression(this.state.response[i].data.id);
    }
    console.log(images);
    return (

      <section id="curationsCantina" role="main">
        <div className="bv-curations-cleanslate bv-grid-wrapper bv-minimalist">
          
          <div className="bv-grid-header-wrapper">
            <span className="bv-grid-title">
              <span className="bv-grid-title-left">#CurationsCantina</span>
            </span>
          </div>

          <div className="width-wrapper collection-wrapper">
            <div id="curations-grid" className="single-collection-grid pen-grid">
              
              {this.state.response.map((item,index) => 
          
                <div className="single-pen">
                  <div className="iframe-wrap loaded">
                  <Lightbox image={images, item.data.photos[0].image_service_url}
                            contentId={images, item.data.id}
                            channel={images, item.data.channel} />
                    <div className="img_container-background" style={{ backgroundImage: `url(${item.data.photos[0].image_service_url})` }}/>
                  </div>

                  <div className="meta">
                    <h3 className="pen-title">
                      <a href="">{item.data.text}</a>
                    </h3>

                    <div className="user-and-stats">
                      <div className="user">
                        <a className="username" href="#" onClick={() => this.viewProfile(item.data.channel, item.data.author.profile)}>
                          <img src={item.data.author.avatar} alt="" width="20" height="20" />
                          &nbsp;
                          <span>{item.data.author.alias}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* end data-bv-curations */}
          <a className="load-more clearfix" href="#" onClick={() => this.loadMore()}>LOAD MORE</a>
      
        </div>        
      </section>

    );
  }
}
export default CurationGrid;