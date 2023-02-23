import React, { Component } from 'react';
// import "../../assets/stylesheets/application.scss";
import "../../assets/stylesheets/_cards.scss";
import "../../assets/stylesheets/flat.scss";
import "../../assets/stylesheets/app.scss";
import Flat from './flat';
// import "../../data/flats";

class App extends Component {
  render() {
    const flat = {
      name: "Trendy Apt in Buttes Montmartre",
      imageUrl: "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat2.jpg",
      price: 200,
      priceCurrency: "EUR",
      lat: 48.885707,
      lng: 2.343543
    };

    return (
      <div className='app'>
        <div className='main'>
          <div className='search'>
          </div>
          <div className='flats'>
            <Flat flat={flat} />
            <Flat flat={flat} />
            <Flat flat={flat} />
          </div>
        </div>
        <div className='map'>
        </div>
      </div>
    );
  }
}

export default App;
