import React from "react"

class Station extends React.Component {

  render() {
    const channelColor = {
      background: {
        backgroundColor: `#${this.props.color}`
      }
    }
    return (
      <div className="Station"style={channelColor.background}>
        <img className="image-box" src={this.props.image} alt="Station" />
        <div className="radioContent">
          <h2>{this.props.name}</h2>
          <p>{this.props.tagline}</p>
          <div className="audio-player">
            <audio controls>
              <source src={this.props.audio}type="audio/mpeg" />
          Your browser does not support the audio tag.
            </audio>
          </div>
        </div>

      </div>

    )
  }

}

export default Station
