import React from "react";
import "./About.css";
function About() {
  return (
    <div className="container-fluid  ">
      <div className="row p-0">
        <div className="col p-0 ">
          <h1 className="display-4 d-flex align-items-center justify-content-center py-3 py-md-5">
            About Us
          </h1>
        </div>
      </div>
      <div className="row my-5">
        <div className="col">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6">
                <img
                  className="img img-fluid rounded"
                  src="https://amandas.co.ke/wp-content/uploads/2023/12/Amandas-Baby-Shop-About-Us-0002-860x673.jpg"
                  alt=""
                />
              </div>
              <div className=" about col-12 col-md-6">
                <span className="my-sm-3">WELCOME TO AMANDA'S BABY SHOP</span>
                <h3 className="display-5 text-center my-4">
                  Helping mothers every step of the way{" "}
                </h3>
                <p>
                  Our team is passionate about helping mothers stay active;
                  whether it’s going out to nature for walks, going to the gym,
                  hanging out with friends or going out for a drive. Our
                  products help both mother and baby be mobile in a safe and
                  comfortable way. We adhere to the highest quality standards
                  and our products are of the best quality. We are located at
                  Bandari Plaza on Woodvale Grove, pass by and say hi ☺️.{" "}
                </p>
                <p>
                  If you like to go out shopping, take walks, meet up with
                  friends and have an active life, you shouldn’t miss a beat.
                  Take your baby with you. Our array of baby mobility products
                  are curated to help you keep being active!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
