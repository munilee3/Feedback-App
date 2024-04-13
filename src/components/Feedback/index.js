import {Component} from 'react'
import Emojis from '../MojisList'
import './index.css'

class Feedback extends Component {
  render() {
    const {resources} = this.props
    const {emojis} = resources
    const {name, imageUrl} = emojis

    return (
      <div className="app-container">
        <div className="feedback-container">
          <h1 className="heading">
            How satisfied are you with our customer support performance?
          </h1>
          <ul className="emojis-container">
            {emojis.map(eachEmoji => (
              <Emojis key={eachEmoji.key} eachEmoji={eachEmoji} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Feedback
