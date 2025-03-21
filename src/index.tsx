import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import store from './store/store';
import { Provider } from 'react-redux';
import { GraphQLClient } from './Clients';
import { ApolloProvider } from '@apollo/client';

const root = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(root).render(
  <ApolloProvider client={GraphQLClient}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

