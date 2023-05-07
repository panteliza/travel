// import React, { useState } from 'react';

// function BudgetCalculator() {
//   const [items, setItems] = useState([]);
//   const [item, setItem] = useState('');
//   const [price, setPrice] = useState('');
//   const [budget, setBudget] = useState(0);

//   const handleItemChange = (event) => {
//     setItem(event.target.value);
//   }

//   const handlePriceChange = (event) => {
//     setPrice(event.target.value);
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const newItems = [...items, { item, price }];
//     setItems(newItems);
//     setItem('');
//     setPrice('');
//     const newBudget = newItems.reduce((total, item) => total + Number(item.price), 0);
//     setBudget(newBudget);
//   }

//   return (
//     <div>
//       <h1>Budget Calculator</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Item:
//           <input type="text" value={item} onChange={handleItemChange} />
//         </label>
//         <label>
//           Price:
//           <input type="text" value={price} onChange={handlePriceChange} />
//         </label>
//         <button type="submit">Add Item</button>
//       </form>
//       <h2>Items:</h2>
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>{item.item} - {item.price}</li>
//         ))}
//       </ul>
//       <h2>Total Budget: {budget}</h2>
//     </div>
//   );
// }

// export default BudgetCalculator;
//Adding div 

// import React, { useState } from 'react';
// import "./travelplan.css";

// function TravelPlanner() {
//   const [destination, setDestination] = useState('');
//   const [accommodation, setAccommodation] = useState('');
//   const [transportation, setTransportation] = useState('');
//   const [food, setFood] = useState('');
//   const [budget, setBudget] = useState(0);

//   const handleCalculate = () => {
//     const destinationCost = destination === 'Pokhara' ? 1000 : 500;
//     const accommodationCost = accommodation === 'Hotel' ? 200 : 100;
//     const transportationCost = transportation === 'Flight' ? 300 : 100;
//     const foodCost = food === 'Restaurant' ? 50 : 20;
//     const totalBudget = destinationCost + accommodationCost + transportationCost + foodCost;
//     setBudget(totalBudget);
//   }

//   return (
//     <div className="travel-planner">
//       <h1>Travel Planner</h1>
//       <label>
//         Destination:
//         <select value={destination} onChange={(e) => setDestination(e.target.value)}>
//           <option value="">--Select Destination--</option>
//           <option value="pokhara">Pokhara</option>
//           <option value="kathmandu">Kathmandu</option>
//           <option value="chitwan">Chitwan</option>
//         </select>
//       </label>
//       <br />
//       <label>
//         Accommodation:
//         <input type="radio" name="accommodation" value="Hotel" checked={accommodation === 'Hotel'} onChange={(e) => setAccommodation(e.target.value)} />
//         Hotel
//         <input type="radio" name="accommodation" value="Hostel" checked={accommodation === 'Hostel'} onChange={(e) => setAccommodation(e.target.value)} />
//         Hostel
//       </label>
//       <br />
//       <label>
//         Transportation:
//         <input type="radio" name="transportation" value="Flight" checked={transportation === 'Flight'} onChange={(e) => setTransportation(e.target.value)} />
//         Flight
//         <input type="radio" name="transportation" value="Train" checked={transportation === 'Train'} onChange={(e) => setTransportation(e.target.value)} />
//         Train
//       </label>
//       <br />
//       <label>
//         Food:
//         <input type="radio" name="food" value="Restaurant" checked={food === 'Restaurant'} onChange={(e) => setFood(e.target.value)} />
//         Restaurant
//         <input type="radio" name="food" value="Street Food" checked={food === 'Street Food'} onChange={(e) => setFood(e.target.value)} />
//         Street Food
//       </label>
//       <br />
//       <button onClick={handleCalculate}>Calculate Budget</button>
//       <h2>Total Budget: {budget}</h2>
//     </div>
//   );
// }

// export default TravelPlanner;

import React, { useState } from 'react';
import './travelplan.css';

const TravelPlanner = () => {
  const [destination, setDestination] = useState('');
  const [accommodation, setAccommodation] = useState('');
  const [transportation, setTransportation] = useState('');
  const [food, setFood] = useState('');
  const [days, setDays] = useState('');
  const [guide, setGuide] = useState(false);
  const [trekking, setTrekking] = useState(false);
  const [totalBudget, setTotalBudget] = useState(0);

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const handleAccommodationChange = (event) => {
    setAccommodation(event.target.value);
  };

  const handleTransportationChange = (event) => {
    setTransportation(event.target.value);
  };

  const handleFoodChange = (event) => {
    setFood(event.target.value);
  };

  const handleDaysChange = (event) => {
    setDays(event.target.value);
  };

  const handleGuideChange = (event) => {
    setGuide(event.target.checked);
  };

  const handleTrekkingChange = (event) => {
    setTrekking(event.target.checked);
  };

  const calculateBudget = () => {
    let budget = 0;
    if (destination === 'Pokhara') {
      budget += 1000;
    } else if (destination === 'Kathmandu') {
      budget += 800;
    } else if (destination === 'Chiitwan') {
      budget += 1500;
    }
    if (accommodation === '5-star hotel') {
      budget += 500;
    } else if (accommodation === '3-star hotel') {
      budget += 300;
    } else if (accommodation === 'guesthouse') {
      budget += 100;
    }
    if (transportation === 'rental car') {
      budget += 100;
    } else if (transportation === 'taxi') {
      budget += 50;
    } else if (transportation === 'public transport') {
      budget += 20;
    }
    if (food === 'restaurant meals') {
      budget += 50;
    } else if (food === 'street food') {
      budget += 20;
    } else if (food === 'grocery shopping') {
      budget += 10;
    }
    if (guide) {
      budget += 200;
    }
    if (trekking) {
      budget += 300;
    }
    budget *= days;
    setTotalBudget(budget);
  };

  return (
    <div className="travel-planner">
      <h1>Travel Planner</h1>
      <div>
        <label htmlFor="destination">Destination:</label>
        <select id="destination" value={destination} onChange={handleDestinationChange}>
          <option value="">Please select</option>
          <option value="Pokhara">Pokhara</option>
          <option value="Kathmandu">Kathmandu</option>
          <option value="Chitwan">Chitwan</option>
        </select>
      </div>
      <div>
        <label htmlFor="days">Number of days:</label>
        <input type="number" id="days" value={days} onChange={handleDaysChange} min="1" />
      </div>
      <div>
        <label htmlFor="accommodation">Accommodation:</label>
        <select id="accommodation" value={accommodation} onChange={handleAccommodationChange}>
          <option value="">Please select</option>
          <option value="5-star hotel">5-star hotel</option>
          <option value="3-star hotel">3-star hotel</option>
          <option value="guesthouse">Guesthouse</option>
        </select>
      </div>
      <div>
        <label htmlFor="transportation">Transportation:</label>
        <select id="transportation" value={transportation} onChange={handleTransportationChange}>
          <option value="">Please select</option>
          <option value="rental car">Rental car</option>
          <option value="taxi">Taxi</option>
          <option value="public transport">Public transport</option>
        </select>
      </div>
      <div>
        <label htmlFor="food">Food:</label>
        <select id="food" value={food} onChange={handleFoodChange}>
          <option value="">Please select</option>
          <option value="restaurant meals">Restaurant meals</option>
          <option value="street food">Street food</option>
          <option value="grocery shopping">Grocery shopping</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="guide">Guide required:</label>
        <input type="checkbox" id="guide" checked={guide} onChange={handleGuideChange} />
      </div>
      <div>
        <label htmlFor="trekking">Trekking:</label>
        <input type="checkbox" id="trekking" checked={trekking} onChange={handleTrekkingChange} />
      </div>
      <div className="calculate-budget">
        <button onClick={calculateBudget}>Calculate Budget</button>
        <div>Total Budget: {totalBudget}$</div>
      </div>
    </div>
  );
};
export default TravelPlanner;



          