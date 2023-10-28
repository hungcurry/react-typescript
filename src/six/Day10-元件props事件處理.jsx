import { useState } from 'react'
import PropTypes from 'prop-types';


// Modal.propTypes = {
//   open: PropTypes.bool,
//   toggleOpen: PropTypes.func,
// };

// function Modal({open , toggleOpen}) {
//   return (
//     <div className="modal" style={{ display: open ? 'block' : 'none'}}> 
//       <div className="modal-content">Modal 
//         <button type="button" onClick={ toggleOpen } className="close"> x </button> 
//       </div>
//     </div>
//   )
// }
// function Example() {
//   const [open, setOpen] = useState(false);
//   const toggleOpen = () => {
//     setOpen(!open);
//   };
//   return (
//     <div>
//       <button type="button" onClick={toggleOpen}> Open Modal </button>
//       <Modal open={open} toggleOpen={toggleOpen}/>
//     </div>
//   );
// }


Child.propTypes = {
  name: PropTypes.string,
  handleClick: PropTypes.func,
};

function Example() {
  const [name, setName] = useState("John");
  const handleClick = (name) => {
    setName(name);
  };
  return (
    <div>
      <p>現在的 Name 是 <b>{name}</b></p>
      <Child name={"Curry"} handleClick={handleClick} />
      <Child name="Mary" handleClick={handleClick} />
    </div>
  );
}
function Child({ name, handleClick }) {
  console.log(name)
  return <button onClick={ ()=> handleClick(name) }>{name}</button> 
}

export default Example
