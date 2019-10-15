import React, { Component } from 'react';
import api from '../../services/api';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';

import "./styles.css";

export default class Product extends Component {


    constructor(props){
        super(props);
        this.goBack = this.goBack.bind(this);
    }

    state = {
        product: {},
    };

    async componentDidMount(){
        const { id } = this.props.match.params;

        const response = await api.get(`/products/${id}`);

        this.setState({ product: response.data }); 
    }

    goBack() {
        this.props.history.goBack();
    }

    render() {
        const { product } = this.state;

        return (
            <div>
                <Header />
                <div className="product-info">
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <p>
                        URL: <a href={product.url}>{product.url}</a>
                    </p>
                </div>
                <div className="product-historyBack">
                    <Link onClick={this.goBack}>Back</Link>
                </div>
            </div>
        );
    }
}