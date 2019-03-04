import React, { Component } from 'react'
import ArticleList from './components/article-list'
import ArticleChart from './components/article-chart'
import articles from './fixtures'

class App extends Component {
  render() {
    return (
      <div>
        <ArticleList articles={articles}/>
        <ArticleChart articles={articles}/>
      </div>
    )
  }
}

export default App
