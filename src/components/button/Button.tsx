import './Button.css'

interface Button {
    color: string,
    message: string
}

const Button = ({ color, message }: Button) => {
  return (
    <button className={color === 'red' ? "red-button" : "black-button"}>{message}</button>
  )
}

export default Button