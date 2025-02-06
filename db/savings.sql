CREATE TABLE Savings (
    savings_id INT PRIMARY KEY,
    month INT,
    year INT,
    total_profit DECIMAL(10,2),
    savings_percentage DECIMAL(10,2),
    reserved_funds DECIMAL(10,2),
    remaining_profit DECIMAL(10,2)
    );