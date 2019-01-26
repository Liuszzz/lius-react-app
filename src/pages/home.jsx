import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { changeUserinfo } from "../actions/index";

@connect(
    state => state,
    {changeUserinfo}
)
class Home extends React.PureComponent {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
    }
    state = {
        name: this.props.userinfo.name,
        inputValue: ""
    };
    changeName() {
        this.props.changeUserinfo({
            name: this.state.inputValue
        })
        console.log(this.props.userinfo.name)
    };
    handleChange(e){
        this.setState({
            inputValue: e.target.value
        })
        console.log(this.state.inputValue)
    };
    render() {
        return (
            <div>
                name: {this.state.name}
                <input value={this.state.inputValue} onChange={this.handleChange} />
                <button onClick={(e)=>{this.changeName(e)}}>完成</button>
                <p>
                    <Link to="/next">Next</Link>
                </p>
            </div>
        );
    }
}

export default Home;
