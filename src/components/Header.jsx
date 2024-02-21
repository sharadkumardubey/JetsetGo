import React from 'react';

const Header = () => {
  return (
    <header className='py-5 px-16 rounded-sm'>
      <a href={`/jetsetgo`}>
        <mark class='px-2 text-4xl font-extrabold text-white bg-sky-900 rounded drop-shadow-2xl'>
          JetSetGo
        </mark>
      </a>
    </header>
  );
};

export default Header;
