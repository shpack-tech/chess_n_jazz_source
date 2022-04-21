import React, { useEffect, useState, useContext } from 'react';

import './page_styles/start_page.scss';
import './page_styles/logo.scss';
import './page_styles/picture.scss';
import './page_styles/authors.scss';
import agutin from '../../../assets/images/heap/Cardagutin.png';
import jordan from '../../../assets/images/heap/Cardjordan.png';
import portio from '../../../assets/images/heap/Cardportico.png';
import dorn from '../../../assets/images/heap/Carddorn.png';
import heading from '../../../assets/icons/H1Chess&Jazz.svg';
import arrow from '../../../assets/icons/arrow-next.svg';
import asterisk from '../../../assets/icons/star.svg';

import MPSlider from './slider_mp/MPSlider';
import BtnTicket from '../../../ui_components/ticket_btn/BtnTicket';
import { PageContext } from '../../../PageContext';

function StartPage(params) {
	const [page, setPage] = useContext(PageContext);

	return (
		<>
			<div className={params.child === true ? 'container page_split child' : 'container page_split'}>
				<div className="left-part">
					<img src={heading} alt="" />
				</div>
				<div className="right-part">
					<div className="main-page__picture">
						<span>
							<MPSlider />
						</span>
					</div>

					<div className="info-container">
						<div>30-31 июля 2022 </div>
						<img src={asterisk} alt="" />
						<div>Сад «Эрмитаж»</div>
						<img src={asterisk} alt="" />
						<div>30-31 июля 2022</div>
						<img src={asterisk} alt="" />
						<div>Сад «Эрмитаж»</div>
						<img src={asterisk} alt="" />
						<div>30-31 июля 2022</div>
						<img src={asterisk} alt="" />
					</div>
					<div className="bottom-container">
						<div className="bottom-content">
							<div className="date-content">30 июля 2022</div>
							<div className="date-content">31 июля 2022</div>

							<div className="author-info">
								<div className="author-name">Леонид Агутин</div>
								<div className="author-picture">
									<img src={agutin} alt="" />
								</div>
							</div>
							<div className="author-info">
								<div className="author-name">Portico Quartet</div>
								<div className="author-picture">
									<img src={portio} alt="" />
								</div>
							</div>
							<div className="author-info">
								<div className="author-name">Jordan Rakei</div>
								<div className="author-picture">
									<img src={jordan} alt="" />
								</div>
							</div>
							<div className="author-info">
								<div className="author-name">Иван Дорн</div>
								<div className="author-picture">
									<img src={dorn} alt="" />
								</div>
							</div>
						</div>
						<button
							className="button-next"
							onClick={() => {
								page.swipeForward();
							}}
						>
							<img src={arrow} alt="" />

							<div className="button-next-hover">
								<img src={arrow} alt="" />
								<img src={arrow} alt="" />
								<img src={arrow} alt="" />
								<img src={arrow} alt="" />
								<img src={arrow} alt="" />
								<img src={arrow} alt="" />
								<img src={arrow} alt="" />
								<img src={arrow} alt="" />
								<img src={arrow} alt="" />
								<img src={arrow} alt="" />
							</div>
						</button>
					</div>
				</div>
			</div>

			<BtnTicket />
		</>
	);
}

export default StartPage;
