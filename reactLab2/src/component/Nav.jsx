import Logo from '../assets/Logocity.png'
function Nav() {
  return (
    <nav>
        <img className='logo' src={Logo} alt="" />
<div><span>Home</span>
<span>Contect us</span>
<span>About </span>
</div>

    </nav>
  )
}

export default Nav