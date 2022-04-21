import React from 'react';
import './right_sidebar.scss';
import arrowleft from '../../../assets/icons/big-arrow-left.svg';
import arroright from '../../../assets/icons/big-arrow-right.svg';

function RightSidebar() {
	return (
		<div className="rightsidebar">
			<div className="btnnavigation">
				<button>
					<img src={arrowleft} alt="" />
				</button>
				<button>
					<img src={arroright} alt="" />
				</button>
			</div>
			<div className="runningline__wrapper">
				<div className="runningline">Джаз Джаз Джаз&nbsp;</div>
			</div>
		</div>
	);
}

export default RightSidebar;
