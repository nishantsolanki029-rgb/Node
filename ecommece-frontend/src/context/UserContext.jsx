// save and make your data ceterlize

import React, { useState } from 'react'
import {createContext} from 'react'

export const dataContext = createContext();

const UserContext = ({children}) => {

    const [centerData, setCenterData] = useState("")

  return (
    <>
        <dataContext.Provider value={{centerData, setCenterData}}>
        <div>{children}</div> 
        </dataContext.Provider>
    </>
  )
}

export default UserContext