import React, { Component } from 'react';
import "../../assets/stylesheets/_cards.scss";
import "../../assets/stylesheets/flat.scss";
import "../../assets/stylesheets/app.scss";
import Flat from './flat';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      flats: [],
      allFlats: [],
      selectedFlat: null,
      search: ""
    };
  }

  componentDidMount() {
    const url = "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json";
    fetch(url) // AJAX
      .then(response => response.json())
      .then((data) => {
        this.setState({
          flats: data,
          allFlats: data
        });
      })
  }

  selectFlat = (flat) => {
    this.setState({
      selectedFlat: flat,
    });
  }

  handleSearch = (event) => {
    this.setState({
      search: event.target.value,
      flats: this.state.allFlats.filter((flat) => new RegExp(event.target.value, "i").exec(flat.name))
    });
  }

  render() {
    let center = {
      lat: 48.8566,
      lng: 2.3522
    };

    if (this.state.selectedFlat) {
      center = {
        lng: this.state.selectedFlat.lng,
        lat: this.state.selectedFlat.lat,
      }
    }

    return (
      <div className='app'>
        <div className='main'>
          <div className='search'>
            <input
            type="text"
            placeholder='Search...'
            value={this.state.search}
            onChange={this.handleSearch}
            />
          </div>
          <div className='flats'>
            {this.state.flats.map((flat, index) => {
              return <Flat
              flat={flat}
              key={index}
              selectFlat={this.selectFlat} />;
            })}
          </div>
        </div>
        <div className='map'>
          <GoogleMapReact
            // bootstrapURLKeys={GoogleMapConfig}
            center={center}
            zoom={11}
          >
            {this.state.flats.map((flat, index) => {
              return <Marker
              lat={flat.lat}
              lng={flat.lng}
              text={flat.price}
              key={index}
              selected={flat === this.state.selectedFlat}
              />;
            })}
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
