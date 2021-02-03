import "./header.css"

import { BrowserRouter as Router, Link } from "react-router-dom";

function AppHeader() {
    const menuBar = [
        {endpoint: '/', title: 'Home'},
        {endpoint: '/news', title: 'News'},
        {endpoint: '/opinion', title: 'Opinion'},
        {endpoint: '/lifestyle', title: 'Lifestyle'},

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
                                        <Link to={menuItem.endpoint} className="menu-iteam">
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
