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

  
export const dataPT = [
    {
        id: 1,
        namaPT: "PT BINA UTAMA SEJAHTERA SEJATI",
        alamatLengkap: "boyolalasdadi",
        kota: "Boyolali",
        noTelp : "0863673737",
        email: "ptbinautama@gmail.com",
        logoPT:
        logobinuss,
    },
    {
      id: 2,
      namaPT: "PT BERLIAN PUTRA MULYA",
      alamatLengkap: "promasan",
      kota: "Salatiga",
      noTelp : "08265634534",
      email: "ptbinautama@gmail.com",
      logoPT:
        product6,
    },
    {
      id: 3,
      namaPT: "PT GEMILANG MULYA SEJAHTERA",
      alamatLengkap: "Duren",
      kota: "Temanggung",
      noTelp : "0826636534",
      email: "ptbinautama@gmail.com",
      logoPT:
        product7,
    },
    {
      id: 4,
      namaPT: "PT APM",
      alamatLengkap: "ashnsdnjsd",
      kota: "Tuntang",
      noTelp : "0273777333",
      email: "ptbinautama@gmail.com",
      logoPT:
        logobinuss,
    },
  ];

  
export const ptGrid = [
    {
      field: 'id',
      headerText: 'No.',
      width: '30',
      textAlign: 'Left',
    },
    {
      headerText: 'Logo',
      template: gridLogoPT,
      textAlign: 'Right',
      width: '120',
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
      width: '150',
    },
  
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