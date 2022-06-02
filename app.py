from flask import Flask,request,render_template
import json
import os

app = Flask(__name__)
app.config['JSONIFY_PRETTYPRINT_REGULAR'] = True
output = ''
aspout = ''
import flask
print (flask.__version__)

# gonna do this https://medium.com/swlh/how-to-host-your-flask-app-on-pythonanywhere-for-free-df8486eb6a42

# https://www.geeksforgeeks.org/retrieving-html-from-data-using-flask/
@app.route('/', methods =["GET", "POST"])
def index():
    global output
    global aspout
    if request.method == "POST":
       # getting input with name = fname in HTML form
    #    self.first_name = request.form.get("fname")
    #    # getting input with name = lname in HTML form 
    #    last_name = request.form.get("lname") 
        # template_file = open("template.lp", "r")
        # output = template_file.read()
        # template_file.close()
        output = request.form.get("submit")

        output_file = open("output.lp", "w")
        output_file.write(output)
        output_file.close()
        os.system("python3 -m clingo orig_template.lp output.lp cpocl.lp > aspout.txt")
        import time
        # time.sleep(6)

        aspout_file = open("aspout.txt", "r")
        aspout = aspout_file.read()
        aspout_file.close()

        return render_template('2.html', code = output, asp = aspout)
    return render_template('2.html', code = output, asp = aspout)

if __name__ == '__main__':
   app.run()