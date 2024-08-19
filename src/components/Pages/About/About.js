import React from 'react';
import "./About.css";

function About() {
  return (
    <div>
      <div className='img'>
        <div className='text-about'>
          <h1>Welcome to Sai Shubham Tours and Travels</h1>
        </div>
      </div>
      <div className='container mt-3'>
        <h4 className='About-us'><b>You can book a car over a call in just 5 minutes.   <a href="tel:+91 8669881059"><button className='btn btn-outline-danger mr-3 ' > <b>Call me now.</b></button></a>
        </b>


        </h4>

        <h4 className='About-us'>Sai Shubham Tours and Travels</h4>
        <p><b>Sai Shubham Tours and Travels</b>:Savaari's Shirdi taxi service is your one-stop solution for all your transportation needs in Shirdi. We take pride in offering an exceptional travel experience that is both affordable and convenient. With Savaari, you can enjoy the benefits of reliable drivers, comfortable vehicles, and hassle-free booking, making us the preferred choice for cab service in Shirdi. Our dedication to customer satisfaction ensures that your experience with us is not only pleasant but also unforgettable. Savaari is here to give you a seamless and comfortable taxi service in Shirdi, whether you are going for business or pleasure. So sit back, relax, and let us handle the transportation as you enjoy Shirdi's gorgeous city.</p>
      </div>

      <div className="container my-5">
        <div className="row text-center mb-4">
          <div className="col-md-4">
            <div className="service-card">
              <i className="fas fa-car service-icon"></i>
              <h5>Premium Cabs</h5>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-card">
              <i className="fas fa-user-tie service-icon"></i>
              <h5>Professional Drivers</h5>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-card">
              <i className="fas fa-tags service-icon"></i>
              <h5>Committed Services</h5>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8">
            <div className="features">
              <p>
                We are committed to providing safe and quick service. Our cabs are available round the clock and are backed by location tracking. This means a quicker pickup and faster response time to your call for cabs.
              </p>
              <p>
                We offer services like Airport transfer, hourly packages for corporate executives to attend meetings, conventions, weddings, and social events.
              </p>
              <p>
                Our company is equipped with the most experienced staff in the required field of service and has the best fleet in the city. We have been providing service of high quality to our esteemed corporate and individual clients.
              </p>
              <ul className="feature-list">
                <li>Wide range of all type Sedan, SUV and Premium cars</li>
                <li>Regionable Fare price Compare to other Cab providers</li>
                <li>Long list of Happy Customers Since 10 years.</li>
                <li>One way, Round way, Packages, Airport Cab Services.</li>
                <li>24 x 7 Customer inquiry Support by Call and email.whatsapp</li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <img src="\img\shirdi-sai-baba.jpg" alt="Saibaba" className="img-fluid rounded" />
          </div>
        </div>
      </div>
      <div className='container mt-3'>
        <p><b>Different types of cabs available in Shirdi</b><br />
          Savaari's Shirdi taxi service offers a wide range of affordable cab options to suit all your road trip needs. Whether you're travelling solo or with a group, we have the perfect cab service in Shirdi for you. From compact sedans for city exploration to spacious SUVs for family vacations, our fleet caters to every traveller's preferences, ensuring a comfortable and enjoyable journey. If you are looking for a round trip, you can book a cab from Shirdi to explore nearby destinations hassle-free.</p>

        <p><b>Local taxi in Shirdi</b><br />Looking for a reliable local taxi in Shirdi? You can always rely on Savaari Taxi. You can easily explore the city at your own pace with the help of our local taxi service. Our professional and experienced drivers will take you to your desired destinations in Shirdi, ensuring a comfortable and hassle-free journey. The local taxi service in Shirdi is available from Savaari, whether you need a taxi for sightseeing, shopping, or any other local travel requirements. You can also select from multiple packages on your local booking: 4hrs/40km for half-day cabs, 8hrs/80km and 12hrs/120km for full-day cabs in Shirdi.</p>
        <p><b>Shirdi airport taxi</b><br />Savaari's reliable airport transfer service is here to ensure a seamless and hassle-free journey to and from Shirdi. Shirdi Airport is the main airport serving Shirdi, located around 15 kilometres from the city centre. Our professional drivers are well-versed with the airport and its surroundings, ensuring timely pickups and drop-offs. Whether you are arriving at or departing from Shirdi Airport, Savaari's Shirdi Airport taxi service guarantees a comfortable and convenient travel experience. Leave your transportation worries to us and enjoy a smooth journey to your destination.</p>
      </div>
    </div>
  )
}

export default About;
