#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
import dayjs from 'dayjs';
// Define constants
const flightNumber = 'PK-707';
const airplaneType = 'Airbus';
const departureTime = dayjs().format('YYYY-MM-DD HH:mm');
const arrivalTime = dayjs().add(2, 'hour').format('YYYY-MM-DD HH:mm');
const cities = [
    "Islamabad", "New York", "London", "Paris", "Tokyo", "Dubai", "Karachi", "Sydney", "Los Angeles", "Multan", "Toronto", "Lahore", "Jeddah", "Singapore", "Bombay", "Katmandu"
];
const flightFare = ["25,000", "30,000", "40,000", "60,000", "80,000",];
// Generate seat options
const seatOptions = [];
['A-Window-seat', 'B-Business-Class', 'C-Centre-Seat ', 'E-Economy-class'].forEach(letter => {
    for (let number = 1; number <= 10; number++) {
        seatOptions.push(`${letter}-${number}`);
    }
});
// Prompt user for input
inquirer.prompt([
    {
        type: 'input',
        name: 'passengerName',
        message: 'Enter your name:'
    },
    {
        type: 'list',
        name: 'fromCity',
        message: 'Select your departure city:',
        choices: cities
    },
    {
        type: 'list',
        name: 'toCity',
        message: 'Select your destination city:',
        choices: cities
    },
    {
        type: 'list',
        name: 'flightFare',
        message: 'Select your flight fare:',
        choices: flightFare
    },
    {
        type: 'list',
        name: 'seatNumber',
        message: 'Select your seat:',
        choices: seatOptions
    }
]).then(answers => {
    const { passengerName, fromCity, toCity, flightFare, seatNumber } = answers;
    // Print the ticket slip
    console.log(chalk.green('-----------------------------------------'));
    console.log(chalk.blue(`   Passenger Name: ${passengerName}`));
    console.log(chalk.blue(`   Flight Number: ${flightNumber}`));
    console.log(chalk.blue(`   Airplane Type: ${airplaneType}`));
    console.log(chalk.blue(`   Departure City: ${fromCity}`));
    console.log(chalk.blue(`   Destination City: ${toCity}`));
    console.log(chalk.blue(`   Flight Fare: ${flightFare}`));
    console.log(chalk.blue(`   Seat Number: ${seatNumber}`));
    console.log(chalk.blue(`   Departure Time: ${departureTime}`));
    console.log(chalk.blue(`   Arrival Time: ${arrivalTime}`));
    console.log(chalk.green('-----------------------------------------'));
    console.log(chalk.green('  Ticket booked successfully!'));
    console.log(chalk.green('-----------------------------------------'));
    console.log(chalk.green('  Thank you for using our service! PK-707'));
    console.log(chalk.green('-----------------------------------------'));
}).catch(error => {
    console.error(chalk.red('Error:', error));
});
