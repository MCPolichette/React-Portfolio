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
                Having worked in a few different industries, I bring a new perspective to the table.  I’ve worked labor, retail, manufacturing, and in a laboratory.  Because of  those job’s I’ve been able to take lessons from one industry and apply them elsewhere to improve operations.   I like to take on new challenges, and learn new ways to tackle problems.
  I am new to programming, but I have finished a course through the University of Utah  working with Javascript, Node, Express, React, Mongodb, SQL and more.
  
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
