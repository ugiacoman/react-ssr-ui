import React from 'react'
import Ink from 'react-ink'

export default class Button extends React.Component {
  render () {
    return (
      <button className='noselect' style={{ position: "relative" }}>
        <style>
          {`
          button {
            background: #fff;
            border: 0;
            border-radius: 2px;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
            font-size: 16px;
            font-family: inherit;
            min-width: 180px;
            padding: 12px 24px;
            text-transform: uppercase;
            -webkit-tap-highlight-color: transparent;
          }
          button:focus {
            outline: none;
          }

          .noselect {
            -webkit-touch-callout: none; 
              -webkit-user-select: none; 
              -khtml-user-select: none; 
                -moz-user-select: none; 
                  -ms-user-select: none; 
                      user-select: none; 
          }          
          `}
        </style>      
        <Ink/>
        {this.props.text}
      </button>
    )
  }
}
