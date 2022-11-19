module.exports = app => {
  const customers = require("../controllers/customer.controller.js");

  var router = require("express").Router();

  // Create a new customer
  router.post("/", customers.create);

  // Retrieve all customers
  router.get("/", customers.findAll);

  // Retrieve a single customer with id
  router.get("/:id", customers.findOne);

  // Update a customer with id
  router.put("/:id", customers.update);

  // Delete a customer with id
  router.delete("/:id", customers.delete);

  // Delete all customers
  router.delete("/", customers.deleteAll);

  app.use('/api/customers', router);
};
