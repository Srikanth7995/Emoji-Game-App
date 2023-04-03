import './index.css'

const EmojiCard = props => {
  const {emoji, onClickEmoji} = props
  const {id, emojiName, emojiUrl} = emoji
  const onClickEmojiCard = () => onClickEmoji(id)

  return (
    <li className="emoji-item">
      <button onClick={onClickEmojiCard} type="button">
        <img className="emoji-icon" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
