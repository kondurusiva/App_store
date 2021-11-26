import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="list-container">
      <img className="image" src={imageUrl} alt={appName} />
      <p className="description">{appName}</p>
    </li>
  )
}
export default AppItem
