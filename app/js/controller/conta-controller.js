class ContaController {
    constructor() {
        this.inputNumero =
            document.querySelector("#conta");
        this.inputSaldo =
            document.querySelector("#saldo");
        this.contas = new Contas();
    }
    inserir(evento) {
        evento.preventDefault();
        let novaConta = new Conta(this.inputNumero.value, parseFloat(this.inputSaldo.value));
        this.contas.inserir(novaConta);
        this.inserirContaNoHTML(novaConta);
    }
    listar() {
        this.contas.listar().forEach(conta => {
            this.inserirContaNoHTML(conta);
        });
    }
    inserirContaNoHTML(conta) {
        const elementoP = document.createElement('p');
        elementoP.textContent = conta.toString();
        const botao_apagar = document.createElement('button');
        botao_apagar.textContent = 'X';
        botao_apagar.addEventListener('click', (event) => {
            console.log('removendo conta ' + conta.toString());
            this.contas.remover(conta.numero);
            event.target.parentElement.remove();
        });
        elementoP.appendChild(botao_apagar);
        document.body.appendChild(elementoP);
    }
}
