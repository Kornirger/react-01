import React from "react";
import style from './SidebarNav.module.css';

const SidebarNav = () => {
	return (<nav className={style.sidebar_nav}>
		<div className={`${style.item} ${style.active}`}>
			<a href="src/components/SidebarNav/SidebarNav#" title='Profile'>Profile</a>
		</div>
		<div className={style.item}>
			<a href="src/components/SidebarNav/SidebarNav#" title='Messages'>Messages</a>
		</div>
		<div className={style.item}>
			<a href="src/components/SidebarNav/SidebarNav#" title='News'>News</a>
		</div>
		<div className={style.item}>
			<a href="src/components/SidebarNav/SidebarNav#" title='Music'>Music</a>
		</div>
		<div className={style.item}>
			<a href="src/components/SidebarNav/SidebarNav#" title='Settings'>Settings</a>
		</div>
	</nav>);
}
export default SidebarNav;