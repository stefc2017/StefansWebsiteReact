import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import './MyFooter.css';

class MyFooter extends Component{
    render(){
        return (
            <div className="topFooter">
                <footer className="page-footer footer">
                    <div className="container">
                        <div>
                            <a href="https://github.com/stefc2017" className="github"><FontAwesome name='github'/></a>
                            <a href="https://www.linkedin.com/in/StefanVCouture" className="linkedIn"><FontAwesome name='linkedin'/></a>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="container">
                        Copyright © 2019 Stefan Couture. All rights reserved
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}
export default MyFooter;