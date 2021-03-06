import React from 'react';
import './Search.scss';
import freeShipping from './free_shipping.png';


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [], };
    } 

    async componentDidMount(){
        await fetch("https://api.mercadolibre.com/sites/MCO/search?q=" + this.props.match.params.search)
        .then((response) => {
            return response.json()
        })
        .then((results) => {
            this.setState({ items: results.results });
        })
    }

    renderContent(shipping){
        if (shipping){
        return <div className="truck"><img src={freeShipping} alt="envio gratis"/></div>;
        } 
    }


    render() {
        return (
        <div className="full-card">
            {
            this.state.items.slice(0,100).map((item) => {
            return ( 
                    <div key={item.id}>
                        <div className="bg-card">
                            <div className="card-container">
                                <a href={'/items/' + item.id}><div><img src={item.thumbnail} alt="thumbnail" className="img-results"/></div></a>
                                <div className="description">
                                    <div className="price-truck-container">
                                        <div className="price">$ {item.price}</div>
                                        <div className="truck">{this.renderContent(item.shipping.free_shipping)}</div>
                                    </div>
                                    <a href={'/items/' + item.id}><div className="title">{item.title}</div></a>
                                </div>
                                <div className="state">{item.address.state_name}</div>
                            </div>
                        </div>
                    </div>
                );
                })
            }
        </div>
        );
    }
}

export default Search;