import logo from '../assets/images/lattelablogo.png';

const Navigation = () => {
    return (
        <nav className='bg-cream'>

            <div className='flex justify-between max-w-[90%] mx-auto font-semibold tracking-wide'>

                <div className='flex items-center'>
                    <img className='max-w-40' src={logo} alt='Latte Lab Logo'></img>
                    <ul className='flex gap-8'>
                        <li className='hover:underline decoration-beige decoration-2 underline-offset-8'>
                            <a href='#'>HOME</a>
                        </li>
                        <li className='hover:underline decoration-beige decoration-2 underline-offset-8'>
                            <a href='#'>RECIPES</a>
                        </li>
                        <li className='hover:underline decoration-beige decoration-2 underline-offset-8'>
                            <a href='#'>FAVORITES</a>
                        </li>
                        {/*TODO: Add favorites tab functionality when the user is logged in - Prompt login if user clicks*/}
                    </ul>
                </div>

                <div className='flex items-center'>
                    
                    <a className='mr-4 px-4 py-2 bg-beige hover:text-white border-2 border-beige hover:border-black hover:bg-black transition-colors duration-200' href='#'>LOG IN</a>
                    <input type='text' placeholder='Search Items' className='px-4 py-2 border-2 border-beige'></input>
                    {/*TODO: Add functionality to the search bar*/}
                    <button className='bg-beige hover:text-white border-2 border-beige hover:border-black hover:bg-black transition-colors duration-200 px-4 py-2'>SEARCH</button>

                </div>

            </div>

        </nav>
    )
};

export default Navigation;