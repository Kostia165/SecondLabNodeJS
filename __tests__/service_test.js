var userService = require('../proxy/service');

//service test
test('Test the service', () => {
  var userInstance = new userService();
  var str = userInstance.authorizate("John");
  expect(str).toBe("You authorized John");
});


