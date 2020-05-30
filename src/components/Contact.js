import React from 'react';

const Contact = (props) => {
	//console.log(props);
	setTimeout(() => {
		props.history.push('/about');
	}, 2000); //programmatic redirect
	return (
		<div className="container">
			<h4 className="center">Contact</h4>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit rerum asperiores fuga repellat atque
				debitis, laudantium eum tenetur nobis ipsa consequuntur et magni eos quod consequatur necessitatibus
				iusto, obcaecati optio.
			</p>
		</div>
	);
};

export default Contact;
