import React from 'react'
import { MagnifyingGlass } from 'phosphor-react'

export const Search = () => {
  return (
    <div>
     <input
     type = "text"
     placeholder="Search products..."
     
     />
     <MagnifyingGlass size = {32}/>
    </div>
  )
}
