import React, { Component } from 'react'
import { connect } from "react-redux"
import { updateGithubRepos } from "../../actions/index"
import  GithubService  from "../../services/GithubService"
import "./PersonalProjects.css"

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
        var listItems = ""

        if(this.props.githubRepos.repos === ''){
            repos = ""
        }
        else{
            repos = this.props.githubRepos.repos.data
        }

        if(repos){
            listItems = repos.map((repo) =>  
                <div key={repo.id}>
                    <a className ="bigFont" href={repo.html_url}>{repo.name}</a>
                    <h5 className ="center">{repo.description ? repo.description : 'No description'}</h5>
                    <h5 align="center"><b>Primary language used: {repo.language}</b></h5>
                    <br></br>
                </div>
                );
        }

    return (
        <div className="ui grid container centered personalProjectsContainer">
            <div className="content personalProjectsPaddingTop">
                <h1 id="personalProjectsTitle"> Projects </h1>
                {listItems}
            </div>
        </div>
    );
  }
}

const PersonalProjects = connect(mapStateToProps, mapDispatchToProps)(PersonalProjectsNoState);
export default PersonalProjects;
