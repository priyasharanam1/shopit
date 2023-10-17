import React from 'react'

const TextModify = () => {
  return (
    <div>
      <article className="product__details">
              <div className="text-modify">
                <div>
                  <div className="detail__heads">Text Size</div>
                  <hr
                    className="hr"
                    style={{
                      width: "70%",
                      marginRight: "5rem",
                      marginTop: "1.5rem",
                      position: "relative",
                    }}
                  />
                  <div
                    style={{
                      width: "0.7rem",
                      height: "0.7rem",
                      background: "rgb(4, 154, 154)",
                      borderRadius: "50%",
                      position: "absolute",
                      top: "42px",
                      left: "60px",
                    }}
                  ></div>
                </div>

                <div>
                  <div className="detail__heads">Text Color</div>
                  <div className="detail__text">
                    <div className="detail__text-color">
                    <div className="circle"></div>
                    <span className="choose__color">Black</span>
                    </div>
                    <div className="detail__text-color">
                    <div className="circle"></div>
                    <span className="choose__color">White</span>
                    </div>
                    <div className="detail__text-color">
                    <div className="circle"></div>
                    <span className="choose__color">Blue</span>
                    </div>
                    <div className="detail__text-color">
                    <div className="circle"></div>
                    <span className="choose__color">Red</span>
                    </div>
                    
                  </div>
                </div>
              </div>
            </article>
    </div>
  )
}

export default TextModify
