import React,{Component} from 'react';


class SearchContainer extends Component{
    render(){
        return(
            <section >
                <h1>Searched City</h1> {/* <--we will have to pass a prop or state in here to use the name of the searched city */}
                <img/> {/* <--we will have to pass a prop or state in here */}
                <button>Add Post</button> {/* <--When this button is pressed the addPost function is triggered and form appears on screen */}
                <button>Mine</button> {/* <--When this button is press the prependmine function is triggered. and all user's entries goes to the top of the post list */}
                <div></div>
                This is the SearchContainer.
            </section>
        );
    }
}

export default SearchContainer;