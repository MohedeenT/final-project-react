import React, { Component } from "react";

class Card extends Component {
  static defaultProps = {
    name: "Not Specified",
    email: "Not Specified",
    tel: "Not Specified",
    photo: "",
  };

  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
    };
  }

  handleRemoveCard = () => {
    this.setState({ isVisible: false });
  };

  static getDerivedStateFromProps(nextProps) {
    const { name, email, tel, photo } = nextProps;

    return {
      name: name || "Not Specified",
      email: email || "Not Specified",
      tel: tel || "Not Specified",
      photo:
        photo ||
        "https://banffventureforum.com/wp-content/uploads/2019/08/no-photo-icon-22.png",
    };
  }

  render() {
    const { name, email, tel, photo } = this.state;
    const { isVisible } = this.state;

    if (!isVisible) {
      return null; // Don't render the card if isVisible is false
    }

    return (
      <div className="business-card">
        <img src={photo} alt="Profile" />
        <h3>{name}</h3>
        <p>Email: {email}</p>
        <p>Tel: {tel}</p>
        <button onClick={this.handleRemoveCard}>Remove</button>
      </div>
    );
  }
}

export default Card;
