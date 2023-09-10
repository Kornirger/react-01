import React from 'react';
import Header from './components/Header';
import SidebarNav from './components/SidebarNav';
import Profile from './components/Profile';
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
