import React from 'react'

export default props => (
  <div test={!props.hide}>
    if(props.test) {
       props.children
     } else {
       false
     }
  </div>
  )

