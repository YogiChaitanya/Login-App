// Write your code here
import {Component} from 'react'
import './index.css'

class Message extends Component {
  render() {
    const {isClicked} = this.state
    const headingText = isClicked ? 'Welcome User' : 'Please Login'
    return <h1 className="main-heading">{headingText}</h1>
  }
}

export default Message
