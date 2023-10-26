# from flask import Flask, request, jsonify, send_file
# from catboost import CatBoostClassifier
# import pandas as pd
# # from flask_cors import CORS

# # app = Flask(__name__)
# # CORS(app)
# from flask_cors import CORS
# app = Flask(__name__)
# # CORS(app ,resources={r"/predict": {"origins": "http://localhost:3000"}})
# CORS(app ,origins="http://localhost:3000")


# # Load the pre-trained CatBoost model from the model.cbm file
# cat_model = CatBoostClassifier()
# cat_model.load_model('model.cbm')

# # Define a route for predictions
# @app.route('/')
# def home():
#     return "Hi all"
# # @app.route('/app.js')
# # def serve_react_app():
# #     return send_file('D:\VANSHIKA\PCOD_project_new\frontend\src\App.js')


# @app.route('/predict', methods=['POST'])
# def predict():
#     if request.method == 'POST':
#         # Get input data from the JSON request
#         input_data = request.get_json()

#         # Create a DataFrame from the input data
#         input_df = pd.DataFrame([input_data])

#         # Perform any necessary data preprocessing on the input data
#         # You may need to align column names with the features used during training

#         # Make predictions using the pre-trained model
#         predictions = cat_model.predict(input_df)

#         # Convert predictions to a list
#         predictions_list = predictions.tolist()

#         # Return predictions as JSON response
#         return jsonify({"predictions": predictions_list})
#     else:
#         return "Method Not Allowed", 405

# if __name__ == '__main__':
#     app.run(debug=True)

#--------------------------NEW TRY------------------------------------------------------


# from flask import Flask, request, jsonify
# from catboost import CatBoostClassifier
# import numpy as np
# from flask_cors import CORS  # Import CORS from flask_cors

# app = Flask(__name__)
# # CORS(app, resources={r"/predict": {"origins": "http://localhost:3000"}})  # Adjust the origin to your frontend URL
# CORS(app, resources={r"/predict": {"origins": "*"}}) 

# # Load the CatBoost model
# model = CatBoostClassifier()
# model.load_model('model.cbm')

# @app.errorhandler(500)
# def internal_server_error(e):
#     app.logger.error("Internal Server Error: %s", str(e))
#     return jsonify(error="Internal Server Error"), 500

# @app.route('/predict', methods=['POST'])
# def predict():
#     try:
#         data = request.get_json()
#         if all(feature in data for feature in [
#             "Age (yrs)", "Weight (Kg)", "Height(Cm)", "BMI", "Blood Group", "Pulse rate(bpm)", "RR (breaths/min)",
#             "Hb(g/dl)", "Cycle(R/I)", "Cycle length(days)", "Marriage Status (Yrs)", "Pregnant(Y/N)",
#             "No. of abortions", "I beta-HCG(mIU/mL)", "II beta-HCG(mIU/mL)", "FSH(mIU/mL)", "LH(mIU/mL)", "FSH/LH",
#             "Hip(inch)", "Waist(inch)", "Waist:Hip Ratio", "TSH (mIU/L)", "AMH(ng/mL)", "PRL(ng/mL)", "Vit D3 (ng/mL)",
#             "PRG(ng/mL)", "RBS(mg/dl)", "Weight gain(Y/N)", "Hair growth(Y/N)", "Skin darkening (Y/N)", "Hair loss(Y/N)",
#             "Pimples(Y/N)", "Fast food (Y/N)", "Reg.Exercise(Y/N)", "BP _Systolic (mmHg)", "BP _Diastolic (mmHg)",
#             "Follicle No. (L)", "Follicle No. (R)", "Avg. F size (L) (mm)", "Avg. F size (R) (mm)", "Endometrium (mm)"
#         ]):
#             input_data = np.array([data[feature] for feature in [
#                 "Age (yrs)", "Weight (Kg)", "Height(Cm)", "BMI", "Blood Group", "Pulse rate(bpm)", "RR (breaths/min)",
#                 "Hb(g/dl)", "Cycle(R/I)", "Cycle length(days)", "Marriage Status (Yrs)", "Pregnant(Y/N)",
#                 "No. of abortions", "I beta-HCG(mIU/mL)", "II beta-HCG(mIU/mL)", "FSH(mIU/mL)", "LH(mIU/mL)", "FSH/LH",
#                 "Hip(inch)", "Waist(inch)", "Waist:Hip Ratio", "TSH (mIU/L)", "AMH(ng/mL)", "PRL(ng/mL)", "Vit D3 (ng/mL)",
#                 "PRG(ng/mL)", "RBS(mg/dl)", "Weight gain(Y/N)", "Hair growth(Y/N)", "Skin darkening (Y/N)", "Hair loss(Y/N)",
#                 "Pimples(Y/N)", "Fast food (Y/N)", "Reg.Exercise(Y/N)", "BP _Systolic (mmHg)", "BP _Diastolic (mmHg)",
#                 "Follicle No. (L)", "Follicle No. (R)", "Avg. F size (L) (mm)", "Avg. F size (R) (mm)", "Endometrium (mm)"
#             ]]).reshape(1, -1)

#             prediction = model.predict(input_data)
#             return jsonify({"prediction": int(prediction[0])})
#         else:
#             app.logger.error("Missing features in the request")
#             return jsonify(error="Missing features in the request"), 400  # Return a JSON error response with status code 400
#     except Exception as e:
#         app.logger.error("Prediction error: %s", str(e))
#         return jsonify(error="Prediction error"), 500

# if __name__ == '__main__':
#     app.run(host='0.0.0.0', debug=True)

#-------------NEw TRY(changing input format)----------------(23-10-23)
from flask import Flask, request, jsonify
from catboost import CatBoostClassifier
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/predict": {"origins": "*"}})

# Load the CatBoost model
model = CatBoostClassifier()
model.load_model('model.cbm')

@app.errorhandler(500)
def internal_server_error(e):
    app.logger.error("Internal Server Error: %s", str(e))
    return jsonify(error="Internal Server Error"), 500

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        if all(feature in data["input_data"] for feature in [
            "Age (yrs)", "Weight (Kg)", "Height(Cm)", "BMI", "Blood Group", "Pulse rate(bpm)", "RR (breaths/min)",
            "Hb(g/dl)", "Cycle(R/I)", "Cycle length(days)", "Marriage Status (Yrs)", "Pregnant(Y/N)",
            "No. of abortions", "I beta-HCG(mIU/mL)", "II beta-HCG(mIU/mL)", "FSH(mIU/mL)", "LH(mIU/mL)", "FSH/LH",
            "Hip(inch)", "Waist(inch)", "Waist:Hip Ratio", "TSH (mIU/L)", "AMH(ng/mL)", "PRL(ng/mL)", "Vit D3 (ng/mL)",
            "PRG(ng/mL)", "RBS(mg/dl)", "Weight gain(Y/N)", "hair growth(Y/N)", "Skin darkening (Y/N)", "Hair loss(Y/N)",
            "Pimples(Y/N)", "Fast food (Y/N)", "Reg.Exercise(Y/N)", "BP _Systolic (mmHg)", "BP _Diastolic (mmHg)",
            "Follicle No. (L)", "Follicle No. (R)", "Avg. F size (L) (mm)", "Avg. F size (R) (mm)", "Endometrium (mm)"
        ]):
            input_data = np.array([data["input_data"][feature] for feature in [
                "Age (yrs)", "Weight (Kg)", "Height(Cm)", "BMI", "Blood Group", "Pulse rate(bpm)", "RR (breaths/min)",
                "Hb(g/dl)", "Cycle(R/I)", "Cycle length(days)", "Marriage Status (Yrs)", "Pregnant(Y/N)",
                "No. of abortions", "I beta-HCG(mIU/mL)", "II beta-HCG(mIU/mL)", "FSH(mIU/mL)", "LH(mIU/mL)", "FSH/LH",
                "Hip(inch)", "Waist(inch)", "Waist:Hip Ratio", "TSH (mIU/L)", "AMH(ng/mL)", "PRL(ng/mL)", "Vit D3 (ng/mL)",
                "PRG(ng/mL)", "RBS(mg/dl)", "Weight gain(Y/N)", "hair growth(Y/N)", "Skin darkening (Y/N)", "Hair loss(Y/N)",
                "Pimples(Y/N)", "Fast food (Y/N)", "Reg.Exercise(Y/N)", "BP _Systolic (mmHg)", "BP _Diastolic (mmHg)",
                "Follicle No. (L)", "Follicle No. (R)", "Avg. F size (L) (mm)", "Avg. F size (R) (mm)", "Endometrium (mm)"
            ]]).reshape(1, -1)

            prediction = model.predict(input_data)
            return jsonify({"prediction": int(prediction[0])})
        else:
            app.logger.error("Missing features in the request")
            return jsonify(error="Missing features in the request"), 400
    except Exception as e:
        app.logger.error("Prediction error: %s", str(e))
        return jsonify(error="Prediction error"), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
