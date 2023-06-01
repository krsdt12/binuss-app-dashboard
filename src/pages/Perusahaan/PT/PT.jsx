import React, { useState, useEffect } from 'react';
import { GridComponent, ColumnDirective, ColumnsDirective, Resize, Sort, ContextMenu, Filter,Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';
import { contextMenuItems, ptGrid } from '../../../data/data';
import { Header } from '../../../components';
import { getPT } from '../../../components/API/PTApi';

import { enableRipple } from '@syncfusion/ej2-base';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';


const PT = () => {
  const pt = getPT();
  const pageSettings = { pageSize: 6 };
  const gridFilter = {
    type: 'Menu',
  };
  const select = {
    persistSelection: true,
    type: 'Multiple',
    checkboxOnly: true,
  };
  const gridLogoPT = (props) => (
    <div>
      <img
        className="rounded-xl h-20 md:ml-3"
        src={props.logoPT}
        alt="logo"
      />
    </div>
  );
  const [no, setNo] = useState(0);
  const increment = () => {
    setNo(no++);
  } 
  return(
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <Header category="Page" title="List Data PT" />
        <GridComponent
          id="gridcomp"
          dataSource={pt}
          allowPaging
          allowExcelExport
          allowPdfExport
          contextMenuItems={contextMenuItems}
          enableHover 
          rowHeight={38} 
          allowSorting={true} 
          allowFiltering={true} 
          allowSelection={true} 
          pageSettings={pageSettings}
          selectionSettings={select} 
          filterSettings={gridFilter} 
          enableHeaderFocus={true} 
        >
          {increment}
          <ColumnsDirective>
            <ColumnDirective
              type="checkbox"
              allowSorting={false}
              allowFiltering={false}
              width="60"
            ></ColumnDirective>
            <ColumnDirective 
              headerText="No." 
              width="30" 
            ></ColumnDirective>
            <ColumnDirective
              headerText = "Logo"
              template= {gridLogoPT}
              textAlign= "Right"
              width= "70"
            ></ColumnDirective>
            <ColumnDirective
              headerText = "Nama PT"
              field= "namaPT"
              width= "150"
            ></ColumnDirective>
            <ColumnDirective
              headerText = "Alamat"
              field= "kota"
              width= "100"
            ></ColumnDirective>
            <ColumnDirective
              headerText = "No. Telp"
              field= "noTelp"
              width= "100"
            ></ColumnDirective>
            <ColumnDirective field="id" headerText="Action" width="100" ></ColumnDirective>
          </ColumnsDirective>
          <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport]} />
        </GridComponent>
      </div>
  );
};

export default PT