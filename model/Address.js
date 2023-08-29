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
            CREATE TABLE IF NOT EXISTS address (
                address_id INT PRIMARY KEY,
                street_no INT NOT NULL,
                city VARCHAR(255) NOT NULL,
                province VARCHAR(255) NOT NULL,
                postal_code INT NOT NULL,
                country VARCHAR(25) NOT NULL
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
async function insertAddress(address){
    try {
        const connection = await createConnection();
        console.log("Connected to mysql database")
        const insertQuery = `
            INSERT INTO address (
                address_id,
                street_no,
                city,
                province,
                postal_code,
                country
            ) VALUES (
                ${address.address_id},
                ${address.street_no},
                ${address.city},
                '${address.province}',
                '${address.postal_code}',
                ${address.country}
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
async function readAddress(address){
    try{
        const connection = await createConnection();
        console.log('Connected to MySQL database');

        const readQuery = `
            SELECT * FROM address
            WHERE address_id = ${address.address_id}
        `;
        connection.query(readQuery, (err, results) => {
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
async function updateAddress(address){
    try{
        const connection = await createConnection();
        console.log('Connected to MySQL database');
        const updateQuery = `
            UPDATE address
            SET street_no = ${address.street_no},
                city = ${address.city},
                province = ${address.province},
                postal_code = ${address.postal_code},
                country = ${address.country}
            WHERE address_id = ${address.address_id}
        `;

        connection.query(readQuery, (err, results) => {
            if (err) {
                console.error('Error inserting record:', err);
            } else {
                console.log('Record inserted successfully');
            }
            // Close the connection
            connection.end();
        })
    }catch (error){
        console.error("Error connecting to mysql database");
    }
}
async function deleteAddress(address){
    try {
        const connection = await createConnection();
        console.log('Connected to MySQL database');

        const deleteQuery = `
            DELETE FROM address
            WHERE address_id = ${address.address_id}
        `;
        connection.query(deleteQuery, (err, results) => {
            if (err) {
                console.error('Error deleting record:', err);
            } else {
                console.log('Record deleted successfully');
            }
            // Close the connection
            connection.end();
        })
    }catch (error){
        console.error("Error connecting to mysql database");
    }
}