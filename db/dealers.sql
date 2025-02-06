CREATE TABLE Dealers (
    dealer_id INT PRIMARY KEY,
    dealer_type ENUM('private','commercial') NOT NULL,
    name VARCHAR(255),
    address_street VARCHAR(255),
    address_PLZ CHAR(5),
    address_city VARCHAR(255),
    mail_adress VARCHAR(255),
    phone_number VARCHAR(255)
);
