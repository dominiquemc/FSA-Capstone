import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SingleProduct() {
  const { productId } = useParams();
  const [singleProduct, setSingleProduct] = useState({});

  useEffect(() => {
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
    <div>
      <h1>Product Details</h1>
      <img src={singleProduct.image} alt={singleProduct.title} />
      <h2>{singleProduct.title}</h2>
      <p>{singleProduct.description}</p>
      <p>{singleProduct.price}</p>
      <p>
        {singleProduct.rating?.rate} stars {singleProduct.rating?.count}
        reviews
      </p>
    </div>
  );
}
