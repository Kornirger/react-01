import React from "react";
import style from './Header.module.css';

const Header = () => {
	return (
		<header className={style.header}>
			<div className={style.header_logo}>
				<img src="https://i.pinimg.com/originals/cc/7a/d3/cc7ad3d3ba4e80853304bee2dc3015da.png" alt=""/>

			</div>
		</header>
	);
}
export default Header;