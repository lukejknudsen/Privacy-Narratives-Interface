from flask import Flask,request
import json

app = Flask(__name__)
app.config['JSONIFY_PRETTYPRINT_REGULAR'] = True

class ResourceManager():
    def __init__(self):
        app.config['JSONIFY_PRETTYPRINT_REGULAR'] = True
        f = open('configuration.json',)

        self.configuration = json.load(f)
        # need a separate definitions dictionary
        

    def index(self):
        response =f'<p>Welcome to resource manager!</p><p>configuration: {self.configuration}</p>'
        return response

    def create_configuration(self, request):
        self.configuration = request
        return str(self.configuration)

    def get_configuration(self):
        return str(self.configuration)

    def delete_configuration(self):
        self.configuration = []

    def add_element(self, element):
        self.configuration.append(element)
        return str(self.configuration)

# need to store definitions.
# definitions that get added
# dependency table... methods of storing and querying it
# test making resource requests and adding definitions... get_configuration
# Then it's the algorithm for traversing the requests
# Need to pass in login information, and store it
# Can even hardcode the netapp1!


rm = ResourceManager()

@app.route('/')
def index():
    response =f'<p>Welcome to resource manager!</p><p>configuration: {self.configuration}</p>'
    return response

@app.route('/create_configuration', methods=['POST'])
def create_configuration():
    return rm.create_configuration(request.json)

@app.route('/get_configuration')
def get_configuration():
    return rm.get_configuration()

@app.route('/add_element', methods=['POST'])
def add_element():
    return rm.add_element(request.json)
