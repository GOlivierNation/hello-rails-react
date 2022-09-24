import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/greeting/greeting';

const Greeting = () => {
    const greetingList = useSelector(state => state.greetings)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchData())
      }, [])
    
    console.log(greetingList);


    return (
        <h2>{greetingList.message}</h2>
    )
}

export default Greeting;