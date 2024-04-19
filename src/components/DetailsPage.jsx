import './detailsPage.css';
import { useLocation } from 'react-router-dom';
import Navbar from './navbar';
import user_icon from '../assets/person.png';
import { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaAddressCard, FaStar  } from 'react-icons/fa';


function DetailsPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const imageSrc = queryParams.get('image');
  const mapsrc = queryParams.get('mapimg');
  const title = queryParams.get('title');
  const description = queryParams.get('description');
  const rating = queryParams.get('rating');
  const locationLink = queryParams.get('locationLink');
  const contactNumber = queryParams.get('contactNumber');
  const fullAddress = queryParams.get('fullAddress');

  const [showOperatingHours, setShowOperatingHours] = useState(false);

  const [hoveredRating, setHoveredRating] = useState(0);
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');

const handleFilterChange = (option) => {
  setSelectedOption(option);
};

  const operatingHours = [
    { day: 'Monday', hours: '9:00 AM - 9:00 PM' },
    { day: 'Tuesday', hours: '9:00 AM - 9:00 PM' },
    { day: 'Wednesday', hours: '9:00 AM - 9:00 PM' },
    { day: 'Thursday', hours: '9:00 AM - 9:00 PM' },
    { day: 'Friday', hours: '9:00 AM - 9:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 9:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ];

const sampleComments = [
  {
    id: 1,
    name: 'Arun',
    comment: 'Great place! The food was delicious, and the service was excellent.',
    date: 'April 15, 2024',
  },
  {
    id: 2,
    name: 'User',
    comment: 'I had a wonderful experience here. The ambiance was lovely, and the staff was very friendly.',
    date: 'April 14, 2024',
  },
  {
    id: 3,
    name: 'Ranesh',
    comment: 'The portion sizes were a bit small for the price, but the food was tasty overall.',
    date: 'April 14, 2024',
  },
];
const SampleComments = () => {
  return (  
    <div className="sample-comments">
      <h3>Reviews</h3>
      {sampleComments.map((comment) => (
        <div key={comment.id} className="comment-item">
          <div className="comment-header">
            <div className="user-icon">
              <img src={user_icon} alt="User Icon" />
            </div>
            <div className="comment-info">
              <h4>{comment.name}</h4>
              <p>{comment.date}</p>
            </div>
          </div>
          <div className="comment-body">
            <p>{comment.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

  const handleHover = (index) => {
    setHoveredRating(index);
  };

  const handleClick = (index) => {
    setSelectedRating(index);
  };

  const resetStars = () => {
    setHoveredRating(0);
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="maincontainer">
      <div className="image-container">
        <img src={imageSrc} alt="Restaurant" />
      </div>
      <div className="details-container">
        <div className="details-content">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="grid-container">
          <div className="rating"><FaStar className='specialfeatures'/>{rating}/5</div>
          <div className="location">
            <a href={locationLink} target="_blank" rel="noopener noreferrer"><FaMapMarkerAlt className='specialfeatures' /> {locationLink}</a>
          </div>
          <div className="phonenumber"><FaPhoneAlt className='specialfeatures' /> {contactNumber}</div>
          <div className="address"><FaAddressCard className='specialfeatures' />   {fullAddress}</div>

        </div>
      </div>
      </div>
      <div className="mapimg-container">
      <div className="maptext">Live Location: </div>
        <img src={mapsrc} alt="Map-image" />
      </div>
      <div className="operating-hours">
        <div
          className="operating-hours-title"
          onClick={() => setShowOperatingHours(!showOperatingHours)}
        >
          Operating Hours <i className={`fas fa-caret-${showOperatingHours ? 'up' : 'down'}`}></i>
        </div>
        {showOperatingHours && (
          <ul className="operating-hours-list">
            {operatingHours.map((day, index) => (
              <li key={index}>{day.day}: {day.hours}</li>
            ))}
          </ul>
        )}
      </div>
      <div className="rating1">
        <div className="textrating">Leave a Rating</div>
        <div className="star-rating" onMouseLeave={() => resetStars()}>
          {[1, 2, 3, 4, 5].map((index) => (
            <span
              key={index}
              className={`star ${index <= hoveredRating || index <= selectedRating ? 'filled' : ''}`}
              onMouseOver={() => handleHover(index)}
              onClick={() => handleClick(index)}
            >
              &#9733;
            </span>
          ))}
        </div>
      </div>
      <div className="line">
        <span className="comment">Leave a commment</span>
        <span className="number">3 comments</span>
      </div>
      <div className="comment-section">
        <div className="user-icon">
          <img src={user_icon} alt="User Icon" />
        </div>
        <input type="textarea" rows={10} placeholder="Write your review here..." className="comment-input" />
        <button className="comment-button">Comment</button>
       

      </div>
        <div className="comment-section">
         
        </div>
        <SampleComments />
      <div className="filter-options">
        <span
          className={`filter-option ${selectedOption === 'mostLiked' ? 'active' : ''}`}
          onClick={() => handleFilterChange('mostLiked')}
        >
          Most Liked
        </span>
        <span
          className={`filter-option ${selectedOption === 'newest' ? 'active' : ''}`}
          onClick={() => handleFilterChange('newest')}
        >
          Newest
        </span>
        <span
          className={`filter-option ${selectedOption === 'oldest' ? 'active' : ''}`}
          onClick={() => handleFilterChange('oldest')}
        >
          Oldest
        </span>
      </div>
      

      <div className="footer">
        <div className="share-text">Share:</div>
        <div className="social-icons">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="icon" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="icon" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="icon" />
          </a>
        </div>
      </div>
    </>
  );
}

export default DetailsPage;


