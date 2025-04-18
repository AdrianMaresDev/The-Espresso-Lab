import logo from '../assets/images/espressolablogo.png';

const Navigation = () => {
    return (
        <nav className='bg-black'>
            <div className='flex justify-between items-center text-white w-[80%] mx-auto'>
                <img className='max-w-36' src={logo}></img>
                <ul className='text-xl flex gap-12'>
                    <li className='hover:underline underline-offset-8 decoration-lavender'>
                        <a href='#'>HOME</a>
                    </li>
                    <li className='hover:underline underline-offset-8 decoration-lavender'>
                        <a href='#'>DRINK RECIPES</a>
                    </li>
                    <li className='hover:underline underline-offset-8 decoration-lavender'>
                        <a href='#'>FAVORITES</a>
                    </li>
                    <li className='hover:underline underline-offset-8 decoration-lavender'>
                        <a href='#'>QUIZ</a>
                    </li>
                </ul>
                <button className='bg-lavender hover:bg-lavenderhover hover:text-white transition-colors duration-300 rounded-sm text-black px-4 py-2'>LOG IN</button>
            </div>
        </nav>
    )
};

export default Navigation;