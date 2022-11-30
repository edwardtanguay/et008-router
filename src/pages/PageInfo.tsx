import { NavLink } from 'react-router-dom';

export const PageInfo = () => {
	return (
		<>
			<p>This is the info page.</p>
			<p>Go to <NavLink to="/product/1">Product 1</NavLink></p>
			<p>Go to <NavLink to="/product/2">Product 2</NavLink></p>
		</>
	);
};