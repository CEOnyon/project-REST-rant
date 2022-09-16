const React = require('react');
const Def = require("../default.jsx");

function index (data) {
    let placesFormatted = data.places.map((place) => {
      return (
        <div className='col-sm-6'>
          <div key={index}>
            <h2>{place.name}</h2>
            <p className='text-center'>
              {place.cuisines}
            </p>
            <img src={place.pic} alt={place.name}/>
            <p className='text-center'>
              Located in {place.city}, {place.state}
            </p>
          </div>
        </div>
      );
    });
    let attributes = {
        'title':'Places'
    };
    return (
        <Def {...attributes}>
          <main>
              <h1>Places to Rant or Rave About</h1>
              <div className='row'></div>
              {placesFormatted}
          </main>
        </Def>
    );
};

module.exports = index
