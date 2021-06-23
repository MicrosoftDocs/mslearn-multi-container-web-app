CREATE TABLE locations(
    id                      VARCHAR(100),
    name                    VARCHAR(100),
    longitude               DOUBLE,
    latitude                DOUBLE,
    mailingAddress          VARCHAR(100),
    parkingIncluded         BOOLEAN,
    conferenceRoomsIncluded BOOLEAN,
    receptionIncluded       BOOLEAN,
    publicAccess            BOOLEAN,
    lastRenovationDate      DATETIME,
    image                   VARCHAR(100)
);

CREATE TABLE locationrooms(
    location_id       VARCHAR(100),
    description       VARCHAR(100),
    monthlyRate       DOUBLE,
    seats             INT,
    privateFacilities BOOLEAN,
    phoneIncluded     BOOLEAN,
    windows           BOOLEAN,
    corner            BOOLEAN
);