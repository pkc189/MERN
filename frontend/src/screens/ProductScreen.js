import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
	Row,
	Col,
	Image,
	ListGroup,
	Card,
	Button,
	Form,
} from "react-bootstrap";
import Rating from "../components/Rating";
import store from "../store.js";
import { listProductDetails } from "../actions/productActions.js";
import { useDispatch, useSelector } from "react-redux";

const ProductScreen = ({history, match }) => {

	const [qty, setQty] = useState(0);
	const dispatch = useDispatch();
	const productDetails = useSelector((state) => state.productDetails);
	const { product, error, loading } = productDetails;
 




	useEffect(() => {
		dispatch(listProductDetails(match.params.id));
	}, [dispatch, match]);




const addtoCartHandler =()=>{
	history.push(`/cart/${product._id}?query=${parseInt(qty)+1}`)
}




	return (
		<>
			<Link className="btn btn-light my-3" to="/">
				Go Back
			</Link>
			<Row>
				<Col md={6}>
					<Image fluid src={product.image} alt={product.name} />
				</Col>
				<Col md={3}>
					<ListGroup variant="flush">
						<ListGroup.Item>
							<h3>{product.name}</h3>
						</ListGroup.Item>

						<ListGroup.Item>
							<Rating
								value={product.rating}
								text={`${product.numReviews} reviews`}
							/>
						</ListGroup.Item>
						<ListGroup.Item>Price : {product.price}</ListGroup.Item>

						<ListGroup.Item>
							Description : {product.description}
						</ListGroup.Item>
					</ListGroup>
				</Col>

				<Col md={3}>
					<Card>
						<ListGroup variant="flush">
							<ListGroup.Item>
								<Row>
									<Col>Price: </Col>
									<Col>
										<strong>${product.price}</strong>
									</Col>
								</Row>
							</ListGroup.Item>

							<ListGroup.Item>
								<Row>
									<Col>Status: </Col>
									<Col>
										{product.countInStock > 0
											? "In stock"
											: "Out of stock"}
									</Col>
								</Row>
							</ListGroup.Item>

							<ListGroup.Item>
								{product.countInStock > 0 && (
									<Row>
										<Col>Qty</Col>
										<Col>
											
												<Form.Control
													as="select"
													value={qty}
													onChange={(e) =>
														setQty(e.target.value)
													}
												>
													{


														[...Array(product.countInStock).keys()].map(x=>(
													<option
														key={x + 1}
														value={x + 1}
													>
														{x + 1}
													</option>
													))}
												</Form.Control>
											
										</Col>
									</Row>
								)}
							</ListGroup.Item>

							<ListGroup.Item>
								<Button onClick={addtoCartHandler}
									className="btn-block"
									disabled={product.countInStock === 0}
								>
									Add to cart
								</Button>
							</ListGroup.Item>
						</ListGroup>
					</Card>
				</Col>
			</Row>
		</>
	);
};

export default ProductScreen;
