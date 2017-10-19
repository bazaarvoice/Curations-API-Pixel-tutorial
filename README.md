Curations API Pixel tutorial
================

The Curations API Pixel tutorial demonstrates the correct API analytic events that Bazaarvoice requires for Curation API solutions. This includes user interactions with HTML controls as wells as any conversion events.   

Before Downloading:
-------------

The Curations API Pixel tutorial is built using the [create-react-app](https://github.com/facebookincubator/create-react-app) framework. User should familiarize themselves with that code base.  

1. Note that implementing the API Analytics Tags is required according to the [Curations API terms and conditions]()
2. Read the [Curations API Analytics tutorial](https://developer.bazaarvoice.com/curations-api/bv-pixel) documentation.
3. Install the [Bazaarvoice Analytics Inspector for Chrome](https://chrome.google.com/webstore/detail/bazaarvoice-analytics-ins/olmofcadoappjkcnnhomdlnpmpbleekd).
4. Realize that the tutorial is meant as a sample, and by no means optimized for speed and scale. The code is provided as a means to help API users better understand the required analytics for Curations API users.

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
This sample makes a REST API call to the Curations endpoint then iterates over the results and builds an image grid.  Upon rendering the Curations image grid in the browser, several [analytics impression events](https://developer.bazaarvoice.com/curations-api/bv-pixel/product-display-page-overview/passive-analytic-events#trackimpression()) are executed. Also, a user interacts with the images in the Curations grid (i.e. invoke a modal of the image), the correct [feature used](https://developer.bazaarvoice.com/curations-api/bv-pixel/product-display-page-overview/featured-used-events) analytics are executed. 

The analytics events are captured and displayed in the [Bazaarvoice Analytics Inspector for Chrome](https://chrome.google.com/webstore/detail/bazaarvoice-analytics-ins/olmofcadoappjkcnnhomdlnpmpbleekd).

Accompanying the code on the Curations image grid, is a HTML page simulting a [conversion event](http://api-curations-analytics-kit.bazaarvoice.com/confirmation) such as a product purchase. Bazaarvoice allows users to create their own definition of conversion, both  non-commercial conversion and traditional e-commerce conversion.  By connecting the user's behavior on the product details page to the conversion page, we are able to track the site conversion rate of those who have interacted with user generated content.

The scout file, bv.js, that send the analytics data to Bazaarvoice servers after collecting data must also be present on all pages where analytics are collected. 

#### Sample Curations Image Gallery

The javascript on the sample [Curations Gallery page](http://api-curations-analytics-kit.bazaarvoice.com/) listens for different events. The API Analytics code executes when they occur. The [required analytics tags](https://developer.bazaarvoice.com/curations-api/bv-pixel/required-curations-analytics) for the Curations API are detailsed [here](https://developer.bazaarvoice.com/curations-api/bv-pixel/required-curations-analytics). 

___

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
