import axios from 'axios';

/**
 * Localhost: http://localhost:9000/api/education
 * AWS: http://stefanvcouture.ca:9000/api/education
 */
class EducationService{
    getEducationInfo(){
        return axios.get('http://stefanvcouture.ca:9000/api/education')
    }
}

export default EducationService;
