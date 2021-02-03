import {useParams} from "react-router-dom";
import {Get} from "react-axios";

import AppHeader from "../header/header";
import Sidebar from "../sidebar/sidebar";
import './article.css'

function AppArticle() {
    return (
        <div className="article">
            <AppHeader></AppHeader>
            <SingleArticle></SingleArticle>
            <Sidebar></Sidebar>
        </div>
    );
}

function SingleArticle() {
    let { articleSlug } = useParams();
    return (
        <div className="articleSection">
            <Get
                url={"https://api1.blavity.com/v1/"+ articleSlug}>
                {(error, articelData, isLoading, makeRequest) => {
                    if (error) {
                        return (<div>Something bad happened: {error.message}
                            <button onClick={() => makeRequest({params: {reload: true}})}>Retry</button>
                        </div>)
                    } else if (isLoading) {
                        return (<div>Loading...</div>)
                    } else if (articelData !== null) {
                        return (
                            <div>
                                <img
                                    src={"https://res.cloudinary.com/blavity/image/upload/g_center,w_720,q_auto:best,g_south_east,x_0/" + articelData.data.wp_featuredImage}
                                    alt={articelData.data.title} title={articelData.data.title}
                                    className="articleImage"
                                >
                                </img>
                                <h1>
                                    {articelData.data.title}
                                </h1>
                                <div className="articleBody">
                                    <div dangerouslySetInnerHTML={{ __html: articelData.data.body }} />
                                </div>
                            </div>
                        )
                    }
                    return (<div>Default message before request is made.</div>)
                }}
            </Get>
        </div>
    )
}

export default AppArticle;
