import React from "react";
import "./Slider.css";

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
  }

  onChange = () => {
    this.setState({ value: this.refs.slider.value });
    this.props.onChange(this.refs.slider.value);
  };

  onInputChange = () => {
    this.setState({ value: this.refs.textbox.value });
    this.props.onChange(this.refs.slider.value);
  };

  render() {
    return (
      <div className="slidecontainer">
        <div className="container">
          <div style={{  display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
          <p style={{fontSize: 12}}>{this.props.title}</p>

          <input
            type="text"
            value={this.state.value}
            onChange={this.onInputChange}
            ref="textbox"
            size={this.props.size}
            height={3}
            max={this.props.max}
            step="0.0001"
            style={{width: 50}}
          />
          </div>
        

        <input
          ref="slider"
          type="range"
          min={this.props.min}
          max={this.props.max}
          value={this.state.value}
          class="slider"
          id="myRange"
          step="0.0001"
          onChange={this.onChange}
          style={{height: 8}}
        />
        </div>
      </div>
    );
  }
}

Slider.defaultProps = {
  value: 0,
  min: 0,
  max: 100,
  size: 4,
  title: "Title",
};

export default Slider;
