import React from 'react';
import { getAllCenters } from '../../centers';
import { Link, Outlet } from 'react-router-dom';

export const CentersPage = () => {
  return (
    <>
      <ul>
        {getAllCenters().map((center) => {
          return (
            <>
              <li key={center.id}>
                <Link to={`/centerspage/${center.id}`}>{center.name}</Link>
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
