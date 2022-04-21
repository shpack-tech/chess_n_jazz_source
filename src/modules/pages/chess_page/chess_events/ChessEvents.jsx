import React from 'react';

function ChessEvents(params) {
	return params.events.map((el, i) => {
		return (
			<div
				className="chess-event"
				key={i}
				onMouseEnter={(e) => {
					e.currentTarget.classList.add('event-active');
				}}
				onMouseLeave={(e) => {
					e.currentTarget.classList.remove('event-active');
				}}
			>
				<div className="event-date">
					<p>{el.day}</p>
					<p>{el.type}</p>
				</div>
				<div className="event-name">{el.name}</div>
				{el.person ? (
					<div className="event-author">
						<div className="event-author-pic">
							{' '}
							<img src={el.person.avatar} alt="" />
						</div>
						<div className="event-author-name">{el.person.name}</div>
					</div>
				) : (
					''
				)}
				<div className="event-text">
					<p>Здесь гости фестиваля</p>
					<p>получат возможность</p>
					<p>сыграть шахматную</p>
					<p> партию бок о бок</p>
					<p> с гроссмейстерами</p>
					<p>мирового уровня.</p>
				</div>
			</div>
		);
	});
}

export default ChessEvents;
