import React from 'react'
import { Outlet } from 'react-router-dom'

const JobsLayout = () => {
  return (
    <div>
      <div className="job-layout">
        <h2>Choudhary Medical</h2>
        <p>List of all jobs in aur company:</p>
      </div>
      <Outlet />
    </div>
  )
}

export default JobsLayout
