
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import NoPage from "./noPage";
//import App from './App';
//import reportWebVitals from './reportWebVitals';

export default function App() {
  const [visitCount, setVisitCount] = useState(0);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home setVisitCount={setVisitCount} />} />
          <Route path="about" element={<About visitCount={visitCount} />} />
          <Route path="contact" element={<Contact visitCount={visitCount} />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

/*original code below
 const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/
