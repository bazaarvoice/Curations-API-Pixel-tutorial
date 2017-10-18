Curations API Pixel tutorial
================

The Curations API Pixel tutorial demonstrates the correct API analytic events that Bazaarvoice requires for Curation API solutions. This includes user interactions with HTML controls as wells as any conversion events.   

Before Downloading:
-------------

The Curations API Pixel tutorial is built using the [create-react-app](https://github.com/facebookincubator/create-react-app) framework. User should familiarize themselves with the code base.  

1. Note that implementing the API Analytics Tags is required according to the [Curations API terms and conditions]()
2. Read the [Curations API Analytics tutorial](https://developer.bazaarvoice.com/curations-api/bv-pixel) documentation.
3. Install the [Bazaarvoice Analytics Inspector for Chrome](https://chrome.google.com/webstore/detail/bazaarvoice-analytics-ins/olmofcadoappjkcnnhomdlnpmpbleekd).
4. Realize that the starter kit is meant as a sample and by no means optimized for speed and scale. The code is provided as a means to help API users better understand the required analytics for Curations API users.

How it run locally:
-------------------

1. Clone the repo. 
2. Navigate to the 'Curations-API-Pixel-tutorial' folder and install the dependencies using 'npm install'
```sh
npm install
```
3. Start the application
```sh
npm start
```
4. The application should open in a browser using the address "http://localhost:3000/"

What is the sample doing?
-------------------------
The sample makes an REST API call to the Curations enpoint and iterates over the results and builds an Curations image grid.  Upon rendering the page, several [analytics impression events](https://developer.bazaarvoice.com/curations-api/bv-pixel/product-display-page-overview/passive-analytic-events#trackimpression()) are executed. As a user interacts with the HTML page (i.e. invoke a modal of the image) the correct [feature used](https://developer.bazaarvoice.com/curations-api/bv-pixel/product-display-page-overview/featured-used-events) are shown. 

All the analytics events are captured in the [Bazaarvoice Analytics Inspector for Chrome](https://chrome.google.com/webstore/detail/bazaarvoice-analytics-ins/olmofcadoappjkcnnhomdlnpmpbleekd).

Accompanying the code on the Curations gallery page, is a HTML page simulting conversion. code associated with the conversion event. Bazaarvoice supports various definitions of conversion, both  non-commercial conversion and traditional e-commerce conversion.  By connecting the user's behavior on the product details page to the conversion page, we are able to track the site conversion rate of those who have interacted with user generated content.

After the custom code capturing the different parameters is completed and associated with HTML event, the final step is a simple call using the [Bazaarvoice API Tracker library](http://analytics-static.ugc.bazaarvoice.com/prod/static/latest/bv-analytics.js). This is injected onto the page by the Bazaarvoice scoutfile, which is required. To find out more, contact us at developeradvocate@bazaarvoice.com.

The scout file, bv.js file send the analytics data to Bazaarvoice servers after collecting from the product details page and the user defined 'conversion' page.

#### Sample Product Details Page

The javascript on the [sample product description page](http://api-analytics-kit.bazaarvoice.com/) listens for different events. The API Analytics code executes when they occur. The required analytics tags are required for each Bazaarvoice API instance.

##### [Page View Product](https://developer.bazaarvoice.com/apis/conversations/tutorials/analytics#page-view-product)

Each time a product details page is rendered, the transaction analytics tag '[page view product](https://developer.bazaarvoice.com/apis/conversations/tutorials/analytics#page-view-product)' is executed. In this sample, the '[page view product](https://github.com/bazaarvoice/api-analytics/blob/master/js/main.js#L51-L53)' is associated with the page load event.  When page load is complete, the analytics code is called and passes an object. The object's key/values pairs are [hard coded](https://github.com/bazaarvoice/api-analytics/blob/master/js/main.js#L2-L14) and are not obtained from a Conversations API call.

___


##### [Feature Used in View](https://developer.bazaarvoice.com/apis/conversations/tutorials/analytics#feature-used-in-view)

Not all Product Details Pages have Consumer Generated Content (CGC) within the browser's viewable area when the page is rendered.  Often, users must scroll to view the CGC. As part of the API Analytics requirements, when the CGC comes in view, must also be captured. This is done by calling the transactional analytics tag '[feature used in view](https://github.com/bazaarvoice/api-analytics/blob/master/js/main.js#L46)'.  This object's key/value pairs differs slightly from the previous 'page view product' by:
1. having additional keys that identify the CGC container Id
2. allow to specify the minimum pixel height that must be viewed before executing
3. specifying a time (milliseconds) the CGC container must be viewed before executing

___

##### [Feature Used](https://developer.bazaarvoice.com/apis/conversations/tutorials/analytics#feature-used-in-view)

Event handlers are also attached to the various CGC inputs. This aims to capture how users interact with the Conversations data. In order to complete this.

Included in the sample are:
1. Clicking "Show/Hide Filter"
2. Selecting an Age or Gender sub-filter
3. Clicking "Write a Review"
4. Interacting with the "Sort"
5. Expanding/contracting the "Read more/less"
6. Voting if the review was helpful
7. Reporting the review
8. Clicking the pagination
9. Clicking the "See All" button
10. Clicking the "Staff" button

___


#### Conversion Page

The [conversion page](http://api-analytics-kit.bazaarvoice.com/conversion.html) simulates a page a user would reach upon completing a purchase. With conversion complete, the conversion analytic tags are executed. Both the '[ConversionTransaction](https://github.com/bazaarvoice/api-analytics/blob/master/js/conversion.js#L32-L33)' and the '[PIIConversionTransaction](https://github.com/bazaarvoice/api-analytics/blob/master/js/conversion.js#L32-L33)' are called in this sample. At a minimim one of the three conversion tags must be included in each Bazaarvoice API instance.

##### [ConversionTransaction](https://developer.bazaarvoice.com/apis/conversations/tutorials/analytics#conversion-transaction)

##### [PIIConversionTransaction](https://developer.bazaarvoice.com/apis/conversations/tutorials/analytics#conversion-transaction-with-pii)

##### [Non Transactional Conversion](https://developer.bazaarvoice.com/apis/conversations/tutorials/analytics#non-commercial-conversion-transaction)

Hosted Sample:
---------------
In addition to providing the starter kit for download, a [hosted Curations API Analytics tutorial](http://api-curations-analytics-kit.bazaarvoice.com/) is provided.

Download and install the [Bazaarvoice Analytics Inspector for Chrome](https://chrome.google.com/webstore/detail/bazaarvoice-analytics-ins/olmofcadoappjkcnnhomdlnpmpbleekd).  Once install you will see the Analytics Inspector icon in the Chrome browser.

<img width=30% alt="Bazaarvoice Analytics Inspector browser extenstion" src="https://cloud.githubusercontent.com/assets/2584258/11514761/c7948e42-983f-11e5-8b90-a3f724da7475.jpg">

Visit the [Curations gallery page](http://api-curations-analytics-kit.bazaarvoice.com/). Open the [Bazaarvoice Analytics Inspector](https://chrome.google.com/webstore/detail/bazaarvoice-analytics-ins/olmofcadoappjkcnnhomdlnpmpbleekd) and interact with the page. The tool documents each time an analytics event is captured and sent to Bazaarvoice. Notice the red counter on the icon.

<img width=30% alt="Bazaarvoice Analytics Inspector browser extenstion" src="https://cloud.githubusercontent.com/assets/2584258/11639298/b2339294-9cf1-11e5-8e5a-2cd59183dd44.jpg">

Click and expand the different Curation images. Diffent feature events being populated. Event handlers are attached to several HTML, inputs which in-turn queue the analytics code.

<img width=40% alt="curations gallery, api analytics inspector" src="https://user-images.githubusercontent.com/2584258/31735668-36c55536-b408-11e7-88cb-88fb13a351f5.png">

Also available within the hosted site is a sample [conversion](http://api-curations-analytics-kit.bazaarvoice.com/confirmation) page. Again open the page in a browser with the [Bazaarvoice Analytics Inspector](https://chrome.google.com/webstore/detail/bazaarvoice-analytics-ins/olmofcadoappjkcnnhomdlnpmpbleekd) open. The analytics on this page are executed on page load. There are several options available for defining and capturing conversion events. Conversion is described in detail in the [conversion analytics tags](https://developer.bazaarvoice.com/curations-api/bv-pixel/transaction-conversion-overview) section.

<img width=40% alt="curations conversion page, api analytics inspector" src="https://user-images.githubusercontent.com/2584258/31735713-60de75be-b408-11e7-8627-43904953b2a8.png">

Things to Note
----------------

The sample works in conjunction with the [Bazaarvoice Analytics Inspector](https://chrome.google.com/webstore/detail/bazaarvoice-analytics-ins/olmofcadoappjkcnnhomdlnpmpbleekd) to aid clients in making sure the implementation is complete.

It is required that a Bazaarvoice team member verify the completion of each implementation.
