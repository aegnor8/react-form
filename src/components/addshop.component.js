import React, { Component } from "react";

export default class AddShop extends Component {
  constructor(props) {
    super(props);
    this.onChangeLogo = this.onChangeLogo.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);

    this.state = {
      logo: null,
      name: "",
      description: "",
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.fileInput = React.createRef();
    this.resetFields = this.resetFields.bind(this);
  }

  onChangeLogo(e) {
    const file = e.target.files[0];
    if (file) {
      this.setState({
        logo: file,
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

  onSubmit(e) {
    e.preventDefault();

    console.log(this.state.logo);
    console.log(this.state.name);
    console.log(this.state.description);

    this.fileInput.current.value = "";

    this.setState({
      logo: null,
      name: "",
      description: "",
    });
  }

  resetFields() {
    this.fileInput.current.value = "";

    this.setState({
      logo: null,
      name: "",
      description: "",
    });
  }

  render() {
    return (
      <div className="container">
        <h1>New Shop</h1>
        <div className="col-lg-6">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="logoInput">Upload Logo:</label>
              <input
                type="file"
                className="form-control col-lg-4"
                id="logoInput"
                ref={this.fileInput}
                onChange={this.onChangeLogo}
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
