import React, { Component } from "react";
import './Nav.css';

class Background extends Component {
  render() {
    return (
      <div className="bg-cover pb-40 my-2" style={{ backgroundImage: "url('background.jpg')", height: "100%" }}>
        <div className="flex flex-col items-center space-y-8">
          <img src="logo.png" className="h-32 mt-36 rounded" alt="Logo" />
          <div className="space-y-3">
            <h1 className="text-center text-5xl md:text-7xl font-bold text-white" id="logo">MaisonManou</h1>
            <h2 className="text-center text-2xl text-white" id="logo">Original Moroccan House Of leather</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Background;
