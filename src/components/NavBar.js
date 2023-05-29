// used youtube tutorial to work through hamburger nav bar.

import React, {useState} from "react";


function NavBar () {

    // change burger classes
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        if(isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
    else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
    }
}

return(
    <div style={{width: '100%', height: '100%'}}>
        <nav>
            <div className="burger-menu">
                <div className={burger_class} onClick={updateMenu}></div>
                <div className={burger_class} onClick={updateMenu}></div>
                <div className={burger_class} onClick={updateMenu}></div>
            </div>
        </nav>
        <div className={menu_class}></div>
    </div>
)
}

export default NavBar;