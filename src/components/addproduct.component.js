import React, { Component } from "react";

export default class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.onChangePhoto = this.onChangePhoto.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeQuantity = this.onChangeQuantity.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);

    this.state = {
      photo: null,
      name: "",
      description: "",
      category: "",
      quantity: "",
      price: "",
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.fileInput = React.createRef();
    this.resetFields = this.resetFields.bind(this);
  }

  onChangePhoto(e) {
    const file = e.target.files[0];
    if (file) {
      this.setState({
        photo: file,
      });
    }
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onChangeCategory(e) {
    this.setState({
      category: e.target.value,
    });
  }

  onChangeQuantity(e) {
    this.setState({
      quantity: e.target.value,
    });
  }
  onChangePrice(e) {
    this.setState({
      price: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(this.state.photo);
    console.log(this.state.name);
    console.log(this.state.description);
    console.log(this.state.category);
    console.log(this.state.quantity);
    console.log(this.state.price);

    this.fileInput.current.value = "";

    this.setState({
      photo: null,
      name: "",
      description: "",
      category: "",
      quantity: "",
      price: "",
    });
  }

  resetFields() {
    this.fileInput.current.value = "";

    this.setState({
      photo: null,
      name: "",
      description: "",
      category: "",
      quantity: "",
      price: "",
    });
  }

  render() {
    return (
      <div className="container">
        <h1>New Product</h1>
        <div className="col-lg-6">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="photoInput">Upload Photo:</label>
              <input
                type="file"
                className="form-control col-lg-4"
                id="photoInput"
                ref={this.fileInput}
                onChange={this.onChangePhoto}
              />
            </div>

            <div className="form-group">
              <label htmlFor="nameInput">Name:</label>
              <input
                type="text"
                className="form-control col-lg-4"
                id="nameInput"
                value={this.state.name}
                onChange={this.onChangeName}
              />
            </div>

            <div className="form-group">
              <label htmlFor="descriptionInput">Description:</label>
              <input
                type="text"
                className="form-control col-lg-4"
                id="descriptionInput"
                value={this.state.description}
                onChange={this.onChangeDescription}
              />
            </div>

            <div className="form-group">
              <label htmlFor="categoryInput">Category:</label>
              <input
                type="text"
                className="form-control col-lg-4"
                id="categoryInput"
                value={this.state.category}
                onChange={this.onChangeCategory}
              />
            </div>

            <div className="form-group">
              <label htmlFor="quantityInput">Quantity:</label>
              <input
                type="text"
                className="form-control col-lg-4"
                id="quantityInput"
                value={this.state.quantity}
                onChange={this.onChangeQuantity}
              />
            </div>

            <div className="form-group">
              <label htmlFor="priceInput">Price:</label>
              <input
                type="text"
                className="form-control col-lg-4"
                id="priceInput"
                value={this.state.price}
                onChange={this.onChangePrice}
              />
            </div>
            <br />
            <div className="d-flex justify-content-between">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <button
                type="button"
                onClick={this.resetFields}
                className="btn btn-primary"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
