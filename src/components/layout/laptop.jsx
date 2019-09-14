import React, {Component} from "react";

import "./laptop.css";

// TODO replace with image array
class Laptop extends Component {
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
            images: this.props.images
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
        }, 3500);
    }

    render() {
        const {index, images} = this.state;
        return (
            <div className={"laptop"}
                 style={{backgroundImage: 'url("/macbook-outline-cropped.png")'}}>
                <div className={"inner-content"}
                     style={{backgroundImage: 'url("' + images[index] + '")'}}/>
            </div>
        );
    }
}

export default Laptop;
