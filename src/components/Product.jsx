const Product = ({
  id,
  title,
  price,
  imgageUrl,
  rating,
  description,
  count,
}) => {
  return (
    <div>
      <img src={imgageUrl} alt={`photo of ${title}`} />
      <h2>Product title: {title}</h2>
      <p>do some star shenanigans{rating}</p>
      <p>price{price}</p>
      <button>
        Add to Cart but track how many
        {count}
      </button>
    </div>
  );
};

export default Product;
