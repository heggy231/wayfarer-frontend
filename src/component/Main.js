import React,{Component} from 'react';
import SearchContainer from './SearchContainer';
import Profile from '../models/Profile';
import CitiesList from './CitiesList';
import PostList from './PostList';
import Header from '../component/Header';

class Main extends Component{
    render(){
        return(
            <div className="container">
                <Header />  
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