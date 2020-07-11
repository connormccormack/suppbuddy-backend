const express = require("express");
const ProductService = require("./product-service");


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
        weightLoss,
        weightGain,
        buildMuscle,
        fish,
        pregnancy,
        dairy,
        bloodPressure,
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
        lowEnergy,
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
        weightLoss,
        weightGain,
        buildMuscle,
        fish,
        pregnancy,
        dairy,
        bloodPressure,
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
        lowEnergy,
        stress,
        preworkout,
        postworkout,
        results,
        intraworkout,
        wrinkle,
        hair,
        hydration
      }
      ProductService.insertUserProfile(req.app.get('db'), newUserProfile)
        .then(res.status(204).send('Created profile'))
        .catch(next);
    })
    .get((req, res, next))
    
    
    

    // get responds with a json object that includes email, biometric data, and an array of checked fields

    // get request gets product data based on array of checked fields
      // response is array of objects 