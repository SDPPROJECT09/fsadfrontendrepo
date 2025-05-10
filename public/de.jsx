import React, { useState } from 'react';
import OrderModal from './OrderModal';
import './Pages.css';

const Home = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [selectedDish, setSelectedDish] = useState(null);
  const [quantities, setQuantities] = useState({});
  
  const restaurantLogos = {
    'Paradise': 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
    'Ismail Biryani': 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg',
    'KB Restaurant': 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg'
  };

//   const restaurants = {
//     'Paradise': {
//       breakfast: [
//         { id: 'p1', name: "Masala Dosa", price: 120, image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg" },
//         { id: 'p2', name: "Idli Sambar", price: 100, image: "https://images.pexels.com/photos/4331489/pexels-photo-4331489.jpeg" },
//         { id: 'p3', name: "Poha", price: 80, image: "https://images.pexels.com/photos/4331478/pexels-photo-4331478.jpeg" },
//         { id: 'p4', name: "Chole Bhature", price: 110, image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg" },
//         { id: 'p5', name: "Uttapam", price: 90, image: "https://images.pexels.com/photos/5560762/pexels-photo-5560762.jpeg" }
//       ],
//       veg: [
//         { id: 'p6', name: "Paneer Butter Masala", price: 280, image: "https://images.pexels.com/photos/3926135/pexels-photo-3926135.jpeg" },
//         { id: 'p7', name: "Veg Biryani", price: 250, image: "https://images.pexels.com/photos/7394819/pexels-photo-7394819.jpeg" },
//         { id: 'p8', name: "Dal Makhani", price: 220, image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg" },
//         { id: 'p9', name: "Mushroom Masala", price: 260, image: "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg" },
//         { id: 'p10', name: "Mixed Veg Curry", price: 240, image: "https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg" }
//       ],
//       nonVeg: [
//         { id: 'p11', name: "Chicken Biryani", price: 320, image: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg" },
//         { id: 'p12', name: "Mutton Curry", price: 380, image: "https://images.pexels.com/photos/2679501/pexels-photo-2679501.jpeg" },
//         { id: 'p13', name: "Fish Curry", price: 340, image: "https://images.pexels.com/photos/3296683/pexels-photo-3296683.jpeg" },
//         { id: 'p14', name: "Chicken 65", price: 260, image: "https://images.pexels.com/photos/2611917/pexels-photo-2611917.jpeg" },
//         { id: 'p15', name: "Butter Chicken", price: 340, image: "https://images.pexels.com/photos/7394817/pexels-photo-7394817.jpeg" }
//       ]
//     },
//     'Ismail Biryani': {
//       biryani: [
//         { id: 'i1', name: "Special Mutton Biryani", price: 400, image: "https://images.pexels.com/photos/7394819/pexels-photo-7394819.jpeg" },
//         { id: 'i2', name: "Chicken Dum Biryani", price: 320, image: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg" },
//         { id: 'i3', name: "Fish Biryani", price: 360, image: "https://images.pexels.com/photos/3296683/pexels-photo-3296683.jpeg" },
//         { id: 'i4', name: "Egg Biryani", price: 220, image: "https://images.pexels.com/photos/2611917/pexels-photo-2611917.jpeg" },
//         { id: 'i5', name: "Keema Biryani", price: 380, image: "https://images.pexels.com/photos/2679501/pexels-photo-2679501.jpeg" }
//       ]
//     },
//     'KB Restaurant': {
//       breakfast: [
//         { id: 'k1', name: "English Breakfast", price: 250, image: "https://images.pexels.com/photos/139746/pexels-photo-139746.jpeg" },
//         { id: 'k2', name: "Pancakes", price: 180, image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg" },
//         { id: 'k3', name: "French Toast", price: 160, image: "https://images.pexels.com/photos/357573/pexels-photo-357573.jpeg" },
//         { id: 'k4', name: "Waffles", price: 190, image: "https://images.pexels.com/photos/221069/pexels-photo-221069.jpeg" },
//         { id: 'k5', name: "Breakfast Sandwich", price: 170, image: "https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg" }
//       ],
//       veg: [
//         { id: 'k6', name: "Garden Salad", price: 220, image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg" },
//         { id: 'k7', name: "Veggie Burger", price: 240, image: "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg" },
//         { id: 'k8', name: "Grilled Vegetables", price: 200, image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg" },
//         { id: 'k9', name: "Pasta Primavera", price: 260, image: "https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg" },
//         { id: 'k10', name: "Vegetable Stir Fry", price: 230, image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg" }
//       ],
//       nonVeg: [
//         { id: 'k11', name: "Grilled Chicken", price: 280, image: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg" },
//         { id: 'k12', name: "BBQ Ribs", price: 350, image: "https://images.pexels.com/photos/533325/pexels-photo-533325.jpeg" },
//         { id: 'k13', name: "Fish & Chips", price: 290, image: "https://images.pexels.com/photos/4193871/pexels-photo-4193871.jpeg" },
//         { id: 'k14', name: "Chicken Wings", price: 260, image: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg" },
//         { id: 'k15', name: "Steak", price: 400, image: "https://images.pexels.com/photos/1251208/pexels-photo-1251208.jpeg" }
//       ]
//     }
//   };

  const handleQuantityChange = (dishId, change) => {
    setQuantities(prev => {
      const currentQuantity = prev[dishId] || 1;
      const newQuantity = Math.max(1, currentQuantity + change);
      return { ...prev, [dishId]: newQuantity };
    });
  };

  const handleBuy = (dish) => {
    setSelectedDish(dish);
    setShowOrderModal(true);
  };

  const getQuantity = (dishId) => {
    return quantities[dishId] || 1;
  };

  const filteredRestaurants = Object.keys(restaurants).filter(name =>
    name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="page-container">
      <div className="search-container">
        <input 
          type="text" 
          placeholder="Search for restaurants" 
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {searchQuery && (
          <div className="search-results">
            {filteredRestaurants.map(name => (
              <div 
                key={name} 
                className="search-result-item"
                onClick={() => {
                  setSelectedRestaurant(name);
                  setSearchQuery('');
                }}
              >
                <img 
                  src={restaurantLogos[name]} 
                  alt={name} 
                  className="restaurant-logo"
                />
                <span>{name}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <h2 className="section-title">
        {selectedRestaurant ? ${selectedRestaurant} Menu : 'Our Featured Collection'}
      </h2>
      
      <div className="food-grid">
        {selectedRestaurant ? (
          Object.entries(restaurants[selectedRestaurant]).map(([category, items]) => (
            <div key={category} className="category-section">
              <h3 className="category-title">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
              <div className="food-grid">
                {items.map(item => (
                  <div key={item.id} className="food-card">
                    <img src={item.image} alt={item.name} className="food-image" />
                    <div className="food-details">
                      <h3>{item.name}</h3>
                      <p className="restaurant-name">{selectedRestaurant}</p>
                      <div className="quantity-controls">
                        <button 
                          onClick={() => handleQuantityChange(item.id, -1)}
                          className="quantity-btn"
                        >
                          -
                        </button>
                        <span className="quantity">{getQuantity(item.id)}</span>
                        <button 
                          onClick={() => handleQuantityChange(item.id, 1)}
                          className="quantity-btn"
                        >
                          +
                        </button>
                      </div>
                      <div className="price-action">
                        <span className="price">₹{item.price * getQuantity(item.id)}</span>
                        <button 
                          className="buy-btn"
                          onClick={() => handleBuy(item)}
                        >
                          Buy
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          Object.entries(restaurants).flatMap(([restaurant, categories]) => 
            Object.values(categories).flat().slice(0, 5).map(item => (
              <div key={item.id} className="food-card">
                <img src={item.image} alt={item.name} className="food-image" />
                <div className="food-details">
                  <h3>{item.name}</h3>
                  <p className="restaurant-name">{restaurant}</p>
                  <div className="quantity-controls">
                    <button 
                      onClick={() => handleQuantityChange(item.id, -1)}
                      className="quantity-btn"
                    >
                      -
                    </button>
                    <span className="quantity">{getQuantity(item.id)}</span>
                    <button 
                      onClick={() => handleQuantityChange(item.id, 1)}
                      className="quantity-btn"
                    >
                      +
                    </button>
                  </div>
                  <div className="price-action">
                    <span className="price">₹{item.price * getQuantity(item.id)}</span>
                    <button 
                      className="buy-btn"
                      onClick={() => handleBuy(item)}
                    >
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            ))
          )
        )}
      </div>

      {showOrderModal && (
        <OrderModal
          dish={selectedDish}
          quantity={getQuantity(selectedDish.id)}
          onClose={() => setShowOrderModal(false)}
        />
      )}
    </div>
  );
};

export default Home;