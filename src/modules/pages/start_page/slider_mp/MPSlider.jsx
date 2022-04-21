import React, { useState, useEffect } from 'react';
import slider_1 from '../../../../assets/images/index_slider/1.JPG';
import slider_2 from '../../../../assets/images/index_slider/2.JPG';
import slider_3 from '../../../../assets/images/index_slider/3.JPG';
import slider_4 from '../../../../assets/images/index_slider/4.JPG';
import slider_5 from '../../../../assets/images/index_slider/5.JPG';
import slider_6 from '../../../../assets/images/index_slider/6.JPG';

const slides = [slider_1, slider_2, slider_3, slider_4, slider_5, slider_6];
function MPSlider() {
	const [opacityCounter, setOpacityCounter] = useState(0);

	useEffect(() => {
		setTimeout(() => {
			opacityCounter > 1 ? setOpacityCounter(0) : setOpacityCounter(opacityCounter + 1);
		}, 2500);
	});

	return slides.map((el, i) => {
		return <img src={el} key={i} style={opacityCounter === i ? { opacity: 1 } : { opacity: 0 }} alt="" />;
	});
}
export default MPSlider;
