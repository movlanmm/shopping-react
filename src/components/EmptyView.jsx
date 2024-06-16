import React from 'react'

export default function EmptyView({text}) {
  return (
    <div style={{width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}> Your {text} is Empty </div>
  )
}
