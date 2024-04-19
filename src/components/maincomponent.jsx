import React, { useState, useEffect } from 'react';
import Card from './card';
import './mainComponent.css';

import csalt from '../assets/csalt.png';
import background1 from '../assets/background1.jpg';
import jhind from '../assets/jhind.png';
import reef from '../assets/reef.png';
import vellorekitchen from '../assets/vellorekitchen.png';
import hundreadheritage from '../assets/hundredheritage.png';
import darlingresidency from '../assets/darling.png';
import cavenbar from '../assets/cavenbar.png';
import annapoorna from '../assets/annapoorna.png';
import durbar from '../assets/durbar.png';
import Ssaffron from '../assets/Ssaffron.png';
import kebbas from '../assets/kebbas.png';
import namak from '../assets/namak.png';
import { getDisplacementFromLatLonInKm } from './displacement';
import SearchComponent1 from './SearchComponent';

import namak1 from '../mapimg/namak.png';
import csalt1 from '../mapimg/csalt.png';
import reef1 from '../mapimg/reef.png';
import jhind1 from '../mapimg/jhind.png';
import vellore1 from '../mapimg/vellorekitchen.png';
import hundred1 from '../mapimg/hundred.png';
import darling1 from '../mapimg/darling.png';
import caven1 from '../mapimg/cavenbar.png';
import sree1 from '../mapimg/sree.png';
import indian1 from '../mapimg/indian.png';
import ssaffron1 from '../mapimg/ssafron.png';
import kebbas1 from '../mapimg/kebbas.png';


const MainComponent = () => {
  const [vegFriendlyOnly, setVegFriendlyOnly] = useState(false);
  const [locationAccess, setLocationAccess] = useState(false);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [filteredData, setFilteredData] = useState([]);

  const sampleData = [
    {
      imageSrc: csalt,
      mapsrc : csalt1,
      title: "C-SALT",
      description:  "Experience the aromatic allure of authentic biryani, a culinary masterpiece of Indian cuisine.",
      location: "Chennai",
      foodType: "VEG AND NON-VEG",
      rating : 4.2,
      locationLink : 'https://maps.app.goo.gl/FREVfFVSTvSoowDM8',
      contactNumber : 9841033114,
      fullAddress : '280, East Coast Rd, Chennai (Madras) 603104 India',
      Latitude : 13.0827,
      Longitude : 80.2707
    },
    {
      imageSrc: reef,
      mapsrc : reef1,
      title: "The Reef Restaurant",
      description: "Elevate your dining experience with a culinary adventure that delights and inspires.",
      location: "Chennai",
      foodType: "VEG - FRIENDLY",
      rating : 4.3,
      locationLink : 'https://maps.google.com/?cid=9417426535987106495',
      contactNumber : 9841033118,
      fullAddress : "280 ECR, Vadanamelli Sheraton Grand Chennai Resort & Spa, Chennai (Madras) 603104 India ",
      Latitude : 13.0827,
      Longitude : 80.2707
    },
    {
      imageSrc: jhind,
      mapsrc : jhind1,
      title: "J.HIND ",
      description: "Indulge in the creamy goodness of paneer delights, where every bite is a celebration of vegetarian flavor.",
      location: "Chennai",
      foodType: "VEG - FRIENDLY",
      rating : 4.9,
      locationLink : "https://maps.app.goo.gl/QEBDHvVqMHKKz9MY8",
      contactNumber : 9841003114,
      fullAddress : '120 Sir Thyagaraya Road Drivers Colony, Chennai (Madras) 600017 India',
      Latitude : 13.0827,
      Longitude : 80.2707
    },
    {
      imageSrc: vellorekitchen,
      mapsrc : vellore1,
      title: "Vellore Kitchen",
      description: "Discover the art of vegetarian cuisine with our exquisite paneer creations, where flavor meets freshness in every bite.",
      location: "Vellore",
      foodType: "VEG - FRIENDLY",
      rating : 3.9,
      locationLink : 'https://maps.google.com/?cid=9417426535987106495',
      contactNumber : 9842333114,
      fullAddress : '1 Service Road Near Green Circle, Vellore 632004 India',
      Latitude : 12.9165,
      Longitude : 79.1325
    },
    {
      imageSrc: hundreadheritage,
      mapsrc : hundred1,
      title: "Hundred Heritage",
      description: "Satisfy your cravings with the authentic taste of South India, where each bite is a symphony of spices and rich cultural heritage.",
      location: "Vellore",
      foodType: "VEG - FRIENDLY",
      rating : 3.6,
      locationLink : 'https://maps.google.com/?cid=9417426535987106495',
      contactNumber : 6415366966,
      fullAddress : '14, 14th East Cross Road, Gandhinagar East Gandhinagar, Vellore 632006 India',
      Latitude : 12.9165,
      Longitude : 79.1325
    },
    {
      imageSrc: darlingresidency ,
      mapsrc : darling1,
      title: "Darling residency",
      description: "Dive into a world of culinary delight with our signature biryani, a culinary masterpiece that captures the essence of India.",
      location: "Vellore",
      foodType: "VEG AND NON-VEG",
      rating : 4.6,
      locationLink : 'https://maps.google.com/?cid=9417426535987106495',
      contactNumber : 9841033894,
      fullAddress : '#11/8, Anna Salai Vellore, Vellore 632001 India',
      Latitude : 12.9165,
      Longitude : 79.1325
    },
    {
      imageSrc: cavenbar ,
      mapsrc : caven1,
      title: "Caven Bar",
      description: "Indulge in a delightful culinary experience where exquisite dishes dance in harmony with refreshing beverages, creating a symphony of taste.",
      location: "Coimbatore",
      foodType: "VEG AND NON-VEG",
      rating : 4.1,
      locationLink : 'https://maps.google.com/?cid=9417426535987106495',
      contactNumber : 9842333114,
      fullAddress : '312 Bharathiar Road Hotel CAG Pride, Coimbatore 641044 India',
      Latitude : 13.0827,
      Longitude : 80.2707
    },
    {
      imageSrc: annapoorna ,
      mapsrc : sree1,
      title: "Shree Annapoorna",
      description: "Experience the essence of South India on your plate, where every dish is a celebration of culinary diversity and aromatic spices.",
      location: "Coimbatore",
      foodType: "VEG AND NON-VEG",
      rating : 4.4,
      locationLink : 'https://maps.google.com/?cid=9417426535987106495',
      contactNumber : 7841033114,
      fullAddress : '75 - East Arockiyaswamy Street R. S Puram, Coimbatore 641001 India',
      Latitude : 13.0827,
      Longitude : 80.2707
    },
    {
      imageSrc: durbar ,
      mapsrc : indian1,
      title: "Indian Durbar",
      description: "Dive into a world of culinary delight with our signature biryani, a culinary masterpiece that captures the essence of India.",
      location: "Banglore",
      foodType: "VEG AND NON-VEG",
      rating : 4.5,
      locationLink : 'https://maps.google.com/?cid=9417426535987106495',
      contactNumber : 6341033114,
      fullAddress : '25-3 Kensington Road, Bengaluru 560008 India',
      Latitude : 13.0827,
      Longitude : 80.2707
    },
    {
      imageSrc: Ssaffron ,
      mapsrc : ssaffron1,
      title: "Ssaffron",
      description: "Explore a world of flavors with tantalizing biryani and paneer delights, complemented by authentic South Indian cuisine.",
      location: "Banglore",
      foodType: "VEG AND NON-VEG",
      rating : 4.6,
      locationLink : 'https://maps.google.com/?cid=9417426535987106495',
      contactNumber : 9841039814,
      fullAddress : 'No 56-6B Palace Road Level 18, Bengaluru 560001 India',
      Latitude : 13.0827,
      Longitude : 80.2707
    },
    {
      imageSrc: kebbas ,
      mapsrc : kebbas1,
      title: "Kebbas and Kurries",
      description: "Elevate your dining experience with a culinary adventure that delights and inspires.",
      location: "Banglore",
      foodType: "VEG AND NON-VEG",
      rating : 4.8,
      locationLink : 'https://maps.google.com/?cid=9417426535987106495',
      contactNumber : 9862433114,
      fullAddress : '1 Residency Road ITC Gardenia Hotel, Bengaluru 560001 India',
      Latitude : 13.0827,
      Longitude : 80.2707
    },
    {
      imageSrc: namak ,
      mapsrc : namak1,
      title: "Namak",
      description: "Delight in culinary wonders that ignite your senses and transport you to gastronomic bliss.",
      location: "Mumbai",
      foodType: "VEG AND NON-VEG",
      rating : 3.8,
      locationLink : 'https://maps.google.com/?cid=9417426535987106495',
      contactNumber : 9841839114,
      fullAddress : 'Western Express Highway, Vile Parle East Hotel Sahara Star, Mumbai 400057 India',
      Latitude : 13.0827,
      Longitude : 80.2707
    },

  ];

  useEffect(() => {
    if (locationAccess && latitude !== null && longitude !== null) {
      let filtered = sampleData;

      if (vegFriendlyOnly) {
        filtered = filtered.filter(item => item.foodType === "VEG - FRIENDLY");
      }
      // Filter based on current location - 
      filtered = filtered.filter(item => {
        const distance = getDisplacementFromLatLonInKm(latitude, longitude, item.Latitude, item.Longitude);
        return distance < 50;
      });

      setFilteredData(filtered);
    } else {
      setFilteredData(sampleData);
    }
  }, [vegFriendlyOnly, locationAccess, latitude, longitude]);
  //accessing the geolocation 
  const handleLocationAccessChange = () => {
    if (!locationAccess) {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocationAccess(true);
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          },
          (error) => {
            console.error(error.message);
          }
        );
      } else {
        console.error('Geolocation is not supported by your browser');
      }
    } else {
      setLocationAccess(false);
    }
  };

  return (
    <div>      
      <div className="background-container">
        <img src={background1} alt="" className="background-image" />
        <div className="background-overlay">
          <h2>Discover the Best Restaurants</h2>
          <p>Explore a world of culinary delights</p>
        </div>
      </div>
      <SearchComponent1
        sampleData={sampleData}
        filteredData={filteredData}
        setFilteredData={setFilteredData}
      />
      <div className="checkboxes">
        <div className='Veg-friendly'>
          <label>
            <input 
              type="checkbox"   
              checked={vegFriendlyOnly} 
              onChange={() => setVegFriendlyOnly(!vegFriendlyOnly)} 
            />
            Veg Friendly Restaurant
          </label>
        </div>
        <div className='enable-location'>
          <label htmlFor="location-access">
            <input 
              type="checkbox" 
              id="location-access" 
              checked={locationAccess} 
              onChange={handleLocationAccessChange} 
            />
            Enable location access
          </label>
        </div>
      </div>
      <div className="card-grid">
        {filteredData.map((data, index) => (
          <Card
            key={index}
            imageSrc={data.imageSrc}
            mapsrc={data.mapsrc}
            title={data.title}
            description={data.description}
            location={data.location}
            foodType={data.foodType}
            rating={data.rating}
            locationLink={data.locationLink}  
            contactNumber={data.contactNumber}
            fullAddress={data.fullAddress}
          />
        ))} 
      </div>
    </div>
  );
}

export default MainComponent;



