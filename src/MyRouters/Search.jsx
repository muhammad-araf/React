import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Search = () => {
    const [searchParam,setSearchParam] = useSearchParams();
    const Myname = searchParam.get('name');
  return (
    <>
    <h1>{Myname}</h1>
    </>
  )
}

export default Search