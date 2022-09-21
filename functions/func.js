const mongoose = require('mongoose')

const list = new mongoose.Schema({  //Schema
    name: String,
    cheaf: String,
    ingradiant: [ String ],
    userRating: Number,
    link: String 
})

const List = new mongoose.model('list',list)
async function creatMeal (args) // Post New Meal Function
{
const Meal = new List({
name:args.name,
cheaf:args.cheaf,
ingradiant:args.ingradiant,
userRating : args.userRating,
link: args.link
})
Meal.save()
return Meal;
}

 async function GetAll(){//Get All Function Meals
    return(await List.find().select({__v:0}))
}

 async function GetMeal(name) //Get One  Meal
{
   return (await List.findOne({name:name}).select({__v:0,_id:0,cheaf:0}))
   
}

module.exports = {creatMeal,GetAll,GetMeal}