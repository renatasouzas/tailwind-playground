import { useState } from 'react'
import { Link } from 'react-router-dom'
import GroupIcon from '../assets/icons/group-icon'
import AccountsIcon from '../assets/icons/list-accounts-icon'
import LogoutIcon from '../assets/icons/logout-icon'
import MenuIcon from '../assets/icons/menu-icon'
import SettingsIcon from '../assets/icons/settings-icon'

const Sidebar = () => {
  const pathname = window.location.pathname === '/' ? 'migrations' : window.location.pathname.replace('/', '')
  const [ active, setActive ] = useState(pathname)

  return (
    <nav className='w-40 h-screen fixed top-0 bg-cyan flex flex-col justify-between'>
      <div>
        <div className="menu__item">
          <MenuIcon size="36px" />
        </div>

        <Link to='/'>
          <div className={`menu__item ${active === 'migrations' && 'bg-cyan-200'}`} onClick={() => setActive('migrations')}>
            <AccountsIcon size="36px" />
            <p className='text-white mt-1'>Visualização de contas</p>
          </div>
        </Link>

        <Link to='users'>
          <div className={`menu__item ${active === 'users' && 'bg-cyan-200'}`} onClick={() => setActive('users')}>
            <GroupIcon size="36px" />
            <p className='text-white mt-1'>Gerenciamento de usuários</p>
          </div>
        </Link>
      </div>

      <div>
        <Link to='settings'>
          <div className={`menu__item ${active === 'settings' && 'bg-cyan-200'}`} onClick={() => setActive('settings')}>
            <SettingsIcon size="36px" />
            <p className='text-white mt-1'>Configurações</p>
          </div>
        </Link>

        <div className="menu__item">
          <LogoutIcon size="36px" />
          <p className='text-white mt-1'>Sair</p>
        </div>
      </div>
    </nav>
  )
}

export default Sidebar