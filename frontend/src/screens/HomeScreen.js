import React,{useState,useEffect} from "react";
import products from "../products";
import Product from '../components/Product.js'
import { Row, Col } from "react-bootstrap";
import axios from 'axios'





const HomeScreen = () => {

const [products,setProducts]=useState([])


useEffect(()=>{

const fetchProducts = async () =>{
	const {data} = await axios.get('/api/products/');
	console.log(data)
	setProducts(data);
}
fetchProducts()

},[])


	return (
		<div>
			<h1>Latest Product</h1>
			<Row>
				{products.map((product) => (
					<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
						<Product product={product} />
					</Col>
				))}
			</Row>
		</div>
	);
};

export default HomeScreen;
