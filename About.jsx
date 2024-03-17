import React, { useState, useEffect } from 'react';

const ArticleViewer = () => {
  const [articles, setArticles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Fetch your articles or set them in a state
    // This is just an example, replace it with your actual data fetching logic
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2024-02-04&sortBy=publishedAt&apiKey=API_KEY')
      .then(response => response.json())
      .then(data => setArticles(data))
      .catch(error => console.error('Error fetching articles:', error));
  }, []); // The empty dependency array ensures the effect runs once on component mount

  const handleNext = () => {
    // Increment the currentIndex, wrapping around if it reaches the end
    setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
    console.log("next");
};

const handlePrevious = () => {
    // Decrement the currentIndex, wrapping around if it becomes negative
    console.log("prs");
    setCurrentIndex((prevIndex) => (prevIndex - 1 + articles.length) % articles.length);
  };

  return (
    <div>
      {articles.length > 0 && (
        <div className="card mx-3" style={{ width: '18rem' }}>
          <img src={articles[currentIndex].urlToImage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{articles[currentIndex].title}</h5>
            <p className="card-text">{articles[currentIndex].description}</p>
            <a href={articles[currentIndex].url} target="_blank" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      )}
      <div>
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default ArticleViewer;
