import SearchIcon from '../assets/icons/edit-icon';
import React from 'react'

type TableItemProps = {
  name: string;
  email: string;
  manager: string;
  status: string;
  sincronizingDate: string;
};

const TableItemMigrations: React.FunctionComponent<TableItemProps> = ({ name, email, manager, status, sincronizingDate }) => {
  return (
    <tr className='even:bg-gray-100 h-12 shadow rounded-l-lg rounded-r-lg'>
      <td className="px-10">{name}</td>
      <td className='px-10'>{email}</td>
      <td className='px-10'>{manager}</td>
      <td className='px-10'>{status}</td>
      <td className='px-10'>{sincronizingDate}</td>
      <td className="px-10">
        <button className='flex gap-2 text-gray-300'>
          <SearchIcon color='gray' />
          Editar
        </button>
      </td>
    </tr>
  )
}

export default TableItemMigrations