import React from 'react'
import Ink from 'react-ink'

export default class Button extends React.Component {
  render () {
    return (
      <button style={{ position: "relative" }}>
        <style>
          {`body {
            font-family: Roboto, sans-serif;
            margin: 0;
            padding: 40px;
          }
          canvas {
            color: #673AB7;
          }
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
          }
          button:focus {
            outline: none;
          }`}
        </style>      
        <Ink/>
        {this.props.text}
      </button>
    )
  }
}
