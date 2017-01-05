# Timestamp Microservice

This website checks to see if a user passed parameter string contains a unix timestamp or a natural language date. If it does, then it returns the Unix timestamp and natural language form of that date. If it does not, then it returns null.

## Website

https://timestamp-dlzl.herokuapp.com

## Example Usage

https://timestamp-dlzl.herokuapp.com/1450137600

or 

https://timestamp-dlzl.herokuapp.com/December%2015,%202015

return

{ "unix": 1450137600, "natural": "December 15, 2015" }
    
## Credit

https://www.freecodecamp.com/challenges/timestamp-microservice