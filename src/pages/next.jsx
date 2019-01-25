import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

class Next extends React.PureComponent {
    render() {
        return (
            <div>
                Next
                <Link to="/">Home</Link>
            </div>
        );
    }
}

export default Next;
