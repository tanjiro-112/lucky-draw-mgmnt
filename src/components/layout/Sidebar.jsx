import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const navLinkClass = "flex items-center px-6 py-3 text-base-content hover:bg-base-200";
  const activeLinkClass = "bg-primary text-primary-content";

  return (
    <aside className="w-64 flex-shrink-0 bg-base-100 shadow-lifted">
      <div className="flex items-center justify-center h-16 bg-primary">
        <h2 className="text-xl font-bold text-primary-content">Lucky Draw</h2>
      </div>
      <nav className="mt-8">
        <NavLink to="/" className={({ isActive }) => `${navLinkClass} ${isActive ? activeLinkClass : ''}`}>
          <span className="ml-3">Dashboard</span>
        </NavLink>
        <NavLink to="/events" className={({ isActive }) => `${navLinkClass} ${isActive ? activeLinkClass : ''}`}>
          <span className="ml-3">Events</span>
        </NavLink>
        <NavLink to="/prizes" className={({ isActive }) => `${navLinkClass} ${isActive ? activeLinkClass : ''}`}>
          <span className="ml-3">Prizes</span>
        </NavLink>
        <NavLink to="/participants" className={({ isActive }) => `${navLinkClass} ${isActive ? activeLinkClass : ''}`}>
          <span className="ml-3">Participants</span>
        </NavLink>
        <NavLink to="/draws" className={({ isActive }) => `${navLinkClass} ${isActive ? activeLinkClass : ''}`}>
          <span className="ml-3">Draws</span>
        </NavLink>
        <NavLink to="/settings" className={({ isActive }) => `${navLinkClass} ${isActive ? activeLinkClass : ''}`}>
          <span className="ml-3">Settings</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
