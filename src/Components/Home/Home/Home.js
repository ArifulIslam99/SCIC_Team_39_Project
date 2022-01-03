import React from 'react';
import aboutimg2 from '../../../images/img1.jpeg';
import Banner from '../Banner/Banner';
import Exclusive from '../Exclusive/Exclusive';

const Home = () => {
  return (
    <div>

     <Banner></Banner>

     <Exclusive></Exclusive>

{/*--------------- About Start------------ */}
     <div  style={{width:'90%'}} className="row mx-auto d-flex- justify-content-center align-items-centercontainer my-5 ">

<div className="col-md-6">
<h1 className="primary">To know about US..</h1>
<hr />
  <h3>
  We left no stone unturned in our quest to find the very best web design examples of jewellery e-commerce sites. Here are our top 31 finds...
  </h3>

  <p>Our luxury designer jewelry house based in Rhode Island. We create seasonal collections of heirloom quality pieces that are crafted in small batches.

With the product having so much focus on aesthetic beauty and monetary value, the design of the site mustn't outshine the stock. A good site will be beautiful while not getting in the way of the items it is designed to be selling.

In this article we'll reveal our list of our top 31 jewellery e-commerce sites, including two of our own! The title and screenshot of each site is hyperlinked, so you can go and take a look at them for yourself.</p>
</div>
<div className="col-md-6 mb-5 pm-5">
  <img className="" src={aboutimg2} alt="" />

</div>

</div>

{/* -------------About End-------------- */}

    </div>
  );
};

export default Home;