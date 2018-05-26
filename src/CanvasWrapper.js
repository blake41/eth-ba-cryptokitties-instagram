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
    var puppyUrl = 'http://i.imgur.com/8rmMZI3.jpg';
    var imgUrl = this.props.kittySrc
    var canvas = new fabric.Canvas('canvas');

    fabric.Image.fromURL(imgUrl, function(img) {
      img.set(props);
      canvas.add(img).setActiveObject(img);
    });

    fabric.Image.fromURL(this.props.userSrc, function(img) {
      img.set(puppyProps);
      canvas.add(img).setActiveObject(img);
    });

    // var pugImg = new Image();
    // pugImg.onload = function (img) {
    //     var pug = new fabric.Image(pugImg, {
    //         angle: 45,
    //         width: 500,
    //         height: 500,
    //         left: 50,
    //         top: 70,
    //         scaleX: .25,
    //         scaleY: .25
    //     });
    //     canvas.add(pug);
    // };
    // pugImg.src = imgURL;
  }

  render() {
    return (
      <canvas id="canvas" width="640" height="480"></canvas>
    );
  }
}

export default CanvasWrapper
