import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    this.setState({ spans: Math.ceil(height / 10) });
  };

  render() {
    const { urls, description } = this.props.image;
    return (
      <img
        style={{ gridRowEnd: `span ${this.state.spans}` }}
        ref={this.imageRef}
        src={urls.regular}
        alt={description}
      />
    );
  }
}

export default ImageCard;
