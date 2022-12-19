import React from 'react'

type Props = {
  size?: string
  color?: string
}

const ArrowUpIcon: React.FC<Props> = ({ size, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size || '24px'}
      viewBox="0 0 24 24"
      width={size || '24px'}
      fill={color || '#fff'}
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M7 14l5-5 5 5z" />
    </svg>
  )
}
export default ArrowUpIcon
