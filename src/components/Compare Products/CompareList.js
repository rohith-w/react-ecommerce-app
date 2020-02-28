import React from 'react'

export default function CompareList({value}) {
    const {compareList} = value

    return (
        <div className = "row">
        <div className="col-12 mt-5 text-center">
            <table className="table">
                <thead className="thead-default">
                   <tr>
                      <th />
                        {compareList.map(item =>
                            <th key={item.id}>
                                {item.title}
                            </th>
                        )}   
                   </tr> 
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Product</th>
                        {compareList.map(item =>
                            <td key={item.id} className="text-center">
                            <img src={item.img} style={{width:"5rem",height:"5rem"}} alt="product" />
                            </td>
                        )}
                    </tr>
                    <tr>
                        <th scope="row">Price</th>
                        {compareList.map(item =>
                            <td key={item.id} className="text-center">${item.price}</td>
                        )}
                    </tr>
                    <tr>
                        <th scope="row">Company</th>
                        {compareList.map(item =>
                            <td key={item.id} className="text-center">{item.company}</td>
                        )}
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    ) 
}
