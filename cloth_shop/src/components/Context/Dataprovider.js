import React, { useEffect, useState } from 'react'
import appProvider from './Createcontext'  // Make sure this import matches the case of the export in 'Createcontext'
import { Getdata } from './ApiServices/EndPoints'

function Dataprovider(props) {
    const [open, setOpen] = useState(false)
    const [cart, setCart] = useState([])
    const [likes, setLikes] = useState(0)
    const [total, setTotal] = useState(0)
    const [allitem, setAllitem] = useState([])
    // useEffect(() => {
    //     Getdata().then(res => {
    //         setAllitem(res.data)
    //     }
    //     )
    // }, [])

    console.log(allitem)
    return (
        <appProvider.Provider
            value={{
                open,
                setOpen,
                allitem,

            }}
        >
            {props.children}
        </appProvider.Provider>
    )
}

export default Dataprovider
