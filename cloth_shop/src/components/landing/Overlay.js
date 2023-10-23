import React from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../Redux/SliceCard";
import { useNavigate } from "react-router-dom";
const imageStyle = {
    width: "100%",
    height: "300px",
    transition: "transform 0.3s",
};

const overlayStyle = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    opacity: 0,
    transition: "opacity 0.3s",
    borderRadius: "10px",
};

const iconStyle = {
    fontSize: "24px",
    color: "white",
    margin: "0 5px",
    cursor: "pointer",
};

const Overlay = (props) => {
    const handleImageHover = (e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.querySelector(".overlay").style.opacity = "1";
    };

    const handleImageLeave = (e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.querySelector(".overlay").style.opacity = "0";
    };
    const dispach = useDispatch();
    // console.log(props)

    const nevigate = useNavigate()

    return (
        <div className="relative">
            <div
                className="relative"
                onMouseEnter={handleImageHover}
                onMouseLeave={handleImageLeave}
                onClick={() => nevigate(`/details/${props.img.id}`)}
                style={{
                    cursor: "pointer",
                }}
            >
                <img src={props.img.imageUrl} className="rounded-lg" alt="Image 1" style={imageStyle} />
                <div className="overlay" style={overlayStyle}>


                    {/* <div className="flex">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded mb-2"
                            onClick={() => dispach(addCart({ id: props.img.id, name: props.img.name, price: props.img.price, quantity: 1, image: props.img.imageUrl }))}
                        >
                            <i className="fas fa-shopping-cart"></i>
                        </button>

                    </div> */}

                </div>
            </div>
        </div>
    );
};

export default Overlay;
