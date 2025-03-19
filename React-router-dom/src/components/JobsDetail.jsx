import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const JobsDetail = () => {
    const detail = useLoaderData();
    const { id } = useParams();
  return (
    <div className='job-detail'>
      <h1>Job Detail Page</h1>
      <p>Id is : {detail.id}</p>
      <p>Profession is : {detail.title}</p>
      <p>Salary is : {detail.salary}</p>
    </div>
  )
}

export default JobsDetail

export const jobDetailsLoader = async ({params}) => {
    const {id} = params;
    const res = await fetch("http://localhost:5000/jobs");
    const data = await res.json();
    const particularData = data.find(job => job.id == id);
    console.log(particularData);
    return particularData || null;
}
