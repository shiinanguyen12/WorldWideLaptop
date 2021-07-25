import React, { Component } from 'react';
import {DataNews} from '../component/DataNews'
import './News.css'
import { Link } from 'react-router-dom';
class News extends Component {
    constructor(props) {
        super(props);
        this.state={data:DataNews}
    }

    render(){
        const chunk = (arr, size) => arr.reduce((acc, e, i) => (i % size ? acc[acc.length - 1].push(e) : acc.push([e]), acc), []);
        var data=chunk(this.state.data, 3); 
        return(
            <div className="news-container">
                {
                data.map(subArr=>{
                   return (
                    <div className="row">
                        {
                          subArr.map(x=>{
                                  return(
                                    <div  key={x.id} className="col-md-4">
                                    
                                    <h2>{x.title}</h2>
                                    <p>{x.content}</p>
                                    <p>{x.src}</p>
                                    <Link to={`/News/${x.id}`} >
                                    Detail
                                    </Link>
                                
                                </div>
                                )}
                            )
                        
                        }
                    </div>
                    
                )}
                )
                }
            </div>
        )
    }
}

export default News