import React from 'react';
import { getAllCenters } from '../../../centers';
import { useParams } from 'react-router-dom';
import { getCenterById } from '../../../centers';

export const CenterDetail = () => {
  const { centerId } = useParams();
  const centersDetails = getCenterById(centerId);

  return (
    <div>
      <h3>{centersDetails}</h3>
    </div>
  );
};
