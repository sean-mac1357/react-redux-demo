import { Provider } from 'react-redux';
import { store } from './redux/store';
import Counter from './components/Counter'

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>Here lies the React Redux Demo</h1>
        </header>
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
