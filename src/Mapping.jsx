import axios from 'axios'
import React from 'react'

const Mapping = () => {
    let cat;
    const get = async() => {
        const hell = await fetch('https://api.github.com/users/muhammad-araf');
        cat = await hell.json()
        console.log(cat.name);
    }
    return(
    <>
    <h1>Mapping</h1>
    {/* <h2>{cat.name}</h2> */}
    {
        get()
    }

    </>
)}

export default Mapping