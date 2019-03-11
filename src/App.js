import React, { Component } from 'react'
import Select from 'react-select'
import ArticleList from './components/article-list'
import ArticleChart from './components/article-chart'
import articles from './fixtures'
import UserForm from './components/user-form'
import Counter from './components/counter'

class App extends Component {
  state = {
    openItem: null
  }

  render() {
    return (
      <div>
        <UserForm/>
        <Counter/>
        <Select options={this.options} value={this.state.openItem} onChange={this.handleSelect}/>
        <ArticleList articles={articles} ref={this.setArticleListRef}/>
        <ArticleChart articles={articles}/>
      </div>
    )
  }

  get options() {
    return articles.map(article => ({
      label: article.title,
      value: article.id
    }))
  }

  handleSelect = openItem => this.setState({ openItem })

  setArticlesListRef = ref => {
    // setTimeout(() => {
    //   ref.setState({ openItemId: articles[0].id }) // Не можна так робити
    //
    // }, 1000)
  }
}

export default App
