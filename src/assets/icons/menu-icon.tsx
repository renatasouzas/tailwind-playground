import React from 'react'

type Props = {
  size?: string
  color?: string
}

const MenuIcon: React.FC<Props> = ({ size, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size || '24px'}
      viewBox="0 0 24 24"
      width={size || '24px'}
      fill={color || '#fff'}>
      <path d="M0 0h24v24H0V0z" fill="none"/>
      <path d="M3 18v-2h18v2Zm0-5v-2h18v2Zm0-5V6h18v2Z" />
    </svg>
  )
}
export default MenuIcon
