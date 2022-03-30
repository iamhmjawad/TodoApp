import Button from "./Button"

const Header = ({title, onAdd, showAdd}) => {


  return (
    <header className="header">
        <h1>{title}</h1>
        {/* using a reusable component, passing two variables, color and text */}
        <Button 
            color='green'
            text={showAdd?'Close':'Add'}
            onClick = {onAdd}
            />
    </header>
  )
}

export default Header  