import {Get} from "react-axios";

import './sidebar.css'

function Sidebar () {
    return (
        <div className="sidebar">
            <Get
                url="https://api1.blavity.com/v1/articles/tags/bhm/5/0">
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
                                            height="90%" width="50%">
                                        </img>
                                        <a className="title" href={'/article/' + article.slug}>
                                            {article.title}
                                        </a>
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

export default Sidebar