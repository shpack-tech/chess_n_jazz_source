import React, { useState, useContext } from 'react';
import { PageContext } from '../../PageContext';

import './sidebar.scss';
import yt from '../../assets/icons/youtube.svg';
import inst from '../../assets/icons/insta.svg';
import vk from '../../assets/icons/vk.svg';
import light_yt from '../../assets/icons/youtubeyt.svg';
import light_inst from '../../assets/icons/instainst.svg';
import light_vk from '../../assets/icons/vkvk.svg';
import menu_toggle from '../../assets/icons/menu-dark-icon.svg';
import light_menu from '../../assets/icons/menu-darkmenubutton.svg';
import menu_idle from '../../assets/icons/menusquare.svg';
import light_menu_cross from '../../assets/icons/close-lightmenu-cross.svg';
import menu_cross from '../../assets/icons/close-darklight.svg';

import MenuBody from './menu_body/MenuBody';

function MenuBar() {
	const [page, setPage] = useContext(PageContext);
	const params = page.pages[page.current];
	const [menuState, setMenuState] = useState(false);
	console.log(params);
	const theme = {
		background: page.pages[page.current].theme === 'dark' && !menuState ? '#000' : '#fff',
		borderRight: page.pages[page.current].theme === 'dark' && !menuState ? '1px solid #F4F3F3' : '1px solid #F4F3F3',
	};
	const buttons = {
		vk: page.pages[page.current].theme === 'dark' && !menuState ? light_vk : vk,
		inst: page.pages[page.current].theme === 'dark' && !menuState ? light_inst : inst,
		yt: page.pages[page.current].theme === 'dark' && !menuState ? light_yt : yt,
		menu_toggle: page.pages[page.current].theme === 'dark' && !menuState ? light_menu : menu_toggle,
		top_btn: page.pages[page.current].theme === 'dark' && !menuState ? light_menu_cross : menu_cross,
	};

	if (page.current === 0) {
		buttons.top_btn = menu_idle;
	}

	const menu_top = menuState ? (
		'ФЕСТИВАЛЬ ШАХМАТ И ДЖАЗА 2022'
	) : (
		<img
			style={{ cursor: 'pointer' }}
			src={buttons.top_btn}
			alt=""
			onClick={() => {
				page.swipeBack();
			}}
		/>
	);

	return (
		<div className="menu_container">
			<div className="sidebar" style={theme}>
				<div className="sidebar__title">{menu_top}</div>
				<div className="sidebar__menu-icon" onClick={() => setMenuState(!menuState)}>
					<img src={buttons.menu_toggle} alt="" />
				</div>
				<div className="sidebar__social">
					<a>
						<img src={buttons.inst} alt="" />
					</a>
					<a>
						<img src={buttons.vk} alt="" />
					</a>
					<a>
						<img src={buttons.yt} alt="" />
					</a>
				</div>
			</div>
			<div style={{ position: 'relative' }}>
				<MenuBody displayed={menuState} transit_to={0} />
			</div>
		</div>
	);
}

export default MenuBar;
