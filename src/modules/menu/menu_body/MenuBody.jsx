import React from 'react';

import { useSpring, animated } from 'react-spring';

import './menulist.scss';
import menu_arrow from '../../../assets/icons/menu-arrow.svg';
import BtnTicket from '../../../ui_components/ticket_btn/BtnTicket';

function MenuBody(params) {
	const { x } = useSpring({
		x: params.displayed ? 0 : 10,
	});

	return (
		<animated.div className="menulist" style={{ left: x.to((x) => `-${x * 10}vw`), position: 'absolute' }}>
			<ul>
				<li>
					<span>01 /</span>
					<a href="/">Джаз</a>
					<span>
						<img src={menu_arrow} alt="" />
					</span>
				</li>
				<li>
					<span>02 /</span>
					<a href="/chess">Шахматы</a>
					<span>
						<img src={menu_arrow} alt="" />
					</span>
				</li>
				<li>
					<span>03 /</span>
					<a href="/jazz">Лекторий</a>
					<span>
						<img src={menu_arrow} alt="" />
					</span>
				</li>
				<li>
					<span>04 /</span>
					<a href="">Гастрономия</a>
					<span>
						<img src={menu_arrow} alt="" />
					</span>
				</li>
				<li>
					<span>05 /</span>
					<a href="">Архив событий</a>
					<span>
						<img src={menu_arrow} alt="" />
					</span>
				</li>
				<li>
					<span>06 /</span>
					<a href="">Партнеры</a>
					<span>
						<img src={menu_arrow} alt="" />
					</span>
				</li>
			</ul>
			<BtnTicket />
		</animated.div>
	);
}

export default MenuBody;
