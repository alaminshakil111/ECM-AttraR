import { useState, useEffect } from "react";

const AboutMe = () => {
    const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup function
  }, []);

  return <h1>Counter: {count}</h1>;
};

export default AboutMe;