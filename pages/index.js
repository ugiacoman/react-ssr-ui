import Button from '../components/button'
import Card from '../components/card'

export default () => (
  <div>
    <style>{`
      body {
        font-family: Roboto, sans-serif;
        margin: 0;
        padding: 40px;
        background: #e2e1e0;
      }
      canvas {
        color: #673AB7;
      }
      `}
    </style>

    <Button text='hi'/>
    <Card/>
  </div>
)