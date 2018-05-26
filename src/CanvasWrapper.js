import React, { Component } from 'react'
import {fabric} from 'fabric';
class CanvasWrapper extends Component {
  //
  // constructor(props) {
  //   super(props)
  //   this.handleClick = this.handleClick.bind(this)
  //   this.state = {compositeImage: null}
  // }

  componentDidMount() {
    var imgURL = 'https://s3.amazonaws.com/eth-kitties/752340.svg';

    var canvas = new fabric.Canvas('canvas');

    var pugImg = new Image();
    pugImg.onload = function (img) {
        var pug = new fabric.Image(pugImg, {
            width: 1000,
            height: 1000,
            left: 50,
            top: 70,
            scaleX: .25,
            scaleY: .25
        });
        canvas.add(pug);
    };
    pugImg.src = imgURL;
    pugImg.crossOrigin = "Anonymous"

    fabric.Image.fromURL(this.props.userSrc, function(img) {
  // img.set(puppyProps);
  // canvas.add(img).setActiveObject(img);
      canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
        scaleX: canvas.width / img.width,
        scaleY: canvas.height / img.height
      });
    });
  }

  handleClick() {
    var canvas = document.getElementById("canvas")
    var dataURL = canvas.toDataURL()
    // this.setState({compositeImage: dataURL})
    this.props.savePlayground(dataURL)
  }

  render() {
    return (
      <div>
        <canvas id="canvas" width="640" height="480"></canvas>
      </div>
    );
  }
}

export default CanvasWrapper
