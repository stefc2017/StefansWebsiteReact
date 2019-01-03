import React, { Component } from 'react'
import { connect } from "react-redux"
import { updateGithubRepos } from "../../actions/index"
import  GithubService  from "../../services/GithubService"
//import "./TechnicalSkills.css"

//To map a state to prop (to display)
const mapStateToProps = state => {
    return { githubRepos: state.githubRepos };
  };
  
  //To update the state
  const mapDispatchToProps = dispatch => {
    return {
        updateGithubRepos: githubRepos => dispatch(updateGithubRepos(githubRepos))
    };
  };

class PersonalProjectsNoState extends Component {
    
    componentDidMount() {
        var gitHubService = new GithubService()
        gitHubService.getGitHubRepos().then((result) => {
          this.props.updateGithubRepos({'repos': result});
        });
    }
    
    render() {
        var repos = ""
        if(this.props.githubRepos.repos === ''){
            repos = ""
        }
        else{
            repos = this.props.githubRepos.repos
        }

        if(repos){
            console.log("here: " + repos)
        }

    return null
  }
}

const PersonalProjects = connect(mapStateToProps, mapDispatchToProps)(PersonalProjectsNoState);
export default PersonalProjects;