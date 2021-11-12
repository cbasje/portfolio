import { VercelRequest, VercelResponse } from '@vercel/node';

export default async (req: VercelRequest, res: VercelResponse) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Credentials', 'true');
	res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
	);

	if (!req.body) {
		// res.status(404);
		res.end();
		return;
	}

	const base = require('airtable').base('appqzvwxOn6A2cxuo');
	base('Contactformulier').create(
		[
			{
				fields: {
					email: req.body.email,
					message: req.body.message,
					firstName: req.body.firstName,
					lastName: req.body.lastName,
				},
			},
		],
		function (err, records) {
			if (err) {
				console.error(err);
				res.status(400);
				res.send(err);

				if (err.response) {
					console.error(err.response.body);
				}
				return;
			}
			res.status(200);
			res.json(records);
			// records.forEach(function (record) {
			//   console.log(record.getId());
			// });
		}
	);
};
