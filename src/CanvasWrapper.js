import React, { Component } from 'react'
import {fabric} from 'fabric';
class CanvasWrapper extends Component {

  componentDidMount() {
    var imgURL = 'https://s3.amazonaws.com/eth-kitties/752340.svg';

    var canvas = new fabric.Canvas('canvas');

    var kittyImg = new Image();
    kittyImg.onload = function (img) {
        var pug = new fabric.Image(kittyImg, {
          width: 1100,
          height: 1100,
          left: 0,
          top: 0,
          scaleX: .25,
          scaleY: .25
        });
        canvas.add(pug);
    };
    kittyImg.src = imgURL;
    kittyImg.crossOrigin = "Anonymous"

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
      <div>
        <canvas id="canvas" width="330" height="448"></canvas>
      </div>
    );
  }
}

export default CanvasWrapper
