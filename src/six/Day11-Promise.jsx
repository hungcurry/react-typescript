import { useState } from 'react'

async function fetchAPI() {
  const res = await fetch('https://dog.ceo/api/breeds/image/random')
  const { message } = await res.json()
  // console.log('message', message)
}
fetchAPI()

function Example() {
  return <div></div>
}

export default Example
