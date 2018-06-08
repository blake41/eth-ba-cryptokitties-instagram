import React, { Component } from 'react'

class MobileCamera extends Component {

  constructor(props) {
    super(props)
    this.handlePicture = this.handlePicture.bind(this)
    this.state = {objectURL: null}
  }

  handlePicture(event) {
    const fileList = event.target.files
    const file = fileList[0]
    const fr = new FileReader()
    fr.addEventListener("load", () => {
      this.setState({objectURL: fr.result})
      this.props.saveDataUrl(fr.result)
    })
    fr.readAsDataURL(file)
    // this.setState({objectURL: URL.createObjectURL(file)})
  }

  render() {
    return (
      <div className='w-100 z-999'>
        <input type='file' accept="image/*" id="file-input" onChange={this.handlePicture}/>
      </div>
    );
  }
}

export default MobileCamera
