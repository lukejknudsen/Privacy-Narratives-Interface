from flask import Flask,request,render_template
import json

app = Flask(__name__)
app.config['JSONIFY_PRETTYPRINT_REGULAR'] = True
output = ''

# https://www.geeksforgeeks.org/retrieving-html-from-data-using-flask/
@app.route('/', methods =["GET", "POST"])
def index():
    if request.method == "POST":
       # getting input with name = fname in HTML form
    #    self.first_name = request.form.get("fname")
    #    # getting input with name = lname in HTML form 
    #    last_name = request.form.get("lname") 
        output = request.form.get("foo")
        f = open("output.lp", "a")
        f.write(output)
        f.close()
        return render_template('2.html')
    return render_template('2.html')

if __name__ == '__main__':
   app.run()