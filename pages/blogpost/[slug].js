import { useRouter } from 'next/router'
import React from 'react'

const slug = () => {
    const router = useRouter();
    const {slug} = router.query;
  return (
      <div>
          <h1>The title of the page is {slug} </h1>
      </div>
  )
}

export default slug