import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "./Navigation";

export default function SingleProduct() {
  const { productId } = useParams();
  const [singleProduct, setSingleProduct] = useState({});

  useEffect(() => {
    console.log("Product ID:", productId);
    const fetchSingleProduct = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        const result = await response.json();
        setSingleProduct(result);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSingleProduct();
  }, [productId]);

  return (
    <>
      <img
        src="../src/assets/banner.png"
        className="siteBanner"
        alt="Shop Direct Banner"
      />

      <div className="single-container">
        {/* <h1>Product Details</h1> */}
        <div className="singleProducts">
          <img src={singleProduct.image} alt={singleProduct.title} />
          <div className="singleProductDescrip">
            <h2>{singleProduct.title}</h2>
            <p>
              {singleProduct.rating?.rate} stars {singleProduct.rating?.count}{" "}
              reviews
            </p>
            <p>{singleProduct.description}</p>
            <div className="price-btn">
              <span className="price">${singleProduct.price}</span>
            </div>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}
