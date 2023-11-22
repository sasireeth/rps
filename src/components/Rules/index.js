import React from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import './index.css'

const Rules = () => (
  <Popup modal trigger={<button type="button">Rules</button>}>
    {close => (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
          alt="rules"
          className="img"
        />
        <div>
          <button
            type="button"
            data-testid="closeButton"
            onClick={() => close()}
          >
            Close
          </button>
        </div>
      </div>
    )}
  </Popup>
)
export default Rules
