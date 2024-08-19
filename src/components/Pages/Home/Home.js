import './Home.css';
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


function Home() {

  const navigate = useNavigate();

  const handleBookNowClick = () => {
    navigate('/taxi-booking');
  };
  const images = [
    '\\img\\image (1).jpg',
    '\\img\\image (1).png',
    '\\img\\image (2).jpg',
    '\\img\\image (3).jpg',
    '\\img\\image (4).jpg',
    '\\img\\image (5).jpg',
    '\\img\\image (6).jpg',
    '\\img\\image.jpg',
  ]
  let images1 = [
    '\\img\\car-img.jpg',
    '\\img\\wp5747011-full-screen-sai-baba-hd-computer-desktop-wallpapers.jpg',
    '\\img\\car2-img.jpg',
    '\\img\\shirdi-airport_0_1200.jpg',
    '\\img\\pexels-137666-747079.jpg'
  ];





  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % (images1.length));
    }, 2000);

    return () => clearInterval(interval);
  }, [images1.length]);
  return (

    <>
      <div className="carousel-container col-first-img">
        <img src={images1[currentImageIndex]} alt="carousel" className="carousel-image" />
      </div>

      <div className="offers-container text-center">
        <h2 className="offers-title">"Your Cab is Booked! Arrival in 5 Minutes Across Maharashtra"





        </h2>
        <Link to="/book-now">
          <button className="btn btn-outline-primary " type="button">Book Now</button>
        </Link>

        <div className="row">
          {images.map((image, index) => (
            <div key={index} className="col-md-3 col-sm-6 d-flex justify-content-center">
              <img src={image} className="img-fluid offers-image" alt={`Offer ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="container my-5">
        <h2 className="text-center text-primary mb-4">
          WHY CHOOSE <span className="highlight"> SAI SHUBHAM TRAVEL</span>
        </h2>
        <p className="text-center looking mb-5">
          Looking for cab services anywhere in Maharashtra? Then Sai Shubham Tours and Travels  is the right place for you.
        </p>
        <div className="row">
          <div className="col-md-4">
            <div className="d-flex mb-4">
              <div className="icon-box bg-danger text-white d-flex align-items-center justify-content-center">
                <i className="bi bi-car-front-fill"></i>
              </div>
              <div className="ms-3">
                <h5>Featured Luxury Cars</h5>
                <p>We have a range of all types of cabs in shirdi, Maharashtra. Book Now.</p>
              </div>
            </div>
            <div className="d-flex mb-4">
              <div className="icon-box bg-danger text-white d-flex align-items-center justify-content-center">
                <i className="bi bi-briefcase-fill"></i>
              </div>
              <div className="ms-3">
                <h5>Shirdi Temple Package</h5>
                <p>Special Shirdi Temple Packages by car. Enquire now.</p>
              </div>
            </div>
            <div className="d-flex mb-4">
              <div className="icon-box bg-danger text-white d-flex align-items-center justify-content-center">
                <i className="bi bi-binoculars-fill"></i>
              </div>
              <div className="ms-3">
                <h5>Available 24x7 Car</h5>
                <p>Our Help Representatives are available on calls for any inquiry.</p>
              </div>
            </div>
          </div>

          {/* Center Column - Car Image */}
          <div className="col-md-4 text-center d-flex align-items-center justify-content-center">
            <img src="https://car-o-man.com/wp-content/uploads/2020/09/caroman-car-service-lbnagar-hyderabad.png" alt="Car" className=" car--toy" />
          </div>

          {/* Right Column */}
          <div className="col-md-4">
            <div className="d-flex mb-4">
              <div className=" bg-danger text-white d-flex align-items-center justify-content-center">
                <i className="bi bi-geo-alt-fill"></i>
              </div>
              <div className="ms-3">
                <h5>Any Locations Pickup/Drop</h5>
                <p>Pick up and drop from door to door cab services.</p>
              </div>
            </div>
            <div className="d-flex mb-4">
              <div className=" bg-danger text-white d-flex align-items-center justify-content-center">
                <i className="bi bi-droplet-fill"></i>
              </div>
              <div className="ms-3">
                <h5>Clean Cabs</h5>
                <p>All our cabs are clean and well-maintained for your trip.</p>
              </div>
            </div>
            <div className="d-flex mb-4">
              <div className="icon-box bg-danger text-white d-flex align-items-center justify-content-center">
                <i className="bi bi-cash-coin"></i>
              </div>
              <div className="ms-3">
                <h5>Best Low Fare</h5>
                <p>Our cab fares are reasonable and fixed compared to other providers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <h1 className='text-center'><span className='text-primary'>BEST TAXI FOR</span> <span className='text-success'>TRAVEL</span></h1>
      <hr />
      <div className="car-card-container d-flex justify-content-center align-items-center p-3 border rounded container">
        <div className="car-info col-lg-4 col-md-6 p-3 text-center">
          <h3 className="car-name"><b>Swift Dezire</b></h3>
          <b>Shirdi Airport <FaArrowRightArrowLeft className='text-dark' /> Shirdi</b>
          <p><b>₹ 600</b></p>
          <b>24 * 7 Available</b>
          <div className="button-call-app d-flex justify-content-center">
            <a href="tel:+91 8669881059" className="btn btn-primary mr-2">
              <i className="fas fa-phone-alt"></i> Call Now
            </a>
            <a href="https://wa.me/8669881059" className="btn btn-success ml-2">
              <i className="fab fa-whatsapp"></i> Whatsapp
            </a>
          </div>

        </div>
        <div className="car-i-cars col-lg-4 col-md-6 text-center">
          <img src="https://imgd.aeplcdn.com/1280x720/cw/cars/maruti-suzuki/swift-dzire.jpg?q=80" alt="Swift Dezire" />
        </div>
        <div className="car-specs col-lg-4 col-md-12 p-3 text-left">
          <p><b>Door:</b> Four doors, central locking.</p>
          <p className='fuel'><b>Fuel:</b> Diesel, 1.3-liter engine.</p>
          <p className='safety'><b>Safety:</b> Airbags, rear parking sensors.</p>
          <p className='member'><b>Member:</b> 4 + 1</p>
          <button className="btn btn-success mt-4 book-home-btn" onClick={handleBookNowClick}>
            Book Now
          </button>  </div>
      </div>


      <div className="car-card-container d-flex justify-content-between align-items-center p-3 border rounded container">
        <div className="car-info col-lg-4 col-md-6 p-3 text-center">
          <h3 className="car-name"> <b>Etios</b></h3>

          <b>Shirdi Airport  <FaArrowRightArrowLeft className='text-dark' />  Shirdi </b>
          <p><b> ₹ 600</b></p>

          <b> 24 * 7 Aviable </b>

          <div className="button-call-app d-flex justify-content-center">
            <a href="tel:+91 8669881059" className="btn btn-primary mr-2">
              <i className="fas fa-phone-alt"></i> Call Now
            </a>
            <a href="https://wa.me/8669881059" className="btn btn-success ml-2">
              <i className="fab fa-whatsapp"></i> Whatsapp
            </a>
          </div>
        </div>
        <div className="car-i-cars col-lg-4 col-md-6 text-center">
          <img src="https://images.91wheels.com/assets/b_images/main/models/profile/profile1702446523.jpg?width=420&q=60?w=420&q=60" alt="Swift Dezire" />
        </div>
        <div className="car-specs col-lg-4 col-md-12 p-3 text-left">
          <p><b> Door : </b> Four doors , central locking.</p>
          <p className='fuel'><b >Fuel :</b> Diesel, 1.3-liter engine.</p>
          <p className='safety'><b>Safety : </b>airbags , rear parking sensors.</p>
          <p className='member'><b>Member :</b> 4 + 1 </p>
          <button className="btn btn-success mt-4 book-home-btn" onClick={handleBookNowClick}>
            Book Now
          </button>         </div>
      </div>



      <div className="car-card-container d-flex justify-content-between align-items-center p-3 border rounded container">
        <div className="car-info col-lg-4 col-md-6 p-3 text-center">
          <h3 className="car-name"> <b>Innova cresta</b></h3>

          <b>Shirdi Airport  <FaArrowRightArrowLeft className='text-dark' />  Shirdi </b>
          <p><b> ₹ 900</b></p>

          <b> 24 * 7 Aviable </b>

          <div className="button-call-app d-flex justify-content-center">
            <a href="tel:+91 8669881059" className="btn btn-primary mr-2">
              <i className="fas fa-phone-alt"></i> Call Now
            </a>
            <a href="https://wa.me/8669881059" className="btn btn-success ml-2">
              <i className="fab fa-whatsapp"></i> Whatsapp
            </a>
          </div>
        </div>
        <div className="car-i-cars col-lg-4 col-md-6 text-center">
          <img src="https://m.media-amazon.com/images/I/71Oe3oQEa3L._SX569_.jpg" alt="Swift Dezire" />
        </div>
        <div className="car-specs col-lg-4 col-md-12 p-3 text-left">
          <p><b> Door : </b> Four doors , central locking.</p>
          <p className='fuel'><b >Fuel :</b> Diesel, 1.3-liter engine.</p>
          <p className='safety'><b>Safety : </b>airbags , rear parking sensors.</p>
          <p className='member'><b>Member :</b> 6 + 1 </p>
          <button className="btn btn-success mt-4 book-home-btn" onClick={handleBookNowClick}>
            Book Now
          </button>         </div>
      </div>

      <div className="car-card-container d-flex justify-content-between align-items-center p-3 border rounded container">
        <div className="car-info col-lg-4 col-md-6 p-3 text-center">
          <h3 className="car-name"> <b>Ertiga</b></h3>

          <b>Shirdi Airport  <FaArrowRightArrowLeft className='text-dark' />  Shirdi </b>
          <p><b> ₹ 900</b></p>

          <b> 24 * 7 Aviable </b>

          <div className="button-call-app d-flex justify-content-center">
            <a href="tel:+91 8669881059" className="btn btn-primary mr-2">
              <i className="fas fa-phone-alt"></i> Call Now
            </a>
            <a href="https://wa.me/8669881059" className="btn btn-success ml-2">
              <i className="fab fa-whatsapp"></i> Whatsapp
            </a>
          </div>
        </div>
        <div className="car-i-cars col-lg-4 col-md-6 text-center">
          <img src="https://cdni.autocarindia.com/Utils/ImageResizerV2.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Maruti-Suzuki-Ertiga-050720221533.jpg&w=872&h=578&q=75&c=1" alt="Swift Dezire" />
        </div>
        <div className="car-specs col-lg-4 col-md-12 p-3 text-left">
          <p><b> Door : </b> Four doors , central locking.</p>
          <p className='fuel'><b >Fuel :</b> Diesel, 1.3-liter engine.</p>
          <p className='safety'><b>Safety : </b>airbags , rear parking sensors.</p>
          <p className='member'><b>Member :</b> 7 + 1 </p>
          <button className="btn btn-success mt-4 book-home-btn" onClick={handleBookNowClick}>
            Book Now
          </button>         </div>
      </div>

      <div className="car-card-container d-flex justify-content-between align-items-center p-3 border rounded container">
        <div className="car-info col-lg-4 col-md-6 p-3 text-center">
          <h3 className="car-name"> <b>Innova</b></h3>

          <b>Shirdi Airport  <FaArrowRightArrowLeft className='text-dark' />  Shirdi </b>
          <p><b> ₹ 900</b></p>

          <b> 24 * 7 Aviable </b>

          <div className="button-call-app d-flex justify-content-center">
            <a href="tel:+91 8669881059" className="btn btn-primary mr-2">
              <i className="fas fa-phone-alt"></i> Call Now
            </a>
            <a href="https://wa.me/8669881059" className="btn btn-success ml-2">
              <i className="fab fa-whatsapp"></i> Whatsapp
            </a>
          </div>
        </div>
        <div className="car-i-cars col-lg-4 col-md-6 text-center">
          <img src="https://i.pinimg.com/736x/1d/ca/a1/1dcaa112feb096ccb2bade4f2385e8f7.jpg" alt="Swift Dezire" />
        </div>
        <div className="car-specs col-lg-4 col-md-12 p-3 text-left">
          <p><b> Door : </b> Four doors , central locking.</p>
          <p className='fuel'><b >Fuel :</b> Diesel, 1.3-liter engine.</p>
          <p className='safety'><b>Safety : </b>airbags , rear parking sensors.</p>
          <p className='member'><b>Member :</b> 6 + 1 </p>
          <button className="btn btn-success mt-4 book-home-btn" onClick={handleBookNowClick}>
            Book Now
          </button>         </div>
      </div>

      <div className="car-card-container d-flex justify-content-between align-items-center p-3 border rounded container">
        <div className="car-info col-lg-4 col-md-6 p-3 text-center">
          <h3 className="car-name"> <b>cruzer force</b></h3>

          <b>Shirdi Airport  <FaArrowRightArrowLeft className='text-dark' />  Shirdi </b>
          <p><b> ₹ 1500</b></p>

          <b> 24 * 7 Aviable </b>

          <div className="button-call-app d-flex justify-content-center">
            <a href="tel:+91 8669881059" className="btn btn-primary mr-2">
              <i className="fas fa-phone-alt"></i> Call Now
            </a>
            <a href="https://wa.me/8669881059" className="btn btn-success ml-2">
              <i className="fab fa-whatsapp"></i> Whatsapp
            </a>
          </div>
        </div>
        <div className="car-i-cars col-lg-4 col-md-6 text-center">
          <img src="https://imgd.aeplcdn.com/1056x594/n/qok3e0b_1625353.jpeg?q=80" alt="Swift Dezire" />
        </div>
        <div className="car-specs col-lg-4 col-md-12 p-3 text-left">
          <p><b> Door : </b> Five doors , central locking.</p>
          <p className='fuel'><b >Fuel :</b> Diesel, 1.3-liter engine.</p>
          <p className='safety'><b>Safety : </b>airbags , rear parking sensors.</p>
          <p className='member'><b>Member :</b> 11 + 1 </p>
          <button className="btn btn-success mt-4 book-home-btn" onClick={handleBookNowClick}>
            Book Now
          </button>         </div>
      </div>

      <div className="car-card-container d-flex justify-content-between align-items-center p-3 border rounded container">
        <div className="car-info col-lg-4 col-md-6 p-3 text-center">
          <h3 className="car-name"> <b>Tempo Travler</b></h3>

          <b>Shirdi Airport  <FaArrowRightArrowLeft className='text-dark' />  Shirdi </b>
          <p><b> ₹ 1800</b></p>

          <b> 24 * 7 Aviable </b>

          <div className="button-call-app d-flex justify-content-center">
            <a href="tel:+91 8669881059" className="btn btn-primary mr-2">
              <i className="fas fa-phone-alt"></i> Call Now
            </a>
            <a href="https://wa.me/8669881059" className="btn btn-success ml-2">
              <i className="fab fa-whatsapp"></i> Whatsapp
            </a>
          </div>
        </div>
        <div className="car-i-cars col-lg-4 col-md-6 text-center">
          <img src="https://carhirepune.in/wp-content/uploads/2021/01/TEMPO-TRAVELLER-ON-RENT-IN-PUNE.jpg" alt="Swift Dezire" />
        </div>
        <div className="car-specs col-lg-4 col-md-12 p-3 text-left">
          <p><b> Door : </b> two doors , central locking.</p>
          <p className='fuel'><b >Fuel :</b> Diesel, 1.3-liter engine.</p>
          <p className='safety'><b>Safety : </b>airbags , rear parking sensors.</p>
          <p className='member'><b>Member :</b> 14 + 1 </p>
          <button className="btn btn-success mt-4 book-home-btn" onClick={handleBookNowClick}>
            Book Now
          </button>         </div>
      </div>


      <div className="car-card-container d-flex justify-content-between align-items-center p-3 border rounded container">
        <div className="car-info col-lg-4 col-md-6 p-3 text-center">
          <h3 className="car-name"> <b>Bus</b></h3>

          <b>Shirdi Airport  <FaArrowRightArrowLeft className='text-dark' />  Shirdi </b>
          <p><b> ₹ 3000</b></p>

          <b> 24 * 7 Aviable </b>

          <div className="button-call-app d-flex justify-content-center">
            <a href="tel:+91 8669881059" className="btn btn-primary mr-2">
              <i className="fas fa-phone-alt"></i> Call Now
            </a>
            <a href="https://wa.me/8669881059" className="btn btn-success ml-2">
              <i className="fab fa-whatsapp"></i> Whatsapp
            </a>
          </div>
        </div>
        <div className="car-i-cars col-lg-4 col-md-6 text-center">
          <img src="https://png.pngtree.com/thumb_back/fh260/background/20230715/pngtree-d-render-of-a-white-coach-tour-bus-dominating-over-a-image_3844061.jpg" alt="Swift Dezire" />
        </div>
        <div className="car-specs col-lg-4 col-md-12 p-3 text-left">
          <p><b>Door:</b> Two doors, central locking.</p>
          <p className='fuel'><b>Fuel:</b> Diesel, 1.3-liter engine.</p>
          <p className='safety'><b>Safety:</b> Airbags, rear parking sensors.</p>
          <p className='member'><b>Member:</b> 70 + 1</p>
          <button className="btn btn-success mt-4 book-home-btn" onClick={handleBookNowClick}>
            Book Now
          </button>   </div>

      </div>


    </>
  );
}

export default Home;

