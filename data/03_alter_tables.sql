ALTER TABLE
    locations
ADD
    PRIMARY KEY(id);

ALTER TABLE
    locationrooms
ADD
    COLUMN id INT PRIMARY KEY AUTO_INCREMENT FIRST;

ALTER TABLE
    locationrooms
ADD
    CONSTRAINT fk_location FOREIGN KEY (location_id) REFERENCES locations(id);