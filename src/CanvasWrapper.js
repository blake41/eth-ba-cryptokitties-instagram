import React, { Component } from 'react'
import {fabric} from 'fabric';
class CanvasWrapper extends Component {

  componentDidMount() {
    var imgURL = 'http://i.imgur.com/8rmMZI3.jpg';

    var canvas = new fabric.Canvas('canvas');

    var pugImg = new Image();
    pugImg.onload = function (img) {
        var pug = new fabric.Image(pugImg, {
            angle: 45,
            width: 500,
            height: 500,
            left: 50,
            top: 70,
            scaleX: .25,
            scaleY: .25
        });
        canvas.add(pug);
    };
    pugImg.src = imgURL;
    pugImg.crossOrigin = "Anonymous"
  }

  render() {
    return (
      <canvas id="canvas" width="640" height="480"></canvas>
    );
  }
}

export default CanvasWrapper
