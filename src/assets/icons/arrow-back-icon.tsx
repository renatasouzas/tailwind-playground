import React from 'react'

type Props = {
  size?: string
  color?: string
}

const ArrowBackIcon: React.FC<Props> = ({ size, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size || '24px'}
      viewBox="0 0 24 24"
      width={size || '24px'}
      fill={color || '#fff'}>
      <path d="M0 0h24v24H0V0z" fill="none"/>
      <path d="M10 22 0 12 10 2l1.775 1.775L3.55 12l8.225 8.225Z" />
    </svg>
  )
}
export default ArrowBackIcon
