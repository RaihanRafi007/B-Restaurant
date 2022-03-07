import React from "react";

const Loading = () => {
    return (
        <div className="col-12" style={{ padding: "60px"}}>
            <span className="fa-solid fa-spinner fa fa-5x text-primary fa-aw fa-pulse"></span>
            {/* <FontAwesomeIcon icon="fa-solid fa-spinner" /> */}
        </div>
    )
}
export default Loading;