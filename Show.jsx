import React from 'react'

let Show = ({Title,Descrip,index,remove}) => {

  return (
    <>
    <div className="full">
    <div className="show">
      <div className='set'>
    <div>{Title}</div>
    <h3>{Descrip}</h3>
    </div>
    <div className='butto'> 
    <button className='button1'onClick={()=>remove(index)}>-</button>
    </div>
    </div>
    </div>
    </>
  )
}
}
export default Show;
