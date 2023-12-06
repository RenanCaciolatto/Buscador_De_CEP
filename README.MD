**Buscador de CEP**
Este é um buscador de CEP simples desenvolvido utilizando apenas JavaScript, HTML e CSS.

**Instruções de Uso**
Para utilizar o buscador de CEP, basta inserir o CEP desejado no campo de busca e pressionar "Buscar". O resultado será exibido na tela, mostrando o endereço correspondente ao CEP inserido.

**Exemplo de Código**
Aqui está um trecho de código que demonstra como o buscador de CEP pode ser implementado em HTML e JavaScript:

# HTML:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/index.css">
</head>
<body>
    <h1>BUSCAR CEP</h1>
    <input id="cep" type="text">
    <button onclick="buscarCEP()" id="buscar">Buscar</button>
    <div class="recentralizar">        
        <p id="logradouro"></p>
        <p id="bairro"></p>
        <p id="cidade"></p>
        <p id="estado"></p>
        <p id="ddd"></p>
    </div>
    <script src="js/index.js"></script>
</body>
</html>

# JavaScript:
function buscarCEP() {
    if (document.getElementById('cep').value != null || document.getElementById('cep').value != '') {

        let cep = document.getElementById('cep').value;
        const ajax = new XMLHttpRequest();

        ajax.open('GET', 'https://viacep.com.br/ws/'+cep+'/json/');
        ajax.send();

        ajax.onload = function () {
            let obj = JSON.parse(this.responseText);

            document.getElementById('logradouro').innerHTML = 'Logradouro: ' + obj.logradouro;;
            document.getElementById('bairro').innerHTML = 'Bairro: ' + obj.bairro;
            document.getElementById('cidade').innerHTML = 'Cidade: ' + obj.localidade;
            document.getElementById('estado').innerHTML = 'Estado: ' + obj.uf;
            document.getElementById('ddd').innerHTML = 'DDD: ' + obj.ddd;
        }
    }
}

**Instruções de Instalação**
Não é necessário instalação. Basta baixar os arquivos HTML, CSS e JavaScript e abrir o arquivo HTML em um navegador web.

**Contribuição**
Sinta-se à vontade para contribuir com este projeto. Você pode clonar o repositório, fazer modificações e enviar um pull request.