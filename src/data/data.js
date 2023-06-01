import React from 'react';

import product6 from './product6.jpg';
import product7 from './product7.jpg';
import product8 from './product8.jpg';
import logobinuss from './Logo/Binuss-logo.jpg'


export const gridLogoPT = (props) => (
    <div>
      <img
        className="rounded-xl h-20 md:ml-3"
        src={props.logoPT}
        alt="logo"
      />
    </div>
  );

  
export const ptGrid = [
    // {
    //   field: 'id',
    //   headerText: 'No.',
    //   width: '30',
    //   textAlign: 'Left',
    // },
    {
      headerText: 'Logo',
      template: gridLogoPT,
      textAlign: 'Right',
      width: '75',
    },
    {
      field: 'namaPT',
      headerText: 'Nama PT',
      width: '150',
      textAlign: 'Center',
    },
    { field: 'kota',
      headerText: 'Alamat',
      width: '100',
      textAlign: 'Center',
    },
    {
      field: 'noTelp',
      headerText: 'No Telp',
      textAlign: 'Center',
      editType: 'numericedit',
      width: '100',
    }
  
  ];

  export const contextMenuItems = [
    'AutoFit',
    'AutoFitAll',
    'SortAscending',
    'SortDescending',
    'Copy',
    'Edit',
    'Delete',
    'Save',
    'Cancel',
    'PdfExport',
    'ExcelExport',
    'CsvExport',
    'FirstPage',
    'PrevPage',
    'LastPage',
    'NextPage',
  ];