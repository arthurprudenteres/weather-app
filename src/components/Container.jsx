import React from 'react'

function Container({ children }) {
  return (
    <div className={`container max-w-[1200px] w-full mx-auto`}>
      {children}
    </div>
  )
}

export default Container