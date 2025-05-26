import logo from '../assets/images/lattelablogo.png';

const Navigation = () => {
    return (
        <nav className='bg-darkGrey'>

            <div className='flex justify-between max-w-[90%] mx-auto font-semibold tracking-wide'>

                <div className='flex items-center text-white'>
                    <img className='max-w-40' src={logo} alt='Latte Lab Logo'></img>
                    <ul className='flex gap-8'>
                        <li className='hover:underline decoration-lavenderHover decoration-2 underline-offset-8'>
                            <a href='#'>HOME</a>
                        </li>
                        <li className='hover:underline decoration-lavenderHover decoration-2 underline-offset-8'>
                            <a href='#'>RECIPES</a>
                        </li>
                        <li className='hover:underline decoration-lavenderHover decoration-2 underline-offset-8'>
                            <a href='#'>FAVORITES</a>
                        </li>
                        {/*TODO: Add favorites tab functionality when the user is logged in - Prompt login if user clicks*/}
                    </ul>
                </div>

                <div className='flex items-center'>
                    
                    <a className='mr-4 px-4 py-2 bg-white border-2 border-white hover:bg-lavenderHover hover:text-white transition-colors duration-200' href='#'>LOG IN</a>
                    <input type='text' placeholder='Search Items' className='px-4 py-2 border-2 border-white'></input>
                    {/*TODO: Add functionality to the search bar*/}
                    <button className='text-white border-2 border-white hover:bg-lavenderHover transition-colors duration-200 px-4 py-2'>SEARCH</button>

                </div>

            </div>

        </nav>
    )
};

export default Navigation;