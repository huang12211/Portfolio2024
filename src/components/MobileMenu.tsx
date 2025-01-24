'use client';
import { useState } from 'react';

import { MobileMenuDropdown } from './MobileMenuDropdown';

const MobileMenu = () => {
  const [menu, openMenu] = useState(false);

  return (
    <>
      <button className="sm:hidden" onClick={() => openMenu(!menu)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
        </svg>
        <MobileMenuDropdown trigger={menu} setTrigger={openMenu} />
      </button>
    </>
  );
};

export { MobileMenu };
