import React from 'react';
import ReactDOM from 'react-dom/client';
import styled from "styled-components";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CardBox/>
  </React.StrictMode>
);

const CardBox = styled.div`
  background-color: red;
  color: black;
`;
