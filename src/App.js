import React from 'react';
import Header from './components/Hrader/Header';
import SidebarNav from './components/SidebarNav/SidebarNav';
import Profile from './components/Profile/Profile';
import './App.css';

let App = () => {
	return (
		<div className='app-wrapper'>
			<Header></Header>

			<SidebarNav></SidebarNav>

			<Profile></Profile>

		</div>
	);
}

export default App;
