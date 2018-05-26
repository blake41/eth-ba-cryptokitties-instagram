import React, { Component } from 'react'
import {fabric} from 'fabric';
class CanvasWrapper extends Component {

  componentDidMount() {
    var canvas = new fabric.Canvas('c');
    fabric.Image.fromURL(this.props.kittySrc, function(img) {
      img.scale(1).set({
        left: 0,
        top: 0
      });
      canvas.add(img).setActiveObject(img);
    });
  }

  render() {
    return (
      <canvas id='c'></canvas>
    );
  }
}

export default CanvasWrapper
