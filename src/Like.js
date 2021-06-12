import { Component } from "react";

class Like extends Component {
    state = {
        count: 0
    }

    incrementMe =() => {
        console.log("give me some likes");
        let newCount = this.state.count + 1;
        this.setState({
            count: newCount
        })
    }

    render() {
        return (
            <div className="send-like">
                <button onClick={this.incrementMe}>Likes: {this.state.count} </button>
            </div>
        )
    }
}

export default Like;