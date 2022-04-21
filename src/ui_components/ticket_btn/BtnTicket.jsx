import React from 'react';
import './btn_ticket.scss';

function BtnTicket() {
	return (
		<div className="btnbuyticket" onClick={() => window.open('https://yookassa.ru/')}>
			<span>&nbsp;купить билет&nbsp;&nbsp;купить билет&nbsp;</span>
			<span>&nbsp;купить билет&nbsp;&nbsp;купить билет&nbsp;</span>
		</div>
	);
}

export default BtnTicket;
