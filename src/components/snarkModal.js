import React from "react";
import "../App.css";
import Snark from '../img/urges.jpeg';
export default class ImageComponent extends React.Component 
{
  state = { isOpen: false };

  handleShowDialog = () => {
    this.setState({ isOpen: !this.state.isOpen });
    console.log("cliked");
  };

  render() {
    return (
      <div>
          <img 
            // id='snarkImg'
            src={Snark} alt='Snark'
            onClick={this.handleShowDialog}
            alt="no image"
        />
        {this.state.isOpen && (
          <dialog
          // id='snarkImg'
            className="dialog"
            style={{ position: "absolute" }}
            open
            onClick={this.handleShowDialog}
          >
            <img
              // id='snarkImg'
              src={Snark} alt='Snark'
              onClick={this.handleShowDialog}
              alt="no image"
            />
          </dialog>
        )}
      </div>
    );
  }
}