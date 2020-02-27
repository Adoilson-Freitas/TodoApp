import React from 'react'

const PageHeader = props => {
  return(
    <header className="pb-2 mt-4 mb-2 border-bottom">
      <h2>{props.name} <small>{props.small}</small></h2>
    </header>
  )
}

export default PageHeader