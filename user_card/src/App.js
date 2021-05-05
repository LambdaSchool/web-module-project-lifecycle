import React from "react";
import axios from "axios";
import "./App.css";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      followers: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/kaseembradley")
      .then((res) => {
        this.setState({
          ...this.state,
          user: res.data,
        });
      })
      .catch((err) => console.log(err));

    axios
      .get("https://api.github.com/users/kaseembradley/followers")
      .then((res) => {
        this.setState({
          ...this.state,
          followers: res.data,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Card className="mb-3" style={{ color: "#000", padding: "4rem" }}>
            <div className="img-container">
              <img src={this.state.user.avatar_url} width="100" />
            </div>
            <Card.Body>
              <Card.Title>GitHub User Card</Card.Title>
              <h3>Name</h3>
              <h3>{this.state.user.name}</h3>
              <p>Followers</p>
              {this.state.followers.map((item) => {
                return (
                  <Card.Text key={this.state.user.id}>{item.login}</Card.Text>
                );
              })}
              <Button variant="secondary">Test</Button>
            </Card.Body>
          </Card>
        </header>
      </div>
    );
  }
}

export default App;
