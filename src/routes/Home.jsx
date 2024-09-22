import React, { useEffect, useState } from "react";
import "./Home.css";

function Home() {
  const [data, setData] = useState([]);

  const [imageSrc, setImageSrc] = useState();
  const handleMouseOut = () => {
    setImageSrc("");
  };
  const handleMouseOver = () => {
    setImageSrc("");
  };

  //Fetchin of the data
  const url =
    "https://gist.githubusercontent.com/johnson-Omwoyo/5748f3e57a0490fa4c9c507a6ae546ff/raw/20f4dff27a992b9c4f10f1fe898c24e085b170eb/amanda's.json";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const fetchedData = await response.json();
        setData(fetchedData.Products);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  console.log(data);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col p-0">
          <img
            className="img-fluid fit"
            src="https://amandas.co.ke/wp-content/uploads/2023/11/Amandas-Shop-Main-0001-V2.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <p className="mb-1 our-products-title">Our Products</p>
          <span className="zigzag">/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\</span>
        </div>
      </div>
      <div className="row my-5">
        <div className="col">
          <div className="container">
            <div className="row">
              {data.length > 0 &&
                data.map((product) => (
                  <div className="col-6 col-md-3 " key={product.name}>
                    <div className="m-2">
                      <img
                        className="card-img-top"
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                        src={product.imageurl}
                        alt={product.imageurl}
                      />
                      <div className="card-body text-center">
                        {" "}
                        <p className="item-name">{product.name}</p>
                        <p className="category">{product.category}</p>
                        <p className="cost">KShs {product.cost}.00</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <button
            style={{ backgroundColor: "#512368", color: "white" }}
            className="btn p-2 px-4 mb-3"
          >
            Return and Refund Policy
          </button>
        </div>
      </div>
      <div className="row info">
        <div
          style={{ backgroundColor: "rgba(227,215,248,255)" }}
          className="col text-center"
        >
          <div className="container">
            <div className="row">
              {" "}
              <div className="col">
                <h1 className="display-5 mx-3 p-0">
                  Baby strollers and Car seats
                </h1>
                <p>
                  Are you in search of the ideal baby stroller or car seat?
                  You’ve come to the right place! At Amandas, we’re dedicated to
                  providing the best baby mobility solutions to help parents
                  move around with ease and confidence. We understand that
                  choosing between a stroller and a car seat can be challenging.
                  Our advice? Get both!
                </p>
                <h4>Why Both Strollers and Car Seats Are Essential</h4>
                <p>
                  Car seats are crucial for keeping your baby safe and secure
                  during travel. They provide a comfortable, protected space for
                  your little one, allowing you to focus on the road. On the
                  flip side, strollers offer convenience and comfort when you’re
                  out and about. They give your baby a cozy spot to sit or nap
                  while you’re on the move. Many strollers feature adjustable
                  recline positions, padded seats, and sun canopies to shield
                  your baby from the sun and elements.
                </p>
                <h4>Choosing the Right Stroller</h4>
                <p>
                  If you’re considering purchasing a stroller, take into account
                  features like adjustability, comfort, and suitability for your
                  baby’s age and your lifestyle. For newborns, we recommend
                  strollers that can switch between a bassinet and a sitting
                  position. We have these versatile strollers in stock for just
                  Ksh 22,500.
                </p>
                <p>
                  For those who travel frequently or have a baby over six months
                  old, a travel stroller might be your best bet. These strollers
                  are foldable, compact, and perfect for airplane storage
                  compartments or small car trunks. Our travel strollers are
                  available for Ksh 16,500.
                </p>
                <h4>Carrycot vs. Car Seat: What’s Best for You?</h4>
                <p>
                  Many parents wonder whether a carrycot or a car seat is the
                  better choice. Carrycots are wonderful for newborns because
                  they offer a flat, supportive sleeping space and are easy to
                  transfer without waking your baby. However, they’re generally
                  only usable until about six months of age.
                </p>
                <p>
                  Car seats, on the other hand, provide long-term value and are
                  designed for travel safety. Although they may not offer the
                  same level of comfort for long periods, they’re a practical
                  choice for ongoing use.
                </p>
                <h4>Need More Guidance? We’re Here to Help!</h4>
                <p>
                  f you’re still unsure about which product is right for you,
                  don’t hesitate to reach out. Call or WhatsApp us at +254 725
                  289351 or visit our store in Westlands, Bandari Plaza. Our
                  friendly team at Amandas is here to assist you in finding the
                  perfect baby stroller and car seat for your needs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col bottom-image"></div>
      </div>
    </div>
  );
}

export default Home;
