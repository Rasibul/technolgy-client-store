import { useNavigate } from "react-router-dom";


const BrandCart = ({ product }) => {
  const navigate = useNavigate()
  const handelClick = (name) => {
    const path = `/${name}`;
    navigate(path);
  }
  const { img, name } = product || {}
  return (
    <div onClick={()=> handelClick(name)} className="card  bg-base-100 shadow-xl image-full">
      <img src={img} alt="" />
      <div className="card-body">
        <h2 className="card-title font-bold ">{name}</h2>
      </div>
    </div>
  );
};

export default BrandCart;