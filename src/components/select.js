import React, { useMemo, useState } from 'react';

const Select = ({ year, handleChange }) => {
  var list = [];
  for (var i=0; i<43; i++) {
    list.push(<option key={i.toString()} value={2019-i}>{2019-i}</option>);
  }
  return (
      <form>
        <select value={year} onChange={handleChange}>
          {list}
        </select>
      </form>
  );
}

export default Select;
