import React from "react";


const imageStyle = {
    width: "100%",
    height: "auto",
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

    return (
        <div className="relative">
            <div
                className="relative"
                onMouseEnter={handleImageHover}
                onMouseLeave={handleImageLeave}
            >
                <img src={props.img} className="rounded-lg" alt="Image 1" style={imageStyle} />
                <div className="overlay" style={overlayStyle}>

                    <div style={{
                        paddingBottom: "20px"
                    }}>
                        <i className="fas fa-thumbs-up" style={iconStyle}></i>
                        <i className="fas fa-shopping-cart" style={iconStyle}></i>
                        <i className="fas fa-thumbs-down" style={iconStyle}></i>
                    </div>
                    <div className="flex">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded mb-2">
                            <i className="fas fa-shopping-cart"></i>
                        </button>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Overlay;
