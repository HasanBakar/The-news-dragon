import React from 'react';
import { useState, useEffect } from "react";

const LeftNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(error => console.error(error))
    },[])
    console.log(categories)
    return (
        <div>
           <h1>Left side nav component</h1> 
        </div>
    );
};

export default LeftNav;