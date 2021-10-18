import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    const { pokemon: { name, type, averageWeight, image } } = this.props;

    return (
      <div className="pokemon">
        <div className="pokemon-info">
          <p>Name: { name }</p>
          <p>Type: { type }</p>
          <p>Weight(average): { averageWeight.value} {averageWeight.measurementUnit}</p>
        </div>

        <div className="pokemon-img">
          <img src={ image } alt={ name }></img>
        </div>
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number,
    }),
    image: PropTypes.string,
  }).isRequired,
};

export default Pokemon;
