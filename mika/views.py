from flask import Blueprint, render_template
import requests
import json

link_firebase = 'https://mikarpg-4d967-default-rtdb.firebaseio.com'

views = Blueprint('views', __name__)

@views.route("/")
def homepage():

	return render_template("index.html")


@views.route("/commands")
def commands():
	return render_template("commands.html")

@views.route("/termos")
def termos():
	return render_template("termos.html")

@views.route("/blog")
def blog():
	
	def for_post():
		return requests.get(f"{link_firebase}/post/.json").json()
			
	post = for_post()

	return render_template("blog.html", post=post)
