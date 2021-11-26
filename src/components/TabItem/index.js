import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {displayText, tabId} = tabDetails

  const onClickBtn = () => {
    updateActiveTabId(tabId)
  }
  const activeClassName = isActive ? 'active button' : 'button'

  return (
    <li className="list-container">
      <button onClick={onClickBtn} className={activeClassName} type="button">
        {displayText}
      </button>
      <hr />
    </li>
  )
}

export default TabItem
