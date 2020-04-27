import React, { useState, useMemo } from 'react';

const Button = ({ button, handleSort, sort }) => {
  return (
    <button
      onClick={() => handleSort(button)}
      >
      SORT
    </button>
  )
}

export default Button;
