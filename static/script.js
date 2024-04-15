$(document).ready(function () {
    // Faz uma requisição para a rota '/start_conversation' quando a página é carregada
    $.get('/start_conversation', function (data) {
        // Adiciona a mensagem de saudação ao chatbox
        $('#chatbox').append('<div class="message"><span class="bot-message">Bot:</span> ' + data.message + '</div>');
    });
});

function sendMessage() {
    var inputField = $('#userInput');
    var chatbox = $('#chatbox');
    // Adiciona a mensagem do usuário ao chatbox
    chatbox.append('<div class="message"><span class="user-message">Você:</span> ' + inputField.val() + '</div>');

    // Envia a mensagem para o servidor e recebe a resposta
    $.ajax({
        url: '/message',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ message: inputField.val() }),
        success: function (data) {
            // Adiciona a resposta do bot ao chatbox
            chatbox.append('<div class="message"><span class="bot-message">Bot:</span> ' + data.response + '</div>');
        }
    });

    // Limpa o campo de entrada
    inputField.val('');
}

// Vincula a função sendMessage ao evento de clique do botão "Enviar"
$('#sendButton').click(sendMessage);
$('#userInput').keypress(function (e) {
    // Se a tecla pressionada foi Enter (código de tecla 13)
    if (e.which == 13) {
        sendMessage();
    }
});
