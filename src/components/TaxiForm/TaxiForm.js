import React, { useState } from 'react';
import './TaxiForm.css';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const locations = [
  // Cities
  'Mumbai', 'Pune', 'Nagpur', 'Thane', 'Nashik',
  'Aurangabad', 'Solapur', 'Kolhapur', 'Sangli', 'Amravati',
  'Akola', 'Nanded', 'Ahmednagar', 'Dhule', 'Jalgaon',
  'Latur', 'Parbhani', 'Satara', 'Beed', 'Malegaon',
  'Ichalkaranji', 'Chandrapur', 'Jalna', 'Bhiwandi', 'Panvel',
  'Lonavala', 'Alibag', 'Wardha', 'Ratnagiri', 'Baramati',
  'Kalyan-Dombivli', 'Navi Mumbai', 'Kalyan', 'Ulhasnagar',
  'Vasai-Virar', 'Ambernath', 'Badlapur',

  // Talukas
  'Kankavli', 'Vaibhavwadi', 'Malwan', 'Sawantwadi', 'Vengurla',
  'Kudal', 'Dodamarg', 'Devgad', 'Ratnagiri', 'Sangameshwar',
  'Lanja', 'Rajapur', 'Chiplun', 'Guhagar', 'Dapoli',
  'Mandangad', 'Khed', 'Alibag', 'Murud', 'Panvel',
  'Uran', 'Karjat', 'Khalapur', 'Mangaon', 'Tala',
  'Roha', 'Sudhagad', 'Mahad', 'Poladpur', 'Shrivardhan',
  'Mhasla', 'Bandra', 'Kurla', 'Andheri', 'Borivali',
  'Kalyan', 'Murbad', 'Dahanu', 'Palghar', 'Talasari',
  'Jawhar', 'Mokhada', 'Vada', 'Vikramgad', 'Bhiwandi',
  'Shahapur', 'Ulhasnagar', 'Ambarnath', 'Nashik', 'Igatpuri',
  'Dindori', 'Peint', 'Trimbakeshwar', 'Kalwan', 'Deola',
  'Surgana', 'Baglan', 'Malegaon', 'Nandgaon', 'Chandwad',
  'Niphad', 'Sinnar', 'Yeola', 'Nandurbar', 'Navapur',
  'Shahada', 'Talode', 'Akkalkuwa', 'Akrani', 'Dhule',
  'Sakri', 'Shirpur', 'Sindkheda', 'Jalgaon', 'Jamner',
  'Erandol', 'Dharangaon', 'Bhusawal', 'Raver', 'Muktainagar',
  'Bodwad', 'Yawal', 'Amalner', 'Parola', 'Chopda',
  'Pachora', 'Bhadgaon', 'Chalisgaon', 'Buldhana', 'Chikhli',
  'Deulgaon Raja', 'Jalgaon Jamod', 'Sangrampur', 'Malkapur',
  'Motala', 'Nandura', 'Khamgaon', 'Shegaon', 'Mehkar',
  'Sindkhed Raja', 'Lonar', 'Akot', 'Telhara', 'Balapur',
  'Patur', 'Murtajapur', 'Barshitakli', 'Washim', 'Malegaon',
  'Risod', 'Mangrulpir', 'Karanja', 'Manora', 'Amravati',
  'Bhatukali', 'Nandgaon', 'Khandeshwar', 'Dharni', 'Chikhaldara',
  'Achalpur', 'Chandurbazar', 'Morshi', 'Warud', 'Daryapur',
  'Anjangaon Surji', 'Chandur', 'Dhamangaon', 'Tiosa', 'Wardha',
  'Deoli', 'Seloo', 'Arvi', 'Ashti', 'Karanja',
  'Hinganghat', 'Samudrapur', 'Nagpur', 'Kamptee', 'Hingna',
  'Katol', 'Narkhed', 'Savner', 'Kalameshwar', 'Ramtek',
  'Mouda', 'Parseoni', 'Umred', 'Kuhi', 'Bhiwapur',
  'Bhandara', 'Tumsar', 'Pauni', 'Mohadi', 'Sakoli',
  'Lakhni', 'Lakhandur', 'Gondia', 'Tirora', 'Goregaon',
  'Arjuni Morgaon', 'Deori', 'Salekasa', 'Sadak Arjuni', 'Deori',
  'Gadchiroli', 'Dhanora', 'Chamorshi', 'Mulchera', 'Desaiganj',
  'Armori', 'Kurkheda', 'Korchi', 'Aheri', 'Etapalli',
  'Bhamragad', 'Sironcha', 'Chandrapur', 'Saoli', 'Mul',
  'Ballarpur', 'Pombhurna', 'Gondpimpri', 'Warora', 'Chimur',
  'Bhadravati', 'Brahmapuri', 'Nagbhid', 'Sindewahi', 'Rajura',
  'Korpana', 'Jivati', 'Yavatmal', 'Arni', 'Babhulgaon',
  'Kalamb', 'Darwha', 'Digras', 'Ner', 'Pusad',
  'Umarkhed', 'Mahagaon', 'Kelapur', 'Ralegaon', 'Ghatanji',
  'Wani', 'Zari Jamani', 'Wani', 'Nanded', 'Ardhapur',
  'Mudkhed', 'Bhokar', 'Umri', 'Loha', 'Kandhar',
  'Kinwat', 'Himayatnagar', 'Hadgaon', 'Mahur', 'Deglur',
  'Mukhed', 'Dharmabad', 'Biloli', 'Naigaon', 'Hingoli',
  'Sengaon', 'Kalamnuri', 'Basmath', 'Aundha Nagnath', 'Parbhani',
  'Sonpeth', 'Gangakhed', 'Paalam', 'Purna', 'Sailu',
  'Jintur', 'Manwath', 'Pathri', 'Jalna', 'Bhokardan',
  'Jafrabad', 'Badnapur', 'Partur', 'Ambad', 'Ghansawangi',
  'Mantha', 'Aurangabad', 'Kannad', 'Soegaon', 'Sillod',
  'Phulambri', 'Khuldabad', 'Vaijapur', 'Gangapur', 'Paithan',
  'Beed', 'Ashti', 'Patoda', 'Shirur Kasar', 'Georai',
  'Ambejogai', 'Wadwani', 'Kaij', 'Dharur', 'Parli',
  'Ambejogai', 'Latur', 'Renapur', 'Ahmadpur', 'Jalkot',
  'Chakur', 'Shirur Anantpal', 'Ausa', 'Nilanga', 'Deoni',
  'Udgir', 'Osmanabad', 'Tuljapur', 'Lohara', 'Umarga',
  'Bhum', 'Paranda', 'Washi', 'Kalamb', 'Solapur',
  'Akkalkot', 'Barshi', 'Madha', 'Karmala', 'Mohol',
  'Pandharpur', 'Malshiras', 'Miraj', 'Kavathe-Mahankal', 'Tasgaon',
  'Jat', 'Walwa', 'Shirala', 'Khanapur', 'Atpadi',
  'Palus', 'Kadegaon', 'Kolhapur', 'Panhala', 'Shahuwadi',
  'Kagal', 'Ichalkaranji', 'Hatkanangale', 'Shirol', 'Radhanagari',
  'Gaganbawada', 'Bhudargad', 'Gadhinglaj', 'Chandgad', 'Ajra',

  // Devotional Places
  'Shirdi', 'Pandharpur', 'Trimbakeshwar', 'Bhimashankar', 'Shani Shingnapur',
  'Mahalaxmi Temple (Kolhapur)', 'Siddhivinayak Temple (Mumbai)', 'Ganpatipule', 'Tuljapur', 'Alandi',
  'Jejuri', 'Morgaon', 'Parli Vaijnath', 'Aundha Nagnath', 'Grishneshwar',
  'Dehu', 'Shegaon', 'Vani Saptashrungi', 'Nashik', 'Ranjangaon',
  'Nanded Hazur Sahib', 'Bhimashankar', 'Bhimashankar Wildlife Sanctuary', 'Ozar',
  'Lonavala', 'Ellora Caves', 'Ajanta Caves', 'Panchgani',
  'Mahabaleshwar', 'Panhala Fort', 'Pratapgad Fort', 'Raigad Fort', 'Sinhagad Fort',
  'Shivneri Fort', 'Ashtavinayak Temples', 'Kalamboli', 'Junnar', 'Harishchandragad',
  'Khandala', 'Khandala Fort', 'Kaas Plateau', 'Chandreshwar', 'Kalsubai Peak',
  'Matheran', 'Durshet', 'Kundalika', 'Alibaug Beach', 'Murud-Janjira',
  'Ratangad Fort', 'Kalsubai Peak', 'Amboli', 'Sangameshwar Temple', 'Wai',
];




function TaxiForm() {

  const navigate = useNavigate();

  const handleBookNowClick = () => {
    navigate('/home');
  };

  const [formData, setFormData] = useState({
    customerName: '',
    pickupLocation: '',
    dropPoint: '',
    date: '',
    time: '',
    vehicleType: '',
    numberOfPassengers: '',
    contactNumber: '',
    emailAddress: '',
  });

  const [errors, setErrors] = useState({});
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    if (e.target.id === 'pickupLocation') {
      const query = e.target.value.toLowerCase();
      if (query) {
        const suggestions = locations.filter(location =>
          location.toLowerCase().includes(query)
        );
        setFilteredLocations(suggestions);
        setShowSuggestions(true);
      } else {
        setFilteredLocations([]);
        setShowSuggestions(false);
      }
    }
  };

  const handleLocationSelect = (location) => {
    setFormData({ ...formData, pickupLocation: location });
    setFilteredLocations([]);
    setShowSuggestions(false);
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, contactNumber: value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.customerName.trim()) {
      newErrors.customerName = 'Customer name is required';
    }
    if (!formData.pickupLocation.trim()) {
      newErrors.pickupLocation = 'Pickup location is required';
    }
    if (!formData.dropPoint.trim()) {
      newErrors.dropPoint = 'Drop point is required';
    }
    if (!formData.date) {
      newErrors.date = 'Date is required';
    }
    if (!formData.time) {
      newErrors.time = 'Time is required';
    }
    if (!formData.vehicleType) {
      newErrors.vehicleType = 'Vehicle type is required';
    }
    if (!formData.numberOfPassengers || formData.numberOfPassengers <= 0) {
      newErrors.numberOfPassengers = 'Please enter a valid number of passengers';
    }
    if (!formData.contactNumber) {
      newErrors.contactNumber = 'Contact number is required';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.emailAddress)) {
      newErrors.emailAddress = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      toast.info("Sending...");

      const formDataToSend = new FormData();
      Object.keys(formData).forEach(key => formDataToSend.append(key, formData[key]));
      formDataToSend.append("access_key", "3086c577-5b4f-41b1-a79e-0810fdc7a167");

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formDataToSend,
        });

        const data = await response.json();

        if (data.success) {
          toast.success("Form Submitted Successfully");
          setFormData({
            customerName: '',
            pickupLocation: '',
            dropPoint: '',
            date: '',
            time: '',
            vehicleType: '',
            numberOfPassengers: '',
            contactNumber: '',
            emailAddress: '',
          });
        } else {
          toast.error(`Error: ${data.message}`);
        }
      } catch (error) {
        toast.error("An error occurred. Please try again.");
      }
    } else {
      toast.error("Please fix the errors in the form.");
    }
  };

  return (
    <div className="taxi-main">
      <ToastContainer />
      <div className="container form-size my-5">
        <img
          src='/img/icons8-back-48.png'
          alt="Back"
          onClick={handleBookNowClick}
          style={{ cursor: 'pointer', marginBottom: '20px' }}
        />

        <h2 className="text-center mb-4">Quick Book Here</h2>
        <form className="p-4 shadow rounded form-container" onSubmit={handleSubmit}>
          <div className="form-row mb-3">
            <div className="col-12">
              <label htmlFor="customerName">Customer Name</label>
              <input
                type="text"
                className={`form-control ${errors.customerName ? 'is-invalid' : ''}`}
                id="customerName"
                placeholder="Enter your name"
                value={formData.customerName}
                onChange={handleChange}
              />
              {errors.customerName && <div className="invalid-feedback">{errors.customerName}</div>}
            </div>
          </div>
          <div className="form-row mb-3">
            <div className="col-12 col-md-6">
              <label htmlFor="pickupLocation">Pickup Location</label>
              <input
                type="text"
                className={`form-control ${errors.pickupLocation ? 'is-invalid' : ''}`}
                id="pickupLocation"
                placeholder="Enter pickup location"
                value={formData.pickupLocation}
                onChange={handleChange}
                autoComplete="off"
              />
              {errors.pickupLocation && <div className="invalid-feedback">{errors.pickupLocation}</div>}
              {showSuggestions && (
                <ul className="suggestions-list">
                  {filteredLocations.map((location, index) => (
                    <li key={index} onClick={() => handleLocationSelect(location)}>
                      {location}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="dropPoint">Drop Point</label>
              <input
                type="text"
                className={`form-control ${errors.dropPoint ? 'is-invalid' : ''}`}
                id="dropPoint"
                placeholder="Enter drop point"
                value={formData.dropPoint}
                onChange={handleChange}
              />
              {errors.dropPoint && <div className="invalid-feedback">{errors.dropPoint}</div>}
            </div>
          </div>
          <div className="form-row mb-3">
            <div className="col-12 col-md-6">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                className={`form-control ${errors.date ? 'is-invalid' : ''}`}
                id="date"
                value={formData.date}
                onChange={handleChange}
              />
              {errors.date && <div className="invalid-feedback">{errors.date}</div>}
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="time">Time</label>
              <input
                type="time"
                className={`form-control ${errors.time ? 'is-invalid' : ''}`}
                id="time"
                value={formData.time}
                onChange={handleChange}
              />
              {errors.time && <div className="invalid-feedback">{errors.time}</div>}
            </div>
          </div>
          <div className="form-row mb-3">
            <div className="col-12 col-md-6">
              <label htmlFor="vehicleType">Vehicle Type</label>
              <select
                className={`form-control ${errors.vehicleType ? 'is-invalid' : ''}`}
                id="vehicleType"
                value={formData.vehicleType}
                onChange={handleChange}
              >
                <option value="" disabled>Select vehicle type</option>
                <option value="Sedan">Sedan</option>
                <option value="SUV">SUV</option>
                <option value="Hatchback">Hatchback</option>
                <option value="Minivan">Minivan</option>
              </select>
              {errors.vehicleType && <div className="invalid-feedback">{errors.vehicleType}</div>}
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="numberOfPassengers">Number of Passengers</label>
              <input
                type="number"
                className={`form-control ${errors.numberOfPassengers ? 'is-invalid' : ''}`}
                id="numberOfPassengers"
                placeholder="Enter number of passengers"
                value={formData.numberOfPassengers}
                onChange={handleChange}
              />
              {errors.numberOfPassengers && <div className="invalid-feedback">{errors.numberOfPassengers}</div>}
            </div>
          </div>
          <div className="form-row mb-3">
            <div className="col-12 col-md-6">
              <label htmlFor="contactNumber">Contact Number</label>
              <PhoneInput
                international
                defaultCountry="US"
                className={`form-control ${errors.contactNumber ? 'is-invalid' : ''}`}
                id="contactNumber"
                value={formData.contactNumber}
                onChange={handlePhoneChange}
              />
              {errors.contactNumber && <div className="invalid-feedback">{errors.contactNumber}</div>}
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="emailAddress">Email Address</label>
              <input
                type="email"
                className={`form-control ${errors.emailAddress ? 'is-invalid' : ''}`}
                id="emailAddress"
                placeholder="Enter email address"
                value={formData.emailAddress}
                onChange={handleChange}
              />
              {errors.emailAddress && <div className="invalid-feedback">{errors.emailAddress}</div>}
            </div>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary mt-3">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TaxiForm;
