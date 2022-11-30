import { useParams } from 'react-router-dom';

export const PageProduct = (props: any) => {
	const { products } = props;
	const { id } = useParams();
	const product = products.find((m: any) => String(m.id) === String(id));
	console.log(products);
	console.log(product);

	return (
		<div className="page pageProduct">
			{product ? <p>Showing product "{product.title}"</p> : <p>You need to send a product id.</p>}
		</div>
	);
};
