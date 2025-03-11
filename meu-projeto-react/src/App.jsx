import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Bem vindo ao meu projeto React com Vite!</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        Contador: {count}
      </button>
    </div>
  );
}

export default App;
