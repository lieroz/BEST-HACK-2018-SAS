from flask import Flask, request,render_template,make_response
from flask_simplelogin import SimpleLogin, login_required


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



@app.route('/admin1')
@login_required   # < --- simple decorator
def foo():
    return 'secret'



if __name__ == '__main__':
    app.run('0.0.0.0', 8000, threaded=True, debug=True)