/*
* Author: Ayanda Mcengwa
* Student no.: 218335989
* date: 8/22/2023
* Description: this is an Address model. It contains the code for address
* */
//import the createConnection from the dbUtils.js file
const {createConnection} = require('../config/dbUtils');
async function createTable(){
    try {
        const connection = await createConnection();
        console.log('Connected to MySQL database');

        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS seller (
                seller_id INT PRIMARY KEY,
                firstname VARCHAR(255) NOT NULL,
                lastname VARCHAR(255) NOT NULL,
                contact_no VARCHAR(255) NOT NULL,
                email_address VARCHAR(255) NOT NULL,
                address_id VARCHAR(25) NOT NULL,
                FOREIGN KEY (address_id) REFERENCES address(address_id)                             
            )
        `;
        connection.query(createTableQuery, (err, results)=>{
            if(err){
                console.error('Error creating table: ', err )
            }else{
                console.log('Table successfully created')
            }
            connection.end();
        })
    }catch (error){
        console.error('Error connecting to MySQL database', error);
    }
}
async function insertSeller(seller){
    try {
        const connection = await createConnection();
        console.log("Connected to mysql database")
        const insertQuery = `
            INSERT INTO seller (
                seller_id,
                firstname,
                lastname,
                contact_no,
                email_address,
                address
            ) VALUES (
                ${seller.seller_id},
                ${seller.firstname},
                ${seller.lastname},
                ${seller.contact_no},
                ${seller.email_address},
                ${seller.address_id}
            )
        `;
        connection.query(insertQuery, (err, results) => {
            if (err) {
                console.error('Error inserting record:', err);
            } else {
                console.log('Record inserted successfully');
            }
            // Close the connection
            connection.end();
        })
    }catch (error){
        console.error("Error connecting to mysql database")
    }
}
async function readSeller(seller) {
    try {
        const connection = await createConnection();
        console.log('Connected to MySQL database');

        // SQL query to read a record from the table
        const readQuery = `
            SELECT * FROM seller
            WHERE seller_id = ${seller.seller_id}
        `;

        // Execute the read query
        connection.query(readQuery, (err, results) => {
            if (err) {
                console.error('Error reading record:', err);
            } else {
                console.log('Record read successfully');
                console.log(results);
            }

            // Close the connection
            connection.end();
        })
    }
    catch (error) {
        console.error('Error connecting to MySQL database', error);
    }
}
async function updateSeller(seller) {
    try {
        const connection = await createConnection();
        console.log('Connected to MySQL database');

        // SQL query to update a record from the table
        const updateQuery = `
            UPDATE seller
            SET firstname = ${seller.firstname},
                lastname = ${seller.lastname},
                contact_no = ${seller.contact_no},
                email_address = ${seller.email_address},
                address_id = '${seller.address_id}'
            WHERE seller_id = ${seller.seller_id}
        `;

        // Execute the update query
        connection.query(updateQuery, (err, results) => {
            if (err) {
                console.error('Error updating record:', err);
            } else {
                console.log('Record updated successfully');
            }

            // Close the connection
            connection.end();
        })
    }
    catch (error) {
        console.error('Error connecting to MySQL database', error);
    }
}
async function deletePayment(seller) {
    try {
        const connection = await createConnection();
        console.log('Connected to MySQL database');

        // SQL query to delete a record from the table
        const deleteQuery = `
            DELETE FROM seller
            WHERE seller_id = ${seller.seller_id}
        `;

        // Execute the delete query
        connection.query(deleteQuery, (err, results) => {
            if (err) {
                console.error('Error deleting record:', err);
            } else {
                console.log('Record deleted successfully');
            }

            // Close the connection
            connection.end();
        })
    }
    catch (error) {
        console.error('Error connecting to MySQL database', error);
    }
}
createTable();