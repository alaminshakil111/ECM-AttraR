import { useState, useEffect } from "react";

const AboutMe = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`🟢 Creating new setInterval at count: ${count}`);
    
    const interval = setInterval(() => {
      setCount(prev => {
        console.log(`⏳ Interval Running! ID: ${interval}, Count: ${prev + 1}`);
        return prev + 1;
      });
    }, 1000);

    // return () => {
    //   console.log(`🔴 Clearing Interval! ID: ${interval}, Last Count: ${count}`);
    //   clearInterval(interval);
    // };
  }, []);

  return <h1>Counter: {count}</h1>;
};

export default AboutMe;