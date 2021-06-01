import Link from 'next/link'

const Footer = () =>
    <footer className="card bg-secondary">
        <div className="card-body container d-flex justify-content-between">
            <Link href="/">
                <a className="btn btn-secondary">
                    <i className="fa-stack">
                        <i className="fa fa-circle-o-notch fa-stack-2x"></i>
                        <i className="fa fa-building-o fa-stack-1x"></i>
                    </i>
                    <span className="ml-2">
                        Contoso Spaces
                        &copy; 2020
                    </span>
                </a>
            </Link>
            <ul className="nav nav-pills">
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
            <a href="https://github.com/msusdev/introduction-to-github-actions-template" target="_blank" className="btn btn-secondary">
                <i className="fa fa-github" aria-hidden="true"></i>
                <span className="ml-1">
                    GitHub
                </span>
            </a>
        </div>
    </footer>;
  
export default Footer