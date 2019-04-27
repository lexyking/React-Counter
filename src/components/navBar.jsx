import React from 'react'

const NavBar = ({ totalCounters }) => {

    return (
        <div>
            <nav class="navbar navbar-light bg-light">
                <a class="navbar-brand" href="#">
                    Navbar
                    <span className="badge badge-pill badge-secondary m-2">
                        {totalCounters}</span></a>

            </nav>


        </div>
    )

}

export default NavBar
