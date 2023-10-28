import { useState, useEffect , useRef } from 'react'

function Example() {
  //練習區塊
  const myModal = useRef(null)
  useEffect(() => {
    // 練習區塊：綁定 Modal
    // eslint-disable-next-line no-undef
    myModal.current = new bootstrap.Modal(myModal.current)
  }, [myModal]);

  const openModal = () => {
    //練習區塊
    myModal.current.show()
  }
  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={openModal}>
        開啟 Modal
      </button>

      <div
        className="modal fade"
        ref={myModal}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Example
