import React from "react";

const Products = (props) => {
    return (
        <>
            <div className="h-100 w-100 p-3" style={{ backgroundColor: "white" }}>
                <div>
                    <img src={props.img} className="img-fluid" alt="" />
                </div>

                <div className="px-4">
                    <h6 style={{ color: "#999999" }}>{props.nm}</h6>
                    <h6>{props.des}</h6>
                    <div className="d-flex">
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                    </div>
                    <b className="py-3">${props.price}</b>

                </div>
            </div>
        </>
    )
}

export default Products;