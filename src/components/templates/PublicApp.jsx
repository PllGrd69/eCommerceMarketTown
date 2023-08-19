import React from 'react'
import MainHeader from '../organisms/MainHeader'
import { Outlet } from 'react-router-dom'

function PublicApp() {
  return (
    <div>
        <MainHeader />
        <Outlet />
    </div>
  )
}

export default PublicApp