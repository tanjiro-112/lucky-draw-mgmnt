import React from 'react';

const Header = () => {
  return (
    <header className="bg-base-100 shadow-soft z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Search bar could go here */}
          <div className="flex items-center">
            <h1 className="text-lg font-bold text-base-content">Lucky Draw Management</h1>
          </div>
          <div className="flex items-center">
            {/* User menu could go here */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
