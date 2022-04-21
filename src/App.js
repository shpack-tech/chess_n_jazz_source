import React, { useEffect, useState, useRef } from 'react';
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { PageContext } from './PageContext';

import StartPage from './modules/pages/start_page/StartPage';
import JazzPage from './modules/pages/jazz_page/JazzPage';
import ChessPage from './modules/pages/chess_page/ChessPage';
import MenuBar from './modules/menu/MenuBar';

import isDesktop from './scripts/isDesktop';

import logo from './logo.svg';
import './App.css';

function App() {
	const pages = [
		{
			path: '/',
			page: <StartPage child={true} />,
			theme: 'dark',
		},
		{
			path: '/jazz',
			page: <JazzPage child={true} />,
			theme: 'dark',
		},
		{
			path: '/chess',
			page: <ChessPage child={true} />,
			theme: 'light',
		},
	];

	const pageNum = getPageNum();

	const navigate = useNavigate();
	const container = useRef();

	const [page, setPage] = useState(pageNum);
	const [helper, setHelper] = useState(true);
	const [anim, setAnim] = useState('');
	const [version, setVersion] = useState('desktop');
	const [pageContext, setPageContext] = useState({
		pages,
		current: getPageNum(),
		swipeBack: backwards,
		swipeForward: forward,
		context: 'page',
	});

	const slideForwardAnimation = useSpring({
		from: { transform: 'translateX(0px)' },
		to: { transform: 'translateX(-100vw)' },
	});
	const slideBackwardsAnimation = useSpring({
		from: { transform: 'translateX(0px)' },
		to: { transform: 'translateX(100vw)' },
	});

	useEffect(() => {
		setPageContext({
			pages,
			current: getPageNum(),
			swipeBack: backwards,
			swipeForward: forward,
			context: 'page',
		});
		return () => {
			window.removeEventListener('resize', rz);
			window.removeEventListener('wheel', window.handlePageScroll);
		};
	}, [helper]);

	window.handlePageScroll = function handlePageScroll(scroll) {
		if (pageContext.context === 'page') {
			if (scroll.deltaY == 100 && pageContext.current !== pages.length - 1) {
				pageContext.swipeForward();
			} else if (scroll.deltaY == -100 && pageContext.current !== 0) {
				pageContext.swipeBack();
			}
		}
	};
	console.log(pageContext);

	function getPageNum() {
		for (let i = 0; i < pages.length; i++) {
			if (pages[i].path === window.location.pathname) {
				return i;
			}
		}
	}

	function forward() {
		if (getPageNum() < pages.length - 1 && pageContext.context === 'page') {
			setAnim('forward');
		}
	}
	function backwards() {
		if (getPageNum() > 0 && pageContext.context === 'page') {
			setAnim('backwards');
		}
	}

	function applyAnimation(anim) {
		if (anim === 'forward') {
			return slideForwardAnimation;
		} else if (anim === 'backwards') {
			return slideBackwardsAnimation;
		} else return;
	}

	const next_page = function () {
		if (pageContext.current + 1 < pages.length) {
			return pages[pageContext.current + 1].page;
		} else return <div style={{ height: '100vh', width: '100vw' }}></div>;
	};

	const prev_page = function () {
		if (pageContext.current - 1 >= 0) {
			return pages[pageContext.current - 1].page;
		} else return <div style={{ height: '100vh', width: '100vw' }}></div>;
	};

	if (pageContext.context === 'page') {
		window.addEventListener('wheel', window.handlePageScroll);
	} else {
		window.removeEventListener('wheel', window.handlePageScroll);
	}

	function rz() {
		if (isDesktop()) {
			setVersion('desktop');
		} else setVersion('mobile');
		console.log(version);
	}

	window.addEventListener('resize', rz);

	if (version === 'desktop') {
		return (
			<PageContext.Provider value={[pageContext, setPageContext]}>
				<MenuBar />
				<animated.div
					className={anim === '' ? 'application' : 'application animated-now'}
					ref={container}
					style={anim === '' ? {} : applyAnimation(anim)}
					onTransitionEnd={(e) => {
						if (e.propertyName === 'transform') {
							if (anim === 'backwards') {
								if (pageContext.current - 1 > -1) {
									setHelper(!helper);
									setAnim('');
									navigate(pages[pageContext.current - 1].path);
								}
							} else if (anim === 'forward') {
								if (pageContext.current + 1 < pages.length) {
									setHelper(!helper);
									setAnim('');
									navigate(pages[pageContext.current + 1].path);
								}
							}
						}
					}}
				>
					{prev_page()}

					<Suspense fallback={<div>Loading...</div>}>
						<Routes>
							<Route exact path="/" element={<StartPage />} />
							<Route path="/jazz" element={<JazzPage />} />
							<Route path="/chess" element={<ChessPage />} />
						</Routes>
					</Suspense>
					{next_page()}
				</animated.div>
			</PageContext.Provider>
		);
	} else if (version === 'mobile') {
		return <h1>Mobile</h1>;
	}
}

export default App;
