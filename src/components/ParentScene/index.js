import React, {useContext} from 'react'
import { Context } from '../../state/store'
import Loader from '../molocules/loader'

export default function Page({children}) {
  const [state, _dispatch] = useContext(Context);

  if (state.errors.length > 0) {
    return ( 
      <div className='page-container'>
        <div className='errors'>{state.errors}</div>
      </div>
    )
  }

  if (state.loading) {
    return (
      <div className='page-container'>
        <Loader />
      </div>
    )
  }

  return (
    <div className='page-container'>
      {children}
    </div>
  )
}