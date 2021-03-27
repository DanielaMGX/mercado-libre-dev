import React from 'react';
import './Details.scss';


class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = { item: [], details:[]};
    } 

    async componentDidMount(){
        await fetch("https://api.mercadolibre.com/items/" + this.props.match.params.id)
        .then((response) => {
            return response.json()
        })
        .then((results) => {
            this.setState({ item: results });
        })

        await fetch("https://api.mercadolibre.com/items/" + this.props.match.params.id + "/description")
        .then((response) => {
            return response.json()
        })
        .then((results) => {
            this.setState({ details: results });
        })
    }

    render() {
        return (
            <div className="full-card">
                <div>
                    <div className="bg-card">
                        <div className="detail-container">
                            
                            <div className="left-container">
                                <div><img src={this.state.item.thumbnail} alt="product" className="img-detail"/></div>
                                <div>
                                    <p className="detail-product">Descripción del producto</p>
                                    <p className="detail-text">{this.state.details.plain_text}
                                    </p>
                                </div>    
                            </div>

                            <div className="right-container">
                                <p className="sell">{this.state.item.condition} - {this.state.item.sold_quantity} vendidos</p>
                                <h1 className="product-title">{this.state.item.title}</h1>
                                <p className="price"> ${this.state.item.price}</p>
                                <button className="buy-btn">Comprar</button>
                            </div>
                        </div>
                    </div>
                    < br/>  
                </div>    
            </div>
        );
    }
}



        
  
export default Details;