const codigoJavascript = `
<div class="question" id="questao1">
<span>Nome &amp; Id do Oficial Aluno: Exemplo("Fulano | 123")</span><br>
<input type="text" id="conscrito" placeholder="Digite sua Resposta">
</div>
<!-- Perguntas -->
<div class="question">
<span><strong>1)</strong> Considerando os conceitos abordados na aula teórica sobre modulação, quem é o principal responsável por realizar a modulação dentro da viatura?</span><br>
<label><input type="radio" class="resposta1" name="resposta1" value="a" data-correta="true"> 01</label><br>
<label><input type="radio" class="resposta1" name="resposta1" value="b"> 02</label><br>
<label><input type="radio" class="resposta1" name="resposta1" value="c"> 03</label><br>
<label><input type="radio" class="resposta1" name="resposta1" value="d"> 04</label><br>
</div>
<div class="question">
<span><strong>2)</strong> Com base na questão anterior, assinale a alternativa correta para de modulação de Codigo 01, positivo?</span><br>
<label><input type="radio" class="resposta2" name="resposta2" value="a"> Zero, Iniciando um acompanhamento a um PANTO preto, tripulado vezes 2, o mesmo desobedeceu ordem de parada, vaga para mais 2 prefixos.</label><br>
<label><input type="radio" class="resposta2" name="resposta2" value="b" > Maré Zero, Duster da PMERJ, iniciando um acompanhamento padrão, nas proximidades do vanilla a um PANTO preto, vezes 2, o mesmo desobedeceu a ordem legal emanada por nossa viatura, vaga para mais 2 prefixos.</label><br>
<label><input type="radio" class="resposta2" name="resposta2" value="c" data-correta="true"> Maré Zero, Amarok da RECOM, iniciando um acompanhamento de código 1, a um PANTO preto tripulado vezes 2, o mesmo desobedeceu ordem de parada na localidade do posto do china e segue no sentido monumento chinês, vaga para mais 2 prefixos, positivo?</label><br>
<label><input type="radio" class="resposta2" name="resposta2" value="d"> QAP, Maré Zero, iniciando um acompanhamento de código 1 a um hysubaru preto o mesmo atirou contra a guarnição e segue monumento chinês.</label><br>
</div>
<div class="question">
<span><strong>3)</strong> Com base no que foi passado na apostila, como devo utilizar o Chat de Texto (PD). Assinale a altenartiva incorreta.</span><br>
            <label><input type="radio" class="resposta3" name="resposta3" value="a"> Para Informar a minha entrada de serviço a rede.</label><br>
            <label><input type="radio" class="resposta3" name="resposta3" value="c"> Passar informação de um carro furtado.</label><br>
            <label><input type="radio" class="resposta3" name="resposta3" value="b"> Solicitar um batalhão/oficial para patrulhar.</label><br>
            <label><input type="radio" class="resposta3" name="resposta3" value="d" data-correta="true">  Após morrer em uma ação informar no /PD as caracteristicas de quem o matou ou passar alguma informação.</label><br>
            </div>
            <div class="question">
            <span><strong>4)</strong> Qual e a norma de uso de rádio que esta correta:</span><br>
            <label><input type="radio" class="resposta4" name="resposta4" value="a"> Prucurar PTR pelo rádio.</label><br>
            <label><input type="radio" class="resposta4" name="resposta4" value="d" data-correta="true"> Proibido Risadas, Gritarias, Modulação como "Matei no Rolas".</label><br>
            <label><input type="radio" class="resposta4" name="resposta4" value="b" > Manter conversar paralelas na rádio.</label><br>
            <label><input type="radio" class="resposta4" name="resposta4" value="c"> Comunicar sem intentificar a ocorrência corretamente.</label><br>
            </div>
            <div class="question">
            <span><strong>5)</strong> Completa a Lacuna a baixo: <br><br> Maré Zero, ___________ de serviço, Corolla PMERJ, ______ por CB Fulano e Recrutta Ciclano, à __________ de Maré Zero.</span><br>
            <label><input type="radio" class="resposta5" name="resposta5" value="b" > Entrada, Contido, Função.</label><br>
            <label><input type="radio" class="resposta5" name="resposta5" value="c"> Assunção, Contido, Disposição.</label><br>
            <label><input type="radio" class="resposta5" name="resposta5" value="a" data-correta="true"> Assunção, Composta, Disposição.</label><br>
            <label><input type="radio" class="resposta5" name="resposta5" value="d"> Entrada, Composta, Função.</label><br>
            </div>
            <div class="question">
            <span><strong>6)</strong> Quais são os Elementos de comunicação?
            <br><br>
            <label><input type="radio" class="resposta6" name="resposta6" value="a"> Na Escuta, Correto, Prefixo, Infirmo/Nego, Tripulado X2 X3, Ocorrência, Prioridade e Etc.</label><br>
            <label><input type="radio" class="resposta6" name="resposta6" value="b" data-correta="true"> Primária, Secundária, Ocorrência, Feedback e Canal de Texto (PD).</label><br>
            <label><input type="radio" class="resposta6" name="resposta6" value="c"> Código 0 - Em patrulha, Código 1 - Baixa Intensidade, Código 2 - Média Intensidade, Código 3 - Grande Intensidade, Código 4 - Sob Controle, Código 5 - Fogo Aberto e Código 6 - Equipe Investigando um local.</label><br>
            </div>
            <div class="question">
            <span><strong>7)</strong> Em um acompanhamento em uma rodovia, qual unidade tem prioridade na <strong>Modulação</strong>.
            </span><br>
            <label><input type="radio" class="resposta7" name="resposta7" value="a"> MOTO PATRULHA/BATEDORES</label><br>
            <label><input type="radio" class="resposta7" name="resposta7" value="b" data-correta="true"> GAM</label><br>
            <label><input type="radio" class="resposta7" name="resposta7" value="c"> BOPE</label><br>
            <label><input type="radio" class="resposta7" name="resposta7" value="d"> RECOM</label><br>
            <label><input type="radio" class="resposta7" name="resposta7" value="d"> PRF</label><br>
            <label><input type="radio" class="resposta7" name="resposta7" value="d"> CORE</label><br>
            </div>
            <div class="question">
            <span>8) Em um acompanhamento o veiculo entra na garagem do vermelho e prepara um emboscada para a policia, qual unidade tem prioridade na modulação durante a Ação de Rua?</span><br>
            <label><input type="radio" class="resposta8" name="resposta8" value="a"> MOTO PATRULHA/BATEDORES</label><br>
            <label><input type="radio" class="resposta8" name="resposta8" value="b" > GAM</label><br>
            <label><input type="radio" class="resposta8" name="resposta8" value="c" data-correta="true"> BOPE</label><br>
            <label><input type="radio" class="resposta8" name="resposta8" value="d"> RECOM</label><br>
            <label><input type="radio" class="resposta8" name="resposta8" value="d"> PRF</label><br>
            <label><input type="radio" class="resposta8" name="resposta8" value="d"> CORE</label><br>
            </div>
            <div class="question">
            <span>9) Descreva quando eu devo modular com o Codigo 4. Explique.</span><br>
            <input type="text" class="resposta9" name="resposta9" placeholder="Digite sua resposta"> <br>
            </div>
            <div class="question">
            <span>10) Descreve quais os erros nessa modulação: Explique os Erros.</span><br>
            <audio src="audio/modulacao.m4a" controls></audio><br>
            <input type="text" class="resposta10" name="resposta10" placeholder="Digite sua resposta"> <br>
            </div>
            <!-- Adicione as perguntas restantes -->
            <!-- ... -->
            <button id="checkavaliacao" onclick="finalizar()">Finalizar Avaliação</button>
            `;
const codigoJavascript2 = `
            <div class="question" id="questao1">
            <span>Nome &amp; Id do Oficial Aluno: Exemplo("Fulano | 123")</span><br>
            <input type="text" id="conscrito" placeholder="Digite sua Resposta">
            </div>
            <!-- Perguntas -->
            <div class="question">
            <span><strong>1)</strong> Considerando os conceitos abordados na aula teórica sobre modulação, quem é o principal responsável por realizar a modulação dentro da viatura?</span><br>
            <label><input type="radio" class="resposta1" name="resposta1" value="b"> 02</label><br>
            <label><input type="radio" class="resposta1" name="resposta1" value="c"> 03</label><br>
            <label><input type="radio" class="resposta1" name="resposta1" value="a" data-correta="true"> 01</label><br>
            <label><input type="radio" class="resposta1" name="resposta1" value="d"> 04</label><br>
            </div>
            <div class="question">
            <span><strong>2)</strong> Com base na questão anterior, assinale a alternativa correta para de modulação de Codigo 01, positivo?</span><br>
            <label><input type="radio" class="resposta2" name="resposta2" value="b" > Maré Zero, Duster da PMERJ, iniciando um acompanhamento padrão, nas proximidades do vanilla a um PANTO preto, vezes 2, o mesmo desobedeceu a ordem legal emanada por nossa viatura, vaga para mais 2 prefixos.</label><br>
            <label><input type="radio" class="resposta2" name="resposta2" value="c" data-correta="true"> Maré Zero, Amarok da RECOM, iniciando um acompanhamento de código 1, a um PANTO preto tripulado vezes 2, o mesmo desobedeceu ordem de parada na localidade do posto do china e segue no sentido monumento chinês, vaga para mais 2 prefixos, positivo?</label><br>
            <label><input type="radio" class="resposta2" name="resposta2" value="a"> Zero, Iniciando um acompanhamento a um PANTO preto, tripulado vezes 2, o mesmo desobedeceu ordem de parada, vaga para mais 2 prefixos.</label><br>
            <label><input type="radio" class="resposta2" name="resposta2" value="d"> QAP, Maré Zero, iniciando um acompanhamento de código 1 a um hysubaru preto o mesmo atirou contra a guarnição e segue monumento chinês.</label><br>
            </div>
            <div class="question">
            <span><strong>3)</strong> Com base no que foi passado na apostila, como devo utilizar o Chat de Texto (PD). Assinale a altenartiva incorreta.</span><br>
            <label><input type="radio" class="resposta3" name="resposta3" value="c"> Passar informação de um carro furtado.</label><br>
            <label><input type="radio" class="resposta3" name="resposta3" value="a"> Para Informar a minha entrada de serviço a rede.</label><br>
            <label><input type="radio" class="resposta3" name="resposta3" value="d" data-correta="true">  Após morrer em uma ação informar no /PD as caracteristicas de quem o matou ou passar alguma informação.</label><br>
                        <label><input type="radio" class="resposta3" name="resposta3" value="b"> Solicitar um batalhão/oficial para patrulhar.</label><br>
                        </div>
                        <div class="question">
                        <span><strong>4)</strong> Qual e a norma de uso de rádio que esta correta:</span><br>
                        <label><input type="radio" class="resposta4" name="resposta4" value="b" > Manter conversar paralelas na rádio.</label><br>
                        <label><input type="radio" class="resposta4" name="resposta4" value="d" data-correta="true"> Proibido Risadas, Gritarias, Modulação como "Matei no Rolas".</label><br>
                        <label><input type="radio" class="resposta4" name="resposta4" value="c"> Comunicar sem intentificar a ocorrência corretamente.</label><br>
                        <label><input type="radio" class="resposta4" name="resposta4" value="a"> Prucurar PTR pelo rádio.</label><br>
                        </div>
                        <div class="question">
                        <span><strong>5)</strong> Completa a Lacuna a baixo: <br><br> Maré Zero, ___________ de serviço, Corolla PMERJ, ______ por CB Fulano e Recrutta Ciclano, à __________ de Maré Zero.</span><br>
                        <label><input type="radio" class="resposta5" name="resposta5" value="c"> Assunção, Contido, Disposição.</label><br>
                        <label><input type="radio" class="resposta5" name="resposta5" value="a" data-correta="true"> Assunção, Composta, Disposição.</label><br>
                        <label><input type="radio" class="resposta5" name="resposta5" value="d"> Entrada, Composta, Função.</label><br>
                        <label><input type="radio" class="resposta5" name="resposta5" value="b" > Entrada, Contido, Função.</label><br>
                        </div>
                        <div class="question">
                        <span><strong>6)</strong> Quais são os Elementos de comunicação?
                        <br><br>
                        <label><input type="radio" class="resposta6" name="resposta6" value="b" data-correta="true"> Primária, Secundária, Ocorrência, Feedback e Canal de Texto (PD).</label><br>
                        <label><input type="radio" class="resposta6" name="resposta6" value="a"> Na Escuta, Correto, Prefixo, Infirmo/Nego, Tripulado X2 X3, Ocorrência, Prioridade e Etc.</label><br>
                        <label><input type="radio" class="resposta6" name="resposta6" value="c"> Código 0 - Em patrulha, Código 1 - Baixa Intensidade, Código 2 - Média Intensidade, Código 3 - Grande Intensidade, Código 4 - Sob Controle, Código 5 - Fogo Aberto e Código 6 - Equipe Investigando um local.</label><br>
                        </div>
                        <div class="question">
                        <span><strong>7)</strong> Em um acompanhamento em uma rodovia, qual unidade tem prioridade na <strong>Modulação</strong>.
                        </span><br>
                        <label><input type="radio" class="resposta7" name="resposta7" value="c"> BOPE</label><br>
                        <label><input type="radio" class="resposta7" name="resposta7" value="a"> MOTO PATRULHA/BATEDORES</label><br>
                        <label><input type="radio" class="resposta7" name="resposta7" value="b" data-correta="true"> GAM</label><br>
                        <label><input type="radio" class="resposta7" name="resposta7" value="d"> RECOM</label><br>
                        <label><input type="radio" class="resposta7" name="resposta7" value="d"> CORE</label><br>
                        <label><input type="radio" class="resposta7" name="resposta7" value="d"> PRF</label><br>
                        </div>
                        <div class="question">
                        <span>8) Em um acompanhamento o veiculo entra na garagem do vermelho e prepara um emboscada para a policia, qual unidade tem prioridade na modulação durante a Ação de Rua?</span><br>
                        <label><input type="radio" class="resposta8" name="resposta8" value="b" > GAM</label><br>
                        <label><input type="radio" class="resposta8" name="resposta8" value="a"> MOTO PATRULHA/BATEDORES</label><br>
                        <label><input type="radio" class="resposta8" name="resposta8" value="c" data-correta="true"> BOPE</label><br>
                        <label><input type="radio" class="resposta8" name="resposta8" value="d"> CORE</label><br>
                        <label><input type="radio" class="resposta8" name="resposta8" value="d"> RECOM</label><br>
                        <label><input type="radio" class="resposta8" name="resposta8" value="d"> PRF</label><br>
                        </div>
                        <div class="question">
                        <span>9) Descreva quando eu devo modular com o Codigo 4. Explique.</span><br>
                        <input type="text" class="resposta9" name="resposta9" placeholder="Digite sua resposta"> <br>
                        </div>
                        <div class="question">
                        <span>10) Descreve quais os erros nessa modulação: Explique os Erros.</span><br>
                        <audio src="audio/modulacao.m4a" controls></audio><br>
                        <input type="text" class="resposta10" name="resposta10" placeholder="Digite sua resposta"> <br>
                        </div>
                        <!-- Adicione as perguntas restantes -->
                        <!-- ... -->
                        <button id="checkavaliacao" onclick="finalizar()">Finalizar Avaliação</button>
                        `;
                        var aleatorio = Math.random(); // Ajustado para Math.random() com 'M' maiúsculo
                        if (aleatorio < 0.5) { // Verifica se 'aleatorio' é menor que 0.5 para aproximar uma probabilidade de 50%
                            document.getElementById('questionnaire').innerHTML = codigoJavascript;
                        } else {
                            document.getElementById('questionnaire').innerHTML = codigoJavascript2;
                        }
            function mostrarBarrosinhoOn() {
                document.getElementById("barrosinhooff").classList.add("hidden");
                document.getElementById("barrosinhoOn").classList.remove("hidden");
            }
            
            function esconderBarrosinhoOn() {
                document.getElementById("barrosinhoOn").classList.add("hidden");
                document.getElementById("barrosinhooff").classList.remove("hidden");
            }
            
            function finalizar() {
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
                const status = respostasCorretas >= 7 ? "Aprovado" : "Reprovado";
                
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
                > 📊 Status: ${status}
                > 
                > 💭 Questão 9: ${resposta9}
                > 💭 Questão 10: ${resposta10}
                `;
                
                
                const webhookURL = "https://discord.com/api/webhooks/1201331533382955138/0SFC_CvjLFYzE-0LmpTmsfB7-2eTvP8EMuADCS8_47AncLnE04unIdvtY6olQ894jZGM";
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
    function formatTime(minutes, seconds) {
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    
    function updateTimer() {
        let timerDisplay = document.getElementById('timer');
        let timeLeft = timer;
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        
        timerDisplay.textContent = formatTime(minutes, seconds);
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerDisplay.textContent = "Tempo esgotado";
            finalizar();
        } else {
            timer--;
        }
    }
    
    let timer = 900; // 15 minutos
    
    let timerInterval = setInterval(updateTimer, 1000);
    function atualizarPerfil() {
        var conscritoInput = document.getElementById('conscrito');
        var perfilDiv = document.getElementById('perfil');
        
        var primeiraLetra = conscritoInput.value.trim()[0].toUpperCase();
        
        perfilDiv.innerText = primeiraLetra;
        
        var cores = ['#ff5733', '#ff8c33', '#ffb533', '#ffda33', '#f5ff33', '#b3ff33', '#33ff57', '#33ffb5', '#33daff', '#337aff', '#3333ff', '#7a33ff', '#d933ff', '#ff33da', '#ff33b5', '#ff338c'];
        var corAleatoria = cores[Math.floor(Math.random() * cores.length)];
        perfilDiv.style.backgroundColor = corAleatoria;
    }
    
    var conscritoInput = document.getElementById('conscrito');
    conscritoInput.addEventListener('input', atualizarPerfil);
    // window.addEventListener('blur', function() {
    //     window.close();
        
    // });

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

