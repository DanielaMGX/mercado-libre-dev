import React from 'react';
import './SearchBar.scss';
import SearchImg from './lupa.png';
import logo from './Logo-MercadoLibre-Codo-a-Codo-2.png';


class SearchBar extends React.Component {

    state = { word: ''};

    onFormSubmit = event => {
        console.log(this.state.word)
    }

    render() {
        return (
            <div>
                <form className="bg-search" onSubmit={this.onFormSubmit}>
                    <div className="search-container">
                        <a href='/'><div className="logo"><img src={logo} alt="logo"/></div></a>
                        <div className="container-search-box">
                            <input 
                                className="search-box"
                                type="text" 
                                value={this.state.word} 
                                onChange={e => this.setState({word: e.target.value})} 
                                placeholder="Nunca dejes de buscar">
                            </input>
                            <input className="container-search-btn" type="image" src={SearchImg} alt="search-btn"/>    
                        </div>
                    </div>
                </form>
            </div>
        );
    }    
};

export default SearchBar;