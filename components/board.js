import Check from "./check"

const Board = ({ location }) =>
    <>
        {getBlock(location.parkingIncluded, 'fa-car', 'Parking included', 'No parking available')}                            
        {getBlock(location.conferenceRoomsIncluded, 'fa-suitcase', 'Conference rooms available', 'No conference rooms')}
        {getBlock(location.receptionIncluded, 'fa-phone', 'Reception services provided', 'No reception services')}
        {getBlock(location.publicAccess, 'fa-building', 'Public access available', 'No public access')}
    </>;

const getBlock = (indicator, symbol, success, failure) =>
    <div className="row">
        <i className={`fa-stack fa-lg col-sm-2 text-center ${indicator ? '' : 'text-muted'}`}>
            <i className="fa fa-circle fa-stack-2x" />
            <i className={`fa ${symbol} fa-stack-1x text-dark`} />
        </i>
        {indicator ? <Check /> : <span className="col-sm-2"></span>}
        <span className="col-sm-8 text-center">
            {indicator ? success : failure}
        </span>
    </div>;

export default Board