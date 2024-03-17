import React, { Component } from 'react';

class Mynewsapp extends Component {
  render() {
    return (
      <div className=' d-flex flex-wrap' >
        {this.props.articles.map((article, index) => (
          <div key={index} className="card container my-3 mx-3 " style={{ width: '18rem' }}>
            <img src={article.urlToImage} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{article.title}</h5>
              <p className="card-text">{article.description}</p>
              <a href={article.url} target='-blanck' className="btn btn-primary">
                Go somewhere
              </a>
              <p className="card-text"><small className="text-body-secondary"> Author={article.author ? article.author:"Unknown"} <div>Last updated {new Date(article.publishedAt).toGMTString()}</div> ago</small></p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Mynewsapp;
