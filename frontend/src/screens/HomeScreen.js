import React from 'react';
import products from '../products'
import Product from '../components/Product'
import {Row,Col} from 'react-bootstrap';
const HomeScreen = () => {
	console.log(products)
	return(
<div>
<h1>Latest Product</h1>
<Row>
{products.map((product) =>(
	<Col key={product.id} sm={12} md={6} lg={4} xl={3}>
	<Product product={product}/>
	</Col>
))}
</Row>
</div>
		)
}

export default HomeScreen;