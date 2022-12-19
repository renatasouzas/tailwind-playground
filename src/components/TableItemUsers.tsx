import SearchIcon from '../assets/icons/edit-icon';
import React from 'react'
import TrashIcon from '../assets/icons/trash-icon';
import ArrowDownIcon from '../assets/icons/arrow-down';

type TableItemProps = {
  name: string;
  email: string;
  status: string;
};

const TableItemUsers: React.FunctionComponent<TableItemProps> = ({ name, email, status }) => {
  return (
    <tr className='even:bg-gray-100 h-12 shadow rounded-l-lg rounded-r-lg'>
      <td className="px-10">{name}</td>
      <td className='px-10'>{email}</td>
      <td className='px-10'>{status}</td>
      <td className="px-10 h-12 flex justify-end items-center">
        <div className='flex gap-12 text-gray-300'>
          <button className='flex gap-2'>
            <SearchIcon color='gray' />
            Editar
          </button>
          <button className='flex gap-2'>
            <TrashIcon color='gray' />
            Deletar
          </button>
          <button className='flex gap-2'>
            <ArrowDownIcon color='gray' />
          </button>
        </div>
      </td>
    </tr>
  )
}

export default TableItemUsers