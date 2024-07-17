import React, { useState, useEffect } from 'react';

function ListingPage() {
  const [savedLists, setSavedLists] = useState([]);

  useEffect(() => {
    const lists = JSON.parse(localStorage.getItem('savedLists')) || [];
    setSavedLists(lists);
  }, []);

  const handleDelete = (index) => {
    const updatedLists = savedLists.filter((_, i) => i !== index);
    setSavedLists(updatedLists);
    localStorage.setItem('savedLists', JSON.stringify(updatedLists));
  };

  const handleEdit = (index) => {
    const listName = prompt('Enter a new name for this list:', savedLists[index].name);
    if (!listName) return;

    const updatedLists = [...savedLists];
    updatedLists[index].name = listName;
    setSavedLists(updatedLists);
    localStorage.setItem('savedLists', JSON.stringify(updatedLists));
  };

  return (
    <div>
      <h1>Saved Lists</h1>
      <ul>
        {savedLists.map((list, index) => (
          <li key={index}>
            <h2>{list.name}</h2>
            <p>Created on: {list.creationDate}</p>
            <div>
              {list.imageLinks.map((url, i) => (
                <img key={i} src={url} alt={`Dog with response code ${list.responseCodes[i]}`} />
              ))}
            </div>
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListingPage;
