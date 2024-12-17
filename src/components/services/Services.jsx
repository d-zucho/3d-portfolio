import ComputerModelContainer from './computer/ComputerModelContainer'
import BoxModelContainer from './psBox/BoxModelContainer'
import './services.css'

const Services = () => {
  return (
    <section id='services' className='services'>
      <div className='sSection left'>
        <BoxModelContainer />
      </div>
      <div className='sSection right'>
        <ComputerModelContainer />
      </div>
    </section>
  )
}

export default Services
