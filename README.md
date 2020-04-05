# loginnode_af_v0.1.0
<H3>API REST WITH NODE.JS AND JWT</H3>
<br><br>

<table>
   <thead>
	<tr>
	<th>API</th>
	<th>Description</th>
	<th>Auth</th>
	<th>HTTPS</th>
	</tr>
  </thead>
<tbody>
	<tr>
	<td><a href="https://github.com/agustinafassina/loginnode_af_v0.1.0">Api with Node.js and JWT</a></td>
	<td>By Agustina Fassina</td>
	<td><code>OAuth</code></td>
	<td>Yes</td>
	</tr>
</tbody>
</table>
<br>

<table>
	<thead>
	<tr>
	<th>Method</th>
	<th>Action</th>
	<th>Ready?</th>
	</tr>
	</thead>
<tbody>
	<tr>
		<td>GET</td>
		<td>../users</td>
		<td>Yes</td>
	</tr>
	<tr>
		<td>GET</td>
		<td>../users/idUser</td>
		<td>Yes</td>
	</tr>
	<tr>
		<td>POST</td>
		<td>../users</td>
		<td>Yes</td>
	</tr>
	<tr>
		<td>UPDATE</td>
		<td>../users/idUser</td>
		<td>No</td>
	</tr>
	<tr>
		<td>POST</td>
		<td>../authenticate</td>
		<td>Yes</td>
	</tr>
</tbody>
</table>
<BR>
<h3>Packages</h3>
<br>
<table>
	<thead>
	<tr>
	<th>Package</th>
	<th>Command</th>
	</tr>
	</thead>
<tbody>
	<tr>
		<td>Express</td>
		<td>npm install express --save</td>
	</tr>
	<tr>
		<td>Body-parser </td>
		<td>npm install body-parser</td>
	</tr>
	<tr>
		<td>Cors</td>
		<td>npm install cors</td>
	</tr>
	<tr>
		<td>Nodemon</td>
		<td>npm install nodemon</td>
	</tr>
	<tr>
		<td>Mysql</td>
		<td>npm install mysql</td>
	</tr>
	<tr>
		<td>Promise</td>
		<td>npm install promise</td>
	</tr>
	<tr>
		<td>Type</td>
		<td>npm install type</td>
	</tr>
	<tr>
		<td>Jwt</td>
		<td>npm install express-jwt</td>
	</tr>
	<tr>
		<td>Crypto</td>
		<td>npm install crypto</td>
	</tr>
	<tr>
		<td></td>
		<td></td>
	</tr>
</tbody>
</table>

<br>
<h4>DATABASE</h4>
<br>
<p>
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `lastname` varchar(100) DEFAULT NULL,
  `username` varchar(100) DEFAULT NULL,
  `email` varchar(250) DEFAULT NULL,
  `created_on` timestamp NULL DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `token` varchar(2500) DEFAULT NULL,
  `date_expiration` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
</p>
<br>

<p>
0.Git init<br>
1.Git clone https://github.com/agustinafassina/loginnode_af_v0.1.0 <br>
2.Configuration of database -> modelus/connections.js.<br>
    node connections.js -> check connection bd.<br>
3.Run -> nodemon index.js<br>

</p>
<hr>
By Agustina Fassina
