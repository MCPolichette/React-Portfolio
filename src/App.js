import React, { Component } from "react";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import ProjectCard from "./components/ProjectCard";
import ProfilePicture from "./components/ProfilePicture";
import "./App.css";
import pieces from "./pieces.json";
class App extends Component {
  state = {
    pieces: pieces
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ProfilePicture /><h3>Mark Polichette</h3>
        </header>
        <div className="container">
          <div className="row">
            <div className="col m12">
              <AboutMe />
            </div>
          </div>
          <div className="row">
            <div className="col s12 center">
              <div>
                {this.state.pieces.map(piece => (
                  <ProjectCard
                    name={piece.name}
                    key={piece.key}
                    image={piece.image}
                    link={piece.link}
                    github={piece.github}
                    tech={piece.tech}
                    description={piece.description}
                  />
                ))}
              </div>
            </div>{" "}
          </div>
        </div>
        <hr className="bottom-margin" />
        <Footer />
      </div>
    );
  }
}

export default App;
