import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Hello1(props) {
  return <h2>{props.title}</h2>
}

const Hello2 = (props) => <h2>{props.title}</h2>

class Hello extends Component {
  render() {
    return <h2>{this.props.title}</h2>
  }
}

class Text extends Component {
  render() {

    const {
      isActivated,
      arrayOfNumbers,
      multiply,
      title
    } = this.props

    const textoSegunBool = isActivated ? 'On' : 'Off'
    const mappedNUmbers = arrayOfNumbers.map(multiply)

    return <div>
      {title}
      <p>{mappedNUmbers.join(', ')}</p>
      <p>{textoSegunBool}</p>
      <p>{textoSegunBool}</p>
    </div>
  }
}

class Contador extends Component {
  constructor() {
    super();
    this.state = { contador: 1 }
    setInterval( () => {
      this.setState({ contador: this.state.contador + 1})
    },2000)
  }

  render() {
    return (
      <span>El contador está a {this.state.contador}</span>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Contador></Contador>
        <Text
          arrayOfNumbers={[2, 32, 45]}
          objectWithInfo={{ key1: 'First Value', key2: 'Second Value' }}
          multiply={(number) => number * 4}
          number={2}
          text='Texto en string'
          isActivated
          title={<h1>Este es el titulo</h1>} />
        <p>
          <Hello1 title="Hello from props" />
        </p>
        <p>
          <Hello2 title="Hello from props constant" />
        </p>
        <p>
          <Hello title="Hello from props Component" />
        </p>
        <p>
          Hola mundo estoy usando react
        </p>
        <a
          className="App-link"
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          google
        </a>
      </header>
    </div>
  );
}

export default App;
