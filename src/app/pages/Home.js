import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import BlogCard from '../../components/BlogCard'
import ProductCard from '../../components/ProductCard'
import SpecialProduct from '../../components/SpecialProduct'
import Container from '../../components/Container'
import { services } from '../../utils/Data'

const Home = () => {
  return (
    <>
    <Container class1="home-wrapper-1 py-5">
      
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative p-3">
              <img src="images/main-banner-1.jpg" 
              className="img-fluid rounded-3"
              alt="main banner"/>
              <div className="main-banner-content position-absolute">
                <h4>SUPERCHARGED FOR PROS</h4>
                <h5>iPad S13+ Pro</h5>
                <Link className="button">BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
            <div className="small-banner position-relative p-3">
              <img src="images/catbanner-01.jpg" 
              className="img-fluid rounded-3"
              alt="main banner"/>
              <div className="small-banner-content position-absolute">
                <h4>SALE</h4>
                <h5>Laptops Max</h5>
                <p>From $1699 or $160.40 <br/>per month</p>
              </div>
            </div>
            <div className="small-banner position-relative p-3">
              <img src="images/catbanner-02.jpg" 
              className="img-fluid rounded-3"
              alt="main banner"/>
              <div className="small-banner-content position-absolute">
                <h4>15% OFF</h4>
                <h5>SmartWatch 7</h5>
                <p>Shop the latest band <br/>styles and colors</p>
              </div>
            </div>
            
            <div className="small-banner position-relative p-3">
              <img src="images/catbanner-03.jpg" 
              className="img-fluid rounded-3"
              alt="main banner"/>
              <div className="small-banner-content position-absolute">
                <h4>NEW ARRIVAL</h4>
                <h5>Buy IPad Air</h5>
                <p>From $599 or $49.40 <br/>per month</p>
              </div>
            </div>
            <div className="small-banner position-relative p-3">
              <img src="images/catbanner-04.jpg" 
              className="img-fluid rounded-3"
              alt="main banner"/>
              <div className="small-banner-content position-absolute">
                <h4>FREE Engraving</h4>
                <h5>AirPods Max</h5>
                <p>High Fiedility playback<br/>& ultra-low distortion</p>
              </div>
            </div>
            
            </div>
          </div>
        
      </div>
    </Container>
    <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {services?.map((i,j) => {
                return(
                    <div className="d-flex align-items-center gap-15">
                      <img src={i.image} alt="services" />
                      <div>
                        <h6>{i.title}</h6>
                        <p className="mb-0">{i.tagline}</p>
                        </div>
                        </div>
                );
                })}
              
            </div>

          </div>
        </div>
        </Container>
        <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex flex-wrap justify-content-between align-items-center">
             <div className="d-flex gap-30 align-items-center">
              <div>
                <h6>Cameras</h6>
                <p>10 Items</p>
              </div>
              <img src="images/camera.jpg" alt="camera" />
             </div>
             <div className="d-flex gap-30 align-items-center">
              <div>
                <h6>Smart tv</h6>
                <p>7 Items</p>
              </div><br/>
              <img src="images/tv.jpg" alt="TV" />
             </div>
             <div className="d-flex gap-30 align-items-center">
              <div>
                <h6>HeadPhones</h6>
                <p>20 Items</p>
              </div>
              <img src="images/headphone.jpg" alt="Headphone" />
             </div>
             <div className="d-flex gap-30 align-items-center">
              <div>
                <h6>Speakers</h6>
                <p>13 Items</p>
              </div>
              <img src="images/speaker.jpg" alt="Speaker" />
             </div>
             <div className="d-flex gap-30 align-items-center">
              <div>
                <h6>Home <br/>Appliances</h6>
                <p>15 Items</p>
              </div>
              <img src="images/homeapp.jpg" alt="Appliances" />
             </div>
             <div className="d-flex gap-30 align-items-center">
              <div>
                <h6>Accessories</h6>
                <p>12 Items</p>
              </div>
              <img src="images/acc.jpg" alt="Accessories" />
             </div>
             <div className="d-flex gap-30 align-items-center">
              <div>
                <h6>Laptops</h6>
                <p>18 Items</p>
              </div><br/>
              <img src="images/laptop.jpg" alt="laptop" />
             </div>
             <div className="d-flex gap-30 align-items-center">
              <div>
                <h6>Tablets</h6>
                <p>12 Items</p>
              </div>
              <img src="images/tab-2.jpg" alt="tab" />
             </div>
            </div>
          </div>
          </div>
          </Container>
          <Container class1="featured-wrapper py-5 home-wrapper-2">
    
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        </Container>
        <Container class1="famous-wrapper py-5 home-wrapper-2">
    
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/famous-2.webp"className="img-fluid" alt="famous" />
              <div className="famous-content position-absolute">
              <h5>Big Screen</h5>
              <h6>Smart Watch Series 7</h6>
              <p>From $300 or $16.62/mo. for 24 mo.*  </p>
            </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/famous-3.webp"className="img-fluid" alt="famous" />
              <div className="famous-content position-absolute">
              <h5 className="text-dark">Studio Display</h5>
              <h6 className="text-dark">600 nits of Brightness</h6>
              <p className="text-dark">27-inch 5K Retina display </p>
            </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/famous-4.webp"className="img-fluid" alt="famous" />
              <div className="famous-content position-absolute">
              <h5 className="text-dark">SMARTPHONES</h5>
              <h6 className="text-dark">SmartPhone 13 Pro</h6>
              <p className="text-dark">Now in Green From $999.0 or $41.62/mo. for 24 mo. Footnote*</p>
            </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/famous-5.webp"className="img-fluid" alt="famous" />
              <div className="famous-content position-absolute">
              <h5 className="text-dark">Home Speakers</h5>
              <h6 className="text-dark">Room-filling Sound.</h6>
              <p className="text-dark">From $699 0r $116.58/mo. for 12 mo.*</p>
            </div>
            </div>
          </div>
          
        </div>
        </Container>
        {/* <Container class1="special-wrapper py-5 home-wrapper-2">
    
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
          </div>
        <div className="row">
        <SpecialProduct />
        <SpecialProduct />
        <SpecialProduct />
        <SpecialProduct />
        </div>
       
        </Container> */}
       
        <Container class1="popular-wrapper py-5 home-wrapper-2">
    
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
      </div>
      </Container>
      <Container class1="marque-wrapper py-5 card-wrapper">
    
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-02.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-03.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-04.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-06.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-07.png" alt="brand" />
                </div>
                 
              </Marquee>

            </div>
          </div>
        </div>
        </Container>
        <Container class1="blog-wrapper py-5 home-wrapper-2">
    
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
         
        </div>
        <div className="row">
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
        </div>
        </Container>
    </>
  )
}

export default Home