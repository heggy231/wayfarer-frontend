import React,{Component} from 'react';


class Landing extends Component{
    render(){
        return(
            <div >
              <div id="home">
                <div id="landing-page-flex">
                    <div className="top-level-wrapper-flex">
                        <div id="top-level">
                            <h1>Wayfarer</h1>
                        </div>
                        <div id="subHeader">
                            <h2>Visit and Post your experiences</h2>
                        </div>
                        <div class="bouncy arrow-point-down">
                        <a class="fas fa-angle-double-down" href="#project">
                        </a>
                        </div>
                    </div>
                </div>
              </div> 
            </div>
        );
    }
}

export default Landing;