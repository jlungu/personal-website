import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Projects from './Components/Projects';
import Skills from './Components/Skills'
import Coursework from './Components/Coursework'
<<<<<<< HEAD
import Contact from './Components/Contact'
=======
import Finance from './Components/Contact'
>>>>>>> 07d84673e951833bd9f809f146ad25df33ee2435

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Projects data={this.state.resumeData.main}/>
        <Skills data={this.state.resumeData.main}/>
        <Coursework data={this.state.resumeData.main}/>
<<<<<<< HEAD
        <Contact data={this.state.resumeData.main}/>
=======
        <Finance data={this.state.resumeData.main}/>
>>>>>>> 07d84673e951833bd9f809f146ad25df33ee2435
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;
