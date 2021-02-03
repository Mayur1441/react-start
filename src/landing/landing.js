import {Get} from "react-axios";

import Sidebar from './../sidebar/sidebar'
import './landing.css';

function AppLanding() {
    return (
        <div className="landing">
            <HomeArticles/>
            <Sidebar/>
        </div>
    );
}

function HomeArticles() {
    return (
        <div className="HomeArticles">
            <Get url="https://api1.blavity.com/v1/articles/categories/news/9">
                {(error, response, isLoading, makeRequest) => {
                    if (error) {
                        return (<div>Something bad happened: {error.message}
                            <button onClick={() => makeRequest({params: {reload: true}})}>Retry</button>
                        </div>)
                    } else if (isLoading) {
                        return (<div>Loading...</div>)
                    } else if (response !== null) {
                        return (
                            <div>
                                {response.data.map((article, index) => (
                                    <div key={index} className="column">
                                        <img
                                            src={"https://res.cloudinary.com/blavity/image/upload/g_center,w_720,q_auto:best,g_south_east,x_0/" + article.wp_featuredImage}
                                            alt={article.title} title={article.title}
                                            height="50%" width="100%">
                                        </img>
                                        <a className="title" href={'article/' + article.slug}>
                                            {article.title}
                                        </a>
                                        <p>{article.subTitle}</p>
                                    </div>
                                ))}
                            </div>
                        )
                    }
                    return (<div>Default message before request is made.</div>)
                }}
            </Get>
        </div>
    )
}

export default AppLanding;
