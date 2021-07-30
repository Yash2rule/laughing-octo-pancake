import React from 'react'
import {useSelector} from 'react-redux';

const ComponentC = () => {
    const value = useSelector(state => state.storeValue);
    return (
        <div>
            <h1>{value.value}</h1>
        </div>
    )
}

export default ComponentC
