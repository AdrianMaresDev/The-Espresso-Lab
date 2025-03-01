import logo from '../assets/images/dulcelogo.png';

const Navigation = () => {
    return (
        <nav className='bg-cream'>
            <div className='max-w-7xl mx-auto flex justify-between font-semibold'>
                <div className='flex items-center'>
                    <img src={logo} alt='Logo Image' className='max-w-40 mr-4' />
                    <ul className='flex gap-12'>
                        <li>
                            <a>HOME</a>
                        </li>
                        <li>
                            <a>RECIPES</a>
                        </li>
                        <li>
                            <a>SEARCH</a>
                        </li>
                        <li>
                            <a>QUIZ</a>
                        </li>
                    </ul>
                </div>
                <button>LOG IN</button>
            </div>
        </nav>
    )
};

export default Navigation;