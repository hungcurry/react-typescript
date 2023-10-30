import React from 'react'

const Fragments: React.FC = () => {

  const list = [1, 2, 3, 4, 5];

  return (
    // Empty Fragment
    // ---------------------
    // <React.Fragment>
    //   <h1>Fragments Sample</h1>
    //   <h1>Fragments Sample</h1>
    // </React.Fragment>

    // Empty Tag
    // ---------------------
    // <>
    // <h1>Empty Sample</h1>
    // <h1>Empty Sample</h1>
    // </>

    <>
      {list.map((item, index) => (
        <React.Fragment key={index}>
          <h1 key={index}>{item}</h1>
        </React.Fragment>
      ))}
    </>

  )
}

export default Fragments
