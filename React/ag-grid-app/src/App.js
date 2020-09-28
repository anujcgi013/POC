import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const headerData= [
  { headerName: "Make", field: "make" },
  { headerName: "Model", field: "model" },
  { headerName: "Price", field: "price" }]

const rowData= [
  { make: "Toyota", model: "Celica", price: 35000 },
  { make: "Ford", model: "Mondeo", price: 32000 },
  { make: "Porsche", model: "Boxter", price: 72000 }]

function App() {
  const [header]=React.useState(headerData);
  const [rows]=React.useState(rowData);
  return (
    <div className="ag-theme-alpine" style={ {height: '200px', width: '600px'} }>
    <AgGridReact
        columnDefs={header}
        rowData={rows}>
    </AgGridReact>
  </div>
  );
}

export default App;
