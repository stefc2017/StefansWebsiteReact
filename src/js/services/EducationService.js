import axios from 'axios';

/**
 * Localhost: http://localhost:9000/api/education
 * AWS: http://ec2-18-222-216-18.us-east-2.compute.amazonaws.com:9000/api/education
 */
class EducationService{
    getEducationInfo(){
        return axios.get('http://ec2-18-222-216-18.us-east-2.compute.amazonaws.com:9000/api/education')
    }
}

export default EducationService;
