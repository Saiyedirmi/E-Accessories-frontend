import React from 'react'
import Meta from '../../components/Meta'
import BreadCrumb from '../../components/BreadCrumb'
import Color from '../../components/Color'
import Container from '../../components/Container'

const CompareProduct = () => {
  return (
    <>
    <Meta title={"Compare Products"} />
    <BreadCrumb title="Compare Products" />
    <Container class1="compare-product-wrapper py-5 home-wrapper-2">
    
            <div className="row">
                <div className="col-3">
                    <div className="compare-product-card position-relative">
                        <img src="images/cross.svg" 
                        alt="cross" 
                        className="position-absolute cross img-fluid" />
                        <div className="product-card-image">
                            <img src="images/tab-1.jpg " alt="tab" />
                        </div>
                        <div className="compare-product-details">
                            <h5 className="title">
                               Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch with WiFi+3G Tablet
                            </h5>
                            <h6 className="price mb-3 mt-3">$100.00</h6>
                            <div>
                                <div className="product-detail">
                                    <h5>Brand:</h5>
                                    <p>Havels</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Type:</h5>
                                    <p>Tablet Computers</p>
                                </div>
                                <div className="product-detail">
                                    <h5>SKU:</h5>
                                    <p>SKU033</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Availability:</h5>
                                    <p>In Stock</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Color:</h5>
                                    <Color />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* <div className="col-3">
                    <div className="compare-product-card position-relative">
                        <img src="images/cross.svg" 
                        alt="cross" 
                        className="position-absolute cross img-fluid" />
                        <div className="product-card-image ">
                            <img src="images/speaker.jpg " alt="speaker" />
                        </div>
                        <div className="compare-product-details">
                            <h5 className="title">
                               Beoplay A1 Portable Bluetooth Speaker With Microphone
                            </h5>
                            <h6 className="price mb-3 mt-3">$500.00</h6>
                            <div>
                                <div className="product-detail">
                                    <h5>Brand:</h5>
                                    <p>Bajaj</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Type:</h5>
                                    <p>Speakers</p>
                                </div>
                                <div className="product-detail">
                                    <h5>SKU:</h5>
                                    <p>SKU055</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Availability:</h5>
                                    <p>In Stock</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Color:</h5>
                                    <Color />
                                </div>
                                
                            </div>

                        </div>
                    </div>
                </div> */}
                <div className="col-3">
                    <div className="compare-product-card position-relative">
                        <img src="images/cross.svg" 
                        alt="cross" 
                        className="position-absolute cross img-fluid" />
                        <div className="product-card-image">
                            <img src="images/watch1.jpg " alt="watch" />
                        </div>
                        <div className="compare-product-details">
                            <h5 className="title">
                               Milanese Loop Watch Band for 42mm/44mm Apple Watch
                            </h5>
                            <h6 className="price mb-3 mt-3">$10.00</h6>
                            <div>
                                <div className="product-detail">
                                    <h5>Brand:</h5>
                                    <p>Apple</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Type:</h5>
                                    <p>Watches</p>
                                </div>
                                <div className="product-detail">
                                    <h5>SKU:</h5>
                                    <p>SKU004</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Availability:</h5>
                                    <p>In Stock</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Color:</h5>
                                    <Color />
                                </div>   
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            </Container>
    </>
  )
}
export default CompareProduct