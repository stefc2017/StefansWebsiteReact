import axios from 'axios';

/**
 * Localhost: http://localhost:9000/api/education
 * AWS: http://ec2-18-222-216-18.us-east-2.compute.amazonaws.com:9000/api/education
 */

class GithubService{
    getGitHubRepos(){
        return axios.get('https://api.github.com/users/stefc2017/repos')
    }
    
}

export default GithubService;
