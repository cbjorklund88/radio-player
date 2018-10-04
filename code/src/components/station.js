import React from "react"

class Station extends React.Component {

  render() {
    return (

      <div className="station">

        <h2>{this.props.title}</h2>
        <img className="image-box" src={this.props.image} alt="Station" />
        <p>{this.props.type}</p>
        <p>{this.props.substance}</p>
        <p>{this.props.size}</p>
        <p>{this.props.numberInPack}</p>

      </div>

    )
  }

}

export default Station
