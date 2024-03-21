import React, { useRef, useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import './fully_scanned.css';
import Newexcel from './Newexcel.jsx';
import './hi.css';
const Fully_scanned = () => {
  return (
    <>
    <div className='scanning_div'>
     <div className='excel'>
<Newexcel />
</div>
<div className="fullcam">
<Webcam/>
</div>
</div>
</>
  );
};

export default Fully_scanned;
