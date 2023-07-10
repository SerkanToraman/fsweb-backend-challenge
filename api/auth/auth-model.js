const db = require('../../data/dbConfig')


function getById(id){
  return db('users').where("user_id",id).first();
}

const findBy = filter =>{
return db('users').where(filter).first();
}

async function insertUser(account){
  const [id] = await db("users").insert(account)
  return getById(id);
}

module.exports={
  findBy,
  insertUser
}