require("linqjs")
import { PrismaClient } from '@prisma/client'
import Layout from "../../components/layout";
import Board from "../../components/board";
import Check from "../../components/check";

const Index = ({ location }) =>
    <Layout>
        <section className="container text-white bg-dark py-3">
            <div className="row">
                <img src={'/img/' + location.image} className="col-sm-6" alt={location.name} />
                {getDetails(location)}
            </div>
            {getTable(location)}
        </section>
    </Layout>;

const getTable = (location) =>
    <table className="table table-bordered table-sm table-striped bg-secondary text-dark">
        <thead>
            <tr>
                <th scope="col">
                    Room
                </th>
                <th scope="col">
                    Monthly Rate
                </th>
                <th scope="col">
                    Seats
                </th>
                <th scope="col">
                    Private Washroom
                </th>
                <th scope="col">
                    Phone
                </th>
                <th scope="col">
                    Windows
                </th>
                <th scope="col">
                    Corner
                </th>
            </tr>
        </thead>
        <tbody>            
            {location.locationrooms.map((room) => (
                <tr key="{room.description}">
                    <th scope="row">
                        {room.description}
                    </th>
                    <td>
                        {Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(room.monthlyRate)}
                    </td>
                    <td>
                        {room.seats}
                    </td>
                    <td>
                        {room.privateFacilities ? <Check /> : ( <></> )}
                    </td>
                    <td>
                        {room.phoneIncluded ? <Check /> : ( <></> )}
                    </td>
                    <td>
                        {room.windows ? <Check /> : ( <></> )}
                    </td>
                    <td>
                        {room.corner ? <Check /> : ( <></> )}
                    </td>
                </tr>
            ))}
        </tbody>
    </table>;

const getDetails = (location) =>
    <div className="col-sm-6">
        <h4 className="display-4 text-white">
            {location.name}
        </h4>
        <p className="text-muted">
            {location.mailingAddress}
        </p>
        <div className="my-2">
            <Board location={location} />
        </div>
    </div>;

export const getServerSideProps  = async (context) =>
{
    const prisma = new PrismaClient();
    const { id } = context.params;
    var match = await prisma.locations.findUnique({
        where: {
          id: id,
        },   
        select: {
            id: true,
            name: true,
            image: true,
            parkingIncluded: true,
            conferenceRoomsIncluded: true,
            receptionIncluded: true,
            publicAccess: true,
            mailingAddress: true,
            locationrooms: true
        },
      })
    return {
        props: {
            location: match
        }
    };
}

export default Index