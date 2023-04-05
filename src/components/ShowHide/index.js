import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {buttonOneClick: false, buttonTwoClick: false}

  firstButtonClick = () => {
    const {buttonOneClick} = this.state
    if (buttonOneClick === false) {
      this.setState(prevState => ({
        buttonOneClick: true,
        buttonTwoClick: prevState.secondButtonClick,
      }))
    } else {
      this.setState(prevState => ({
        buttonOneClick: false,
        buttonTwoClick: prevState.secondButtonClick,
      }))
    }
  }

  secondButtonClick = () => {
    const {buttonTwoClick} = this.state
    if (buttonTwoClick === false) {
      this.setState(prevState => ({
        buttonOneClick: prevState.buttonOneClick,
        buttonTwoClick: true,
      }))
    } else {
      this.setState(prevState => ({
        buttonOneClick: prevState.buttonOneClick,
        buttonTwoClick: false,
      }))
    }
  }

  render() {
    let newTextElementOne = null
    let newTextElementTwo = null
    const {buttonOneClick, buttonTwoClick} = this.state
    if (buttonOneClick === true) {
      newTextElementOne = (
        <div className="new-text-card">
          <p className="text-style">Joe</p>
        </div>
      )
    } else {
      newTextElementOne = null
    }
    if (buttonTwoClick === true) {
      newTextElementTwo = (
        <div className="new-text-card">
          <p className="text-style">Jonas</p>
        </div>
      )
    } else {
      newTextElementTwo = null
    }
    return (
      <div className="bg-container">
        <h1 className="main-heading">Show/Hide</h1>
        <div className="buttons-container">
          <div className="button-card">
            <button type="button" onClick={this.firstButtonClick}>
              Show/Hide Firstname
            </button>
            {newTextElementOne}
          </div>
          <div className="button-card">
            <button type="button" onClick={this.secondButtonClick}>
              Show/Hide Lastname
            </button>
            {newTextElementTwo}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
