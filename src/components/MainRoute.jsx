import React from 'react';
// import routes components
import Home from './Home';
import About from './About';
import Product from './Product';
import ProductItem from './ProductItem';

// import relevent things from react router v6
// instead of Switch we have Routes in V6
// we dont need exact keyword prop in V6
// instead of component we have element in V6
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import NavBar component
import NavBar from './NavBar';
const MainRoute = () => {
    return (
        <div>
            <Router>
                <NavBar />
                {/* <Switch> */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
		            <Route path="product" element={<Product />} />
                    <Route path="product/:id" element={<ProductItem />} />
                {/* </Switch> */}
                </Routes>
            </Router>
        </div>
    )
}

export default MainRoute;