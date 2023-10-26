// import React, { Component } from 'react';
// import axios from 'axios';

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       input: {
//         'Age': '',
//         'Weight': '',
//         'Height': '',
//         'BMI': '',
//         'Blood Pressure': '',
//         'Pulse rate': '',
//         'RR': '',
//         'Hb': '',
//         'Cycle length': '',
//         'Cycle irregularity': '',
//         'Cycle length regularity': '',
//         'Cycles': '',
//         'I beta-HCG': '',
//         'II beta-HCG': '',
//         'FSH/LH': '',
//         'FSH/LH ratio': '',
//         'Waist': '',
//         'Hip': '',
//         'Waist/Hip ratio': '',
//         'TSH': '',
//         'T3': '',
//         'TT4': '',
//         'T4U': '',
//         'FTI': '',
//         'Progesterone': '',
//         'Prolactin': '',
//         'Testosterone': '',
//         'SHBG': '',
//         'Vit D3': '',
//         'Fast food': '',
//         'Reg.Exercise': '',
//         'BP _Systolic': '',
//         'BP _Diastolic': '',
//         'Follicle No': '',
//         'No ofPregnancies': '',
//         'Age of 1st child': '',
//         'IbetaHCG': '',
//         'IIbetaHCG': '',
//         'IIbetaHCGMothers': '',
//         'Weight gain': '',
//         'hair growth': '',
//         'Skin darkening': '',
//       },
//       prediction: null,
//     };
//   }

//   handleInputChange = (e) => {
//     const { name, value } = e.target;
//     this.setState((prevState) => ({
//       input: {
//         ...prevState.input,
//         [name]: value,
//       },
//     }));
//   };

//   handlePrediction = () => {
//     // Make a POST request to your Flask API for prediction
//     axios.post('http://127.0.0.1:5000/predict', this.state.input)
//       .then((response) => {
//         // Update the state with the prediction result
//         this.setState({ prediction: response.data.predictions[0] });
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   render() {
//     return (
//       <div>
//         <h1>PCOS Prediction</h1>
//         <div>
//           {Object.keys(this.state.input).map((feature) => (
//             <div key={feature}>
//               <label>{feature}</label>
//               <input
//                 type="text"
//                 name={feature}
//                 value={this.state.input[feature]}
//                 onChange={this.handleInputChange}
//               />
//             </div>
//           ))}
//         </div>
//         <button onClick={this.handlePrediction}>Predict</button>
//         {this.state.prediction !== null && (
//           <div>Prediction: {this.state.prediction}</div>
//         )}
//       </div>
//     );
//   }
// }

// export default App;
//------------------------NEW TRY----------------------------------------(22-10-23)

// import React, { useState } from 'react';

// function App() {
//   const [inputData, setInputData] = useState({
//     "Age (yrs)":"", 
//     "Weight (Kg)":"",
//      "Height(Cm)":"",
//       "BMI":"",
//        "Blood Group":"",
//         "Pulse rate(bpm)":"",
//          "RR (breaths/min)":"",

//             "Hb(g/dl)":"",
//              "Cycle(R/I)":"",
//               "Cycle length(days)":"",
//                "Marriage Status (Yrs)":"",
//                 "Pregnant(Y/N)":"",
//             "No. of abortions":"",
//              "I beta-HCG(mIU/mL)":"",
//               "II beta-HCG(mIU/mL)":"",
//                "FSH(mIU/mL)":"",
//                 "LH(mIU/mL)":"",
//                  "FSH/LH":"",
//             "Hip(inch)":"",
//              "Waist(inch)":"",
//               "Waist:Hip Ratio":"",
//                "TSH (mIU/L)":"",
//                 "AMH(ng/mL)":"",
//                  "PRL(ng/mL)":"",
//                   "Vit D3 (ng/mL)":"",
//             "PRG(ng/mL)":"",
//              "RBS(mg/dl)":"",
//               "Weight gain(Y/N)":"",
//                "Hair growth(Y/N)":"",
//                 "Skin darkening (Y/N)":"",
//                  "Hair loss(Y/N)":"",
//             "Pimples(Y/N)":"",
//              "Fast food (Y/N)":"",
//               "Reg.Exercise(Y/N)":"",
//                "BP _Systolic (mmHg)":"",
//                 "BP _Diastolic (mmHg)":"",
//             "Follicle No. (L)":"",
//              "Follicle No. (R)":"",
//               "Avg. F size (L) (mm)":"",
//                "Avg. F size (R) (mm)":"",
//                 "Endometrium (mm)":""
//     // Add more features here
//   });

//   const [prediction, setPrediction] = useState(null);

//   const handleInputChange = (event, feature) => {
//     setInputData({
//       ...inputData,
//       [feature]: event.target.value,
//     });
//   };

//   const handlePredict = () => {
//     try {
//       fetch('http://localhost:5000/predict', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ input_data: inputData }),
//       })
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//           }
//           return response.json();
//         })
//         .then((data) => {
//           if (data.error) {
//             throw new Error(data.error);
//           }
//           setPrediction(data.prediction);
//         })
//         .catch((error) => console.error('Error:', error));
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>CatBoost Model Prediction</h1>
//       {Object.keys(inputData).map((feature) => (
//   <div key={feature}>
//     <label htmlFor={feature}>{feature}:</label>
//     <input
//       type="text"
//       id={feature}
//       value={inputData[feature]}
//       onChange={(e) => handleInputChange(e, feature)}
//     />
//   </div>
// ))}

//       <button onClick={handlePredict}>Predict</button>
//       {prediction !== null && (
//         <div>
//           <h2>Prediction: {prediction}</h2>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

//------------------NEW TRY(changing input format)----------------------(23-10-23)
import React, { useState } from 'react';

function App() {
  const [inputData, setInputData] = useState({
    "Age (yrs)": "",
    "Weight (Kg)": "",
    "Height(Cm)": "",
    "BMI": "",
    "Blood Group": "",
    "Pulse rate(bpm)": "",
    "RR (breaths/min)": "",
    "Hb(g/dl)": "",
    "Cycle(R/I)": "",
    "Cycle length(days)": "",
    "Marriage Status (Yrs)": "",
    "Pregnant(Y/N)": "",
    "No. of abortions": "",
    "I beta-HCG(mIU/mL)": "",
    "II beta-HCG(mIU/mL)": "",
    "FSH(mIU/mL)": "",
    "LH(mIU/mL)": "",
    "FSH/LH": "",
    "Hip(inch)": "",
    "Waist(inch)": "",
    "Waist:Hip Ratio": "",
    "TSH (mIU/L)": "",
    "AMH(ng/mL)": "",
    "PRL(ng/mL)": "",
    "Vit D3 (ng/mL)": "",
    "PRG(ng/mL)": "",
    "RBS(mg/dl)": "",
    "Weight gain(Y/N)": "",
    "hair growth(Y/N)": "",
    "Skin darkening (Y/N)": "",
    "Hair loss(Y/N)": "",
    "Pimples(Y/N)": "",
    "Fast food (Y/N)": "",
    "Reg.Exercise(Y/N)": "",
    "BP _Systolic (mmHg)": "",
    "BP _Diastolic (mmHg)": "",
    "Follicle No. (L)": "",
    "Follicle No. (R)": "",
    "Avg. F size (L) (mm)": "",
    "Avg. F size (R) (mm)": "",
    "Endometrium (mm)": "",
  });

  const [prediction, setPrediction] = useState(null);

  const handleInputChange = (event, feature) => {
    setInputData({
      ...inputData,
      [feature]: event.target.value,
    });
  };

  const calculateBMI = () => {
    const weight = parseFloat(inputData["Weight (Kg)"]);
    const height = parseFloat(inputData["Height(Cm)"]) / 100;
    if (!isNaN(weight) && !isNaN(height) && height > 0) {
      return (weight / (height * height)).toFixed(2);
    }
    return "";
  };

  const calculateWaistToHipRatio = () => {
    const waist = parseFloat(inputData["Waist(inch)"]);
    const hip = parseFloat(inputData["Hip(inch)"]);
    if (!isNaN(waist) && !isNaN(hip) && hip > 0) {
      return (waist / hip).toFixed(2);
    }
    return "";
  };

  const handlePredict = () => {
    const bmi = calculateBMI();
    const waistToHipRatio = calculateWaistToHipRatio();
    setInputData({
      ...inputData,
      BMI: bmi,
      "Waist:Hip Ratio": waistToHipRatio,
    });

    try {
      fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "input_data": inputData }),  // Update key to "input_data"
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          if (data.error) {
            throw new Error(data.error);
          }
          setPrediction(data.prediction);
        })
        .catch((error) => console.error('Error:', error));
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>PCOS Prediction</h1>
      {Object.keys(inputData).map((feature) => (
        <div key={feature}>
          <label htmlFor={feature}>
            {feature}
            {feature.includes("Y/N") && (
              <select
                id={feature}
                value={inputData[feature]}
                onChange={(e) => handleInputChange(e, feature)}
              >
                <option value="">Select</option>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            )}
            {feature === "Blood Group" && (
                <select
                  id={feature}
                  value={inputData[feature]}
                  onChange={(e) => handleInputChange(e, feature)}
                >
                  <option value="">Select</option>
                  <option value="11">A+</option>
                  <option value="12">A-</option>
                  <option value="13">B+</option>
                  <option value="14">B-</option>
                  <option value="15">O+</option>
                  <option value="16">O-</option>
                  <option value="17">AB+</option>
                  <option value="18">AB-</option>
                </select>
            )}
            {feature === "Cycle(R/I)" && (
                <select
                  id={feature}
                  value={inputData[feature]}
                  onChange={(e) => handleInputChange(e, feature)}
                >
                  <option value="">Select</option>
                  <option value="2">Regular(R)</option>
                  <option value="4">Irregular(I)</option>
                </select>
            )}
            {feature === "BMI" && (
              <p>{calculateBMI()}</p>
            )}
            {feature === "Waist:Hip Ratio" && (
              <p>{calculateWaistToHipRatio()}</p>
            )}
            {!feature.includes("Y/N") && feature !== "BMI" && feature !== "Waist:Hip Ratio" && (
              <input
                type="text"
                id={feature}
                value={inputData[feature]}
                onChange={(e) => handleInputChange(e, feature)}
              />
            )}
          </label>
        </div>
      ))}
      <button onClick={handlePredict}>Predict</button>
      {prediction !== null && (
        <div>
          <h2>Prediction: {prediction}</h2>
        </div>
      )}
    </div>
  );
}

export default App;


