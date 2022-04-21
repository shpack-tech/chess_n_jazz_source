import React, { useState, useEffect } from 'react';
import slider_1 from '../../../../assets/images/chess/chess1.JPG';
import slider_2 from '../../../../assets/images/chess/chess2.JPG';
import slider_3 from '../../../../assets/images/chess/chess3.jpeg';
import slider_4 from '../../../../assets/images/chess/chess4.JPG';
import slider_5 from '../../../../assets/images/chess/chess5.JPG';

const slides = [slider_1, slider_2, slider_3, slider_4, slider_5];

export default function ChessSlider() {
	const [opacityCounter, setOpacityCounter] = useState(0);

	useEffect(() => {
		setTimeout(() => {
			opacityCounter > 1 ? setOpacityCounter(0) : setOpacityCounter(opacityCounter + 1);
		}, 2500);
	});

	return slides.map((el, i) => {
		return <img src={el} width="610" height="470" key={i} style={opacityCounter === i ? { opacity: 1 } : { opacity: 0 }} alt="" />;
	});
}
