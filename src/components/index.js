import React from "react";
import ProductList from "./ProductList";

function Home(props) {

    return (
        <div className="container">
        <header className="row">
            <div className="col-md-12">
            <h1>Welcome to Bookstore</h1>
            </div>
        </header>
        <div className="row">
            <div className="col-md-8">
            <ProductList
                addToCart={props.addToCart}
                removeFromCart={props.removeFromCart}
                products={props.products}
                inCart={props.items}
            />
            </div>
        </div>
        <footer></footer>
        </div>
    );
}

export default Home;