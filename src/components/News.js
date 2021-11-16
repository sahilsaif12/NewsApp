import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";


export default function News(props) {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    
const updateNews=async()=>{
    props.setProgress(20)
        let url = `https://gnews.io/api/v4/top-headlines?country=${props.country}&token=${props.apiKey}${props.category?"&topic="+props.category:""}&lang=${props.lang}${props.keyword?"&q="+props.keyword:""}`
        props.setProgress(30)
        setLoading(true)
        let data =await fetch(url)
        // props.statusCode(data.status)
        props.setProgress(50)
        let parsedData =await data.json()
        console.log(parsedData)
        props.setProgress(70)
        setArticles(parsedData.articles) 
        setTotalResults( parsedData.totalResults)
        setLoading(false)
        props.setProgress(100)
   
    
    }
    useEffect(() => {
        updateNews()
        // document.title=`${ props.category===null?props.keyword "Latest news about "+props.keyword :"Top"+ props.category.charAt(0).toUpperCase() + props.category.slice(1)+" news"}}`
        document.title = `${props.category===null?props.keyword : props.category.charAt(0).toUpperCase() + props.category.slice(1)} - News fever`
        // eslint-disable-next-line
}, [])


    const updateNews_In_InfiniteScroll = async () => {
        let url = `https://gnews.io/api/v4/top-headlines?country=${props.country}&token=${props.apiKey}${props.category?"&topic="+props.category:""}&lang=${props.lang}${props.keyword?"&q="+props.keyword:""}&page=${page}`
        setPage(page+1)
        console.log(url);
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(page,parsedData)
        setArticles(articles.concat(parsedData.articles)) 
        console.log(articles);
        setTotalResults( parsedData.totalResults)
    }

    const fetchMoreData = async () => {
        // setPage(page+1)
        // console.log(page);
        updateNews_In_InfiniteScroll()
    }
    
        return (

            <div className=" py-3 ">
                    <h2 className={`text-center text-${props.mode === 'light' ? 'dark' : 'light'} my-2`}> {props.category==="breaking-news"?"Todays top headlines":props.category===null?"Latest news about "+props.keyword :"Top "+ props.category.charAt(0).toUpperCase() + props.category.slice(1)+" news"} </h2>
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner />}
                    style={{height: 'auto', overflow: 'hidden'}}
                >
                <div className="container"  >

                
                    <div className="row d-flex  justify-content-between">
                        {loading && <Spinner />}
                        {!loading && articles.map((element) => {
                            return <div className="col-md-3 my-3" >
                                <Newsitem mode={props.mode} key={element.url} title={element.title} desc={element.description} url={element.url} image={element.image} source={element.source.name} date={element.publishedAt}  />
                            </div>
                        })}
                    </div>
                    </div>
                </InfiniteScroll>
                
            </div>
        )
    }


News.defaultProps = {
        country: 'in',
        category: 'general'
    }
News.propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
    }