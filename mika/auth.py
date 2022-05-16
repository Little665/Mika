from flask import Blueprint, render_template, request, flash, redirect, url_for
import requests
import json

auth = Blueprint('auth', __name__)

link_firebase = 'https://mikarpg-4d967-default-rtdb.firebaseio.com'

class user_admin_security():
	
	def firebase_dados():
		security_firebase = requests.get(f"{link_firebase}/mika_admin/.json")
		firebase_config = security_firebase.json()
		user_admin = []
		for rows in firebase_config:
			user_admin.append(firebase_config[rows])
			
		return user_admin
	firebase_dados()

db = user_admin_security.firebase_dados()

class create_post():

	def new_post(self, img, titulo, introducao, paragrafo_one, paragrafo_two, resumo, paragrago_three, data_post):
		post_submit = {"img": f"{img}", "titulo": f"{titulo}", "introducao": f"{introducao}", "paragrafo_one": f"{paragrafo_one}", "paragrafo_two": f"{paragrafo_two}", "resumo": f"{resumo}","paragrago_three": f"{paragrago_three}", "data": f"{data_post}"}
		envier_resquets = requests.post(f"{link_firebase}/post/.json", data=json.dumps(post_submit))
		



@auth.route('/proxy', methods=['GET', 'POST'])
def login():
	if request.method == 'POST':
		email = request.form.get('email')
		password = request.form.get('password')
		user = request.form.get('firstName')

		img = request.form.get('img')
		titulo = request.form.get('titulo')
		introducao = request.form.get('introducao')
		paragrafo_one = request.form.get('paragrago_one')
		paragrafo_two = request.form.get('paragrago_two')
		resumo = request.form.get('resumo')
		paragrago_three = request.form.get("paragrago_three")
		data_post = request.form.get("data")

		if titulo != None:
			post_new = create_post()
			post_new.new_post(img, titulo, introducao, paragrafo_one, paragrafo_two, resumo, paragrago_three, data_post)
		else:
			pass

		if email != f'{db[0]}':
			return redirect(url_for('views.homepage'))
		elif password != f'{db[1]}':
			return redirect(url_for('views.homepage'))
		elif user != f'{db[2]}':
			return redirect(url_for('views.homepage'))
		else:
			return render_template('admin.html')

		
			
	return render_template('login.html')
