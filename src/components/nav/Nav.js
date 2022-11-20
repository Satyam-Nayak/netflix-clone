import './Nav.css'

const Nav = ()=> {
    return ( 
    <nav>
        <section>
            <div className='nav_left'>
                <img 
                className='nav_logo'
                alt='logo'
                src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
                />
                <div className='nav_links'>
                    <a href='/'>Home</a>
                    <a href='/'>TV Shows</a>
                    <a href='/'>TV Movies</a>
                    <a href='/'>New & Popular</a>
                    <a href='/'>My List</a>
                    <a href='/'>Browes by Language</a>
                </div>
            </div>
            <div className='nav_right'>
                <svg 
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d=''
                    fill='currentColor'
                    ></path>
                </svg>
            </div>
        </section>
    </nav>
    );
};

export default Nav ;