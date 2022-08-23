import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Modifico App.js
        </p>
        <a
          className="App-link"
          href="https://github.com/rodrigosivori/reactjs-desafio1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Desafio 1: GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
