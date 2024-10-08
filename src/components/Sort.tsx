import React, { ChangeEvent } from 'react';
import { SortType } from '../interfaces/reservationTypes';

interface SortProps {
  sortType: SortType;
  setSortType: React.Dispatch<React.SetStateAction<SortType>>;
}

export default function Sort({ sortType, setSortType }: SortProps) {
  const handleFieldChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortType((prevSortType) => ({
      ...prevSortType,
      field: e.target.value as 'quantity' | 'customerName',
    }));
  };

  const handleDirectionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortType((prevSortType) => ({
      ...prevSortType,
      direction: e.target.value as 'asc' | 'desc',
    }));
  };

  return (
    <div className='w-full md:w-1/4 flex flex-col md:flex-row md:items-center justify-around'>
      <h3 className='md:hidden mb-3'>Sort by</h3>
      <select
        className='p-3 cursor-pointer mb-4 md:m-0 text-indigo-200 border rounded-md dark:bg-inherit dark:text-gray-300 focus:border-blue-400 dark:focus:border-sky-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40'
        value={sortType.field}
        onChange={handleFieldChange}
      >
        <option value='quantity'>Quantity</option>
        <option value='customerName'>Customer Name</option>
      </select>
      <select
        className='p-3 cursor-pointer text-indigo-200 border rounded-md dark:bg-inherit dark:text-gray-300 focus:border-blue-400 dark:focus:border-sky-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40'
        value={sortType.direction}
        onChange={handleDirectionChange}
      >
        <option value='asc'>Asc</option>
        <option value='desc'>Desc</option>
      </select>
    </div>
  );
}
