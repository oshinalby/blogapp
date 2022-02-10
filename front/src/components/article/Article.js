import React from 'react';
import {Link, useParams} from 'react-router-dom';
import articleContent from './SampleArticleDB';
import Error  from '../error/Error';



function Article(props) {
    const {name} = useParams();
    //console.log(name);
    //Matching name parameter
    const article=articleContent.find(i=> i.name===name);
    console.log(article);
    
    //Article Not Exist in DB.
     if (!article) return <Error/>
    return (
        <div className='articles'>
            <h1 className='article'>This is a {article.title} Article</h1>
            <p>{article.description}</p>
        </div>
    );
}

export default Article;