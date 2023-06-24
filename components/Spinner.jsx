import React from 'react'

const Spinner = () => {
  return (
    <div className='d-flex justify-content-center'>
      <img  style={{height:"100px", mixBlendMode: "multiply"}} src="./loading.gif" alt="" />
    </div>
  )
}

export default Spinner
