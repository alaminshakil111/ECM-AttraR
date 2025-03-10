// src/components/Section.js
import React from 'react';
// import Box from './ItemsBox';
import ItemsBox from './ItemsBox';

const Section = () => {
  const boxes = [
    { title: 'Box 1', content: 'This is the content of Box 1' },
    { title: 'Box 2', content: 'This is the content of Box 2' },
    { title: 'Box 3', content: 'This is the content of Box 3' },
    { title: 'Box 4', content: 'This is the content of Box 4' },
  ];

  return (
    <div style={styles.section}>
      {boxes.map((box, index) => (
        <ItemsBox key={index} title={box.title} content={box.content} />
      ))}
    </div>
  );
};

const styles = {
  section: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '20px',
  },
};

export default Section;