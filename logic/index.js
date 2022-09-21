const helpers = require('../functions/func')
async function route1(req,res)
{ //Get All Meals
    const result = await helpers.GetAll();
    console.log(result)
    res.send(result)
}

async function route2(req,res)
{// Post New Meal
    const Meal = await helpers.creatMeal(req.body)
    console.log(Meal)
    res.send("Your Meal Saved And Will coocked soon ^_^")
}
async function route3(req,res)
{//Get One Meal 
    const Meal = await helpers.GetMeal(req.params.name);
    if(!Meal)res.send("This meal Does not exist sorry")
    res.send(Meal)
    
}
module.exports = {route1,route2,route3}