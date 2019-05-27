import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";

class NotFound extends Component {

    render() {
        return (
            <div>
                <Header />
                <h1 className="title mb-5">404</h1>
                <p className="title mb-5">ไม่เจออะไรเลย</p>
                < Footer />
            </div>
        )
    }

}


export default NotFound;