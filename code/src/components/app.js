import React from "react"
import Station from "./station.js"

class Radioplayer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      radioItems: []
    }
  }
  componentDidMount() {
    fetch("http://api.sr.se/api/v2/channels?format=json&size=100").then((response) => {
      return response.json()
    }).then((json) => {
      this.setState({
        radioItems: json.channels
      })
    })
  }

  render() {
    if (this.state.radioItems.length > 0) {
      return <div>Recent news: {this.state.radioItems[0].tagline}</div>
    } else {
      return <div>Loading...</div>
    }
  }
}

export default Radioplayer
