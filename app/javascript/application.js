import React from 'react';
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux"
import store from './redux/configureStore';
import App from './components/App'

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
     <App />
  </Provider>
);
