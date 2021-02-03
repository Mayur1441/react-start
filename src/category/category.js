import {useParams} from "react-router-dom";
import {Get} from "react-axios";

import AppHeader from "../header/header";
import Sidebar from "../sidebar/sidebar";
import './category.css'

function AppCategory() {
    return (
        <div className="category">
            <AppHeader></AppHeader>
            <CategoryList></CategoryList>
            <Sidebar></Sidebar>
        </div>
    );
}

function CategoryList() {
    let { categorySlug } = useParams();
    return (
        <div className="categoryArticles">
            <Get
                url={"https://api1.blavity.com/v1/articles/categories/"+ categorySlug+'/9'}>
                {(error, categoryData, isLoading, makeRequest) => {
                    if (error) {
                        return (<div>Something bad happened: {error.message}
                            <button onClick={() => makeRequest({params: {reload: true}})}>Retry</button>
                        </div>)
                    } else if (isLoading) {
                        return (<div>Loading...</div>)
                    } else if (categoryData !== null) {
                        return (
                            <div>
                                {categoryData.data.map((article, index) => (
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

export default AppCategory;
