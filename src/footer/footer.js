
import { BrowserRouter as Router, Link } from "react-router-dom";

import "./footer.css"

function AppFooter() {
    const footerMenuBar = [
        {endpoint: '/', title: 'Home'},
        {endpoint: '/team', title: 'Team'},
        {endpoint: '/about', title: 'About'},
        {endpoint: '/contact', title: 'Contact'},

    ];
    return (
        <div className="footer">
            <Router>
                <div>
                    <div className="menu">
                        <table>
                            <tr>
                                {footerMenuBar.map((menuItem, index) => (
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
        </div>
    );
}

export default AppFooter;
