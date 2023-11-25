import React, { memo } from 'react'

const UseCallback_A = ({Learining,count}) => {
    console.log("child component")
  return (
    <div>UseCallback_A</div>
  )
}

export default memo(UseCallback_A)