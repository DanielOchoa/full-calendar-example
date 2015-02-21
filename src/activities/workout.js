import React from 'react';

export default React.createClass({
  render() {
    return (
      <li className="workout-item">
        <div className="description">
          {this.props.type}
        </div>
        <div className="duration">
          Duration: {this.props.duration}
        </div>
        <div className="distance">
          Distance: {this.props.distance} km
        </div>
      </li>
    );
  }
});
