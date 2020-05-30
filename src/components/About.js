import React from 'react';
import Rainbow from '../hoc/Rainbow';
const About = () => {
	return (
		<div className="container">
			<h4 className="center">About</h4>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit rerum asperiores fuga repellat atque
				debitis, laudantium eum tenetur nobis ipsa consequuntur et magni eos quod consequatur necessitatibus
				iusto, obcaecati optio.
			</p>
		</div>
	);
};

export default Rainbow(About);
