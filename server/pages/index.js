import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";

class Index extends Component {
    render() {
        return (
            <div>
                <Head>


                    <meta charset="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
                    <link rel="stylesheet" href="/static/css/style.css" />
                    <Header />
                </Head>

                <Footer />
            </div>
        )
    }
}

export default Index


