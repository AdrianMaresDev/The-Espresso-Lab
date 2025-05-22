import Sidebar from './Sidebar';
import Hero from './Hero';

const Layout = () => {
  return (
    <div className='flex'>
        <Sidebar />
        <Hero />
    </div>
  )
}

export default Layout