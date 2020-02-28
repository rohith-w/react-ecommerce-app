import React, { Component } from 'react'
import Title from '../Title'
import { ProductConsumer } from '../../context';
import EmptyCompareList from './EmptyCompareList';
import CompareList from './CompareList';

class CompareProduct extends Component {
    render() {
        return (
            <ProductConsumer>
            {value => {
                const {compareList} = value;
                
                if(compareList.length > 0) {
                    return (
                        <React.Fragment>
                            <Title name="Compare" title="Products"/>
                            <CompareList value={value}/>
                        </React.Fragment>
                    )
                }
                else {
                    return (
                        <EmptyCompareList />
                    )
                }
            }}
            </ProductConsumer>
        )
    }
}


export default CompareProduct;