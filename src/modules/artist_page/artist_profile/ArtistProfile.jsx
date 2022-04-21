import React from 'react';
import './artist_profile.scss';
// import photoJR from '../../../assets/images/photos/photo-Jordan-Rakei.png';

function ArtistProfile(params) {
	return (
		<div className="artistprofile" style={{ background: '#fff' }}>
			<div className="artistprofile__card">
				<div className="artistprofile__date-wrapper">
					<span className="artistprofile__date">{params.artist.detail_date}</span>
					<span className="artistprofile__time">
						{params.artist.time} — {params.artist.time_end}
					</span>
				</div>
				<div className="artistprofile__name">{params.artist.name}</div>
				<div className="artistprofile__description">{params.artist.description}</div>
				<div className=""></div>
			</div>
			<div className="artistprofile__img">
				<img src={params.artist.detailed} alt="" />
			</div>
		</div>
	);
}

export default ArtistProfile;
