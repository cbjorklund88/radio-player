import React from "react"
import Station from "./station.js"

class App extends React.Component {

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
      this.setState({ radioItems: json.channels })
    })
  }

  render() {
    if (this.state.radioItems.length > 0) {
      return (
        <div>
          <div className="header-info">
            <img src="./sr-image.jpg" alt="sr-logo" className="sr-image" />
            <input type="text" placeholder="Sök.."className="search-input" />
          </div>
          <div className="radioPlayer">
            {this.state.radioItems.map((channel) => {
              return (
                <Station
                  image={channel.image}
                  name={channel.name}
                  tagline={channel.tagline}
                  audio={channel.liveaudio.url}
                  color={channel.color} />
              )
            })}
          </div>
          <footer />
        </div>
      )
    } else {
      return <div>Loading...</div>
    }
  }
}

export default App
