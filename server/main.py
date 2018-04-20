from flask import Flask, request,render_template,make_response
from flask_simplelogin import SimpleLogin, login_required
import json
dict={}

app = Flask(__name__, static_url_path='/static',  static_folder='static')
app.config['SECRET_KEY'] = 'something-secret'
app.config['SIMPLELOGIN_USERNAME'] = 'chuck'
app.config['SIMPLELOGIN_PASSWORD'] = 'norris'
SimpleLogin(app)

@app.route('/', methods=['GET'], defaults={'path': ''})
def main_p(path):
    page = render_template('index.html')
    res = make_response(page, 200)
    return res

#небезапасно!
@app.route('/formdata')
def formData():
    intentName = request.args.get('intentName')
    url = request.args.get('url')
    if(intentName!='') and (url != ''):
        dict[intentName] = url
        return "Your data have saved!"
    else:
        return "Your data is incorrect!"
    
   

@app.route('/getdata')
def getData():
    return json.dumps(dict, ensure_ascii=False)


@app.route('/admin')
@login_required   # < --- simple decorator
def foo():
    page = render_template('index_adm.html')
    res = make_response(page, 200)
    return res



if __name__ == '__main__':
    app.run('0.0.0.0', 8000, threaded=True, debug=True)