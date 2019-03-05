import React,{Component} from 'react';
import SearchContainer from './SearchContainer';
import Header from './Header';
import Landing from './LandingPage/Landing';
import Profile from '../models/Profile';
import CitiesList from './CitiesList';
import PostList from './PostList';


class Main extends Component{
    render(){
        return(
            <div className="container">
                <header>
                    <Header />
                </header>
                <section className ="col-1">
                    <Profile /> 
                    <CitiesList/>
                </section> 
                <section className="col-2"> 
                    <SearchContainer />
                    <PostList />
                </section> 
            </div>
        );
    }
}

export default Main;