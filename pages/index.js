require("linqjs")
import { v4 as uuidv4 } from 'uuid';
import { PrismaClient } from '@prisma/client'
import Link from 'next/link'
import Layout from "../components/layout";
import Jumbotron from "../components/jumbotron";
import Board from "../components/board";

const Index = ({ locationGroups }) =>
    <Layout>
        <Jumbotron />
        <section className="container">
            <div className="card bg-dark">
                <div className="card-body">
                    <h5 className="card-title display-4 text-center">
                        Featured Locations
                    </h5>
                </div>
            </div> 
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
    </div>;  

export const getServerSideProps  = async (context) =>
{
    const prisma = new PrismaClient();
    var items = await prisma.locations.findMany({
        orderBy: [
            {
                lastRenovationDate: 'desc'
            }
        ],
        select: {
            id: true,
            name: true,
            parkingIncluded: true,
            conferenceRoomsIncluded: true,
            receptionIncluded: true,
            publicAccess: true,
            mailingAddress: true
        },
        take: 4
    });
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
            locations: items.splice(0, 2)
        });
    }
    return results;
}

export default Index