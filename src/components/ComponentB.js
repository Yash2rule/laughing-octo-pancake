import React,{useState,useEffect} from 'react'
import {useDispatch} from 'react-redux';
import {storeValue} from '../actions/actions'
const ComponentB = () => {
    const [inputVal, setInputVal] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(storeValue(inputVal))
    },[dispatch,inputVal])
    
    return (
        <div>
            <input style={{width:'400px',height:'25px',fontSize:'18px'}} type="text" placeholder="Enter something..." value={inputVal} onChange={(e) => {
                setInputVal(e.target.value)
            }}/>
        </div>
    )
}

export default ComponentB
