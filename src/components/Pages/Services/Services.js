import React from 'react';
import './Services.css';

function Services() {
  return (
    <div className="">
      <div className='img1'>
        <div className='text-about'>
          {/* Add any text or content here if needed */}
        </div>
      </div>

      <div className='Discount'>Discount is available at this rate</div>

      <div className="table-container">
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">From</th>
              <th scope="col">To</th>
              <th scope="col">Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ backgroundColor: '#d4edda' }}>
              <th scope="row">1</th>
              <td>Shirdi</td>
              <td>Nashik</td>
              <td>2,200</td>
            </tr>
            <tr style={{ backgroundColor: '#fff3cd' }}>
              <th scope="row">2</th>
              <td>Shirdi</td>
              <td>Aurangabad</td>
              <td>3,800</td>
            </tr>
            <tr style={{ backgroundColor: '#f8d7da' }}>
              <th scope="row">3</th>
              <td>Shirdi</td>
              <td>Pune</td>
              <td>4,500</td>
            </tr>
            <tr style={{ backgroundColor: '#d1ecf1' }}>
              <th scope="row">4</th>
              <td>Shirdi</td>
              <td>Kolhapur</td>
              <td>5,200</td>
            </tr>
            <tr style={{ backgroundColor: '#d4edda' }}>
              <th scope="row">5</th>
              <td>Shirdi</td>
              <td>Solapur</td>
              <td>2,400</td>
            </tr>
            <tr style={{ backgroundColor: '#fff3cd' }}>
              <th scope="row">6</th>
              <td>Shirdi</td>
              <td>Satara</td>
              <td>3,600</td>
            </tr>
            <tr style={{ backgroundColor: '#f8d7da' }}>
              <th scope="row">7</th>
              <td>Shirdi</td>
              <td>Lonavala</td>
              <td>4,600</td>
            </tr>
            <tr style={{ backgroundColor: '#d1ecf1' }}>
              <th scope="row">8</th>
              <td>Shirdi</td>
              <td>Mahabaleshwar</td>
              <td>5,300</td>
            </tr>
            <tr style={{ backgroundColor: '#d4edda' }}>
              <th scope="row">9</th>
              <td>Shirdi</td>
              <td>Jalgaon</td>
              <td>2,100</td>
            </tr>
            <tr style={{ backgroundColor: '#fff3cd' }}>
              <th scope="row">10</th>
              <td>Shirdi</td>
              <td>Dhule</td>
              <td>3,300</td>
            </tr>
            <tr style={{ backgroundColor: '#f8d7da' }}>
              <th scope="row">11</th>
              <td>Shirdi</td>
              <td>Ratnagiri</td>
              <td>4,600</td>
            </tr>
            <tr style={{ backgroundColor: '#d1ecf1' }}>
              <th scope="row">12</th>
              <td>Shirdi</td>
              <td>Sangli</td>
              <td>5,500</td>
            </tr>
            {/* Additional rows */}
            <tr style={{ backgroundColor: '#d4edda' }}>
              <th scope="row">13</th>
              <td>Shirdi</td>
              <td>Beed</td>
              <td>3,300</td>
            </tr>
            <tr style={{ backgroundColor: '#fff3cd' }}>
              <th scope="row">14</th>
              <td>Shirdi</td>
              <td>Nanded</td>
              <td>5,200</td>
            </tr>
            <tr style={{ backgroundColor: '#f8d7da' }}>
              <th scope="row">15</th>
              <td>Shirdi</td>
              <td>Parbhani</td>
              <td>4,500</td>
            </tr>
            <tr style={{ backgroundColor: '#d1ecf1' }}>
              <th scope="row">16</th>
              <td>Shirdi</td>
              <td>Amravati</td>
              <td>5,800</td>
            </tr>
            <tr style={{ backgroundColor: '#d4edda' }}>
              <th scope="row">17</th>
              <td>Shirdi</td>
              <td>Akola</td>
              <td>5,500</td>
            </tr>
            <tr style={{ backgroundColor: '#fff3cd' }}>
              <th scope="row">18</th>
              <td>Shirdi</td>
              <td>Wardha</td>
              <td>6,000</td>
            </tr>
            <tr style={{ backgroundColor: '#f8d7da' }}>
              <th scope="row">19</th>
              <td>Shirdi</td>
              <td>Chandrapur</td>
              <td>6,500</td>
            </tr>
            <tr style={{ backgroundColor: '#d1ecf1' }}>
              <th scope="row">20</th>
              <td>Shirdi</td>
              <td>Gondia</td>
              <td>7,000</td>
            </tr>
            <tr style={{ backgroundColor: '#d4edda' }}>
              <th scope="row">21</th>
              <td>Shirdi</td>
              <td>Bhandara</td>
              <td>6,800</td>
            </tr>
            <tr style={{ backgroundColor: '#fff3cd' }}>
              <th scope="row">22</th>
              <td>Shirdi</td>
              <td>Osmanabad</td>
              <td>4,100</td>
            </tr>
            <tr style={{ backgroundColor: '#f8d7da' }}>
              <th scope="row">23</th>
              <td>Shirdi</td>
              <td>Latur</td>
              <td>4,800</td>
            </tr>
            <tr style={{ backgroundColor: '#d1ecf1' }}>
              <th scope="row">24</th>
              <td>Shirdi</td>
              <td>Thane</td>
              <td>4,200</td>
            </tr>
            <tr style={{ backgroundColor: '#d4edda' }}>
              <th scope="row">25</th>
              <td>Shirdi</td>
              <td>Mumbai</td>
              <td>4,500</td>
            </tr>
            <tr style={{ backgroundColor: '#fff3cd' }}>
              <th scope="row">26</th>
              <td>Shirdi</td>
              <td>Ahmednagar</td>
              <td>1,200</td>
            </tr>
            <tr style={{ backgroundColor: '#f8d7da' }}>
              <th scope="row">27</th>
              <td>Shirdi</td>
              <td>Junnar</td>
              <td>3,000</td>
            </tr>
            <tr style={{ backgroundColor: '#d1ecf1' }}>
              <th scope="row">28</th>
              <td>Shirdi</td>
              <td>Malegaon</td>
              <td>2,700</td>
            </tr>
            <tr style={{ backgroundColor: '#d4edda' }}>
              <th scope="row">29</th>
              <td>Shirdi</td>
              <td>Sinnar</td>
              <td>1,500</td>
            </tr>
            <tr style={{ backgroundColor: '#fff3cd' }}>
              <th scope="row">30</th>
              <td>Shirdi</td>
              <td>Yeola</td>
              <td>1,800</td>
            </tr>


            <tr style={{ backgroundColor: '#d4edda' }}>
              <th scope="row">1</th>
              <td>Sangamner</td>
              <td>Shirdi</td>
              <td>500</td>
            </tr>
            <tr style={{ backgroundColor: '#fff3cd' }}>
              <th scope="row">2</th>
              <td>Nashik</td>
              <td>Shirdi</td>
              <td>1,800</td>
            </tr>
            <tr style={{ backgroundColor: '#f8d7da' }}>
              <th scope="row">3</th>
              <td>Aurangabad</td>
              <td>Shirdi</td>
              <td>2,500</td>
            </tr>
            <tr style={{ backgroundColor: '#d1ecf1' }}>
              <th scope="row">4</th>
              <td>Pune</td>
              <td>Shirdi</td>
              <td>3,000</td>
            </tr>
            <tr style={{ backgroundColor: '#d4edda' }}>
              <th scope="row">5</th>
              <td>Mumbai</td>
              <td>Shirdi</td>
              <td>4,500</td>
            </tr>
            <tr style={{ backgroundColor: '#fff3cd' }}>
              <th scope="row">6</th>
              <td>Kolhapur</td>
              <td>Shirdi</td>
              <td>5,000</td>
            </tr>
            <tr style={{ backgroundColor: '#f8d7da' }}>
              <th scope="row">7</th>
              <td>Solapur</td>
              <td>Shirdi</td>
              <td>3,800</td>
            </tr>
            <tr style={{ backgroundColor: '#d1ecf1' }}>
              <th scope="row">8</th>
              <td>Satara</td>
              <td>Shirdi</td>
              <td>3,600</td>
            </tr>
            <tr style={{ backgroundColor: '#d4edda' }}>
              <th scope="row">9</th>
              <td>Jalgaon</td>
              <td>Shirdi</td>
              <td>2,100</td>
            </tr>
            <tr style={{ backgroundColor: '#fff3cd' }}>
              <th scope="row">10</th>
              <td>Dhule</td>
              <td>Shirdi</td>
              <td>3,300</td>
            </tr>
            <tr style={{ backgroundColor: '#f8d7da' }}>
              <th scope="row">11</th>
              <td>Ratnagiri</td>
              <td>Shirdi</td>
              <td>4,600</td>
            </tr>
            <tr style={{ backgroundColor: '#d1ecf1' }}>
              <th scope="row">12</th>
              <td>Sangli</td>
              <td>Shirdi</td>
              <td>5,500</td>
            </tr>
            <tr style={{ backgroundColor: '#d4edda' }}>
              <th scope="row">13</th>
              <td>Beed</td>
              <td>Shirdi</td>
              <td>3,300</td>
            </tr>
            <tr style={{ backgroundColor: '#fff3cd' }}>
              <th scope="row">14</th>
              <td>Nanded</td>
              <td>Shirdi</td>
              <td>5,200</td>
            </tr>
            <tr style={{ backgroundColor: '#f8d7da' }}>
              <th scope="row">15</th>
              <td>Parbhani</td>
              <td>Shirdi</td>
              <td>4,500</td>
            </tr>
            <tr style={{ backgroundColor: '#d1ecf1' }}>
              <th scope="row">16</th>
              <td>Amravati</td>
              <td>Shirdi</td>
              <td>5,800</td>
            </tr>
            <tr style={{ backgroundColor: '#d4edda' }}>
              <th scope="row">17</th>
              <td>Akola</td>
              <td>Shirdi</td>
              <td>5,500</td>
            </tr>
            <tr style={{ backgroundColor: '#fff3cd' }}>
              <th scope="row">18</th>
              <td>Wardha</td>
              <td>Shirdi</td>
              <td>6,000</td>
            </tr>
            <tr style={{ backgroundColor: '#f8d7da' }}>
              <th scope="row">19</th>
              <td>Chandrapur</td>
              <td>Shirdi</td>
              <td>6,500</td>
            </tr>
            <tr style={{ backgroundColor: '#d1ecf1' }}>
              <th scope="row">20</th>
              <td>Gondia</td>
              <td>Shirdi</td>
              <td>7,000</td>
            </tr>
            <tr style={{ backgroundColor: '#d4edda' }}>
              <th scope="row">21</th>
              <td>Bhandara</td>
              <td>Shirdi</td>
              <td>6,800</td>
            </tr>
            <tr style={{ backgroundColor: '#fff3cd' }}>
              <th scope="row">22</th>
              <td>Osmanabad</td>
              <td>Shirdi</td>
              <td>4,100</td>
            </tr>
            <tr style={{ backgroundColor: '#f8d7da' }}>
              <th scope="row">23</th>
              <td>Latur</td>
              <td>Shirdi</td>
              <td>4,800</td>
            </tr>
            <tr style={{ backgroundColor: '#d1ecf1' }}>
              <th scope="row">24</th>
              <td>Thane</td>
              <td>Shirdi</td>
              <td>4,200</td>
            </tr>
            <tr style={{ backgroundColor: '#d4edda' }}>
              <th scope="row">25</th>
              <td>Ahmednagar</td>
              <td>Shirdi</td>
              <td>1,200</td>
            </tr>
            <tr style={{ backgroundColor: '#fff3cd' }}>
              <th scope="row">26</th>
              <td>Junnar</td>
              <td>Shirdi</td>
              <td>3,000</td>
            </tr>
            <tr style={{ backgroundColor: '#f8d7da' }}>
              <th scope="row">27</th>
              <td>Malegaon</td>
              <td>Shirdi</td>
              <td>2,700</td>
            </tr>
            <tr style={{ backgroundColor: '#d1ecf1' }}>
              <th scope="row">28</th>
              <td>Sinnar</td>
              <td>Shirdi</td>
              <td>1,500</td>
            </tr>
            <tr style={{ backgroundColor: '#d4edda' }}>
              <th scope="row">29</th>
              <td>Yeola</td>
              <td>Shirdi</td>
              <td>1,800</td>
            </tr>
            <tr style={{ backgroundColor: '#fff3cd' }}>
              <th scope="row">30</th>
              <td>Vani</td>
              <td>Shirdi</td>
              <td>1,400</td>
            </tr>
          </tbody>
        </table>
      </div >
    </div >
  );
}

export default Services;


