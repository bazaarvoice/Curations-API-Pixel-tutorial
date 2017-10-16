var analyticsHelper = require('./analyticsHelper.js');
var React    = require('react');
var Lightbox = require('react-image-lightbox-universal');
require('react-image-lightbox-universal/dist/umd/bundle.min.css');

 
module.exports = React.createClass({
  getInitialState: function() {
      return {
          index: 0,
          isOpen: false
      };
  },
  openLightbox: function() {
    console.log('featureExpand');
    const featureSpecifics = {
        name: 'featureExpand',
        component: '', //widgetName,
        detail1: '', //Facebook/Twitter/Pinterest
        detail2: '' //contentId
      } 
      analyticsHelper.featureUse(featureSpecifics);
    this.setState({ isOpen: true });
  },
  closeLightbox: function() {
      console.log('dismissExpand');
      const featureSpecifics = {
        name: 'dismissExpand',
        component: '' //widgetName
      } 
      analyticsHelper.featureUse(featureSpecifics);
      this.setState({ isOpen: false });
    },
// moveNext: function() {
//     this.setState({ index: (this.state.index + 1) % images.length });
// },
// movePrev: function() {
//     this.setState({ index: (this.state.index + images.length - 1) % images.length });
// },
  render: function() {
    var lightbox = '';
    if (this.state.isOpen) {
      lightbox = (
        <Lightbox
          mainSrc={this.props.image}
          contentId={this.props.id}
          channel={this.props.channel}
          // nextSrc={images[(this.state.index + 1) % images.length]}
          // prevSrc={images[(this.state.index + images.length - 1) % images.length]}

          onCloseRequest={this.closeLightbox}
          // onMovePrevRequest={this.movePrev}
          // onMoveNextRequest={this.moveNext}
        />
      );
    }

    return (
      <div>
        <a href="#" className="cover-link" onClick={this.openLightbox}></a>                     
        {lightbox}
      </div>
    );
  }
});