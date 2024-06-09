import './App.css'
import Nav from './component/Nav'
import Footer from './component/Footer'
import Card from "./component/Card";
import image from './assets/Madinah.jpg'
import image2 from './assets/Makkah.jpg'
import image3 from './assets/Dammam.jpg'
import image4 from './assets/Riyadh.jpg'
import image5 from './assets/Al-Qassim.jpg'

function App() {

  return (
    <>
    <section>
   <Nav/>
<div className='allCard'>
  <Card imges={image} name='Madinah' lione='permits Muslims to enter' liTow='beautiful'
  liThree='Medina is the second holiest site in Islam'/>
<Card  imges={image2} name='Makkah' lione='permits Muslims to enter' liTow='beautiful'
  liThree='Medina is the second holiest site in Islam' />
<Card imges={image3} name='Dammam' lione='permits Muslims to enter' liTow='beautiful'
  liThree='Medina is the second holiest site in Islam' />
<Card  imges={image4} name='Riyadh' lione='permits Muslims to enter' liTow='beautiful'
  liThree='Medina is the second holiest site in Islam' />
<Card imges={image5} name='Al-Qassim' lione='permits Muslims to enter' liTow='beautiful'
  liThree='Medina is the second holiest site in Islam' />
</div>
 <Footer/>
  
    </section>

    </>
  )
}

export default App
