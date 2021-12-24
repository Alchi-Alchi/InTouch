import './index.css';
import reportWebVitals from './reportWebVitals';
import state from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addPost, updatePost, subscribe} from './redux/state';

export let renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} updatePost={updatePost}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
renderEntireTree (state);
subscribe (renderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();