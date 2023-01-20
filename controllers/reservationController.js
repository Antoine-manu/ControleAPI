const db = require('../models/index.js');
const Reservations = db['Reservations']
const ReservationsParkings = db['Reservations_parking']
const Op = db.Sequelize.Op;
const bcrypt = require('bcrypt');
const { DATE } = require('sequelize');
const { sequelize } = require('../models/index.js');

// Create and Save a new Reservations
exports.create = (req, res) => {
	// Validate request
	if (!req.body.customer_name) {
		res.status(400).send({
			message: "La reservation doit avoir un client"
		});
		return;
	}
	if (!req.body.start_date) {
		res.status(400).send({
			message: "La reservation doit avoir une date de debut"
		});
		return;
	}
	if (!req.body.end_date) {
		res.status(400).send({
			message: "La reservation doit avoir une date de fin"
		});
		return;
	}
	if (!req.body.parking_id) {
		res.status(400).send({
			message: "La reservation doit avoir un parking"
		});
		return;
	}
	const reservation = {
		customer_name: req.body.customer_name
	};

	// Save Reservation in the database
	Reservations.create(reservation)
		.then(data => {
			const reservationParking = {
				reservation_id : data.id,
				start_date: Date.parse(req.body.start_date),
				end_date: Date.parse(req.body.end_date),
				parking_id: req.body.parking_id,
			};
			ReservationsParkings.create(reservationParking)
				.then(data => {
					res.send(data);
				})
				.catch(err => {
					res.status(500).send({
						message:
							err.message || 'Erreur lors de la creation de la reservation d une place de parking.'
					});
				});
		})
		.catch(err => {
			res.status(500).send({
				message:
					err.message || 'Erreur lors de la creation de la reservation.'
			});
		});
};

// Retrieve all Reservation from the database.
exports.findAll = (req, res) => {
	Reservations.findAll({
		include: ['Parkings'],
	})
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				error:err,
				message:
					err.message || 'Erreur lors de la recuperation des Reservation.'
			});
		});
};

// Find a single Reservations with an id
exports.findOneById = (req, res) => {
	const id = req.params.id;

	Reservations.findByPk(id,{
		include: ['Parkings'],
	})
		.then(data => {
			if (data) {
				res.send(data);
			} else {
				res.status(404).send({
					message: `Impossible de trouver la reservation avec l'id ${id}.`
				});
			}
		})
		.catch(err => {
			res.status(500).send({
				message:
					err.message || 'Erreur lors de la recupereation de la Reservationss.' + id
			});
		});
};

// Update a Reservations by the id in the request
exports.update = (req, res) => {
	const id = req.params.id;

	Reservations.update(req.body, {
		where: { id: id }
	})
		.then(num => {
			if (num == 1) {
				res.send({
					message: 'Votre reservation a été mise a jour.'
				});
			} else {
				res.send({
					message: `Impossible de recuperer la reservation avec l'id ${id}.`
				});
			}
		})
		.catch(err => {
			res.status(500).send({
				message: 'Impossible de mettre a jour la reservation ' + id,
				error : err
			});
		});
};

// Delete a Reservations with the specified id in the request
exports.delete = (req, res) => {
	const id = req.params.id;

	Reservations.destroy({
		where: { id: id }
	})
		.then(num => {
			if (num == 1) {
				res.send({
					message: 'Reservations supprimée !'
				});
			} else {
				res.send({
					message: `Impossible de supprimer la reservation ${id}.`
				});
			}
		})
		.catch(err => {
			res.status(500).send({
				message: 'Impossible de trouver la reservation id=' + id
			});
		});
};
