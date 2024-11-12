import React from 'react'
import Menu from '../components/Menu'

export default function Layout({children}) {
  return (
<>
    <Menu></Menu>
    <div className=''>
        {children}
    </div>
</>
    
  )
}
