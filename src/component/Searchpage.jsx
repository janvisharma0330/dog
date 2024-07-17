import React, { useState, useEffect } from 'react';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [dogList, setDogList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); 

  const API_URL = 'https://http.dog/'; 

  useEffect(() => {
    const fetchDogs = async () => {
      setIsLoading(true); 
      setError(null); 

      try {
        const response = await fetch(`https://http.dog/${search}.json)
`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setDogList(data.message || []); // Handle empty response gracefully
      } catch (error) {
        console.error('Error fetching dogs:', error);
        setError(error.message || 'An error occurred'); 
      } finally {
        setIsLoading(false); 
      }
    };

    if (searchTerm) { 
      fetchDogs();
    } else {
      setDogList([]); 
    }
  }, [searchTerm]); 

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search dog breeds..." // More descriptive placeholder
        value={searchTerm}
        onChange={handleInputChange}
      />
      {isLoading ? (
        <p>Loading dogs...</p>
      ) : error ? (
        <p>Error: {error}</p> // Display user-friendly error message
      ) : dogList.length > 0 ? (
        <ul>
          {dogList.map((imageUrl) => (
            <li key={imageUrl}>
              <img src={imageUrl} alt="Dog image" />
            </li>
          ))}
        </ul>
      ) : (
        <p>No dogs found for "{searchTerm}"</p>
      )}
    </div>
  );
}

export default Search;
