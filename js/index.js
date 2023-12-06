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