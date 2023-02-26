/************************* GSAP

O objeto GSAP serve como um ponto de acesso para a maior parte das funcionalidades da biblioteca GSAP. É um objeto genérico com vários métodos e propriedades que controlam os Tweens e as Timelines.

***Tweens --> É o que faz todo o trabalho da animação. Você adiciona os targets (os objetos a serem animados), uma duração e as propriedades que você quer animar e quando o indicador de reprodução se mover para uma nova posição, o mesmo saberá quais valores que as propriedades devem ter naquele ponto. Os métodos usados para controlar os Tweens são o gsap.to(), gsap.from(), gsap.fromTo().

***Timelines --> É basicamente um container para os Tweens. É uma ferramenta que te permite posicionar animações no tempo e controlar toda essa sequência com métodos como: pause(), play(), progress(), reverse(), timeScale(), etc. O método utilizado para criar uma Timeline é o gsap.timeline().
    
Para sequenciar os tweens em uma timeline, primeiro precisamos criar uma timeline. Nesse caso criaremos a timeline e a guardaremos na variável tl:

//    var tl = gsap.timeline();

Então adicionamos um Tween usando um dos métodos vistos anteriormente (.to(), .from(), .fromTo()):

//    tl.to(".box", {duration: 2, x: 50, opacity: 0.5});

Note que neste caso nós não usamos o objeto gsap (gsap.to()) e sim a variável tl. Quando fazemos isso o Tween é criado e já é adicionado a aquela timeline. Se fizéssemos utilizando o gsap.to() iria criar um tween isolado e teríamos que adicioná-lo à timeline com o timeline.add(), porém é mais fácil fazer do primeiro jeito mostrado.
Por padrão as animações serão reproduzidas uma por uma em sequência, logo pode-se criar métodos em cadeia para simplificar o seu código:

//    tl.to(".box1", {duration: 2, x: 100}) //Note que não há vírgula!
        .to(".box2", {duration: 1, y: 200})
        .to(".box3", {duration: 3, rotation: 360});

    Para definir exatamente onde você deseja que suas animações sejam posicionadas na timeline, usa-se o parâmetro opcional de posição. Pode ser um número indicando o tempo absoluto em segundos ou pode-se usar uma string com o prefixo "+=" ou "-=" para indicar um deslocamento ou um offset relativo ao final da timeline. Por exemplo "+=2" seriam 2s depois do fim, criando um gap de 2s entreuma animação e outra e "-=2" iria criar uma sobreposição de dois segundos entre uma animação e outra:

//      
        tl.to(..., 1.5) // Inicia exatos 1.5s após o início da timeline:
          .to(..., "-=0.75") //Se sobrepõe em 0.75s
          .to(..., "+=1") // Adiciona um gap de 1s

    Ainda é possível criar labels para marcar certos pontos na timeline para que você possa colocar animações ou navegar ali durante o playback:

//      
        tl.addLabel("step2", 3) // Adiciona uma label a exatos 3s
        .to(..., "step2") //Inicia na label step2
        .to(..., "step2+=0.75") //0.75 segundos após a label step2

//      Depois podemos usar o seek() para voltar para o ponto da label
        tl.seek("step2");

   Tweens e Timelines se estendem a uma classe de animações com uma infinidade de métodos e propriedades. Seguem alguns mais usados:

pause()
play()
progress()
restart()
resume()
reverse()
seek()
time()
duration()
timeScale()
kill()

Ainda é possível atribuir o Tween e a Timeline a vaiáveis e controlá-los a qualquer momento

//      var tween = gsap.to(...);
        var tl = gsap.timeline();
        tl.to(...).to(...).to(...); // Adicionando animações

        Agora controlamos todos esses elementos:
        tween.pause()
        tween.timeScale(2) // Dobra a velocidade
        tl.seek(3) // pula para 3s da animação
        tl.progress(0.5) // vai para a metade da timeline

*********/


/************************* gsap.effects
  
Uma vez que um efeito foi registrado, você pode acessá-lo através do objeto gsap.effects conforme mostrado a seguir:

//      
        gsap.effects.explode(".box", {    // Presume que um efeito nomeado explode já foi registrado
        direction: "up", // Pode-se referenciar qualquer propriedade que o autor decidir, nesse caso a "direction"
        duration: 3
        });

   Ou se você difinir extendTimeline: true no efeito quando estiver regisrando ele, você será capaz de chamá-lo diretamente na timeline para ter os resultados do efeito inserido naquela timeline. Eeitos deixam as coisas mais fáceis para qualquer um usar códigos de animação customizados contidos em uma função (que aceite um target e uma config em forma de objeto) e depois associada a um nome para que possa ser chamada a qualquer momento com novos targets e configurações, como por exemplo:

   gsap.registerEffect({
        name: "fade",  //Registra um efeito com o nome de fade
        effect: (targets, config)=>{   //O efeito em si é uma função com target e configo como parâmetros e retorna o tween genérico do gsap
                return gsap.to(targets, {duration: config.duration, opacity: 0});
        },
        default: {duration: 2},  //Os default são aplicados para qualquer obejeto config passado ao efeito 
        extendTimeline: true,
   });

   Agora podemos usar dessa maneira:

   gsap.effects.fade(".box");

   Ou diretamente na timeline pelo extendTimeline

   let tl = gsap.timeline();
   tl.fade(".box",{duration: 3})
   .fade(".box2",{duration: 1}, "+=2")
   .to("box3", {x: 100});

  ** Outro Exemplo:

        gsap.registerEffect({
        name: "fade",
        defaults: {duration: 2}, //defaults get applied to the "config" object passed to the effect below
        effect: (targets, config) => {
                return gsap.to(targets, {duration: config.duration, opacity: 0});
        }
        });

        document.querySelectorAll(".box").forEach(function(box) {
        box.addEventListener("mouseenter", function() {
        gsap.effects.fade(this);
        });
        });
  
O GSAP nos dá 4 serviços chave aqui:

1- Analisa os targets dentro de um array, então se um seletor for usado como parâmetro, se tornará um array de elementos passados para a função.
2- Aplica os defaults para a configuração do objeto toda vez. Não há necessidade de de adicionar vários IF statements ou aplicar os defaults você mesmo.
3- Se vc definir o extendTimeline: true, o nome do efeito vai ser adicionado como um método para o protóripo da timeline do GSAP, significando que você pode inserir uma instância desse efeito diretamente em qualquer timeline, como por exemplo:

        //com timelineExtend
        var tl = gsap.timeline();
        tl.yourEffect(".class", {configProp: "value"}, "+=position");

        //Sem timelineExtend
        tl.add(gsap.effects.yourEffect(".class", {configProp: "value"}), "+=position");

Então essa configuração pode te poupar tempo se estiver fazendo um uso pesado do GSAP. IMPORTANTE: Qualquer efeito que tenha o timelineEffect: true; precisa retornar uma animação compatível com GSAP que possa ser inserida em uma timeline (um tween ou uma outra timeline).
4- Gera uma forma centralizada de registrar e acessar esses "efeitos".
 *********/


/************************* gsap.globalTimeline()
 
gsap.globalTimeline() é a timeline da raiz, que controle tudo no GSAP, tornando-a uma poderosa maneira de controlar todas as animaçções de uma só vez. Mas tenha em mente que gsap.delayedCalls() tecnicamente também são tweens, então se você der pause() ou timeScale() na timeline global, vai afertar o delayedCalls() também. Para omití-los, devemos usar o gsap.exportRoot() (a aprender ainda).
Seguem alguns métodos usados na timeline global:

gsap.globalTimeline.pause() --> Pausa a timeline global que afeta a TODAS as animações e retorna ela mesma.
gsap.globalTimeline.play() --> Resume a timeline global que afeta a TODAS as animações e retorna ela mesma.
gsap.globalTimeline.paused() --> Retrona true se a timeline global estiver pausade e false se estiver rodando.
gsap.globalTimeline.timeScale() --> Pega ou define o time scale global, que é um multiplicador que afeta TODAS as animações. Isso não define o timeScale() de cada Tween individualmente, mas afeta a taxa de reprodução da timeline raiz (que contém todas as outras animações e timelines). É uma boa opção para aumentar ou diminuir a velocidade de de todas as animações globalmente, de uma só vez.

        gsap.globalTimeline.timeScale(0.5); //Resume a animação com metade da velocidade de reprodução.
        gsap.globalTimeline.timeScale(2); //Resume a animação com duas vezes a velocidade de reprodução.
        var currentTimeScale = gsap.globalTimeline.timeScale(); //Retorna o atual timeScale global.

Tenha em mente que uma vez que a timeline global é usada para reproduzir todos os outros Tweens e Timelines, gsap.globalTimeline.isActive() vai sempre retornar true, independente de ter Tweens e Timelines ativos ou não.
 * *********/


/************************* gsap.ticker()

o gsap.ticker é o bater do coração da motor GSAP, ele atualiza a globalTimeline() em todo evento requestAnimationFrame, então é perfeitamente sincronizado com o ciclo de renderização do browser. Você pode adicionar seus próprios listeners para rodar uma lógica customizada depois de cada atualização (bom para desenvolvedores de games). Adicione quantos listeners quiser. Segue um exemplo báscio:

        gsap.ticker.add(myFunction); //adiciona um listener

        function myFunction(){
                //É executada a cada tick após o motor centrar atualizar
        };

        gsap.ticker.remove(myFunction); //remove o listener

Os seguintes parâmetros de callback são passados para cada função listener:

1- time: Número -- é o tempo total em segundos desde que o ticker iniciou. O início do ticker pode se extender por conta do lagSmoothing.
2- deltaTime: Número -- É a quantidade de milisegundos que decorreu desde o último tick. Note que você pode usar o gsap.ticker.deltaRatio() para ter uma taxa que é baseada no FPS do alvo.
3- frame: Número -- O número do frame (tick) que é incrementado a cada tick.

Então sua função listener pode ser montada para fazer uso desses parâmetros:

        function myFunction(time, deltaTime, frame){
                //Faz uso do time, deltaTime, frame
        };


************/