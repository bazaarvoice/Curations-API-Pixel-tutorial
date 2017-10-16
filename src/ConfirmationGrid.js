import React, { Component } from 'react';
import './confirmation.css';
import * as analyticsHelper from './analyticsHelper.js';

class ConfirmationGrid extends Component {
  componentDidMount() {
    analyticsHelper.conversion();
  }

  render() {
    return (
      <div className="wrapper">
        <div className="responsive-container thankyou">

          <div className="thankyou-header">
            <h1
              className="thankyou-main-heading js-thankyou-main-heading deprecated-display-inline-block-m"
            >
              Thank you for your order.
            </h1>
            <a
              className="btn btn-mini btn-inverse thankyou-continue"
              href="/"
              id="COTYContinueShoppingBtn"
            >
              Continue Shopping
            </a>
          </div>

          <div>
            <div>
              <div>
                <div className="tile thankyou-order-details s2h">
                  <h2
                    className="thankyou-order-heading js-thank-you-order-status-heading"
                  >
                    Well send you an email with tracking information when your item ships.
                  </h2>
                  <div
                    className="thankyou-order-details-col col12 l-col6 xl-col3"
                  >
                    <h3
                      className="thankyou-order-subheading js-thank-you-order-status-subheading"
                    >
                      Order placed
                    </h3>
                    <div className="thankyou-order-paragraph">
                      <div
                        className="js-thankyou-order-shipping-method thankyou-order-shipping-method"
                      >
                        Value shipping
                      </div>
                      <strong>
                        Arrives by
                        <span className="thankyou-arrival-date">
                          {' '}Wed, Jul 15
                        </span>
                      </strong>Sold by Bazaarvoice.com
                    </div>
                    <div className="thankyou-order-paragraph">
                      Order #4601555774216
                    </div>
                  </div>
                  <div className="col12 l-col6">
                    <div className="grid">
                      <div className="thankyou-order-details-col col12 l-col6">
                        <h3 className="thankyou-order-subheading">
                          Shipping address
                        </h3>
                        <p
                          className="thankyou-order-paragraph js-thankyou-order-shipping-address"
                        >
                          <strong>Homer Simpson</strong><br />
                          742 Evergreen Terrace <br />
                          Springfield, DOH 55555 <br />
                          homer@simpsons.com
                        </p>
                      </div>
                    </div>
                    <div
                      className="thankyou-order-extended-details js-thankyou-order-extended-details active"
                    >
                      <div className="thankyou-order-items">
                        <div className="thankyou-order-item padding-ends">
                          <div className="arrange">
                            <div className="arrange-fit padding-right">
                              <img
                                alt=""
                                className="thankyou-order-img"
                                src="images/beer.jpg"
                              />
                            </div>
                            <div className="arrange-fill">
                              <div className="Grid Grid--gutters">
                                <div className="Grid-col u-size-2-4-l">
                                  <h4
                                    className="thankyou-order-item-heading copy-small no-margin js-thankyou-order-item-heading truncated"
                                  >
                                    <span>Can of Generic Beer</span>
                                  </h4>
                                  <div className="copy-mini">
                                    <span className="thankyou-variants">
                                      <span className="thankyou-variant">
                                        Size: Can
                                      </span>
                                      <span className="thankyou-variant">
                                        Actual color: White
                                      </span>
                                    </span>
                                  </div>
                                </div>
                                <div className="Grid-col u-size-1-4-l">
                                  <p className="no-margin copy-mini">
                                    Quantity: 1
                                  </p>
                                </div>
                                <div className="Grid-col u-size-1-4-l">
                                  <p
                                    className="no-margin font-semibold copy-small"
                                  >
                                    $3.58
                                  </p>
                                </div>
                                <div className="Grid-col">
                                  <p className="no-margin copy-mini">
                                    Value shipping: Arrives by
                                    <span
                                      className="display-inline-block font-semibold"
                                    >
                                      Wed, Jul15
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div className="thankyou-footer">
            <p className="thankyou-footer-paragraph" />
            <div className="thankyou-order-summary clearfix">

              <div className="grid">

                <div className="thankyou-summary-details col12 l-col4">
                  <h3 className="thankyou-summary-heading">Order summary</h3>

                  <div className="persistent-order-summary thankyou-pos">
                    <div className="pos-totals s-padding-sides js-pos-totals">
                      <div className="pos-totals-row js-subtotal">
                        <p>Subtotal <small>(1 item)</small></p>
                        <p className="pos-totals-row-price">$3.58</p>
                      </div>
                      <div
                        className="pos-shipping-methods-container js-pos-shipping-methods-container"
                      >
                        <div className="pos-shipping-methods">
                          <div
                            className="pos-totals-row pos-shipping-option-0 js-shipping"
                          >
                            <p className="pos-shipping-type">Value shipping</p>
                            <p
                              className="pos-totals-row-price pos-shipping-price"
                            >
                              $4.97
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="pos-totals-row js-est-tax">
                        <p>Est. tax</p>
                        <p className="pos-totals-row-price">$0.72</p>
                      </div>
                      <hr className="separator s-margin-ends" />
                      <div
                        className="arrange arrange-middle no-wrap pos-grand-total js-grand-total"
                      >
                        <p className="arrange-fill font-semibold">Total</p>
                        <p className="arrange-fit price-display">
                          <span className="sup">$</span>
                          9
                          <span className="currency-delimiter">.</span>
                          <span className="sup">27</span>
                        </p>
                      </div>
                    </div>

                    <div className="pos-controls s-padding-sides" />
                  </div>
                </div>

                <div className="thankyou-summary-details col12 l-col4">
                  <h3 className="thankyou-summary-heading">Payment type</h3>
                  <div
                    className="thankyou-summary-paragraph payment-options js-payment-type-summary"
                  >
                    <div className="paypal-logo margin-bottom">
                      <span className="visuallyhidden">Paid through</span>
                    </div>homer@simpson.com
                  </div>
                </div>

                <div
                  className="thankyou-summary-details col12 l-col4 js-thankyou-billing-address thankyou-billing-address"
                >
                  <h3 className="thankyou-summary-heading">Billing address</h3>
                  <div className="thankyou-summary-paragraph font-semibold">
                    <strong>Homer Simpson</strong> <br />
                    742 Evergreen <br />
                    Springfield, DOH 55555 <br />

                    <div className="thankyou-billing-email">
                      homer@simpson.com
                    </div>
                  </div>
                </div>

              </div>{/* end Grid */}

            </div>
          </div>

        </div>
      </div>
    );
  }
}
export default ConfirmationGrid;
