import React, { Component } from 'react';
import Mynewsapp from './Mynewsapp';
import Navbar from './Navbar';
import LoadingBar from 'react-top-loading-bar';
import InfiniteScroll from "react-infinite-scroll-component";

export default class Myarticles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      pageSize: 74,
      loading: false,
      category: 'Science',
      title: 'category',
      progress: 0,
      latestarticles: [],
      error: null,
      totalResults : 0
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, progress: 0 });
    try {
      let url =
        `https://newsapi.org/v2/top-headlines?country=in&category=${this.state.category}&apiKey=bee9726160d644669912f97b2106ea7c&page=${this.state.page}&pageSize=${this.state.pageSize}`;
  
      let data = await fetch(url);
      var puredata = await data.json();
  
      if (data.ok) {
        this.setState(prevState => ({
          latestarticles: [...prevState.latestarticles, ...puredata.articles],
          totalResults: puredata.totalResults
        }));  
      
        this.setState(prevState => ({
          loading: false,
          page: prevState.page + 1
        }));
      } else {
        console.error('Error fetching data:', puredata.message);
        this.setState({ error: 'Failed to fetch data. Please try again.' });
      }
    } catch (error) {
      this.setState({ error: 'Failed to fetch data. Please try again.' });
    } finally {
      this.setState({ loading: false, progress: 100 });
    }
  };
  
  fetchMoreData = () => {
    if (this.state.latestarticles.length >= this.state.totalResults) {
      this.setState({ hasMore: false });
      return;
    }
    this.fetchData();
  };
  
  render() {
    const { latestarticles, progress } = this.state;
    return (
      <div>
        <LoadingBar
          color='#f11946'
          progress={progress}
          onLoaderFinished={() => this.setState({ progress: 0 })}
        />
        <Navbar onCategoryChange={this.handleCategoryChange}/>
        <div style={{ textAlign: 'center' }}>
          <h2>News Monkey - Top Headlines</h2>
  
          <InfiniteScroll
            dataLength={latestarticles.length}
            next={this.fetchMoreData}
            hasMore={this.state.hasMore}
            loader={<h4>Loading...</h4>}
          >
            <div className='container d-flex flex-wrap'>
              {latestarticles.map((article, index) => (
                <Mynewsapp key={index} articles={[article]} />
              ))}
            </div>
          </InfiniteScroll>
        </div>
      </div>
    );
              }
  }