import React from 'react'

const ChangeImage = () => {
  return (
    <div>
       <article className="product__details">
              <div>
                <h4 className="heading">Change Image</h4>
                <div className="additions">
                  <button>Choose File</button>
                  <small>No File Chosen</small>
                  <div className="little__boxes">
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                  </div>
                  <button className="upload__button">UPLOAD NOW</button>
                </div>
              </div>
            </article>
    </div>
  )
}

export default ChangeImage
