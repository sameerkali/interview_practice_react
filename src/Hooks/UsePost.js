import React, { useEffect, useState } from 'react'

const UseFetch = (url) => {
    const [data, setData] = useState([]);

    const getData = async() => {
        const apidata = await fetch(url)
        const dataApi = await apidata.json(url)
        setData(dataApi)
    }
    useEffect(() =>{
        getData()
    }, [])

  return data
}

export default UseFetch