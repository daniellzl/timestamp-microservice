# Timestamp Microservice

Checks to see if a user passed parameter string contains a unix timestamp or a natural language date. If it does, then it returns the Unix timestamp and natural language form of that date. If it does not, then it returns null.

[Live Application](https://timestamp-dlzl.herokuapp.com)

### Example Usage

https://timestamp-dlzl.herokuapp.com/1450137600

or

https://timestamp-dlzl.herokuapp.com/December%2015,%202015

return

{ "unix": 1450137600, "natural": "December 15, 2015" }

### Project Goals

Application was completed as a freeCodeCamp [challenge](https://www.freecodecamp.org/challenges/timestamp-microservice).

1. User Story: I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).

2. User Story: If it does, it returns both the Unix timestamp and the natural language form of that date.

3. User Story: If it does not contain a date or Unix timestamp, it returns null for those properties.

### Technologies

* express
* pug
