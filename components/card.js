import React from 'react'

export default class Card extends React.Component {

  // For some more interesting effects on Cards: https://codepen.io/sdthornton/pen/wBZdXq
  
  render () {
    return (
        <div className='card'>
          <style>{`
            .card {
              background: #fff;
              border-radius: 2px;
              display: inline-block;
              height: 300px;
              margin: 1rem;
              position: relative;
              width: 300px;
              padding: 12px 24px;
              box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
            }
          `}
          </style>
          hi
        </div>
    )
  }
}
