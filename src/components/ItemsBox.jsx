// src/components/Box.js
import React from 'react';

const ItemsBox = ({ title, content }) => {
  return (
    <div style={styles.box}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

const styles = {
  box: {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '20px',
    margin: '10px',
    width: '200px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
};

export default ItemsBox;