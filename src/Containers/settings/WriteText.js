import React from 'react'

const WriteText = () => {
  return (
    <div>
      <article className="product__details">
              <div>
                <h4 className="heading">Write Text</h4>

                <div className="detail__heads">Upper Text</div>

                <div className="grey-text">Upper Text</div>
              </div>
            </article>

            <hr className="hr" />
            
            <article className="product__details">
              <div>
                <div className="detail__heads">Lower Text</div>

                <div className="grey-text">Lower Text</div>
              </div>
            </article>
    </div>
  )
}

export default WriteText
