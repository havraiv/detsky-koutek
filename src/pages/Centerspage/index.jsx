import React from 'react';
import { getAllCenters } from '../../centers';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import { CenterDetail } from './Centerdetail';

export const CentersPage = () => {
  return (
    <>
      <ul>
        {getAllCenters().map((center) => {
          return (
            <li key={center.id}>
              <Link to={`/pobocky/${center.id}`}>{center.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/pobocky/:id',
    element: <CenterDetail />,
  },
]);
