import React from 'react';

function Header(){
    return(
        <div className='Header'>
            <h1 className='Logo'>
                NOX's GYM
            </h1>
            <ul className="ul-List">
				<li>Home</li>
				<li>Gym Information</li>
				<li>Our Products</li>
				<li>Your Profile</li>
				<li>Support Whatsapp</li>
			</ul>
        </div>
    );
}

export default Header;