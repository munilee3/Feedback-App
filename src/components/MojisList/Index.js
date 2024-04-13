import './index.css'

const Emojis = props => {
  const {eachEmoji} = props
  const {name, imageUrl} = eachEmoji
  return (
    <li>
      <button>
        <img src={imageUrl} alt={name} />
      </button>
    </li>
  )
}

export default Emojis
