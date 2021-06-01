import Link from 'next/link'

const Navigation = () =>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link href="/">
            <a className="navbar-brand">
                <i className="fa-stack">
                    <i className="fa fa-circle-o-notch fa-stack-2x"></i>
                    <i className="fa fa-building-o fa-stack-1x"></i>
                </i>
                <span className="ml-2">
                    Contoso Spaces
                </span>
            </a>
        </Link>
        <div id="navigation">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link href="/">
                        <a className="nav-link">
                            Home
                        </a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/locations">
                        <a className="nav-link">
                            Locations
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
    </nav>;

export default Navigation