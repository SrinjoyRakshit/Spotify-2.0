import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'

const Layout = ({ children }) => {
  return (
    <div className='flex gap-3'>
        <Sidebar />
        <div className='w-3/4 absolute top-0 right-0'>
            {children}
        </div>
    </div>
  )
}

export default Layout
