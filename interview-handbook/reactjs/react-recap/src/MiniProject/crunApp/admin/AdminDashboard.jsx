import React from 'react'
import MovieForm from '../components/admin/MovieForm'
import MovieTable from '../components/admin/MovieTable'

const AdminDashboard = () => {
  return (
    <div>
        <MovieForm/>
        <MovieTable/>
    </div>
  )
}

export default AdminDashboard