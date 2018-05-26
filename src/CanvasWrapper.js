import React, { Component } from 'react'
import {fabric} from 'fabric';
class CanvasWrapper extends Component {

  componentDidMount() {
    // var canvas = new fabric.Canvas('c',{ width: 900, height: 600 });
    // // canvas.setHeight(1000)
    // // canvas.setWidth(2000)
    var props = {
      width: 1000,
      height: 1000,
      left: 50,
      top: 70,
      scaleX: .25,
      scaleY: .25
    }
    var puppyProps = {
      width: 500,
      height: 500,
      left: 500,
      top: 70,
      scaleX: .25,
      scaleY: .25
    }
    var kittyUrl = this.props.kittySrc
    var canvas = new fabric.Canvas('canvas');

    fabric.Image.fromURL(kittyUrl, function(img) {
      img.set(props);
      canvas.add(img).setActiveObject(img);
    });

    fabric.Image.fromURL(this.props.userSrc, function(img) {
      // img.set(puppyProps);
      // canvas.add(img).setActiveObject(img);
      canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
        scaleX: canvas.width / img.width,
        scaleY: canvas.height / img.height
     });
    });
  }

  render() {
    return (
      <canvas id="canvas" width="640" height="480"></canvas>
    );
  }
}

export default CanvasWrapper
