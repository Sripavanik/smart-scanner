import React from 'react';
import * as XLSX from 'xlsx';

import './excelsheet.css'; // Import your CSS file for styling

const ExcelSheet = () => {
  // Sample data
  const data = [
   
    [1, 'Task 1','E3 Sem1','CN','CN20XXX',2,15],
    [2, 'Task 2', 'E3 Sem1','CN','CN20XXX',2,11],
    [3, 'Task 3', 'E3 Sem1','CN','CN20XXX',2,10],
    [1, 'Task 1', 'E3 Sem1','CN','CN20XXX',2,7],
    [2, 'Task 2', 'E3 Sem1','CN','CN20XXX',2,14],
    [3, 'Task 3', 'E3 Sem1','CN','CN20XXX',2,9], 
    [1, 'Task 1', 'E3 Sem1','CN','CN20XXX',2,14],
    [2, 'Task 2', 'E3 Sem1','CN','CN20XXX',2,14],
    [3, 'Task 3', 'E3 Sem1','CN','CN20XXX',2,15],
    [1, 'Task 1', 'E3 Sem1','CN','CN20XXX',2,15],
    [1, 'Task 1', 'E3 Sem1','CN','CN20XXX',2,15],
    [1, 'Task 1', 'E3 Sem1','CN','CN20XXX',2,15],
    [1, 'Task 1', 'E3 Sem1','CN','CN20XXX',2,15]
  ];

  // Create a new workbook
  const wb = XLSX.utils.book_new();

  // Add a worksheet
  const ws = XLSX.utils.aoa_to_sheet(data);

  // Add the worksheet to the workbook
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

  // Export the workbook to a file
  const exportToExcel = () => {
    XLSX.writeFile(wb, 'sample.xlsx');
  };

  return (
    <div className="container">
      {/* Left div for Excel sheet */}
      <div className="excel-container">
        <p className='caption'>Entering the marks is in progress...</p>
        <table className="excel-table">
          <thead>
            <tr>
              <th>ID_No</th>
              <th>Academic Year</th>
              <th>Year Sem</th>
              <th>Subject Name</th>
              <th>Subject Code</th>
              <th>Mid</th>
              <th>Marks</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={exportToExcel} className='download_button'>Download Sheet</button>
      </div>
     
     
    </div>
  );
};

export default ExcelSheet;
