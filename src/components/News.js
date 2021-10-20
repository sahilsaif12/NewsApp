import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
export class News extends Component {
    static defaultProps = {
        country: 'in',
        category: 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            totalResults: 40,
            loading: false,
            page: 1,

        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=87aa4da3834a4ea682552d2d82db8db2`
        this.setState({ loading: true })
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }

    fetchingManually = async (page) => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=87aa4da3834a4ea682552d2d82db8db2&category=${this.props.category}&page=${page}`
        this.setState({ loading: true })
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({
            articles: parsedData.articles,
            page: page,
            totalResults: parsedData.totalResults,
            loading: false

        })
    }
    prevBtn = async () => {

        this.fetchingManually(this.state.page - 1)
    }
    nextBtn = async () => {

        this.fetchingManually(this.state.page + 1)
    }

    render() {
        return (
            <div className="container py-3 ">
                <div className="container mt-3">
                    <form className="d-flex justify-content-center">
                        <input className="form-control me-2 " style={this.props.mode === 'dark' ?{background:"#D4ECDD",width: "40%"}:{backgroundColor:"#fff",width: "40%"}} type="search" placeholder="Search any keyword related news..." aria-label="Search"  />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
                <h2 className={`text-center text-${this.props.mode === 'light' ? 'dark' : 'light'} my-2`}>Todays top headlines</h2>
                <div className="row d-flex  justify-content-between">
                {this.state.loading && <Spinner/>}
                {!this.state.loading && this.state.articles.map((element)=>{
                    return <div className="col-md-3 my-3">
                        <Newsitem mode={this.props.mode} key={element.url} title={element.title} desc={element.description} url={element.url} imgUrl={element.urlToImage} source={element.source.name} date={element.publishedAt} author={element.author} />
                    </div>
                })}
                    
                </div>
                <div className="d-flex justify-content-evenly " >
                <button disabled={this.state.page<=1} type="button"  className={`btn btn-${this.props.mode==="light"?"dark":"light"}`} onClick={this.prevBtn}>&#8592; Prev</button>
                <button disabled={this.state.page>=Math.ceil(this.state.totalResults/20)} type="button" className={`btn btn-${this.props.mode==="light"?"dark":"light"}`} onClick={this.nextBtn}>Next &#8594;</button>
                </div>
            </div>
        )
    }
}

export default News
