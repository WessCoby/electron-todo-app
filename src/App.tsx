import React from 'react';

import { ReactComponent as Hamburger } from './svg/hamburger.svg';
import { ReactComponent as DotsVertical } from './svg/dots-vertical.svg';
import { Sidebar, Main } from './components';
import { useSidebarContext } from './context/sidebar.context';


function App() {
  const { isOpen, setIsOpen } = useSidebarContext();

  return (
    <div className="flex h-screen antialiased text-gray-900 bg-white">
      {/* Close sidebar on outside click */}
      <div
        className={
          `${isOpen ? 'block' : 'hidden'} fixed z-20 inset-0 bg-black opacity-50 transition-opacity md:hidden h-screen`
        }
        onClick={() => setIsOpen(false)}
      ></div>
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <header
          className="flex items-center justify-between px-6 py-4 bg-gradient-to-l from-primary-500"
        >
          <div className="flex items-center">
            <button
              className="text-gray-500 focus:outline-none md:hidden"
              onClick={() => setIsOpen(true)}
            >
              <Hamburger className="w-6 h-6 fill-current text-gray-800" />
            </button>
          </div>
          <div className="flex items-center">
          <DotsVertical className="w-6 h-6 fill-current text-gray-800" />
          </div>
        </header>
        <Main />
      </div>
    </div>
  )
}

export default App;
