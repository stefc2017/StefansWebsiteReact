import axios from 'axios';

/**
 * Localhost: http://localhost:9000/api/education
 * AWS: http://ec2-18-222-216-18.us-east-2.compute.amazonaws.com:9000/api/education
 */
class TechnicalSkillsService{
    getTechnicalSkillsByLanguage(){
        return axios.get('http://ec2-18-222-216-18.us-east-2.compute.amazonaws.com:9000/api/technicalskills/language')
    }

    getTechnicalSkillsByFramework(){
        return axios.get('http://ec2-18-222-216-18.us-east-2.compute.amazonaws.com:9000/api/technicalskills/framework')
    }

    getTechnicalSkillsByOperatingSystem(){
        return axios.get('http://ec2-18-222-216-18.us-east-2.compute.amazonaws.com:9000/api/technicalskills/operatingSystem')
    }

    getTechnicalSkillsBySoftware(){
        return axios.get('http://ec2-18-222-216-18.us-east-2.compute.amazonaws.com:9000/api/technicalskills/software')
    }
    
}

export default TechnicalSkillsService;
