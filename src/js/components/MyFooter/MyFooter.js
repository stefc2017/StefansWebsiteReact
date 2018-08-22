import React, {Component} from 'react';
import {Footer} from 'react-materialize';

import './MyFooter.css';

class MyFooter extends Component{
    render(){
        return (
            <div>
                <Footer copyrights="&copy; 2018 Stefan Couture. All rights reserved"
                className='footer'
                >
                <div className="social-networks">
                    <a href="https://github.com/stefc2017" className="github"><i className="fa fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/StefanVCouture" className="linkedIn"><i className="fa fa-linkedin"></i></a>
                </div>
                </Footer>
            </div>
        );
    }
}
export default MyFooter;