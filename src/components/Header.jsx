import React from 'react';

const Header = () => {
  return (
    <header className='p-5 rounded-sm'>
      <a
        href='/'
        className='text-2xl text-blue-9500 font-bold hover:shadow-md rounded-lg p-2 drop-shadow-xl'
      >
        JetSetGo
        <hr className='w-80 h-1 bg-gray-900 border-0 rounded' />
      </a>
    </header>
  );
};

export default Header;
