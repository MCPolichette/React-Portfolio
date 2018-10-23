import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PortfolioCard from "./components/PortfolioCard";
import ProjectCard from "./components/ProjectCard";
import "./App.css";
import pieces from "./pieces.json";
class App extends Component {
  state = { pieces: pieces };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Mark Polichette</h1>
        </header>
        <div className="container">
          <div className="row">
            <div className="col s12">
              <p className="App-intro">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                imperdiet erat eu nisi mattis, a finibus arcu dignissim. Proin
                at maximus erat. Donec in augue sodales, ultrices purus
                hendrerit, aliquam lacus. Pellentesque tincidunt sagittis
                tempus. Donec nibh dui, commodo vitae massa a, congue pretium
                ligula. Sed consectetur lectus sem, congue rutrum nunc maximus
                vel. Ut at cursus leo, eu blandit urna. Etiam lectus ex,
                suscipit non leo in, viverra pellentesque nulla. Phasellus
                vehicula iaculis orci, vel ultricies lorem molestie quis. Nullam
                ultricies congue velit id luctus. Etiam vestibulum mi velit, ac
                auctor ante laoreet eu. Nam quis suscipit ligula, vel mattis
                nisl. Pellentesque hendrerit eros est, non pharetra enim sodales
                vel. Vivamus a justo nec nisi sagittis lobortis.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col s12 center">
              <div>
                {this.state.pieces.map(pieces => (
                  <ProjectCard
                    name={pieces.name}
                    key={pieces.key}
                    image={pieces.image}
                    link={pieces.link}
                    github={pieces.github}
                    tech={pieces.tech}
                    description={pieces.description}
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
