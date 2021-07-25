import React  from 'react';
import './NewDetails.css';
import { useParams } from 'react-router-dom'
import { DataNews  } from '../component/DataNews';

const NewsDetails = () => {
    const { id } = useParams();
   // var title='', content='';
    var curr ={}
    for(let i=0; i<DataNews.length; i++ )
    {
        console.log(i,DataNews[i])
        if (DataNews[i].id === id)
        {
           curr={...DataNews[i]}
           break
           
        }
    }
    return (
      <div className="news_detail2">
        <h1>{curr.id}</h1> 
         <h1>{curr.title}</h1>
        <p>{curr.content}</p>
      </div>
    );
  }

export default NewsDetails;