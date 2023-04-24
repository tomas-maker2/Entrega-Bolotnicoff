import CartWidget from "./CartWidget/CartWidget"

const NavBar  = () => {
    return (

        <nav className="nav-bar">

            <h3 className="section__title">CarsShop</h3>

            <div className="navbar">
                <button className="nav__links">Inicio</button>
                <button className="nav__links">Inicio</button>
                <button className="nav__links">Inicio</button>
            </div>

        <CartWidget/>
        </nav>


    )
}

export default NavBar