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
    <div className='flex flex-col sidebar'>
      {items.map(item => (
        <NavLink to={item.link}
        className={({isActive}) => isActive ? 'bg-white item' : 'text-white item'}
        >
          <div>{item.icon}</div>
          <div>{item.name}</div>
        </NavLink>
      ))}
    <style jsx>{`
        .sidebar{
          margin: 15px;
          background: var(--mainColor);
          padding: 15px;
          display: flex;
          height: calc(100vh - 30px);
          border-radius: 30px;
          grid-gap: 15px
        }
        .item{
          display: flex;
          padding: 10px 15px;
          width: 200px;
          grid-gap: 20px;
          border-radius: 15px
        }
    `}</style>
    </div>
  )
}

export default Sidebar