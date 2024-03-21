import React, { useRef, useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import './partially_scanned.css';
import Excelsheet from './ExcelSheet.jsx';
import './hi.css';
const Partially_scanned = () => {
  return (
    <>
    <div className='scanning_div'>
     <div className='excel'>
<Excelsheet/>
</div>
<div className='cam'>
<Webcam style={{ height: '70vh' }}/>
</div>
</div>
</>
  );
};

export default Partially_scanned;
