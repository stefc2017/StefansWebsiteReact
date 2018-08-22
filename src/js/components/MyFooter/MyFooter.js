import React, {Component} from 'react';
import {Footer} from 'react-materialize';
import FontAwesome from 'react-fontawesome';
import './MyFooter.css';

class MyFooter extends Component{
    render(){
        return (
            <div>
                <footer class="page-footer footer">
                    <div class="container">
                        <div class="row">
                            <a href="https://github.com/stefc2017" class="github"><FontAwesome name='github'/></a>
                            <a href="https://www.linkedin.com/in/StefanVCouture" class="linkedIn"><FontAwesome name='linkedin'/></a>
                            {/* </div> */}
                        </div>
                    </div>
                    <div class="footer-copyright">
                        <div class="container">
                        Copyright © 2018 Stefan Couture. All rights reserved
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}
export default MyFooter;