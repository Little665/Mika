from flask import Flask, render_template


def create_app():
	app = Flask(__name__)
	app.config['SECRET_KEY'] = 'proxys'

	from .views import views
	from .auth import auth

	@app.errorhandler(404) 
	def not_found(e): 
		return render_template("notfound.html")
	  
	app.register_blueprint(views, url_prefix='/')
	app.register_blueprint(auth, url_prefix='/')

	return app