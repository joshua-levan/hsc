import './Button.css'

interface Button {
    color: string,
    message: string,
    navStatus: string
}

const Button = ({ color, message, navStatus }: Button) => {
  return (
    <button className={color === 'red' ? `red-button ${navStatus && navStatus}` : 'black-button'}>{message}</button>
  )
}

export default Button