const express = require('express');
const router = express.Router();

router.post('/', (req,res)=>{
    console.log('Received request body:', req.body);
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var gender = req.body.gender;
    var age = req.body.age;
    var weightUnit = req.body.weightUnit;
    var heightUnit = req.body.heightUnit;
    
    let heightInMeters = height;
    let weightInKg = weight;
    
    if (heightUnit === 'cm') {
        heightInMeters = height / 100;
    } 
    else if (heightUnit === 'inches') {
        heightInMeters = height * 0.0254;
    }
    
    if (weightUnit === 'g') {
        weightInKg = weight / 1000;
    } 
    else if (weightUnit === 'lbs') {
        weightInKg = weight * 0.453592; 
    }
    
    var bmi = weightInKg / (heightInMeters * heightInMeters);
    
      var bmiResult = {
            bmi: bmi.toFixed(2),
            category: ''
        };
    
        if (bmi < 18.5) {
            bmiResult.category = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            bmiResult.category = 'Normal weight';
        } else if (bmi >= 25 && bmi < 29.9) {
            bmiResult.category = 'Overweight';
        } else {
            bmiResult.category = 'Obesity';
        }
    
        res.json(bmiResult);
    
    })

module.exports = router;
    