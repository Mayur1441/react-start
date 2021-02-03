import "./header.css"

import {BrowserRouter as Router, Link} from "react-router-dom";

function AppHeader() {
    const menuBar = [
        {endpoint: '/', title: 'Home'},
        {endpoint: '/category/news', title: 'News'},
        {endpoint: '/category/opinion', title: 'Opinion'},
        {endpoint: '/category/lifestyle', title: 'Lifestyle'},

    ];
    return (
        <header className="App-header">
            <Router>
                <div>
                    <div className="menu">
                        <table>
                            <tr>
                                {menuBar.map((menuItem, index) => (
                                    <th>
                                        <Link
                                            to={menuItem.endpoint}
                                            className="menu-iteam"
                                            key={index.toString()}
                                        >
                                            {menuItem.title}
                                        </Link>
                                    </th>
                                ))}
                            </tr>
                        </table>
                    </div>
                </div>
            </Router>
        </header>
    );
}

export default AppHeader;
