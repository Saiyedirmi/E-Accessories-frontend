import React from 'react'
import { useState} from 'react'
import Meta from '../../components/Meta'
import BreadCrumb from '../../components/BreadCrumb'
import ProductCard from '../../components/ProductCard'
import ReactStars from 'react-rating-stars-component'
import ReactImageZoom from 'react-image-zoom'
import {TbGitCompare} from 'react-icons/tb'
import { AiOutlineHeart } from 'react-icons/ai'
import Container from '../../components/Container'

const SingleProduct = () => {
    const props={ width:400, height:500, zoomWidth:600, img:"https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"};
    const [orderedProduct , setOrderedProduct] = useState(true);
    const copyToClipboard = (text) => {
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
      }
  return (
    <>
    <Meta title={"Product Name"} />
    <BreadCrumb title="Product Name" />
    <Container class1="main-product-wrapper py-5 home-wrapper-2">
   
            <div className="row">
                <div className="col-6">
                    <div className="main-product-image">
                        <div>
                            <ReactImageZoom {...props}/>
                        </div>
                    </div>
                    <div className="other-product-images d-flex flex-wrap gap-15">
                        <div>
                            <img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" className="img-fluid" alt="" />
                        </div>
                        <div>
                        <img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" className="img-fluid" alt="" />
                        </div>
                        <div>
                        <img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" className="img-fluid" alt="" />
                        </div>
                        <div>
                        <img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="main-product-details">
                        <div className="border-bottom">
                        <h3 className="title">
                            Watch bulk 10 pair multi colored for students
                        </h3>
                        </div>
                        <div className="border-bottom py-3">
                            <p className="price">$ 100</p>
                            <div className="d-flex align-items-center">
                            <ReactStars
                    count={5}
                    size={24}
                    value="3"
                    edit={false}
                    activeColor="#ffd700"
                />
                <p className="mb-0 t-review">( 2 Reviews )</p>
                            </div>
                            <a className="review-btn" href="#review">Write a Review</a>
                        </div>
                        <div className="border-bottom py-3">
                            <div className="d-flex gap-10 align-items-center my-2">
                                <h3 className="product-heading">Type:</h3>
                                <p className="product-data">Watch</p>
                            </div>
                            <div className="d-flex gap-10 align-items-center my-2">
                                <h3 className="product-heading">Brand:</h3>
                                <p className="product-data">Titan</p>
                            </div>
                            <div className="d-flex gap-10 align-items-center my-2">
                                <h3 className="product-heading">SKU:</h3>
                                <p className="product-data">SKU027</p>
                            </div>
                            <div className="d-flex gap-10 align-items-center my-2">
                                <h3 className="product-heading">Availability:</h3>
                                <p className="product-data">541 in stock</p>
                            </div>
                            <div className="d-flex gap-15 flex-row align-items-center mt-2 mb-3">
                                <h3 className="product-heading">Quantity:</h3>
                                <div className="">
                                    <input type="number" 
                                    name="" 
                                    min={0}
                                    max={10}
                                    className="form-control"
                                    style={{"width":"70px"}}
                                    id=""  
                                    />
                                </div>
                                <div className="d-flex align-items-center gap-30 ms-5">
                                    <button className="button border-0" type="submit">
                                         Add To Cart
                                    </button>
                                    <button className="button signup">
                                         Buy It Now
                                    </button>
                                </div>
                                
                            </div>
                            <div className="d-flex align-items-center gap-15">
                                <div>
                                    <a href=""><TbGitCompare className="fs-5 me-3" />Add to Compare</a>
                                </div>
                                <div>
                                    <a href=""><AiOutlineHeart className="fs-5 me-3" />Add to wishlist</a>
                                </div>
                            </div>
                            <div className="d-flex gap-10 align-items-center my-2">
                                <h3 className="product-heading">Shipping & Returns:</h3>
                                <p className="product-data">
                                    <br/>Free Shipping and returns available on all orders!<br /> We ship
                                    all domestic orders<b> within 5-10 working days!</b>
                                </p>
                            </div>
                            <div className="d-flex gap-10 align-items-center my-2">
                                <h3 className="product-heading">Copy Product Link:</h3>
                               <a href="javascript:void(0);" 
                               onClick={()=>{
                                copyToClipboard("https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg");
                               }}>
                                https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" 
                               </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Container>
            <Container class1="reviews-wrapper p-5 home-wrapper-2">
    
            <div className="row">
                <div className="col-12">
                    <h4>Reviews</h4>
                    <div className="review-inner-wrapper">
                    <div className="review-head d-flex justify-content-between align-items-end">
                        <div>
                            <h4 className="mb-2">Customer Reviews</h4>
                            <div className="d-flex align-items-center gap-10">
                            <ReactStars
                            count={5}
                            size={24}
                            value="3"
                            edit={false}
                            activeColor="#ffd700"
                            />
                            <p className="mb-0">Based on 2 reviews</p>
                        </div>
                        </div>
                        <div>
                            {orderedProduct && (
                        <a className="text-dark text-decoration-underline" href="">Write a review</a>
                            )}
                        </div>
                    </div>
                    <div  className="review-form py-4">
                        <h4 className="mb-2">Write a Review</h4>
                    <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input type="text" className="form-control" placeholder="Name" />
                  </div>
                  <div>
                    <input type="email" className="form-control" placeholder="Email"/>
                  </div>
                  <div>
                    <h3 className="text-align-center">Ratings</h3>
                  <ReactStars
                            count={5}
                            size={24}
                            value="3"
                            edit={true}
                            activeColor="#ffd700"
                            />
                  </div>
                  <div>
                    <textarea name="" className="form-control w-100" id="" cols="30" rows="4"  placeholder=" Comments"></textarea>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button className="button border-0">Submit Review</button>
                  </div>
                </form>
                    </div>
                    <div className="reviews mt-4">
                        <div className="review">
                            <div className="d-flex gap-10 align-items-center">
                                <h6 className="mb-0">Irmi</h6>
                        <ReactStars
                            count={5}
                            size={24}
                            value="3"
                            edit={false}
                            activeColor="#ffd700"
                            />
                            </div>
                            <p>Great Stuff , I think I will order more products from you guys</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </Container>
            <Container class1="popular-wrapper py-5 home-wrapper-2">
    
        {/* <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div> */}
        {/* <div className="row">
          
          <ProductCard/>
          
      </div> */}
      </Container>
    </>
  )
}

export default SingleProduct