import React, { useState, useEffect } from 'react';

const App = () => {
  const [dogImage, setDogImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDogImage = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();

        setDogImage(data.message);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching dog image:', error);
        setIsLoading(false);
      }
    };

    fetchDogImage();
  }, []); // The empty dependency array means this effect will run once, similar to componentDidMount

  return (
    <div>
      <h1>Random Dog App</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <img src={dogImage} alt="A Random Dog" />
        </div>
      )}
    </div>
  );
};

export default App;
