import React, { useEffect, useState, useContext } from 'react';

import './page_styles/jazz_cards.scss';
import './page_styles/jazz_marquee.scss';
import './page_styles/jazz_chess-btn.scss';
import './page_styles/jazz.scss';

import arrow from '../../../assets/icons/arrow-next.svg';
import artist2 from '../../../assets/images/heap/Portico_Quartet.png';
import artist1 from '../../../assets/images/heap/image_82.png';
import artist_detail1 from '../../../assets/images/artists/agutin.jpg';
import artist_detail2 from '../../../assets/images/artists/portico-quartet.jpg';

import BtnTicket from '../../../ui_components/ticket_btn/BtnTicket';
import ArtistSquare from './artist_square/ArtistSquare';
import ArtistPage from './../../artist_page/ArtistPage';
import { PageContext } from '../../../PageContext';

const artists = [
	{
		pic: artist1,
		name: 'Леонид Агутин',
		date: '31.07',
		detail_date: '31 ИЮЛЯ 2022',
		time: '18:30',
		time_end: '20:15',
		detailed: artist_detail1,
		description:
			'Леонид Агутин - маэстро, который не нуждается в представлении. Один из главных музыкантов отечественной сцены, его песни живут в сердце каждого из нас. Приходите спеть любимую в прекрасном Саду “Эрмитаж”.',
	},
	{
		pic: artist2,
		name: 'Portico Quartet',
		date: '30.07',
		detail_date: '31 ИЮЛЯ 2022',
		time_end: '20:15',
		time: '18:30',
		detailed: artist_detail2,
		description:
			'Portico Quartet —  долгожданный джазовый квартет из Лондона. В 2007 вышел дебютный альбом «Knee-deep in the North Sea». Он попал в номинанты на Mercury Music Prize в 2008 году, а журнал Time Out и вовсе назвал его лучшим джазовым альбомом года. В целом, сугубо джазовым квартет и не назовешь. Лондонцы мешают в один котел джаз, эмбиент и другие поджанры электроники. В 2021 году группа выпустила полноценный альбом “Monument”, а затем порадовала поклонников мини-альбомом “Next Stop”. Эту музыку стоит хоть раз услышать живьем!',
	},
];

function JazzPage(params) {
	const [isArtist, setIsArtist] = useState(null);
	const [pageContext, setPageContext] = useContext(PageContext);

	function changeContext(number) {
		if (isArtist === null) {
			setIsArtist(number);
		} else if (isArtist > 0 && isArtist < artists.length - 1) {
			setIsArtist(number);
		} else {
			setIsArtist(null);
		}
	}

	useEffect(() => {});

	if (isArtist == null) {
		return (
			<div className={params.child === true ? 'container jazz-cont child' : 'container jazz-cont'}>
				<div className="jazz-content">
					<div className="jazz-content__top">
						<div className="jazz-marquee-w" style={{ paddingTop: '40px' }}>
							<div className={params.child ? 'jazz_title title_cnj' : 'jazz_title title_cnj initialized'}>ДЖАЗ ДЖАЗ&nbsp;</div>
						</div>

						<div className="jazz-right">
							<BtnTicket />
							<div className="jazz__sponsor">
								ПРИ ПОДДЕРЖКЕ:
								<img src="assets/icons/Harman_Kardon_Logosupported.svg" alt="" />
							</div>
						</div>
					</div>

					<div className="jazz-content__bot jazz-content__bot-absolute">
						<div className="all_cards">
							<ArtistSquare artists={artists} context={changeContext} />
						</div>
					</div>
				</div>
				<div className="chess-button2">
					<div className="chess-button__content2 ">ШАХМАТЫ</div>
					<img src={arrow} alt="" />
					<div className="chess-button__content2 ">ШАХМАТЫ</div>
					<img src={arrow} alt="" />
					<div className="chess-button__content2 ">ШАХМАТЫ</div>
					<img src={arrow} alt="" />
					<div className="chess-button__content2 ">ШАХМАТЫ</div>
					<img src={arrow} alt="" />
					<div className="chess-button__content2 ">ШАХМАТЫ</div>
					<img src={arrow} alt="" />
					<div className="chess-button__content2 ">ШАХМАТЫ</div>
					<img src={arrow} alt="" />
					<div className="chess-button__content2 ">ШАХМАТЫ</div>
					<img src={arrow} alt="" />
					<div className="chess-button__content2 ">ШАХМАТЫ</div>
					<img src={arrow} alt="" />
					<div className="chess-button__content2 ">ШАХМАТЫ</div>
					<img src={arrow} alt="" />
				</div>
			</div>
		);
	} else {
		return (
			<div
				className="artists_big_picture"
				style={{ display: 'flex', width: '1200vw', position: 'relative', left: 'calc(76vw - ' + isArtist * 100 + 'vw)' }}
			>
				{artists.map((el, i) => {
					return <ArtistPage artist={el} key={i} />;
				})}
			</div>
		);
	}
}

export default JazzPage;
