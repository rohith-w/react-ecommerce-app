import React, { Component } from 'react'
import {ProductConsumer} from '../context'
import styled from 'styled-components'
import { ButtonContainer } from './Button'
import {Link} from 'react-router-dom'

class CompareModal extends Component {
    render() {
        return (
            <ProductConsumer>
            {(value) => {
                const {modalCompareOpen,closeCompareModal} = value;
                const {img, title} = value.modalCompareProduct;

                if(!modalCompareOpen){
                    return null
                }
                else {
                    return (
                        <ModalContainer>
                            <div className="container">
                                <div className="row">
                                    <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                        <h5><u>item added to compare</u></h5>
                                        <img src={img} className="img-fluid" alt="product" />
                                        <h5>{title}</h5>
                                        <Link to='/'>
                                            <ButtonContainer onClick={() => closeCompareModal()}>
                                                Compare more Products
                                            </ButtonContainer>
                                        </Link>
                                        <Link to='/compare'>
                                            <ButtonContainer cart onClick={() => closeCompareModal()}>
                                                See Added Products
                                            </ButtonContainer>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </ModalContainer>
                    )
                }
            }}
            </ProductConsumer>
        )
    }
}

export default CompareModal;

const ModalContainer = styled.div`
        position:fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background: rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        #modal {
            background: var(--mainWhite);
        }
`;