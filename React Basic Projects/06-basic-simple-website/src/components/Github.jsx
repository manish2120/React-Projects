import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData();

  return (
    <div className='px-4 py-3 m-4 flex flex-col items-center'>
      <div className='bg-gray-400 text-white px-4 py-2 rounded-xl mb-3'>
        <h3 className='font-bold'>Github</h3>
        <p>Username: {data.login}</p>
        <p>Followers: {data.followers}</p>
        </div>
      <img src={data.avatar_url} alt="profile-img" width={300}/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch(`https://api.github.com/users/manish2120`);
  return response.json();
}
