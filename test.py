from flask import Flask, render_template, request, jsonify
import webbrowser

app = Flask(__name__)

# Variável para armazenar o nome do usuário
user_name = None

@app.route('/')
def home():
    return render_template('chatbot.html')

@app.route('/start_conversation', methods=['GET'])
def start_conversation():
    # Retorna a mensagem de saudação
    return jsonify(message='Olá! Qual é o seu nome?')

@app.route('/message', methods=['POST'])
def message():
    global user_name
    # Pega a mensagem do corpo da requisição
    message = request.get_json().get('message')

    # Se o nome do usuário ainda não foi definido, armazena a mensagem como o nome do usuário
    if user_name is None:
        user_name = message
        return {'response': 'Prazer em conhecer você, ' + user_name + '! eu sou um escravo de peças eletronicas entao vai logo falando oque vc quer?'}

    # Aqui você pode adicionar a lógica para processar a mensagem e gerar uma resposta

    # Retorna a resposta
    return {'response': 'Ata, como meu criador não é muito bom nao consigo ainda ' + user_name + ',entao vai la no chat GPT por Hora!!'}

if __name__ == '__main__':
    webbrowser.open('http://localhost:5000')
    app.run(debug=True)

