
/* global BV */

// the siteMetadata is static for the site and is declared only
// once below
const siteMetadata = {  
  environment: 'production', //hard coded values
  client: 'bv_curation_sample',  //hard coded values
  brand: 'bv_curation_sample', //hard coded values
  bvProduct: 'Curations' //hard coded values
};

export function featureUse(featureSpecifics) {
  console.log('featureUse');
  
  BV.pixel.trackEvent('Feature', {
    type: 'Used',
    name: featureSpecifics.name,
    brand: siteMetadata.brand,
    bvProduct: siteMetadata.bvProduct,
    detail1: featureSpecifics.detail1,
    detail2: featureSpecifics.detail2
  });
}
export function pageViewProduct(featureSpecifics) {
  console.log('pageViewProduct');
  
}
export function pageViewCategory(featureSpecifics) {
  var pageViewData = {
    bvProduct: siteMetadata.bvProduct,
    brand: siteMetadata.brand,
    type: 'Category',
    categoryId: ''
  }
BV.pixel.trackPageView(pageViewData);
}
export function impression(contentId) {
  var impressionObject = {
    contentId: contentId,
    bvProduct1: siteMetadata.bvProduct,
    brand1: siteMetadata.brand  
    }
  
  BV.pixel.trackImpression(
    impressionObject
  );
}
export function inView() {  
  var inViewData = {
    bvProduct: siteMetadata.bvProduct,
    brand: siteMetadata.brand
  };
  // Triggers an analytics event once 250 pixels of the 'curations-grid' container
  // are in the viewport.
  BV.pixel.trackInView(inViewData, {
    minPixels: 250,
    containerId: 'curations-grid'
  })
}
export function conversion() {
  var TransactionData = {
    orderId: 'EX-123',
    total: "60.00",
    currency: "USD",
    tax: "8.25",
    shipping: "25.00",
    city: 'Exampleville',
    state: 'Texas',
    country: 'USA',
    items: [
      {
        sku: '1234567-1',
        quantity: '1',
        name: 'keg of generic beer',
        price: "50.00",
        category: "kegs",
        imageUrl: "http://www.someserver.com/images/someimage.jpg"
      },
      {
        sku: '1234567-2',
        quantity: '1',
        name: 'koozy for beer cans',
        price: "10.00",
        category: "accessories",
        imageUrl: "http://www.someserver.com/images/someimage.jpg"
      }
    ]
  };
   
  BV.pixel.trackTransaction(TransactionData);



}