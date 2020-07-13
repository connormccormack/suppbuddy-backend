const express = require("express");
const productsService = require("./products-service");


const productsRouter = express.Router();
const jsonBodyParser = express.json();

// post request sends questionnaire data (checked fields) to user_data table

productsRouter
    .route('/user_data')
    .post(jsonBodyParser, (req, res, next) => {
      const {
        email,
        gender,
        age,
        money,
        height,
        weight,
        activity,
        fruits,
        sun,
        vegan,
        weight_loss,
        weight_gain,
        build_muscle,
        fish,
        pregnancy,
        dairy,
        blood_pressure,
        gluten,
        diabetes,
        smoke,
        arthritis,
        osteoporosis,
        sex,
        digestion,
        detox,
        joint,
        sleep,
        focus,
        memory,
        drowsiness,
        low_energy,
        stress,
        preworkout,
        postworkout,
        results,
        intraworkout,
        wrinkle,
        hair,
        hydration
      } = req.body;
      const newUserProfile = {
        email,
        gender,
        age,
        money,
        height,
        weight,
        activity,
        fruits,
        sun,
        vegan,
        weight_loss,
        weight_gain,
        build_muscle,
        fish,
        pregnancy,
        dairy,
        blood_pressure,
        gluten,
        diabetes,
        smoke,
        arthritis,
        osteoporosis,
        sex,
        digestion,
        detox,
        joint,
        sleep,
        focus,
        memory,
        drowsiness,
        low_energy,
        stress,
        preworkout,
        postworkout,
        results,
        intraworkout,
        wrinkle,
        hair,
        hydration
      }
      productsService.insertUserProfile(req.app.get('db'), newUserProfile)
        .then(res.status(204).send('Created profile'))
        .catch(next);
    });

productsRouter
  .route('/:email')
  .get(jsonBodyParser, (req, res, next) => {
    const email = req.params.email;
    
    productsService.getUserProfile(req.app.get('db'), email)
      .then(user_data => {
        const {
        fruits,
        sun,
        vegan,
        weight_loss,
        weight_gain,
        build_muscle,
        fish,
        pregnancy,
        dairy,
        blood_pressure,
        gluten,
        diabetes,
        smoke,
        arthritis,
        osteoporosis,
        sex,
        digestion,
        detox,
        joint,
        sleep,
        focus,
        memory,
        drowsiness,
        low_energy,
        stress,
        preworkout,
        postworkout,
        results,
        intraworkout,
        wrinkle,
        hair,
        hydration
      } = user_data[0]

      const userDataArray = [ 
        {fruits},
        {sun},
        {vegan},
        {weight_loss},
        {weight_gain},
        {build_muscle},
        {fish},
        {pregnancy},
        {dairy},
        {blood_pressure},
        {gluten},
        {diabetes},
        {smoke},
        {arthritis},
        {osteoporosis},
        {sex},
        {digestion},
        {detox},
        {joint},
        {sleep},
        {focus},
        {memory},
        {drowsiness},
        {low_energy},
        {stress},
        {preworkout},
        {postworkout},
        {results},
        {intraworkout},
        {wrinkle},
        {hair},
        {hydration}
      ]
      const filteredUserData = userDataArray.filter(item => Object.values(item)[0])
      const trueData = filteredUserData.map(item => Object.keys(item))
      console.log(filteredUserData)
      productsService.getProductsByUserData(req.app.get('db'), trueData )
        .then(products => {
          res.json(products)
        })
      })
      .catch(next);
  });

productsRouter
  .route('/products')
  .get(jsonBodyParser, (req,res,next) => {

  })
      
  
module.exports = productsRouter;
    

    // get responds with a json object that includes email, biometric data, and an array of checked fields

    // get request gets product data based on array of checked fields
      // response is array of objects 