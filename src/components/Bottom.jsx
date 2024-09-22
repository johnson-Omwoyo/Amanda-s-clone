import React from "react";
import "../routes/Home.css";
function Bottom() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="container">
            <div className="row second-bottom">
              <div className="col-md-4 pt-5 d-flex align-items-center justify-content-center">
                <img
                  className="img img-fluid logo "
                  src="https://amandas.co.ke/wp-content/uploads/2023/12/Amandas-Logo.png"
                  alt=""
                />
              </div>
              <div className="col-md-4">
                <h2 className="my-3">About Us</h2>
                <p>
                  If you like to go out shopping, take walks, meet up with
                  friends and have an active life, you shouldn’t miss a beat.
                  Take your baby with you. Our array of baby mobility products
                  are curated to help you keep being active and connected!
                </p>
              </div>
              <div className="col-md-4">
                <h2 className="my-3">Reach Us Via</h2>
                <p>0725 289 351</p>
                <p>amandasbabyshop@gmail.com</p>
                <p>
                  Bandari Plaza, Mezzanine 2, Woodvale Grove, Westlands, Nairobi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col text-center my-1">
          <p className="return">Return and Refund Policy | Contact Us</p>
        </div>
      </div>
      <div
        style={{ color: "white", backgroundColor: "#512368" }}
        className="row p-4 d-flex align-items-center"
      >
        <div className="col text-center">
          <p className="mb-0">
            Copyright © 2024. Amandas. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Bottom;
