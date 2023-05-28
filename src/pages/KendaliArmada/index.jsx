import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { Link, NavLink } from 'react-router-dom';

import { HiOutlineTruck } from 'react-icons/hi2';
import { Stacked, Pie, Button, LineChart, SparkLine } from '../../components';
import { armadaMenu, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const KendaliArmada = () => {
    return (
      
        <div className="mt-12">
          <center>
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-96 rounded-xl w-9/12 p-8 pt-9 m-3" >
              <button
                  type="button"
                  style={{ color: '#E4FCF2', backgroundColor: '#00d084' }}
                  className="text-7xl opacity-0.9 rounded-full  p-4 content-center m-10"
                >
                <HiOutlineTruck />
              </button>
              <p className="text-center font-extrabold text-5xl ">Kendali Armada</p>
                
          </div>
          </center>
          <div className="flex flex-wrap lg:flex-nowrap justify-center  ">
            
            <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
              {armadaMenu.map((item) => (
                <div key={item.title} className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
                  <button
                    type="button"
                    style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                    className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl content-center"
                  >
                    {item.icon}
                  </button>
                  <p className="mt-3">
                    <span className="text-lg font-semibold">{item.title}</span>
                  </p>
                  <Link to={item.link} className="text-sm text-gray-400  mt-1" >Lihat</Link>
                </div>
              ))}
            </div>
          </div>
    
          
        </div>
      )
    }


export default KendaliArmada