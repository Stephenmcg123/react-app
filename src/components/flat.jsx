import React, { Component } from 'react';
import "../../assets/stylesheets/_cards.scss";
import "../../assets/stylesheets/flat.scss";
import "../../assets/stylesheets/app.scss";

class Flat extends Component {
  render() {
    const title = this.props.flat.price
    + this.props.flat.priceCurrency +
    " - " + this.props.flat.name;

    const style = {
      backgroundImage: `url('${this.props.flat.imageUrl}')`
    };

    return (
      <div className="flat">
        <div className='flat-picture' style={style}></div>
        <div className='flat-title'>
          {title}
        </div>
      </div>
    );
  }
}

export default Flat;