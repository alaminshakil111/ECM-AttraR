import React from 'react';


const styles = {
  section: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '20px',
  },
};

const Section = () => {
  const boxes = [
    { "itemBoxImg": "../assets/images/indeximg1.jpg" },
    { "itemBoxImg": "../assets/images/indeximg2.jpg" },
    { "itemBoxImg": "../assets/images/indeximg3.jpg" },
    { "itemBoxImg": "../assets/images/indeximg4.jpg" },
    { "itemBoxImg": "../assets/images/indeximg5.jpg" },
    { "itemBoxImg": "../assets/images/indeximg6.jpg" },
    { "itemBoxImg": "../assets/images/indeximg4.jpg" },
    { "itemBoxImg": "../assets/images/indeximg2.jpg" },
    { "itemBoxImg": "../assets/images/indeximg3.jpg" },
    { "itemBoxImg": "../assets/images/indeximg4.jpg" },
    { "itemBoxImg": "../assets/images/indeximg5.jpg" },
    { "itemBoxImg": "../assets/images/indeximg6.jpg" },

  ];

  return (
    <div style={styles.section}>
      {boxes.map((box, index) => (
        <div className='itemBoxInner' key={index}>
          <a href="#" className='w-full'> <img src={box.itemBoxImg} alt="" /> </a>

        </div>
      ))}
    </div>
  );
};

export default Section;