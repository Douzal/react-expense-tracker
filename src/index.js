import './global.css';
import { App } from './App';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store, persistore } from 'store';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistore}>
      <App />
    </PersistGate>
  </Provider>
);