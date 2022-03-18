import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {

  const [places, setPlace] = useState (data);

  const removePlace = (id) => {
    let newPlaces=places.filter (place => place.id !==id);
    setPlace(newPlaces)
  }

  return (
    <div>
      <div className='container'>
        <h1>World's best {places.length} Places to Visit </h1>
      </div>

      {places.map((place =>{
        const {id,location, description,image} = place;

        return (
          <div>

            <div className='container'>
          <h2>  {id} - {location} </h2>
            </div>

          <div className='container'>
          <p> {description} </p>
          </div>

          <div className='container'>
            <img src={image} alt ="pic" width ="300px" />
          </div>

          <div className='container'>
            <button className='btn' onClick={() => removePlace(id)}>Remove</button>
          </div>

          </div>
        )
      }))}

      <div className='container'>
        <button className='btn ' onClick={() => setPlace([])} >Delete All</button>
      </div>
    </div>
  )
}

export default App;
