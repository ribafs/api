const Customer = require("../models/customer.model.js");

// Create and Save a new customer
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a customer
  const customer = new Customer({
    name: req.body.name,
    email: req.body.email
  });

  // Save customer in the database
  Customer.create(customer, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the customer."
      });
    else res.send(data);
  });
};

// Retrieve all customers from the database (with condition).
exports.findAll = (req, res) => {
  const name = req.query.name;

  Customer.getAll(name, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers."
      });
    else res.send(data);
  });
};

// Find a single customer by Id
exports.findOne = (req, res) => {
  Customer.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found customer with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving customer with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};

// Update a customer identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Customer.updateById(
    req.params.id,
    new Customer(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found customer with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating customer with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a customer with the specified id in the request
exports.delete = (req, res) => {
  Customer.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found customer with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete customer with id " + req.params.id
        });
      }
    } else res.send({ message: `customer was deleted successfully!` });
  });
};

// Delete all customers from the database.
exports.deleteAll = (req, res) => {
  Customer.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all customers."
      });
    else res.send({ message: `All customers were deleted successfully!` });
  });
};
