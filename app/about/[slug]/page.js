import React from 'react'

const page = ({params}) => {
    let i;
    if(params.slug === 'first'){
        i = 'first page'
    }
    else if(params.slug === 'second'){
        i = 'second page'
    }
    
    else if(params.slug === 'third'){
        i = 'third page'
    }
  return (
    <div>{i}</div>
  )
}

export default page