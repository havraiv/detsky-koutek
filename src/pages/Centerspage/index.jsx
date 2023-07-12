import React from 'react';
import { getAllCenters } from '../../centers';
import { NavLink, Outlet } from 'react-router-dom';
import './style.css';

export const CentersPage = () => {
  return (
    <>
      <ul>
        {getAllCenters().map((center) => {
          return (
            <>
              <li key={center.id}>
                <NavLink
                  to={`/centerspage/${center.id}`}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  {center.name}
                </NavLink>
              </li>
            </>
          );
        })}
        <div className="center-detail">
          <Outlet />
        </div>
      </ul>
    </>
  );
};
