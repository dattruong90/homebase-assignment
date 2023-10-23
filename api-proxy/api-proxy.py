from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

@app.route('/user', methods=['POST'])
def createUser():
    data = request.get_json()
    response = requests.post('http://localhost:5001/user', json=data)
    return resolveResponse(response)

@app.route('/user', methods=['GET'])
def getUsers():
    response = requests.get('http://localhost:5001/user')
    return resolveResponse(response)

@app.route('/user/<id>', methods=['GET'])
def getUser(id):
    response = requests.get(f'http://localhost:5001/user/{id}')
    return resolveResponse(response)

@app.route('/user', methods=['PUT'])
def updateUser():
    data = request.get_json()
    response = requests.put(f'http://localhost:5001/user', json=data)
    return resolveResponse(response)

# Delete (DELETE) a specific task by ID
@app.route('/user/<id>', methods=['DELETE'])
def deleteUser(id):
    response = requests.delete(f'http://localhost:5001/user/{id}')
    return resolveResponse(response)

def resolveResponse(response):
    return (response.content, response.status_code, response.headers.items())

if __name__ == '__main__':
    app.run(port=5000)