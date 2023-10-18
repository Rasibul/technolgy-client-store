

const BrandCart = ({ product }) => {
  const { img, name } = product || {}
  return (
    <div className="card  bg-base-100 shadow-xl image-full">
      <img src={img} alt="" />
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
      </div>
    </div>
  );
};

export default BrandCart;