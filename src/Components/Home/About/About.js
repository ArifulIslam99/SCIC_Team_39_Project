import React from 'react';
import aboutimg2 from '../../../images/img1.jpeg';
import aboutbanner from '../../../images/img2.jpg'

const About = () => {
  return (
    <div>
      <img className="container-fluid bg-dark" src={aboutbanner} alt="" />
      <div className="container">

        <h1 className="text-dark mt-5 pt-5">Warmly Welcome to you for visiting our Website</h1>
        <div className="row d-flex- justify-content-center align-items-center ">
        
          <div className="col-md-6">

            <p className="text-black"> <strong>Celebrate big and spread the love with unparalledled pieces of stoned high jewelry, that can even make Scrooge smile. From rare emerald cabachons, to one-of-a-kind heart diamonds, these extraordinary pieces of exclusive high jewelry allow you to share the love on a grand scale</strong>
            </p>

            <p>Jewelry has its own place in our hearts. It is every woman’s best friend and more. Since ages ago, wearing jewelry is not just a tradition, it is a form of lifestyle. As a jewelry curator, we would love to display our products, which can help us in generating direct sales in return for our hard work and investment. A jewelry website should be artistic, with a simple navigation and display to help the customers purchase without much discomfort.</p>
          </div>

        </div>


        <div className="row d-flex- justify-content-center align-items-centercontainer my-5 ">

          <div className="col-md-6">

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
      </div>
    </div>
  );
};

export default About;