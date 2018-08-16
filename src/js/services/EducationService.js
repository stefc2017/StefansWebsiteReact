import axios from 'axios';

/**
 * Localhost: http://localhost:3000/api/education
 * AWS: add here
 */
class EducationService{
    getEducationInfo(){
        return axios.get('http://localhost:9000/api/education')
    }
}

export default EducationService;
