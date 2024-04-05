import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css'
import DetailView from './Routes/DetailView';
import './App.css';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/bookdetails/works/:bookKey" element={<DetailView />} />
    </Routes>

    </BrowserRouter>
  </React.StrictMode>,

);
