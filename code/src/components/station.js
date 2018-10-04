import React from "react"

class Station extends React.Component {

  render() {
    return (

      <div className="Station">
        <img className="image-box" src={this.props.image} alt="Station" />
        <h2>{this.props.name}</h2>
        <p>{this.props.tagline}</p>
        <audio controls>
          <source src={this.props.audio}type="audio/mpeg" />
          Your browser does not support the audio tag.
        </audio>

      </div>

    )
  }

}

export default Station
