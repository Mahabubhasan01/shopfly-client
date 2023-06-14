import { useState, useEffect } from 'react';

const TextLoop = () => {
  const texts = ["I am Mahabub", "Web Developer", "MERN Stack"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let interval;

    if (typeof window !== 'undefined') {
      interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, []);

  return <div>{texts[index]}</div>;
};

export default TextLoop;
