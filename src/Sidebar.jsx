import React from 'react';
import './index.css';

function Sidebar() {
  const categories = [
    'Fruits & Vegetables',
    'Dairy & Bakery',
    'Snacks & Beverages',
    'Personal Care',
    'Home Care',
    'Meat & Seafood',
    'Beverages',
    'Baby Care',
  ];

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Grocery Products</h2>
      <ul className="sidebar-list">
        {categories.map((category, index) => (
          <li key={index} className="sidebar-item">
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
