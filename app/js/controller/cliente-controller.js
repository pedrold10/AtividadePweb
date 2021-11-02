class ClienteController {
    constructor() {
        this.clientes = new Clientes();
        this.inputNome =
            document.querySelector("#nome");
        this.inputCPF =
            document.querySelector("#CPF");
        this.inputNumero =
            document.querySelector("#numero");
        this.inputSaldo =
            document.querySelector("#saldo");
    }
    inserir(evento) {
        evento.preventDefault();
        const novaConta = new Conta(this.inputNumero.value, parseFloat(this.inputSaldo.value));
        let novoCliente = new Cliente(this.inputNome.value, this.inputCPF.value, novaConta);
        this.clientes.inserir(novoCliente);
        this.inserirClienteNoHTML(novoCliente);
    }
    listar() {
        this.clientes.listar().forEach(cliente => {
            this.inserirClienteNoHTML(cliente);
        });
    }
    inserirClienteNoHTML(cliente) {
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();
        const botao_apagar = document.createElement('button');
        botao_apagar.textContent = 'X';
        botao_apagar.addEventListener('click', (event) => {
            console.log('removendo cliente ' + cliente.toString());
            this.clientes.remover(cliente.cpf);
            event.target.parentElement.remove();
        });
        elementoP.appendChild(botao_apagar);
        document.body.appendChild(elementoP);
    }
}
