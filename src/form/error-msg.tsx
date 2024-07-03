import React from 'react';

const ErrorMsg = ({ error }: any) => {
  return (
    <>
      <p style={{ color: 'red' }}>{error}</p>
    </>
  );
};

export default ErrorMsg;