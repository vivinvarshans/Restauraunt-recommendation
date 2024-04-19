import React, { useState } from 'react';
import './starting.css'; 
import Card from './card';

const SearchComponent = ({ filterCards }) => {
  const [locationAccess, setLocationAccess] = useState(false);
  const [locationErrorMessage, setLocationErrorMessage] = useState('');

  const handleLocationAccessChange = () => {
    if (!locationAccess) {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocationAccess(true);
            setLocationErrorMessage('');
            
          },
          (error) => {
            setLocationErrorMessage('Error: ' + error.message);
          }
        );
      } else {
        setLocationErrorMessage('Geolocation is not supported by your browser');
      }
    } else {
      setLocationAccess(false);
      setLocationErrorMessage('');
    }
  };

  const handleVegFriendlyChange = (event) => {
    const isChecked = event.target.checked;
    filterCards(isChecked); 
  };

  return (
    <div className="search-component">
      

      <div className="overlay">

        <div className="checkboxes">

        </div>
        {locationErrorMessage && <p>{locationErrorMessage}</p>}
      </div>
    </div>
  );
}

export default SearchComponent;



