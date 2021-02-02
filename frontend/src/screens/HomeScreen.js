import React,{useState,useEffect} from "react";
import products from "../products";
import Product from '../components/Product.js'
import {listProducts} from '../actions/productActions';
import { Row, Col } from "react-bootstrap";
import {useDispatch,useSelector} from 'react-redux';





const HomeScreen = () => {

const dispatch = useDispatch()
const productList= useSelector(state=>state.productList)
const {loading,error,products} = productList

useEffect(()=>{
	
dispatch(listProducts())

},[dispatch])


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
