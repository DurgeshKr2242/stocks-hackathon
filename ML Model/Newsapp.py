from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from main import Extraction

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
data ={}
@app.route('/')
@cross_origin()

def hello_world():
    return "welcome to my api"

@app.route('/<string:n>')
def sentiment(n):
    result = Extraction(n)
    # result = result.to_dict()
    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True)