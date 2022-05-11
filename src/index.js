import React from 'react';
import './index.css';
import { render } from "react-dom";
import App from "./App";
import Event from "./components/Event";
import Events from './components/Events';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/event" element={<Event />} />
      <Route path="/events" element={<Events />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);