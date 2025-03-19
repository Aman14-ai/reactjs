import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Jobs = () => {
  const jobsData = useLoaderData();
  return (
    <div>

      <ul className='jobs-data-ul'>
        {
          jobsData.map((job) => {
            return (
              <Link to={`/jobs/${job.id}`}>
                <li className='jobs-data-li'>{job.id}.{job.title}: {job.salary}/Month</li>
              </Link>
            )
          })
        }
      </ul>


    </div>
  )
}

export default Jobs

export const JobsLoader = async () => {
  const res = await fetch('http://localhost:5000/jobs');
  return res.json();
}
