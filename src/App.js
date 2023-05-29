import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';

import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Home, KendaliArmada, AddArmada, DetilArmada, EditArmada, Armada, AddService, DetilService, EditService, JadwalService, MasaBerlaku, KIM, PerpanjangKIM, KIR, PerpanjangKIR, STNK, PerpanjangSTNK, AddKaryawan, DetilKaryawan, EditKaryawan, Karyawan, AddPT, EditPT, DetilPT, PT, AddUser, EditUser, DetilUser, User, Login } from './pages';
import './App.css';
import { useStateContext } from './contexts/ContextProvider';
import { Edit } from '@syncfusion/ej2-react-grids';

const App = () => {
  const { activeMenu } = useStateContext();
  
  return (
    <div>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={{ zIndex : '1000'}}>
            <TooltipComponent content='Setting' position='top'>
              <button type='button' className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white' style={{background: 'blue', borderRadius : '50%'}}>
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
              <Sidebar />
            </div>
          ) : (
            <div className='w-0 dark:bg-secondary-dark-bg'>
              <Sidebar />
            </div>
          )}
          <div className={
            activeMenu ? 'dark:bg-main-bg bg-main-bg min-h-screen w-full  md:ml-72' 
            : 'dark:bg-main-bg bg-main-bg min-h-screen w-full  flex-2' 
          }>
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
              <Navbar />
            </div>
          <div>
            <Routes>
              {/* dashboard  */}
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />

              {/* Kendali Armada  */}
              <Route path="/kendali-armada" element={<KendaliArmada />} />
              <Route path="/kendali-armada/armada" element={<Armada />} />
              <Route path="/kendali-armada/armada/add" element={<AddArmada />} />
              <Route path="/kendali-armada/armada/edit" element={<EditArmada />} />
              <Route path="/kendali-armada/service/jadwal" element={<JadwalService />} />
              <Route path="/kendali-armada/service/add" element={<AddService />} />
              <Route path="/kendali-armada/service/edit" element={<EditService />} />

              <Route path="/kendali-armada/surat" element={<MasaBerlaku />} />

              <Route path="/kendali-armada/stnk" element={<STNK />} />
              <Route path="/kendali-armada/stnk/perpanjang" element={<PerpanjangSTNK />} />

              <Route path="/kendali-armada/kir" element={<KIR />} />
              <Route path="/kendali-armada/kir/perpanjang" element={<PerpanjangKIR />} />

              <Route path="/kendali-armada/kim" element={<KIM />} />
              <Route path="/kendali-armada/kim/perpanjang" element={<PerpanjangKIM />} />

              <Route path="/pt" element={<PT />} />
              <Route path="/pt/add" element={<AddPT />} />
              <Route path="/pt/edit" element={<EditPT />} />

              <Route path="/user" element={<User />} />
              <Route path="/user/add" element={<AddUser />} />
              <Route path="/user/edit" element={<EditUser />} />

              <Route path="/karyawan" element={<Karyawan />} />
              <Route path="/karyawan/add" element={<AddKaryawan />} />
              <Route path="/karyawan/edit" element={<EditKaryawan />} />

            </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App