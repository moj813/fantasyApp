import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoute = ({children}) => {

    const {stage} = useSelector((state) => state.matchScore);

    if(stage==0)
        return children
    if(stage==1)
        return <Navigate to="" />
    if(stage==2)
        return <Navigate to="" />
    else
        return <Navigate to="/login" />
  
}

export default PrivateRoute