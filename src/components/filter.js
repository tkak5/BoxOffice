import React, {useMemo, useState} from 'react';

const Filter = ({ handleFilter, filterQuery }) => {
  return (
      <input type="text" name="title" className="form-input" placeholder="title"
        value={filterQuery.title || ''}
        onChange={handleFilter}
      />
  )
}

export default Filter;
