import React from "react";

const Footer = (props) => {
    const { company, email } = props;
    return (
        <div className="container-fluid">
            <hr />
            <div className="text-center title text-uppercase">
                <small>
                    <span className="text-danger"> Dev By {company} </span>| ติดต่อ : {email}

                </small>
            </div>
        </div>
    )
}

export default Footer