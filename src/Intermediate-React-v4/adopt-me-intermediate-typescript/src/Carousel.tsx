import { Component, MouseEvent } from "react";

interface Props {
  images: string[]
}

class Carousel extends Component<Props> {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (e: MouseEvent<HTMLElement>) => {
    if (!(e.target instanceof HTMLElement)) {
      return;
    }

    if (e.target.dataset.index) {
      this.setState({
        active: Number(e.target.dataset.index),
      });
    }
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photo, index) => {
            return (
              // eslint-disable-next-line
              <img
                onClick={this.handleIndexClick}
                key={photo}
                src={photo}
                data-index={index}
                className={index === active ? "active" : ""}
                alt="animal thumbnail"
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Carousel;
