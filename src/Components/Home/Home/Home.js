import aboutimg2 from '../../../images/img1.jpeg';
import Banner from '../Banner/Banner';
import Exclusive from '../Exclusive/Exclusive';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import DisplayProducts from '../../Shop/DisplayProducts/DisplayProducts';
import Reviews from '../../Reviews/Reviews';


const Home = () => {

  const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://secret-garden-17818.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 6)));
    }, [])

    const [userReviews, setUserReviews] = useState([]);
 
    useEffect(() => {
      fetch("https://secret-garden-17818.herokuapp.com/reviews")
        .then((res) => res.json())
        .then((data) => setUserReviews(data));
    }, []);


  return (
    <div>

     <Banner></Banner>

     <Exclusive></Exclusive> 

   




{/* -------Shop products start------- */}

<div className='container'>
                <h2 className='text-info fw-bold py-3 mb-2 mt-5' id='offers' ><span className='text-warning fw-bold'> Featured </span>Collection</h2>

                <Row xs={1} md={3} className="g-4">
                    {
                        products.map(product => <DisplayProducts product={product}></DisplayProducts>)
                    }


                </Row>
            </div>

            {/* ------shop products end------ */}

            <br />


            {/*--------------- About Start------------ */}
     <div  style={{width:'90%', marginTop:'200px'}} className="row mx-auto d-flex- justify-content-center align-items-centercontainer ">

<div className="col-md-6">
<h1 className="primary fw-bold">To know about US..</h1>
<hr />
  <h3>
  We left no stone unturned in our quest to find the very best web design examples of jewellery e-commerce sites. Here are our top 31 finds...
  </h3>

  <p style={{textAlign:'justify'}}>Our luxury designer jewelry house based in Rhode Island. We create seasonal collections of heirloom quality pieces that are crafted in small batches.

With the product having so much focus on aesthetic beauty and monetary value, the design of the site mustn't outshine the stock. A good site will be beautiful while not getting in the way of the items it is designed to be selling.

In this article we'll reveal our list of our top 31 jewellery e-commerce sites, including two of our own! The title and screenshot of each site is hyperlinked, so you can go and take a look at them for yourself.</p>
</div>
<div className="col-md-6 mb-5 pm-5">
  <img className="" src={aboutimg2} alt="" />

</div>

</div>

{/* -------------About End-------------- */}
     <div>
     <h2 className='text-info fw-bold py-3 mb-2 mt-5' id='offers' ><span className='text-warning fw-bold'> Users </span>Feedback</h2>

<Row xs={1} md={3} className="w-75 mx-auto">
    {
        userReviews.map(review => <Reviews review={review}></Reviews>)
    }


</Row>
     </div>
    </div>
  );
};

export default Home;