import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";
import { UserContext } from "../../../contexts/user.context";

import { CartContext } from "../../../contexts/cart.context";

import { signOutUser } from "../../../utils/firebase/firebase.utils";

import "./navigation.styles.scss";

const Navigation = () => {
	const { currentUser } = useContext(UserContext);
	const { isCartOpen } = useContext(CartContext);
	return (
		<Fragment>
			<div className="navigation">
				<Link className="logo-container" to="/">
					<CrwnLogo className="logo" />
				</Link>
				<div className="nav-links-container">
					<Link to="shop" className="nav-link">
						Shop
					</Link>
					{currentUser ? (
						<span className="nav-link" onClick={signOutUser}>
							{" "}
							Sign Out{" "}
						</span>
					) : (
						<Link to="auth" className="nav-link">
							Sign-In
						</Link>
					)}
					<CartIcon />
				</div>
				{isCartOpen && <CartDropdown />}
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
