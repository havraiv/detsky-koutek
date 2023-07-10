import React from 'react';
import { getAllCenters } from '../../centers';
import { Link } from 'react-router-dom';

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
