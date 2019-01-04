import axios from 'axios';

class EducationService{
    getEducationInfo(){
        return axios.get('https://stefanvcouture.ca:9000/api/education')
    }
}

export default EducationService;
