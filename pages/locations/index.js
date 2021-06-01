require("linqjs")
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link'
import Layout from "../../components/layout";
import Board from "../../components/board";
import Locations from "../data.json"

const Index = ({ locationGroups }) =>
    <Layout>
        <section className="container text-white bg-dark py-3">
            {locationGroups.map((group) => (
                <div className="card-group" key={group.id}>
                    {group.locations.map((location) => (
                        <div className="card text-white bg-dark" key={location.id}>
                            {getLocation(location)}
                        </div>
                    ))}
                </div>
            ))}
        </section>
    </Layout>;

const getLocation = (location) =>
    <>
        <img src={'/img/' + location.image} className="card-img-top" alt="{location.name}" /> 
        <div className="card-body">
            <h5 className="card-title text-center">
                {location.name}
            </h5>
            <div className="card-text my-2">
                <Board location={location} />
            </div>
            <p className="card-text">
                <small className="text-muted">
                    {location.mailingAddress}
                </small>
            </p>
            <Link href="/locations/[id]" as={`/locations/${location.id}`}>
                <a className="btn btn-secondary">
                    Learn more
                </a>
            </Link>
        </div>
    </>;  

export const getStaticProps = async (context) =>
{
    var items = [...Locations];
    return {
        props: {
            locationGroups: chunkArray(items, 2)
        }
    };
}

const chunkArray = (items, size) => {
    var results = [];
    while(items.length) {
        results.push({
            id: uuidv4(),
            locations: items.splice(0, 3)
        });
    }
    return results;
}

export default Index