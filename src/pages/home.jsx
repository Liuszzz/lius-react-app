import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

@connect(state => state)
class Home extends React.PureComponent {
    render() {
        return (
            <div>
                name: {this.props.userinfo.name}
                <p><Link to="/next">Next</Link></p>
            </div>
        );
    }
}

export default Home;
