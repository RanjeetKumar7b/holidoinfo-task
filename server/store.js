// const { Pool } = require('pg');
// const pool = new Pool({
// user: '',
// host: 'localhost',
// database: 'sample',
// password: '2355',
// port: 5432,
// });
const datamodel=require('./models/storage');
const fetching = async () => {
try {
const apiResponse = await fetch('https://api.wazirx.com/api/v2/tickers');
const data = await apiResponse.json();

const top10Results = Object.values(data).slice(0, 10);

for (const result of top10Results) {
//   const { quote_unit, last, buy, sell, volume, base_unit,low,high,type,open,at,name} = result;
//   const query = {
//     text: 'INSERT INTO data(quote_unit, last, buy, sell, volume, base_unit,low,high,type,open,at,name) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11,$12)',
//     values: [quote_unit, last, buy, sell, volume, base_unit,low,high,type,open,at,name],
//   };

//   await pool.query(query);
try{
await datamodel.create(result);
console.log("data saved");
}
catch{
     console.log(error)
}
}
} catch (error) {
  console.error(error);
}
}
fetching();