import { useState } from 'react';
import './card.css';
import { useNavigate } from 'react-router-dom';

const Card = ({ imageSrc,mapsrc, title, description, location, foodType,rating, locationLink, contactNumber, fullAddress, Latitude,Longitude }) => {
  const [status,setStatus] = useState("")
  const navigate = useNavigate();
  function gotodetails(){
    
    setStatus("card");
    
    navigate(`/details?image=${encodeURIComponent(imageSrc)}&mapimg=${encodeURIComponent(mapsrc)}&title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}&rating=${encodeURIComponent(rating)}&locationLink=${encodeURIComponent(locationLink)}&contactNumber=${encodeURIComponent(contactNumber)}&fullAddress=${encodeURIComponent(fullAddress)}`);
  }
  return (
    <>    
    <div className="card" onClick={gotodetails}>
      
     <img src={imageSrc}  className='card-img' />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <div className="card-info">
          <span className="card-location">{location}</span>
          <span className="card-rating">Rating: {rating}</span>
          <span className="card-foodType">{foodType}</span>
                           
          
        </div>
      </div>
    </div>
   </>
    
  );
}

export default Card;
