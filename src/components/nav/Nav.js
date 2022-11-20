import './Nav.css'

const Nav = ()=> {
    return ( 
    <nav>
        <section>
            <div className='nav_left'>
                <img 
                className='nav_logo'
                alt='logo'
                src='https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456'
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
                
            </div>
        </section>
    </nav>
    );
};

export default Nav ;