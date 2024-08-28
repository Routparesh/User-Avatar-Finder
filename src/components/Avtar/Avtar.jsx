import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Avtar.css';

const Avtar = () => {
	let [avtars, setAvtars] = useState([]);

	async function downloadAvtar() {
		const response = await axios.get('https://api.github.com/users');
		const avtarsResults = response.data;

		setAvtars(
			avtarsResults.map((user) => ({
				imgUrl: user.avatar_url,
				username: user.login,
			}))
		);
	}

	useEffect(() => {
		downloadAvtar();
	}, []);

	return (
		<div className="card-container">
			{avtars.map((avtar, index) => (
				<div key={index} className="card">
					<img src={avtar.imgUrl} alt={`Avatar ${index}`} className="avatar-img" />
					<p>{avtar.username}</p>
				</div>
			))}
		</div>
	);
};
export default Avtar;
