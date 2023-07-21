import trollFace from '@assets/trolll-face.svg'
import '@styles/_header.scss'

function Header() {
  return (
    <header className='header'>
      <img className='header__image' src={trollFace} alt='troll-face' />
      <h2 className='header__title'>MemeGenerator</h2>
      <h4 className='header__project'>React Course Project 3</h4>
    </header>
  )
}

export default Header
