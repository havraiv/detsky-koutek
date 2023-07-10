import React from 'react';
import { Link } from 'react-router-dom';

export const ErrorPage = () => {
  return (
    <>
      <h1>404</h1>
      <p>
        Zde nic není, vrať se zpět <Link to="/home">domů</Link>
      </p>
    </>
  );
};
