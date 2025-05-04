# Lab 5 - Starter

Wanting Li

## Explore

**Check Your Understanding**

1. I would use a unit test to test **parts of** the "message" feature like message format or content. However, sending a message typically involves integration with other components like user authentication or network transmission, which go beyond the scope of testing individual component. Therefore, while unit tests can cover some internal logic, full testing of the "message" feature would require integration tests.
2. Yes, I would use a unit test for the "max message length" feature because it's a individual part of the "message" that can be tested independently. The test can verify that messages longer than 80 characters are checked, and that messages within the limit are accepted. This kind of input validation is ideal for unit testing.

## GitHub Page
expose: https://alkane7.github.io/Lab5_Starter/expose.html
explore: https://alkane7.github.io/Lab5_Starter/explore.html
