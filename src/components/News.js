import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";

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

updateNews=async()=>{
    this.props.setProgress(20)
    let url = `https://gnews.io/api/v4/top-headlines?country=${this.props.country}&token=${this.props.apiKey}${this.props.category?"&topic="+this.props.category:""}&lang=${this.props.lang}${this.props.keyword?"&q="+this.props.keyword:""}`
        this.props.setProgress(30)
        this.setState({ loading: true })
        let data = await fetch(url)
        this.props.setProgress(50)
        let parsedData = await data.json()
        console.log(parsedData)
        this.props.setProgress(70)
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
        this.props.setProgress(100)
}

    async componentDidMount() {
        // this.props.setProgress(20)
        // console.log(this.props.apiKey);
        // let url = `https://gnews.io/api/v4/top-headlines?country=${this.props.country}&token=${this.props.apiKey}&topic=${this.props.category}&lang=${this.props.lang}`
        // this.props.setProgress(30)
        // this.setState({ loading: true })
        // let data = await fetch(url)
        // this.props.setProgress(50)
        // let parsedData = await data.json()
        // console.log(parsedData)
        // this.props.setProgress(70)
        // this.setState({
        //     articles: parsedData.articles,
        //     totalResults: parsedData.totalResults,
        //     loading: false
        // })
        // this.props.setProgress(100)
        this.updateNews()
        // document.title = `${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} - News fever`
    }

    updateNews_In_InfiniteScroll = async (page) => {
        let url = `https://gnews.io/api/v4/top-headlines?country=${this.props.country}&token=${this.props.apiKey}${this.props.category?"&topic="+this.props.category:""}&lang=${this.props.lang}${this.props.keyword?"&q="+this.props.keyword:""}&page=${page}`
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            page: page,
            totalResults: parsedData.totalResults,
            // loading: false
        })
    }
    // prevBtn = async () => {

    //     this.updateNews_In_InfiniteScroll(this.state.page - 1)
    // }

    fetchMoreData = async () => {
        this.updateNews_In_InfiniteScroll(this.state.page + 1)
    }
    
    render() {
        return (

            <div className=" py-3 ">
                    <h2 className={`text-center text-${this.props.mode === 'light' ? 'dark' : 'light'} my-2`}>Todays  headlines</h2>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                    style={{height: 'auto', overflow: 'hidden'}}
                >
                <div className="container"  >

                
                    <div className="row d-flex  justify-content-between">
                        {/* {this.state.loading && <Spinner />} */}
                        {!this.state.loading && this.state.articles.map((element) => {
                            return <div className="col-md-3 my-3" >
                                <Newsitem mode={this.props.mode} key={element.url} title={element.title} desc={element.description} url={element.url} image={element.image} source={element.source.name} date={element.publishedAt}  />
                            </div>
                        })}
                    </div>
                    </div>
                </InfiniteScroll>
            </div>
        )
    }
}

export default News
