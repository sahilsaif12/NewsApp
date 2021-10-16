import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
    articles= [
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Taiwan's TSMC posts 13.8% rise in Q3 profit on global chip demand surge - Reuters",
            "description": "Taiwan chip giant TSMC <a href=\"https://www.reuters.com/companies/2330.TW\" target=\"_blank\">(2330.TW)</a> posted a 13.8% jump in third quarter profit on Thursday on the back of booming demand for semiconductors to power smartphones and other gadgets during the…",
            "url": "https://www.reuters.com/technology/taiwans-tsmc-posts-138-rise-q3-profit-global-chip-demand-surge-2021-10-14/",
            "urlToImage": "https://www.reuters.com/resizer/Qioi4JIuYJApO8dSdKNOE8n8mlY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/3KSVYJJLDJNALIPXO7U7MZNKFQ.jpg",
            "publishedAt": "2021-10-14T05:37:00Z",
            "content": "The logo of Taiwan Semiconductor Manufacturing Co (TSMC) is pictured at its headquarters in Hsinchu, Taiwan, January 19, 2021. REUTERS/Ann Wang/File Photo GLOBAL BUSINESS WEEK AHEADTAIPEI, Oct 14 (Re… [+1484 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Reuters Staff",
            "title": "China's factory gate inflation hits record high in September - Reuters",
            "description": "China's annual factory gate prices grew at their fastest pace on record in September, driven by energy curbs and soaring commodity prices, piling pressure on businesses already grappling with supply bottlenecks.",
            "url": "https://www.reuters.com/article/china-economy-inflation-idUSKBN2H404V",
            "urlToImage": "https://static.reuters.com/resources/r/?m=02&d=20211014&t=2&i=1577780733&r=LYNXMPEH9D024&w=800",
            "publishedAt": "2021-10-14T02:29:00Z",
            "content": "By Reuters Staff\r\nBEIJING (Reuters) -Chinas annual factory gate prices grew at their fastest pace on record in September, driven by energy curbs and soaring commodity prices, piling pressure on busin… [+2113 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "David Lawder, Gavin Jones",
            "title": "UPDATE 1-After G20 endorses tax deal, Italy says its digital levy could stay for two more years - Reuters",
            "description": "G20 finance leaders on Wednesday endorsed a global tax deal that calls for the elimination of unilateral digital services taxes, but Italy's economy minister said it may take up to two years to eliminate the digital levy imposed by Rome.",
            "url": "https://www.reuters.com/article/imf-worldbank-italy-tax-idUSL8N2R969A",
            "urlToImage": "https://s1.reutersmedia.net/resources_v2/images/rcom-default.png?w=800",
            "publishedAt": "2021-10-14T00:46:00Z",
            "content": "(Adds details on digital tax removal plans, industry group)\r\nWASHINGTON/ROME, Oct 13 (Reuters) - G20 finance leaders on Wednesday endorsed a global tax deal that calls for the elimination of unilater… [+2917 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Cold keeps China coal prices high, power crunch stokes factory inflation - Reuters",
            "description": "China coal prices held near record highs on Thursday as cold weather swept into the country's north and power plants stocked up on the fuel to ease an energy crunch that is fuelling unprecedented factory gate inflation.",
            "url": "https://www.reuters.com/world/china/cold-keeps-china-coal-prices-high-power-crunch-stokes-factory-inflation-2021-10-14/",
            "urlToImage": "https://www.reuters.com/resizer/cj5eXkEAkdNqr-fFSSGAM2AQi50=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/CN4P525NR5JQZJG7S5FMIVKNIQ.jpg",
            "publishedAt": "2021-10-14T06:46:00Z",
            "content": "A truck transports coal at a coal-fired power plant in Shenyang, Liaoning province, China September 29, 2021. REUTERS/Tingshu Wang/File PhotoBEIJING, Oct 14 (Reuters) - China coal prices held near re… [+3970 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNET"
            },
            "author": "Alexandra Garrett",
            "title": "iPhone 13 vs. 13 Mini vs. 13 Pro vs. 13 Pro Max: All the differences - CNET",
            "description": "Here's how Apple's four newest iPhone 13 models compare.",
            "url": "https://www.cnet.com/tech/mobile/iphone-13-vs-13-mini-vs-13-pro-vs-13-pro-max-all-the-differences/",
            "urlToImage": "https://www.cnet.com/a/img/UGqJ3gr5XnLULLW3KjV4VBtUd8c=/1200x630/2021/09/14/610e0eaf-9960-4daa-a34b-470826204e15/apple-event-091421-iphone-13-34.jpg",
            "publishedAt": "2021-10-14T00:00:03Z",
            "content": "Apple announced its new iPhone lineup at its September event alongside the Apple Watch 7, iPad Mini 6 and updated entry-level iPad. The new flagship, named the iPhone 13, mirrors last year's iPhone 1… [+12532 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Boing Boing"
            },
            "author": "Boing Boing's Shop",
            "title": "Hear your playlists crystal clear with these truly wireless buds",
            "description": "There are lots of things to miss about childhood, whether it's fruit roll-ups, playing Super Mario Bros. 3 for hours on end, or discovering the tiny toys in your fast-food happy meal. But when it comes to devices with long wires attached to them, like the now…",
            "url": "https://boingboing.net/2021/10/13/hear-your-playlists-crystal-clear-with-these-truly-wireless-buds.html",
            "urlToImage": "https://i0.wp.com/boingboing.net/wp-content/uploads/2021/10/sale_303864_article_image.jpeg?fit=1200%2C800&ssl=1",
            "publishedAt": "2021-10-14T00:36:00Z",
            "content": "There are lots of things to miss about childhood, whether it's fruit roll-ups, playing Super Mario Bros. 3 for hours on end, or discovering the tiny toys in your fast-food happy meal. But when it com… [+2159 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hipertextual"
            },
            "author": "Rubén Chicharro",
            "title": "No compres este Apple Watch",
            "description": "Apple comercializa actualmente tres Apple Watch diferentes. El recién lanzado Apple Watch Series 7 es la opción más premium, pues cuenta con prestaciones como el medidor de oxígeno en sangre o el electrocardiograma, una pantalla de mayor tamaño y está disponi…",
            "url": "https://hipertextual.com/2021/10/no-compres-este-apple-watch",
            "urlToImage": "https://i1.wp.com/hipertextual.com/wp-content/uploads/2017/10/DSC00726-scaled.jpg?fit=2560%2C1707&ssl=1",
            "publishedAt": "2021-10-14T06:00:00Z",
            "content": "Apple comercializa actualmente tres Apple Watch diferentes. El recién lanzado Apple Watch Series 7 es la opción más premium, pues cuenta con prestaciones como el medidor de oxígeno en sangre o el ele… [+3042 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hackaday"
            },
            "author": "Jenny List",
            "title": "A Deep Dive Into The Sound Of An Apple II",
            "description": "A major part of the retrocomputing scene for many of us lies in the world of chiptunes, music created either using original retrocomputing hardware or in the style of those early synthesiser chips.…",
            "url": "https://hackaday.com/2021/10/14/a-deep-dive-into-the-sound-of-an-apple-ii/",
            "urlToImage": "https://hackaday.com/wp-content/uploads/2021/10/apple-II-audio-featured.jpg",
            "publishedAt": "2021-10-14T08:00:00Z",
            "content": "A major part of the retrocomputing scene for many of us lies in the world of chiptunes, music created either using original retrocomputing hardware or in the style of those early synthesiser chips. T… [+1246 chars]"
        },
        {
            "source": {
                "id": "time",
                "name": "Time"
            },
            "author": "Debby Wu / Bloomberg",
            "title": "Apple Set to Cut iPhone Production Goals Due to Chip Crunch",
            "description": "Apple is likely to slash its projected iPhone 13 production targets for 2021 by as many as 10 million units.",
            "url": "https://time.com/6106877/apple-iphone13-production/",
            "urlToImage": "https://api.time.com/wp-content/uploads/2021/10/iphone-13-apple.jpeg?quality=85&w=1024&h=628&crop=1",
            "publishedAt": "2021-10-14T05:55:40Z",
            "content": "Apple Inc. is likely to slash its projected iPhone 13 production targets for 2021 by as many as 10 million units as prolonged chip shortages hit its flagship product, according to people with knowled… [+4732 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Freakonomics.com"
            },
            "author": "Stephen J. Dubner",
            "title": "How Can We Break Our Addiction to Contempt? (Ep. 478)",
            "description": "Arthur Brooks is an economist who for 10 years ran the American Enterprise Institute, one of the most influential conservative think tanks in the world. He has come to believe there is only one weapon that can defeat our extreme political polarization: love. …",
            "url": "https://freakonomics.com/podcast/arthur-brooks/",
            "urlToImage": "https://freakonomics.com/wp-content/uploads/2020/08/fr.fbthumbnail.png",
            "publishedAt": "2021-10-14T03:00:18Z",
            "content": "Arthur Brooks is an economist who for 10 years ran the American Enterprise Institute, one of the most influential conservative think tanks in the world. He has come to believe there is only one weapo… [+44168 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Atlantic"
            },
            "author": "The Atlantic",
            "title": "The Experiment Podcast: Who Would Jesus Mock?",
            "description": "The Atlantic’s Emma Green sits down with the editor-in-chief of Christian satire site The Babylon Bee to talk about mockery and the line between making fun and doing harm.",
            "url": "https://www.theatlantic.com/podcasts/archive/2021/10/babylon-bee-news-political-satire-kyle-mann/620385/?utm_source=feed",
            "urlToImage": null,
            "publishedAt": "2021-10-14T08:00:00Z",
            "content": "Listen and subscribe: Apple Podcasts | Spotify | Stitcher | Google Podcasts\r\nThe satire site The Babylon Bee, a conservative Christian answer to The Onion, stirred controversy when some readers misto… [+769 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "heise online"
            },
            "author": "Ben Schwan",
            "title": "Nächste Apple-Keynote: Neue Gerüchte zu MacBook Pro und AirPods 3",
            "description": "Welche Hardware wird Apple in der kommenden Woche vorstellen? Aus Leaker-Kreisen kommen frische Details zu neuen Macs und Apple-Stöpseln.",
            "url": "https://www.heise.de/news/Naechste-Apple-Keynote-Neue-Geruechte-zu-MacBook-Pro-und-AirPods-3-6216857.html",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/1/8/3/5/4/1/shutterstock_1862075311-6416c883dcf90145.jpeg",
            "publishedAt": "2021-10-14T08:54:00Z",
            "content": "Am Montag steigt Apples nächste Präsentation neuer Geräte. Die \"Unleashed\"-Keynote dürfte sich vor allem um neue portable Apple-Silicon-Macs drehen, doch die ein oder andere Überraschung ist ebenfall… [+2038 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "heise online"
            },
            "author": "dpa",
            "title": "Im Onlinehandel haben weiter Amazon, Otto und Zalando das Sagen",
            "description": "Corona hat dem Onlinehandel riesige Wachstumsraten beschert. Der große Teil des Geschäfts bleibt fest in der Hand wenige Anbieter.\r\nExperten sehen aber Nischen.",
            "url": "https://www.heise.de/news/Im-Onlinehandel-haben-weiter-Amazon-Otto-und-Zalando-das-Sagen-6217392.html",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/1/8/3/8/7/6/shutterstock_1831476526-29e962ec4d0ec66c.jpeg",
            "publishedAt": "2021-10-14T05:23:00Z",
            "content": "Der Onlinehandel in Deutschland wird weiter von den Platzhirschen Amazon, Otto und Zalando dominiert. Die drei Internetriesen hätten auch im Corona-Jahr 2020 erneut ihre Plätze als umsatzstärkste Onl… [+1915 chars]"
        },
        {
            "source": {
                "id": "spiegel-online",
                "name": "Spiegel Online"
            },
            "author": "DER SPIEGEL",
            "title": "Taiwan: Dutzende Tote nach Brand in »Geisterhaus«",
            "description": "Viele Bewohner hatten körperliche Behinderungen und litten an Demenz: Im Süden Taiwans sind Dutzende Menschen bei einem Hochhausbrand ums Leben gekommen. Weitere wurden verletzt.",
            "url": "https://www.spiegel.de/panorama/taiwan-dutzende-tote-nach-brand-in-geisterhaus-a-5bfd673d-809a-4293-8912-3660bd393ed0",
            "urlToImage": "https://cdn.prod.www.spiegel.de/images/e935bbfc-c68e-4b08-b2ac-d26abaabede0_w1280_r1.77_fpx66.67_fpy50.jpg",
            "publishedAt": "2021-10-14T07:51:05Z",
            "content": "Bei einem Brand in einem Hochhaus in der südtaiwanischen Hafenstadt Kaohsiung sind nach Medienberichten mindestens 22 Menschen ums Leben gekommen. Die Zahl der Opfer könnte noch steigen, da viele Bew… [+1757 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (Amber Neely)",
            "title": "Tim Cook visits LGBTQ+ resource center and developers in Utah",
            "description": "Tim Cook traveled around Salt Lake City on Wednesday, visiting an LGBTQ+ resource center, meeting up with developers in Utah's tech community, and stopping by to visit Apple City Creek Center employees.Image Credit: Apple, Tim CookDuring his trip, Cook stoppe…",
            "url": "https://appleinsider.com/articles/21/10/14/tim-cook-visits-utah-visits-lgbtq-resource-center-and-developers",
            "urlToImage": "https://photos5.appleinsider.com/gallery/45033-87552-headerapple-xl.jpg",
            "publishedAt": "2021-10-14T00:23:13Z",
            "content": "AppleInsider is supported by its audience and may earn commission as an Amazon Associate and affiliate partner on qualifying purchases. These affiliate partnerships do not influence our editorial con… [+1140 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (Amber Neely)",
            "title": "Apple anticipated to secure 80% of ARM-based laptop market in 2021",
            "description": "Researchers' data shows that Apple is dominating the rapidly expanding ARM laptop market with Apple Silicon, securing the vast majority of revenue in the market segment for 2021.The ARM market continues to grow, according to research firm Strategy Analytics. …",
            "url": "https://appleinsider.com/articles/21/10/14/apple-anticipated-to-secure-80-of-arm-based-laptop-market-in-2021",
            "urlToImage": "https://photos5.appleinsider.com/gallery/45035-87553-39133-74923-MacBook-Air-Geekbench-xl-xl.jpg",
            "publishedAt": "2021-10-14T01:29:08Z",
            "content": "AppleInsider is supported by its audience and may earn commission as an Amazon Associate and affiliate partner on qualifying purchases. These affiliate partnerships do not influence our editorial con… [+1101 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.jp"
            },
            "author": "ヤマダユウス型",
            "title": "ひと足先にApple Watch Series 7フォトレビュー。画面がリッチだ…！",
            "description": "発売を明日に控えて話題のApple Watch Series 7をフォトレビュー。",
            "url": "https://www.gizmodo.jp/2021/10/apple-watch-series-7-photo-review.html",
            "urlToImage": "https://assets.media-platform.com/gizmodo/dist/images/2021/10/14/211014appleatchphoto_01-w960.jpg",
            "publishedAt": "2021-10-14T06:30:00Z",
            "content": "20211015 Apple Watch Series 7\r\nPhoto: \r\nPhoto: \r\nApple Watch\r\nPhoto: \r\n41mm45mm1mm\r\nPhoto: \r\nSeries 62050IP6XWR50\r\nPhoto: \r\nSeries 3\r\nPhoto: \r\n20\r\nApple Watch Series 7\r\nSource: Apple"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Sanji Feng",
            "title": "传苹果正试图将 AirPods 打造成健康产品",
            "description": "传苹果正试图将 AirPods 打造成健康产品，未来其可能会具备助听、纠正姿态、测量体温等功能。",
            "url": "https://cn.engadget.com/apple-airpods-health-device-leak-010045184.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-10/7b8199f0-2c36-11ec-bf2f-870882c8bdd8",
            "publishedAt": "2021-10-14T01:00:45Z",
            "content": "AirPods 2022 AirPods \r\n AirPods FDA AirPods \r\n: , wearables, AirPods Pro, earbuds, Apple, AirPods, AV, news, gear, audio, health, medicine"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "小口貴宏(Takahiro Koguchi)",
            "title": "Apple Watchでau PAY支払いが可能に",
            "description": "Apple Watchでau PAY (コード支払い) の支払いが可能になりました。au PAYアプリの最新バージョン（iOS 9.14.1以上）をダウンロードすることで利用できます。",
            "url": "https://japanese.engadget.com/apple-watch-aupay-015030531.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-10/8bc3a3d0-2c90-11ec-97cd-804b32560d4a",
            "publishedAt": "2021-10-14T01:50:30Z",
            "content": "Apple Watchau PAY () au PAYiOS 9.14.1\r\nApple WatchQR\r\nApple Watchau ID\r\nSourceKDDI"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "小口貴宏(Takahiro Koguchi)",
            "title": "Apple Payの「WAON」「nanaco」は10月21日から、iPhoneをかざして支払い可能に",
            "description": "イオンの電子マネー「WAON」と、セブン&アイ・ホールディングスの電子マネー「nanaco」がApple Payに10月21日より対応します。",
            "url": "https://japanese.engadget.com/applepay-waon-nanaco-041651399.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-10/46a04fa0-2ca5-11ec-9dfb-0b5355aa52cd",
            "publishedAt": "2021-10-14T04:16:51Z",
            "content": "WAON&amp;nanacoApple Pay1021\r\niPhoneApple WatchWAONnanaco\r\nWAONnanacoGoogle PayAndroidApple PayiPhone\r\n1021\r\nSource&amp;"
        }
    ]
    constructor(){
        super()
        this.state={
            articles:this.articles,
            loading:false
        }
        
    }
    render() {
        return (
            <div className="container my-3 ">
                <h2 className="text-center">Today's top headlines</h2>
                <div className="row d-flex  justify-content-between">
                {this.state.articles.map((element)=>{
                    return <div className="col-md-3 my-3">
                        <Newsitem title={element.title} desc={element.description} url={element.url} imgUrl={element.urlToImage} />
                    </div>
                })}
                    
                </div>
            </div>
        )
    }
}

export default News
