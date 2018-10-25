import React, { Component } from "react";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import ProjectCard from "./components/ProjectCard";
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
          <h1>Mark Polichette</h1>
        </header>
        <div className="container">
          <div className="row">
            <div className="col s12">
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
        <Footer />
      </div>
    );
  }
}

export default App;
