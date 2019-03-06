import React, { Component } from 'react';
import './CityInfo.css'
import {Link} from 'react-router-dom';
import London from './London';
import Sydney from './Sydney';

class CityInfo extends Component {
  render() {
    // if someone click London is clicked and show London in right column
    var selectedCity;
    debugger;
    if (this.props.selectedCity === "London") {
      selectedCity = <London />
    } else if (this.props.selectedCity === "Sydney") {
      selectedCity = <Sydney />
    }

    return (
      <div>
        <div class="row">
        {/* left column */}
          <div class="column">Cities:
            <div>London
              <Link to="/CityInfo/London"><button>London CityInfo</button></Link>
            </div>
            <div>Sydney
              <Link to="/CityInfo/Sydney"><button>Sydney CityInfo</button></Link>
            </div>
            <div>San Francisco</div>
            <div>Seattle</div>
          </div>
        {/* right column */}
          <div class="column">more info about my cities
            { selectedCity }
          </div>
        </div>
      </div>
    );
  }
}

export default CityInfo;