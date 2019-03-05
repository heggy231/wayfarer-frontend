import React,{Component} from 'react';
import SearchBar from './SearchBar';

class Header extends Component{
    render(){
        return(
            <header>
                <h1>This Header !!!  WAYFARER </h1>
                <SearchBar />
            </header>
        );
    }
}

export default Header;