import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      photoObject: undefined,
      loading: true,
    };

    this.renderNewDog = this.renderNewDog.bind(this);
    this.renderDogElement = this.renderDogElement.bind(this);
  }

  componentDidMount() {
    this.fetchPhoto();
  }

  async fetchPhoto() {
    this.setState({ loading: true }, async () => {
      const requestReturn = await fetch('https://dog.ceo/api/breeds/image/random');
      const requestObject = await requestReturn.json();
      this.setState({
        loading: false,
        photoObject: requestObject,
      });
    });
  }

  renderNewDog() {
    this.fetchPhoto();
  }

  renderDogElement() {
    const { photoObject } = this.state;
    return (
      <div className="dog-container">
        <img src={ photoObject.message } alt="it's a dog!" />
        <button className="btn" type="button" onClick={ this.renderNewDog }>
          Renderizar outro Cachorro
        </button>
      </div>
    );
  }

  render() {
    const { loading } = this.state;
    const loadingElement = <span className="loading">Loading...</span>;
    return (
      <div>
        { loading ? loadingElement : this.renderDogElement() }
      </div>
    );
  }
}

export default App;
