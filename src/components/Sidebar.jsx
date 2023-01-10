import React from 'react'
import { NavLink } from 'react-router-dom'
import { chartIcon, groupIcon, wrenchIcon } from './icons'

const items = [
  { link: '/dashboard', name: 'Dashboard', icon: chartIcon },
  { link: '/funcionarios', name: 'Funcionários', icon: groupIcon },
  { link: '/ferramentas', name: 'Ferramentas', icon: wrenchIcon }
]

const Sidebar = () => {
  return (
    <div className='flex flex-col'>
      {items.map(item => (
        <NavLink to={item.link}
        className={({isActive}) => isActive ? 'bg-slate-500' : 'bg-red-500'}
        >
          <div>{item.icon}</div>
          <div>{item.name}</div>
        </NavLink>
      ))}
    </div>
  )
}

export default Sidebar