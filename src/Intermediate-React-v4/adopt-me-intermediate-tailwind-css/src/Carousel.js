import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (e) => {
    this.setState({
      active: Number(e.target.dataset.index),
    });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="flex">
        <img className="w-3/5" src={images[active]} alt="animal" />
        <div className="w-2/5 mx-2 flex flex-wrap gap-2 bg-white h-min p-5 rounded border-2 border-yellow-400">
          {images.map((photo, index) => {
            return (
              // eslint-disable-next-line
              <img
                onClick={this.handleIndexClick}
                key={photo}
                src={photo}
                data-index={index}
                className={
                  "h-16 w-16 rounded-full hover:opacity-50 cursor-pointer" +
                  (index === active
                    ? " border-2 border-red-200 opacity-50"
                    : "")
                }
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
