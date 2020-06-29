import React, { Component } from "react";
import ReactGA from 'react-ga';
import Header from './Header'
import About from './About'
import Projects from './Projects'
import Skills from './Skills'
import Coursework from './Coursework'
import Contact from './Contact'
import Footer from './Footer'
import $ from 'jquery';

class PersonalPage extends Component {
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
    render(){
        return(
            <div>
                <Header data={this.state.resumeData.main}/>
                <About data={this.state.resumeData.main}/>
                <Projects data={this.state.resumeData.main}/>
                <Skills data={this.state.resumeData.main}/>
                <Coursework data={this.state.resumeData.main}/>
                <Contact data={this.state.resumeData.main}/>
                <Footer data={this.state.resumeData.main}/>
            </div>
        );
    }
}
export default PersonalPage;