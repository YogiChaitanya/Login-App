// Write your code here
import {Component} from 'react'

import Message from '../Message/index'
import Logout from '../Logout/index'
import Login from '../Login/index'

class Home extends Component {
  state = {isClicked: false}

  onClickButton = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  render() {
    const {isClicked} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <Message />
          {isClicked ? <Logout /> : <Login />}
        </div>
      </div>
    )
  }
}

export default Home
