// import knex, { Knex } from 'knex'

// let cachedConnection: Knex<any, unknown[]>

// export default () => {
//   if (cachedConnection) {
//     console.log("using cached db connection");
//     return cachedConnection;
//   }
// 	let connTimeout = 60000 //default value
// 	if(process.env.NODE_ENV === 'test'){
// 		connTimeout = 2000
// 	}

// 	console.log("creating new db connection");
// 	const connection = knex({
// 		client: 'pg',
// 		pool: {
// 			propagateCreateError: false,
// 		},
// 		connection: {
// 			host: process.env.DB_HOST,
// 			port: 5555,
// 			user: process.env.DB_USER,
// 			password: process.env.DB_PWD,
// 			database: 'thedatabase',
// 		},
// 		migrations: {
// 			tableName: 'migrations',
// 		},
// 		acquireConnectionTimeout: connTimeout
// 	})

// 	cachedConnection = connection;
//   return connection;
// };

const main = async () => {
	const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
	while(true){
		console.log('welcome to the future')
		await sleep(300000)
	}
}
main();