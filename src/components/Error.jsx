import React from 'react'
import { useRouteError } from 'react-router'

const Error = () => {
    const error = useRouteError();
    console.log(error);
  return (
    <div>Error {error.error.message}  
    </div>
  )
}
export default Error;