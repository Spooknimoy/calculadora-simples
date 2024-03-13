function criaCalculadora() {
    return {
      // Referência para o elemento de display
      display: document.querySelector('.display'),
  
      // Método para iniciar a calculadora, chamando todos os métodos necessários
      inicia() {
        this.cliqueBotoes();
        this.pressionaBackSpace();
        this.pressionaEnter();
      },
  
      // Método para lidar com o evento de pressionar o botão de backspace
      pressionaBackSpace() {
        this.display.addEventListener('keydown', e => {
          if (e.keyCode === 8) {
            e.preventDefault();
            this.clearDisplay();
          }
        });
      },
  
      // Método para lidar com o evento de pressionar o botão Enter
      pressionaEnter() {
        this.display.addEventListener('keyup', e => {
          if (e.keyCode === 13) {
            this.realizaConta();
          }
        });
      },
  
      // Método para realizar a operação matemática
      realizaConta() {
        let conta = this.display.value;
  
        try {
          conta = eval(conta);
  
          if (!conta && conta !== 0) {
            this.mostraErro('Conta inválida');
            return;
          }
  
          this.display.value = String(conta);
        } catch(e) {
          this.mostraErro('Conta inválida');
        }
      },
  
      // Método para limpar o display
      clearDisplay() {
        this.display.value = '';
      },
  
      // Método para apagar o último caractere do display
      apagaUm() {
        this.display.value = this.display.value.slice(0, -1);
      },
  
      // Método para lidar com o clique nos botões da calculadora
      cliqueBotoes() {
        document.addEventListener('click', e => {
          const el = e.target;
  
          if (el.classList.contains('btn-num')) {
            this.btnParaDisplay(el.innerText);
          }
  
          if (el.classList.contains('btn-clear')) {
            this.clearDisplay();
          }
  
          if (el.classList.contains('btn-del')) {
            this.apagaUm();
          }
  
          if (el.classList.contains('btn-eq')) {
            this.realizaConta();
          }
  
          // Manter o foco no display após o clique
          this.display.focus();
        });
      },
  
      // Método para adicionar valor do botão ao display
      btnParaDisplay(valor) {
        this.display.value += valor;
      },
  
      // Método para mostrar mensagens de erro
      mostraErro(mensagem) {
        // Melhoraria aqui seria criar um elemento no DOM para exibir mensagens de erro
        alert(mensagem);
      }
    };
  }
  
  // Cria uma instância da calculadora e inicia
  const calculadora = criaCalculadora();
  calculadora.inicia();
  