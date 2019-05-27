import React, { Component } from "react";
import { Link } from "react-router-dom";



class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentDidUpdate() { }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    const style = { height: 70 };

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 text-left">
            <h1 className="text-success">
              <img style={style} src="/images/logo/logo.png" alt="" />
              vivi
            </h1>
          </div>

          <div className="col-md-4 text-right">
            <h5 className="mt-4"> {this.state.date.toLocaleTimeString()} </h5>
            <ul>
              <li className="list-inline-item"><Link to="/">หน้าหลัก</Link></li>
              <li className="list-inline-item"><Link to="/orders">รายการสั่ง</Link></li>
              <li className="list-inline-item"><Link to="/product">สินค้า</Link></li>
              <li className="list-inline-item"><Link to="/about">ผมเอง</Link></li>
            </ul>
          </div>
        </div>
        <hr />
      </div >
    );
  }
}
export default Header;
