var express = require('express');
var usersModels = require('../models/users');
var jwt = require('jsonwebtoken');
var jwtClave = "sa2Fk72jdSvVg6is8dkL2nN3Sh36sH9Si92";
var tools = require('../modules/tools');
var moment = require('../node_modules/moment');
var users = {};

users.getAll = function(req, res){
	usersModels.getAll(function(err, data){
		res.send(data);
	});
};

users.getOne = function(req, res){
	var idUser = req.params.idUser;
	usersModels.getOne(idUser, function(err, data){
		if(typeof data !== 'undefined' && data.length > 0){
			res.send(data);
		}else{
			res.send({"message" : "Usuario inexistente.", "title":"Cliente"});
		}
	});
};

users.insert = function(req, res){
	var user = {};
	user = req.body;
	usersModels.insert(user, function(err,data){
		if(data){
			res.send({"message" : "El usuario fue agregado.", "title":"Usuario"});
		}else if(err){
			res.send({"message" : "No se pudo agregar el usuario.", "title":"Usuario"});
		}else{
			res.send({"message" : "Ese email ya existe, pruebe con otro", "title" : "Usuario"});
		}
	});
};
/*
users.update = function(req, res){
	var user = {};
	user = req.body;
	usersModels.idUser = req.params.idUser;
	usuariosM.update(user, function(err,data){
		if(data){
			res.send({"message" : "Usuario editado", "title":"Usuario"});
		}else if(err){
			res.send({"message" : "No se pudo editar el usuario.", "title":"Usuario"});
		}else{
			res.send({"message" : "Ese email ya existe, pruebe con otro", "title" : "Usuario"});	
		}
	});
};*/

users.authenticate = function(req, res){
	var user = {};
	user = req.body;
	const payload = {
		sub: 14,
		iat: moment().unix(),
		exp: moment().add(14, "days").unix(),
	};
	const token = jwt.sign({payload}, jwtClave);
	res.json({
		mensaje: 'Autenticación correcta',
		token: token
	});
	
	usersModels.authenticate(user,token, function(validation, message, data){
		if(validation){
			res.json({
				mensaje: 'Autenticación correcta',
				token: token
			});
		}else{
			if(data){
				res.status(401).send({
					error: 'usuario o contraseña inválidos'
				  })
				return
			}else{
				res.send({
					"validation": false,
					"message": message
				});
			}
		}	
	});
};

module.exports = users;