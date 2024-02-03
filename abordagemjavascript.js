var blurOn = 0;

$(document).ready(function(){
    $('body').css('display','none');

    // Função para mostrar o body quando os inputs tiverem sido preenchidos
    function mostrarBodyQuandoPreenchido() {
        const nomeInGame = prompt("Por favor, insira seu Nome In game:");
        const id = prompt("Agora, insira seu ID:");
        
        // Verifica se os campos foram preenchidos
        if (nomeInGame && id) {
            // Atualiza o valor do input
            $('#conscrito').val(nomeInGame + " | " + id);
            // Mostra o body
            blurOn = 0;
            $('body').css('display','block');
        } else {
            // Se algum campo estiver vazio, chama novamente a função
            mostrarBodyQuandoPreenchido();
        }
    }

    // Chama a função para começar o processo
    mostrarBodyQuandoPreenchido();
});
const codigoJavascript = `
<div class="question" id="questao1">
<span>Nome &amp; Id do Oficial Aluno: Exemplo("Fulano | 123")</span><br>
<input type="text" id="conscrito" placeholder="Digite sua Resposta" readonly>
</div>
<!-- Perguntas -->
<div class="question">
<span><strong>1)</strong> Qual é uma regra básica importante durante uma abordagem?</span><br>
<label><input type="radio" class="resposta1" name="resposta1" value="a"> Agir com agressividade</label><br>
<label><input type="radio" class="resposta1" name="resposta1" value="b"> Ignorar a presença policial</label><br>
<label><input type="radio" class="resposta1" name="resposta1" value="c" data-correta="true"> Demonstrar educação</label><br>
</div>
<div class="question">
<span><strong>2)</strong> O que é obrigatório durante uma abordagem suspeita, de acordo com o conteúdo?</span><br>
<label><input type="radio" class="resposta2" name="resposta2" value="a"> Chamar apoio apenas se houver resistência.</label><br>
<label><input type="radio" class="resposta2" name="resposta2" value="b" data-correta="true"> Sempre chamar apoio quando a Polícia tiver uma quantidade igual ou inferior à quantidade de suspeitos</label><br>
<label><input type="radio" class="resposta2" name="resposta2" value="c"> Ignorar a central de comunicação</label><br>
</div>
<div class="question">
<span><strong>3)</strong> O que caracteriza o Nível 1 do Uso Progressivo da Força?</span><br>
<label><input type="radio" class="resposta3" name="resposta3" value="a"> Controle de contato.</label><br>
<label><input type="radio" class="resposta3" name="resposta3" value="c"> Técnicas defensivas não letais.</label><br>
<label><input type="radio" class="resposta3" name="resposta3" value="b" data-correta="true"> Presença policial.</label><br>
</div>
<div class="question">
<span><strong>4)</strong> Em uma abordagem de Código 1 (trânsito), o que fazer após o abordado parar o veículo?.</span><br>
<label><input type="radio" class="resposta4" name="resposta4" value="b"> Desligar imediatamente o giroflex e sirenes.</label><br>
<label><input type="radio" class="resposta4" name="resposta4" value="c"> Sair da viatura apenas quando solicitado pelo abordado.</label><br>
<label><input type="radio" class="resposta4" name="resposta4" value="a" data-correta="true"> Estacionar em segurança atrás do veículo e não desligar as luzes do giroflex.</label><br>
</div>
<div class="question">
<span><strong>5)</strong> O que caracteriza uma abordagem de Código 2?</span><br>
<label><input type="radio" class="resposta5" name="resposta5" value="a"> Trânsito</label><br>
<label><input type="radio" class="resposta5" name="resposta5" value="b"> Acompanhamento</label><br>
<label><input type="radio" class="resposta5" name="resposta5" value="c"data-correta="true"> Suspeita</label><br>
</div>
<div class="question">
<span><strong>6)</strong> O que caracteriza o Direito de Miranda?.</span><br>
<label><input type="radio" class="resposta6" name="resposta6" value="a"> Leitura obrigatória durante abordagens suspeitas</label><br>
<label><input type="radio" class="resposta6" name="resposta6" value="b" data-correta="true"> Garantir os direito do cidadão durante a voz de prisão</label><br>
<label><input type="radio" class="resposta6" name="resposta6" value="c"> Uso exclusivo durante abordagens de Código 3</label><br>
</div>
<div class="question">
<span><strong>7)</strong> Com base nesse video, descreva quais erros houve nessa abordagem.</span><br>
<img id="imageteste" style="margin-bottom: 25px;" width="100%" src="img/teste2.png">
<input type="text" class="resposta9" name="resposta9" placeholder="Digite sua resposta"> <br>
</div>
<div class="question">
<span><strong>8)</strong> Descreva qual a diferença entre o Desacato (Art. 50) e a Injuria (Art. 45), Explique.</span><br>
<input type="text" class="resposta10" name="resposta10" placeholder="Digite sua resposta"> <br>
</div>
<!-- Adicione as perguntas restantes -->
<!-- ... -->
<button id="checkavaliacao" onclick="finalizar()">Finalizar Avaliação</button>
`;


document.getElementById('questionnaire').innerHTML = codigoJavascript;

function mostrarBarrosinhoOn() {
    document.getElementById("barrosinhooff").classList.add("hidden");
    document.getElementById("barrosinhoOn").classList.remove("hidden");
}

function esconderBarrosinhoOn() {
    document.getElementById("barrosinhoOn").classList.add("hidden");
    document.getElementById("barrosinhooff").classList.remove("hidden");
}

function finalizar() {
    document.getElementById('checkavaliacao').disabled = true;
    const nome = document.getElementById("conscrito").value;
    const resposta9 = document.querySelector(".resposta9").value; 
    const resposta10 = document.querySelector(".resposta10").value;
    let respostasCorretas = 0;
    
    for (let i = 1; i <= 10; i++) { 
        const respostas = document.querySelectorAll('input[name="resposta' + i + '"]:checked');
        respostas.forEach(resposta => {
            if (resposta.dataset.correta === "true") {
                respostasCorretas++;
            }
        });
    }
    const status = respostasCorretas >= 4 ? "Aprovado" : "Reprovado";
    
    const dataAtual = new Date();
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); // Janeiro é 0!
    const ano = dataAtual.getFullYear();
    const horas = String(dataAtual.getHours()).padStart(2, '0');
    const minutos = String(dataAtual.getMinutes()).padStart(2, '0');
    
    const mensagem = `
    **Avaliação Modulação - Data: ${dia}/${mes}/${ano} | Horário: ${horas}:${minutos}**
    > 🆔 Nome: ${nome}
    > 📈 Total de Acertos: ${respostasCorretas}
    > 📊 Status: **${status}**
    > 
    > 💭 Questão 9: ${resposta9}
    > 💭 Questão 10: ${resposta10}
    `;

    const webhookURL = "https://discord.com/api/webhooks/1203177283561586759/IUDex6Qav6V8QaeFRDgyxSFAHwkThtP82-uwZtexyhhy4qW3sU9DQcgao1zmUCY5RDh6";
    const data = {
        content: mensagem
    };
    
    fetch(webhookURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao enviar o webhook para o Discord');
        }
        var meuAudio = document.getElementById('meuAudio');
        meuAudio.play();
        alert("Sua prova foi enviada com sucesso. Agora, nossos instrutores irão avaliá-la. Agradecemos seu empenho e boa sorte!")
        window.close(); 
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Ocorreu um erro ao finalizar a avaliação.');
    });
}

function bloquearCliqueDireito(event) {
    event.preventDefault();
}
function bloquearTeclaControl(event) {
    if (event.ctrlKey) {
        event.preventDefault();
    }
}
document.addEventListener("contextmenu", bloquearCliqueDireito);
document.addEventListener("keydown", bloquearTeclaControl);

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollToTopBtn").classList.remove("scroll-to-top-btn-hide");
    document.getElementById("scrollToTopBtn").classList.add("scroll-to-top-btn-show");
  } else {
    document.getElementById("scrollToTopBtn").classList.remove("scroll-to-top-btn-show");
    document.getElementById("scrollToTopBtn").classList.add("scroll-to-top-btn-hide");
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function closeWindowOnBlur() {
    const nome = document.getElementById("conscrito").value;
    const webhookURLFechou = "https://discord.com/api/webhooks/1203177588843872266/ypWaMDqVvhmAOUb81sohRu52ocFmJkonedz_U_hhNXJb5JYQ-omUvwuYnbY9gnE73xrc";
    const data = {
        content: nome + " | FECHOU A PROVA DE ABORDAGEM"
    };
    
    fetch(webhookURLFechou, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao enviar o webhook para o Discord');
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Ocorreu um erro ao finalizar a avaliação.');
    });
    setTimeout(function() {
        if (blurOn == 1) {
            window.close();
        }
        blurOn = 1
    }, 1000); // 1000 milliseconds = 1 second, você pode ajustar esse valor conforme necessário
}
window.addEventListener('blur', closeWindowOnBlur);