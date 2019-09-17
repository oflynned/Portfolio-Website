import React, {Component} from "react";

import "./android.css";

class Android extends Component {
    constructor() {
        super();
        this.state = {
            index: null,
            images: []
        }
    }

    componentDidMount() {
        this.setState({
            index: 0,
            images: this.props.images || []
        }, this.transitionImage());
    }

    transitionImage() {
        setTimeout(() => {
            const {index, images} = this.state;
            if (index < images.length - 1) {
                this.setState({index: index + 1})
            } else {
                this.setState({index: 0})
            }

            this.transitionImage();
        }, 5000);
    }

    render() {
        const {index, images} = this.state;
        return (
            <div className={"android"}
                 style={{backgroundImage: 'url("/pixel-outline.png")'}}>
                <div className={"inner-content"}
                     style={{backgroundImage: 'url("' + images[index] + '")'}}/>
            </div>
        );
    }
}

export default Android;
