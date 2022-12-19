import React from 'react'

type Props = {
  size?: string
  color?: string
}

const SearchIcon: React.FC<Props> = ({ size, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size || '24px'}
      viewBox="0 0 24 24"
      width={size || '24px'}
      fill={color || '#fff'}>
      <path d="M0 0h24v24H0z" fill="none"/>
      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71
      7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41
      0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
    </svg>
  )
}
export default SearchIcon
