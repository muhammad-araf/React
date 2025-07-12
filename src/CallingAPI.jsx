import React, { useEffect, useState } from 'react';

const CallingAPI = () => {
  const [api, setApi] = useState({}); // object, not array (GitHub user = object)

  const getApi = async () => {
    try {
      const response = await fetch('https://api.github.com/users/muhammad-araf');
      const data = await response.json(); 
      setApi(data);
      console.log(api)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApi(); 
  }, []);

  return (
    <>
      <h1>GitHub User: {api.name}</h1>
      <p>Username: {api.login}</p>
      <p>Followers: {api.followers}</p>
      <img src={api.avatar_url} alt="Avatar" width={150} />
    </>
  );
};

export default CallingAPI;
