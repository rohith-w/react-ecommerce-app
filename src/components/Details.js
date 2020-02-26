import React, { Component } from 'react'
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom'
import { ButtonContainer } from './Button'

class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {id,company,img,price,title,inCart,info} = value.detailProduct; {/* destructuring */}
                    return(
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanter text-blue my-5">
                                <h1>{title}</h1>
                                </div>
                            </div>  
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className="img-fluid" alt="product" />
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h1>Model : {title}</h1>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">Made by : <span className="text-uppercase">{company}</span></h4>
                                    <h4 className="text-blue"><strong>Price: <span>$</span>{price}</strong></h4> 
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">Product Information:</p>                                   
                                    <p className="text-muted lead">{info}</p>    
                                    <div>
                                        <Link to='/'>
                                        <ButtonContainer>Back to Products</ButtonContainer>
                                        </Link>
                                        <ButtonContainer cart disabled={inCart?true:false} onClick={() => {value.addToCart(id); value.openModal(id)}}>
                                            {inCart?'inCart':'Add To Cart'}
                                        </ButtonContainer>
                                    </div>                                
                                </div>
                            </div>  
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}

export default Details;
