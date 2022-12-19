import UserIcon from '../assets/icons/user-icon'
import logotype from '../assets/imgs/logo.png'

const Header = () => {

  return (
    <header className='bg-gray-200 h-[68px] flex justify-between items-center ml-24 pr-20 pl-14 sm:ml-40'>
      <div className='flex h-full items-center'>
        <img src={logotype} className='h-full' />
      </div>
      <div className='flex items-center cursor-pointer'>
        <UserIcon color="#FF7300" size="48" />
        <div className='leading-5 ml-3 max-sm:hidden'>
          <p className='text-sm font-bold text-gray'>Gaspar G.</p>
          <p className='text-xs text-gray-300'>Project Manager</p>
        </div>
      </div>
    </header>
  )
}

export default Header