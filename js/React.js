/*

=====================================================================================================
========================================== React Intro ==============================================
=====================================================================================================

React, algumas vezes referido como um framework de front-end do javaScript, é uma biblioteca javaScript criada pelo Facebook. É uma ferramenta para criação de componentes UI.
Ao invés de manipular diretamente o DOM do browser, o React cria um DOM virutal na memória, onde faz toda a manipulação necessária, antes de fazer as mudanças no DOM do browser.
O React descobre quais mudnaças foram feitas e muda somente o que for necessário ser mudado.





=====================================================================================================
======================================= React ES6 Classes ===========================================
=====================================================================================================

Uma classe é um tipo de função, mas ao invés de usar a keyword function para iniciá-la, usa-se a keyword class e as propriedades definidas dentro de um método constructor():

    class Car {
        constructor(name) {
            this.brand = name;
        }
    }

** Ao nomear uma class, por boas práticas, a primeira letra é sempre maiúscula.

    <script>
        class Car {                             //Cria a class Car
            constructor(name) {                 //Cria um construtor com um parâmetro
                this.brand = name;              //Define que o valor da propriedade brand vai ser o parâmetro
            }
        }
        const mycar = new Car("Ford");          //Cria um novo objeto Car, com Ford como parâmetro
        document.write(mycar.brand);            //Retorna Ford
    </script>



////////// Method in Classes //////////
Você pode adicionar seus próprios métodos em uma class:

    class Car {                                 //Cria a class Cars
        constructor(name) {                     //Cria um construtor com um parâmetro
            this.brand = name;                  //Define que o valor da propriedade brand vai ser o parâmetro
    }
    
        present() {                             //Cria um método present()
            return 'I have a ' + this.brand;    //Retorna a frase I have a + o valor da propriedade brand da class Cars
        }
    }

    const mycar = new Car("Ford");              //Cria um novo objeto Car, com Ford como parâmetro
    mycar.present();                            //Chama o método present da função myCar, que contém o novo Objeto cars com Ford como parâmetro, que é o valor da propriedade brand

Como podemos ver no exemplo acima, podemos chamar um método ao se referir ao nome do método do objeto, seguido de parênteses (.present()). Caso tenha algum parâmetro, o mesmo vai entre os parênteses. 



////////// Class Inheritance //////////
Para criar uma herança de classes, usa-se a keyword extends. Uma classe criada com a herança de classe, herda todos os métodos da outra classe:

    class Car {                                                     //Cria a class Car
        constructor(name) {                                         //Cria o construtor com o parâmetro name
            this.brand = name;                                      //Atribui o valor do parâmetro à propriedade brand
        }

    present() {                                                     //Cria o método present()
            return 'I have a ' + this.brand;                        //Retorna a propriedade brand da class Cars
        }
    }

    class Model extends Car {                                       //Cria a Class Model, que herda as propriedades e métodos da class Cars através do extends
        constructor(name, mod) {                                    //Cria duas propriedades no construtor
            super(name);                                            //Chama o construtor da class pai
            this.model = mod;                                       //Cria a propriedade model e atribui seu valor ao parâmetro mod
        }  
        show() {
            return this.present() + ', it is a ' + this.model     //Cria o método show que pegaa o método present() da class Car que foi herdado pela Model e adiciona o this.model
        }
    }

    const mycar = new Model("Ford", "Mustang");                     //Cria um novo objeto Model com os valores das propriedades name e mod
    mycar.show();                                                   //Chama o método show


** O método super() se refere à class pai. Ao chamar esse método no método construtor, nós chamamos o método construtor da class pai e temos acesso às suas propriedades e métodos.



=====================================================================================================
=================================== React ES6 Arrow Functions =======================================
=====================================================================================================

Arrow functions nos permitem escrever funções com sintaxes mais curtas. O que antes era escrito assim:

    hello = function() {
        return "Hello World!";
    }

* Agora pode ser escrito assim:

    hello = () => {
        return "Hello World!";
    }

* E ainda pode encurtar mais. Se a função tiver apenas um argumento e o argumento retornar algum valor, pode-se remover as chaves e a keyword return:

hello = () => "Hello World!";

* Caso a função tenha argumentos, deve-se passá-los dentro dos parênteses:

    hello = (val) => "Hello " + val;

* Porém caso se tenha apenas um parâmetero, pode-se ainda retirar os parênteses

    hello = val => "Hello" + val;



////////// What About this? //////////

O this tamb´me funciona de um jeito diferente em uma arrow function, comparado com a função normal.
Em funções normais, a keyword this representa o objeto que chamou a função, podendo ser o objeto window, o documento, um botão, etc.
Em Arrow Funcions, this sempre vai representar o objeto que definiu a arrow function. Em resumo, com arrow functions não tem vinculação do this.

Vamos supor dois exemplos, o primeiro usando uma função normal e o segundo com arrow function. Ambos os exemplos chamam um método duas vezes, a primeira vez é quando a página está carregando e a segunda vez é quando o usuário clicar em um botão 

    <button id="btn">Click Me!</button>                                                     //Cria um botão com id btn
    <p id="demo"></p>
    
    <script>
        class Header {                                                                      //Cria a class Header
            constructor() {                                                                 //Cria o construtor da class Header
                this.color = "Red";                                                         //Muda a cor do texto do objeto para vermelho
            }

        changeColor = function() {                                                          //Cria uma função changeColor
                document.getElementById("demo").innerHTML += this;                          //Pega o elemento com id demo e altera seu innerHTML para o objeto que this se refere 
            }
        }
        const myheader = new Header();                                                      //Cria um novo objeto Header e o atribui à variável myheader

        window.addEventListener("load", myheader.changeColor);                              //Adiciona um eventListener com o evento de carregamento da página e que pega o objeto
                                                                                            myheader e chama a função changeColor.

        document.getElementById("btn").addEventListener("click", myheader.changeColor);     //Adiciona um eventListener de click no botão, que quando clicado, pega o objeto 
                                                                                            myheader e chama a função changeColor.
    </script>


Nesse exemplo, quando a função changeColor é chamada pela primeira vez, o this se refere ao objeto window, já quando o botão é clicado e a função é chamada pela segunda vez, o this se refere ao objeto do botão (Object HTMLButtonElement). Ou seja, usando a função normal o this se refere ao objeto que o chamou, que no primeiro caso foi o objeto window e no segundo foi o botão.

Agora vamos ao segundo exemplo, utilizando arrow function

    <button id="btn">Click Me!</button>                                                     //Cria a class Header
    <p id="demo"></p>                                                                       
    
    <script>
        class Header {                                                                      //Cria a class Header
            constructor() {                                                                 //Cria o construtor da class Header
                this.color = "Red";                                                         //Muda a cor do texto do objeto para vermelho
            }

            changeColor = () => {                                                           //Cria uma função changeColor
                document.getElementById("demo").innerHTML += this;                          //Pega o elemento com id demo e altera seu innerHTML para o objeto que this se refere
            }
        }

        const myheader = new Header();                                                      // Cria um novo objeto Header e o atribui à variável myheader

        window.addEventListener("load", myheader.changeColor);                              //Adiciona um eventListener com o evento de carregamento da página e que pega o objeto
                                                                                            myheader e chama a função changeColor.

        document.getElementById("btn").addEventListener("click", myheader.changeColor);     //Adiciona um eventListener de click no botão, que quando clicado, pega o objeto 
                                                                                            myheader e chama a função changeColor.
    </script>

Utilizando a arrow function, this sempre irá se referir ao objeto Header, não importando quem chamou a função.



=====================================================================================================
====================================== React ES6 Variables ==========================================
=====================================================================================================

Antes da ES6, só existia uma maneira de definir suas variáveis, que era utilizando a keyword var. Se você não as definisse, essas variáveis seriam atribuídas ao objeto global, a não ser que você estivesse no modo restrito, que daria um erro se as variáveis não fossem definidas. Porém, depois da ES6, existem três maneiras de se definir as variáveis: var, let e const.



////////// VAR //////////
A keyword var não possui block scope, apenas function scope, ou seja, ao declarar uma variável var no escopo global e atribuir um novo valor para essa variável dentro de um bloco de código, com um loop por exemplo, o valor definido anteriormente também irá mudar. Isso só não ocorre quando var for declarada dentro de uma função:

    var x = 10;                 //Aqui x vale 10
    {
        var x = 2;              // aqui x vale 2
    }
                                // aqui x continua valendo 2, visto que var não possui block scope, quando x foi re-declarado dentro do bloco, seu valor foi alterado no escopo
                                global.

Agora, se o bloco de código for uma função:

    var x = 10;                 //Aqui x vale 10
    
    function changeX(){
        return var x = 15;      //Aqui x vale 15
    }

                                //Aqui x vale 10



////////// LET //////////

Ao contrário de var, a keyword let já possui block scope, ou seja, ao ser definida dentro e um bloco de código, seu valor fica restrito a aquele bloco, fora do bloco o valor definido já não é válido:

    let x = 10;             //Aqui x vale 10
    {
        let x = 2;          // aqui x vale 2
    }
                            // aqui x vale 10 novamente, visto que seu valor só foi alterado para 2 dentro do bloco.



////////// CONST //////////
const é uma variável que uma vez que seu valor tenha sido definido, o mesmo não pode ser modificado. Essa keyword pode causar confusão, visto que const não cria um valor constante, mas sim uma constate referência a um valor.
Por conta disso, NÃO se pode:

    * Reatribuir um valor const.
    * Reatribuir um array const.
    * Reatribuir um objeto const

Mas você PODE:

    * Mudar os elementos de um array const.
    * Mudar as propriedades de um objeto const.



=====================================================================================================
==================================== React ES6 Array Methods ========================================
=====================================================================================================

Existem muitos métodos de arrays, mas um dos mais importantes no React é o .map(), pois esse método permite que você execute uma função para cada item do array, retornando um novo array como resultado.
Em React, esse método pode ser utilizdo para gerar uma lista.

    import React from 'react';                                          //Importa o React
    import ReactDOM from 'react-dom/client';                            //Importa o ReactDOM

    const myArray = ['apple', 'banana', 'orange'];                      //Cria o array
    const myList = myArray.map((item) => <p>{item}</p>)                 //Usa o método map e pega cada item do array e passa para dentro de um elemento <p>
    ReactDOM.render(myList, document.getElementById('root'));           //Renderiza o resultado na tela



=====================================================================================================
==================================== React ES6 Destructuring ========================================
=====================================================================================================

Para ilustar o que é uma desestruturação, imagine que estamos fazendo um sanduíche, quando fazemos um sanduíche nós não tiramos todos os ingredientes que temos na geladeira, apenas os ingrediente que iremos usar no sanduíche. 
Desestruturação é a mesma coisa, podemos ter um array ou um objeto que estamos trabalhando, mas só precisamos de alguns itens que estão contidos nos mesmos. Ao desestruturarmos, tornamos mais fácil se extrair o que precisamos.



////////// Destructing Arrays //////////

Essa é a maneira antiga de atribuir itens do array a uma variável:

    const vehicles = ['mustang', 'f-150', 'expedition'];

    const car = vehicles[0];
    const truck = vehicles[1];
    const suv = vehicles[2];

Utilizando a desestruturação, podemos fazer da seguinte maneira:

    const vehicles = ['mustang', 'f-150', 'expedition'];
    const [car, truck, suv] = vehicles;     //Dessa maneiro o valor de car = mustang, truck = f-150, suv = expedition

** Quando fizermos a desestruturação de arrays, é importante lembrar que a ordem que as variáveis são declaradas é importante.
Se quisermos somente as variáveis car e suv, podemos somente não incluir o truck e deixar as vírgulas:

    const vehicles = ['mustang', 'f-150', 'expedition'];
    const [car,, suv] = vehicles;     //Dessa maneiro o valor de car = mustang, suv = expedition

O método de desestruturação vem a calhar quando uma função retorna um array como resultado:

    function calculate(a, b) {
        const add = a + b;
        const subtract = a - b;
        const multiply = a * b;
        const divide = a / b;
        return [add, subtract, multiply, divide];                   //Retrona um array com todas as constantes listadas acima
    }

    const [add, subtract, multiply, divide] = calculate(4, 7);

No exemplo acima, a função calculate executa os cálculos de seus parâmetros e os armazena em variáveis e no final a função retorna um array com o resultado de todas essas variáveis.
Depois é criada uma variável com valores desestruturados em um array equivalente ao array gerado pela função calculate, chamando a função calculate e passando valores para seus parâmetros. Dessa maneira, quando a função calculate retornar seu array, os valores contidos nesse array serão atribuídos aos valores do array da nossa variável.




////////// Destructuring Objects //////////
Essa é a maneira antiga de usar um objeto dentro de uma função:

    const vehicleOne = {
        brand: 'Ford',
        model: 'Mustang',
        type: 'car',
        year: 2021, 
        color: 'red'
    }

    myVehicle(vehicleOne);

    function myVehicle(vehicle) {
        const message = 'My ' + vehicle.type + ' is a ' + vehicle.color + ' ' + vehicle.brand + ' ' + vehicle.model + '.';
    }

Utilizando a desestruturação, podemos fazer da seguinte maneira:

    const vehicleOne = {                            //Cria o objeto
        brand: 'Ford',
        model: 'Mustang',
        type: 'car',
        year: 2021, 
        color: 'red'
    }

    myVehicle(vehicleOne);  //Chama o objeto vehicleOne, assim os valores de suas propriedades serão atribuídos ao objeto desestruturado da função.

    function myVehicle({type, color, brand, model}) {                                               //Atribui um objeto desestruturado equivalente ao meu objeto à função myVehicle
        const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';          //Utiliza as propriedades do objeto na string
    }

Note que as propriedades do objeto não precisam ser declaradas em uma ordem específica.

Podemos ainda desestruturar objetos concatenados referenciando o objeto concatenado com parênteses e chaves para novamente desestruturarmos os itens necessários desse objeto:

    const vehicleOne = {
        brand: 'Ford',
        model: 'Mustang',
        type: 'car',
        year: 2021, 
        color: 'red',
        registration: {
            city: 'Houston',
            state: 'Texas',
            country: 'USA'
        }
    }

    myVehicle(vehicleOne)

    function myVehicle({ model, registration: { state } }) {
        const message = 'My ' + model + ' is registered in ' + state + '.';
    }

No exemplo acima é criado um objeto vehicleOne com a propriedade registration contendo um outro objeto como seu valor (objeto concatenado). Após isso é criada a função myVehicle, sendo seu parâmetro um objeto desestruturado com as propriedades model e registration. Como a propriedade registration possui um objeto, para se acessar as informações desse objeto devemos colocar um dois pontos e colocar qual propriedade do objeto concatenado queremos, entre chaves. 
Após isso a função myVehicle é chamada com o objeto vehicleOne como parâmetro para que a função pegue as informações do objeto




=====================================================================================================
=================================== React ES6 Spread Operator =======================================
=====================================================================================================

O operador spread (...) nos permite copiar rapidamente todas as partes de um array ou objeto existente para outro objeto ou array

    const numbersOne = [1, 2, 3];
    const numbersTwo = [4, 5, 6];
    const numbersCombined = [...numbersOne, ...numbersTwo]; //Retrona 1,2,3,4,5,6

O operador spread é geralmente usado em combinação com desestruturação:

    const numbers = [1, 2, 3, 4, 5, 6];
    const [one, two, ...rest] = numbers;        //Retorna 1,2,3,4,5,6. One = 1, two = 2, rest pega todos os outros elementos a partir do terceiro elemento, já que ele é o terceiro
                                                elemento desse array da variável.


Podemos usar spread com objetos também:

    const myVehicle = {
        brand: 'Ford',
        model: 'Mustang',
        color: 'red'
    }

    const updateMyVehicle = {
        type: 'car',
        year: 2021, 
        color: 'yellow'
    }

    const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}     //Retorna brand: "Ford", color: "yellow", model: "Mustang", type: "car", year: 2021

Note que as propriedades deiferentes entre os objetos foram combinados, mas a única propriedade igual entre os dois objetos, color, foi sobrescrita com o valor do último objeto a ser passado, por isso seu valor é yellow e não red.




=====================================================================================================
======================================= React ES6 Modules ===========================================
=====================================================================================================

Os módulos em javaScript permitem que você divida seu código em vários arquivos, tornando mais fácil para fazer a manutenção do código base. Os módulos ES se baseiam nos argumentos import e export.



////////// Export //////////
Permite que você exporte qualquer função ou variável de qualquer arquivo. Existem dois tipos de export: Named e Default.

*** Named Export --> Pode-se criar exports nomeados de duas maneiras: Individualmente no inline ou tudo de uma vez no final do arquivo

    * Inline individualmente:

    export const name = "Jesse";
    export const age = 40;

    * Tudo de uma vez no final do arquivo:

    const name = "Jesse"
    const age = 40

    export { name, age }


*** Default export --> Define que o elemento referenciado é a exportação padrão daquele arquivo, logo não precisa de ser referenciado na importação. Somente pode-se ter um default export em um arquivo

    const message = () => {
        const name = "Jesse";
        const age = 40;
        return name + ' is ' + age + 'years old.';
    };

    export default message;

    **** na hora de importar:
        import message from 'message.js';



////////// Import //////////
Permite que você importe os módulos em um arquivo e existem duas maneiras para se fazer isso, baseadas na maneira em que os módulos foram exportados, se oram named exports ou default exports. Named exports precisam ser desestruturados entre chaves enquanto default exports não.

    * Importando named export:
    import {name, age} from './person.js';

    *Importando default export:
    import message from 'message.js';




=====================================================================================================
===================================== React ES6 Ternary Operator ====================================
=====================================================================================================

O operador ternário é um operador condicional como if/else simplificado e sua sintaxe é:

    condition ? <expression if true> : <expression if false>

Exemplo usando if/else:

    if (authenticated) {
        renderApp();
    } else {
        renderLogin();
    }

Exemplo usando o operador ternário:

authenticated ? renderApp() : renderLogin();



=====================================================================================================
========================================== React Render HTML ========================================
=====================================================================================================

O objetivo do React é, entre muitas maneiras, renderizar HTML em uma web page. O react costuma fazer isso usando uma função chamada ReactDOM.render().



////////// The Render Function //////////
A função ReactDOM.render() aceita dois argumentos, o código HTML e um elemento HTML e o objetivo dessa função é mostrar o código HTML especificado dentro do elemento HTML especificado.
Essa renderização acontecerá dentro da div root, que está no index.html da pasta public do seu arquivo react.

    ReactDOM.render(<p>Hello</p>, document.getElementById('root'));



////////// The HTML Code //////////
O código HTML nesse caso usa o JSX, que nos permite escrever códigos HTML dentro de um código javaScript. Aprenderemos mais sobre JSX no próximo módulo

    * Crie uma variável que contenha um código HTML e o mostre no nó root:

    const myelement = (
    <table>
        <tr>
            <th>Name</th>
        </tr>

        <tr>
            <td>John</td>
        </tr>

        <tr>
            <td>Elsa</td>
        </tr>
    </table>
    );

    ReactDOM.render(myelement, document.getElementById('root'));



////////// The Root Node //////////
O nó raiz ou root node é o elemento HTML em que você quer mostrar o resultado do seu código React. É como se fosse um container para o conteúdo administrado pelo React.
Esse nó NÃO precisa ser uma div e NÃO precisa ter o id root:

<body>

  <header id="sandy"></header>

</body>

ReactDOM.render(<p>Hallo</p>, document.getElementById('sandy'));


Basta saber que é um elemento principal dentro do arquivo index.html principal e que todo o seu código React será renderizado dentro dele.



=====================================================================================================
============================================== React JSX ============================================
=====================================================================================================

JSX significa javScript XML e nos permite escrever HTML em React e torna mais fácio escrever e adicionar HTML em React.



////////// Coding JSX //////////
JSX nos permite escrever elementos HTML em javaScript e os posicionar no DOM sem os métodos createElement() e/ou appendChild().

Exemplo sem JSX:

    const myElement = React.createElement('h1', {}, 'I do not use JSX!');

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(myElement);

Exemplo com JSX:

    const myElement = <h1>I Love JSX!</h1>;

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(myElement);

Como é possível ver, no segundo exemplo o JSX nos permite escrever o código HTML diretamente no javaScript. JSX é uma extensão do javaScript baseada na ES6 e é traduzida para o javaScript normal na hora da execução. 



////////// Expressions in JSX //////////
Com JSX você pode escrever expressões entre chaves {}. A expressão pode ser uma variável React, propriedade ou qualquer outra expressão javaScript válida. Dessa maneira o JSX irá executar a expressão e retornar o resultado.


        const myElement = <h1>React is {5 + 5} times better with JSX</h1>;      //Retorna React is 10 times better with JSX



////////// Inserting a Large Block of HTML //////////
Para escrever o HTML em múltiplas linhas, basta colocar o código entre parênteses():

    const myElement = (
    <ul>
        <li>Apples</li>
        <li>Bananas</li>
        <li>Cherries</li>
    </ul>
    );



////////// One Top Level Element //////////
O código HTML deve estar contido dentro de UM elemento denível superior. Caso você deseje escrever dois parágrafos, você DEVE colocar esses elementos dentro de um elemento pai, como uma <div> por exemplo:

    const myElement = (
    <div>
        <p>I am a paragraph.</p>
        <p>I am a paragraph too.</p>
    </div>
    );


Uma outra alternativa é usar um fragmento para conter múltiplas linhas, isso vai impedir a adição desnecessária de nós extras no DOM:

    const myElement = (
    <>
        <p>I am a paragraph.</p>
        <p>I am a paragraph too.</p>
    </>
    );



////////// Elements Must be Closed //////////
JSX segue as regras XML, portanto os elementos HTML devem ser propriamente fechados com o />:

        const myElement = <input type="text" />;

Caso o elemento não esteja fechado, o JSX irá mostrar um erro.



////////// Attribute class = className //////////
O atributo class é um dos atributos mais usados em HTML, mas já que o JSX é renderizado como javaScript e a keyword class é uma das reserved keywords em JS, não é permitido usar essa keyword em JSX. Ao invés disso usa-se a keyword className.

    const myElement = <h1 className="myclass">Hello World</h1>;



////////// Conditions - if statements //////////
O React suporta o argumento if, mas não dentro do JSX. Para se usar os argumentos condicionais em JSX, pode ou colocar o argumento condicional fora do JSX ou usar o operador ternário.

Exemplo com o argumento condicional fora do JSX:

    const x = 5;
    let text = "Goodbye";
    if (x < 10) {
        text = "Hello";
    }

    const myElement = <h1>{text}</h1>;

Exemplo usando o operador ternário:

    const x = 5;

    const myElement = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>;



=====================================================================================================
=========================================== React Components ========================================
=====================================================================================================

Os components são como funções que retornam elementos HTML. São pedaços de código independentes e reutilizáveis, que têm o mesmo propéosito das funções javaScript, mas trabalham isoladamente e retornam HTML.
Os components possuem dois tipos: componentes de classes e componentes de funções.
Deve-se criar um component com a primeira letra OBRIGATÓRIAMENTE MAIÚSCULA.



////////// Class Component //////////
Um class component deve incluir o argumento extends React.Component. Esse argumento cria uma herança para o React.Component e dá a seu componente o acesso às funções do React.Component.
Esse tipo de component também requer o método render(), que irá retornar o HTML:

    class Car extends React.Component {
        render() {
            return <h2>Hi, I am a Car!</h2>;
        }
    }



////////// Function Component //////////
Um function component também retorna HTML e se comporta praticamente como um class component, só que os function components podem ser escritos usando muito menos código e são mais fáceis de se entender:

    function Car() {
        return <h2>Hi, I am a Car!</h2>;
    }



////////// Rendering a Component //////////
Agora sua aplicação tem um component Car, no qual retorna um elemento <h2>. Para se usar esse component em sua aplicação, usa-se uma sintaxe similar ao HTML: <Car/>

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Car />);



////////// Components in Components //////////
Nós podemos nos referir a componentes dentro de outros componentes:

    function Car() {
        return <h2>I am a Car!</h2>;
    }

    function Garage() {
        return (
            <>
            <h1>Who lives in my Garage?</h1>
            <Car />
            </>
        );
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Garage />);



////////// Components in Files //////////
O React é focado no reuso de códigos, por isso é recomendado que separar seus componentes em arquivos diferentes. Para fazer isso basta criar um novo arquivo .js e colocar o código dentro desse arquivo.

Código em um arquivo chamado Cars.js:

    function Car() {
        return <h2>Hi, I am a Car!</h2>;
        }

    export default Car;

Para se usar o component Car, você deve importar esse arquivo em sua aplicação

    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import Car from './Car.js';

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Car />);




=====================================================================================================
=========================================== React Class =============================================
=====================================================================================================

Ao criar um React class component, o nome do mesmo deve iniciar com letra maiúscula. O componente deve possuir o argumento extends React.Component, que tem a função de uma herança para o React.Component e dá acesso para o seu componente às funnçoes do React.Component. O class component também requer o método render(), que retornará o HTML.

    class Car extends React.Component {
        render() {
            return <h2>Hi, I am a Car!</h2>;
        }
    }

Agora sua aplicação tem um component Car, no qual retorna um elemento <h2>. Para se usar esse component em sua aplicação, usa-se uma sintaxe similar ao HTML: <Car/>

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Car />);



////////// Component Constructor //////////
Caso seu componente tenha a função constructor(), essa função será chamada quando seu componente for iniciado. 
A função constructor é onde você vai iniciar as propriedades do componente. Em React, essas propriedades podem ser guardadas em um objeto chamado state.
A função constructor também é onde você herda a herança do componente pai, incluindo o argumento super(), que executa a função constructor do componente pai e, por consequência, seu componente tem acesso à todas as funções do componente pai (React.Component).

    class Car extends React.Component {
        constructor() {
            super();
            this.state = {color: "red"};
        }
        render() {
            return <h2>I am a {this.state.color} Car!</h2>;     //Pega a propriedade color do state
        }
    }



////////// Props //////////
Outra maneira de se lidar com as propriedades dos componentes é usando o props. Pros são como argumentos de função, que você envia aos componentes como atributos HTML.

    class Car extends React.Component {
        render() {
            return <h2>I am a {this.props.color} Car!</h2>;
        }
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Car color="red"/>);

Se o seu componente tiver uma função constructor, o props deve ser passado sempre para o construtor e tamb´me para o React.Component pelo método super().

    class Car extends React.Component {
        constructor(props) {                                                    //Passa o props para a função constructor
            super(props);                                                       //Passa o props para o método super
        }
        render() {
            return <h2>I am a {this.props.model}!</h2>;                         //Pega o props model do componente
        }
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Car model="Mustang"/>);                                        //Seta o valor de props.         



////////// Components in Components //////////
Podemos nos referir a componentes dentro de outros componentes:

    class Car extends React.Component {
        render() {
            return <h2>I am a Car!</h2>;
        }
    }

    class Garage extends React.Component {
        render() {
            return (
                <div>
                    <h1>Who lives in my Garage?</h1>
                    <Car />
                </div>
            );
        }
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Garage />);



////////// Components in Files //////////
O React é focado no reuso de códigos, por isso é recomendado que separar seus componentes em arquivos diferentes. Para fazer isso basta criar um novo arquivo .js e colocar o código dentro desse arquivo.

    import React from 'react';

    class Car extends React.Component {
        render() {
            return <h2>Hi, I am a Car!</h2>;
        }
    }

    export default Car;


Para se usar o component Car, você deve importar esse arquivo em sua aplicação

    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import Car from './Car.js';

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Car />);



////////// React Class Component State //////////
Você deve ter notado que usamos o state nos exemplos de construtores anteriormente.
Os React class components possuem de fábrica, um objeto state, que é onde você irá armazenar os valores das propriedades que pertencem ao componente.
Quando o state muda, o componente é renderizado novamente.

O objeto state é inicializado no método construtor e pode conter quantas propriedades quiser:

    class Car extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                brand: "Ford",
                model: "Mustang",
                color: "red",
                year: 1964
            };
        }

        render() {
            return (
                <div>
                    <h1>My Car</h1>
                </div>
            );
        }
    }


////////// Using the state Object //////////
Se refira ao objeto state em qualquer lugar do componente usando a sintaxe this.state.propertyname:

    class Car extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                brand: "Ford",
                model: "Mustang",
                color: "red",
                year: 1964
            };
        }

        render() {
            return (
                <div>
                    <h1>My {this.state.brand}</h1>
                    <p>
                        It is a {this.state.color}
                        {this.state.model}
                        from {this.state.year}.
                    </p>
                </div>
            );
        }
    }



////////// Changing the state Object //////////
Para mudar um valor deentro do objeto state, use o método this.setState(). Quando um valor do objeto state for modificado, o componente será renderizado novamente, significando que o resultado de saída será modificado de acordo com o novo valor. 

    class Car extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                brand: "Ford",
                model: "Mustang",
                color: "red",
                year: 1964
            };
        }

        changeColor = () => {
            this.setState({color: "blue"});                     //Função changeColor que modifica o valor da propriedade do objeto state
        }

        render() {
            return (
                <div>
                    <h1>My {this.state.brand}</h1>

                    <p>
                        It is a {this.state.color}
                        {this.state.model}
                        from {this.state.year}.
                    </p>

                    <button type="button" onClick={this.changeColor}>Change color</button>          //Chama a função changecolor
                </div>
            );
        }
    }



////////// Lifecycle of Components //////////
Cada componente do React possui um ciclo de vida, no qual você pode manipular e modificar durante suas três principais fases: 

    * Mounting (Montagem)
    * Updating (Atualização)
    * Unmounting (Desmontagem).



////////// Mounting //////////
Mounting significa colocar os elementos no DOM.
O React possui quatro méotodos de fábrica que podem ser chamados, nessa ordem, quando estiver "montando" um elemento:

    * constructor()
    * getDerivedStateFromProps()
    * render()
    * componentDidMount()

O método render() é necessário e sempre será chamado. Os outros são opcionais e serão chamados se você definí-los.


-------------- Constructor
O método construtor é chamado antes de qualquer coisa, quando o componente for inicializado, e é o lugar original para se colocar o state original e outros valores iniciais.
O método construtor é chamado com o argumento props e deve sempre começar chamando o super(props) ante de qualquer coisa. Isso vai iniciar o método construtor do elemento pai e permitir que o componente herde os métodos de seu pai (Render.Component).

No exemplo abaixo o método construtor é chamado pelo react toda vez que se cria um componente:

    class Header extends React.Component {
        constructor(props) {
            super(props);
            this.state = {favoritecolor: "red"};
        }
        render() {
            return (
            <h1>My Favorite Color is {this.state.favoritecolor}</h1>
            );
        }
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Header />);


-------------- getDerivedStateFromProps
O método getDerivedStateFromProps() é chamado um pouco antes de renderizar o elemento no DOM. É o lugar original para se colocar o objeto state baseado no props inicial.
Esse método pega o state como um argumento e retorna um objeto com mudanças no state.

O exemplo abaixo começa com a favourite color sendo red, mas o método getDerivedStateFromProps() atualiza o favourite color baseado no atributo favcol:

    class Header extends React.Component {
        constructor(props) {
            super(props);
            this.state = {favoritecolor: "red"};                    //Favourite color é setada para red
        }

        static getDerivedStateFromProps(props, state) {
            return {favoritecolor: props.favcol };                  //Muda o valor de favoritecolor para o valor do atributo favcol
        }

        render() {
            return (
            <h1>My Favorite Color is {this.state.favoritecolor}</h1>
            );
        }
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Header favcol="yellow"/>);                                         //Atributo favcol


-------------- render
O méotodo render é obrigatório e é responsável por retornar o HTML como saída no DOM:

    class Header extends React.Component {
        render() {
            return (
                <h1>This is the content of the Header component</h1>
            );
        }
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Header />);


-------------- componentDidMount
O método componentDidMount é chamado depois que o componente for renderizado. É aqui que você irá rodar argumentos que fazem com que o compenente já esteja posicionado no DOM:

De primeira, o favourite color é red, mas me dê uma segunda no lugar, e é amarelo:

    class Header extends React.Component {
        constructor(props) {
            super(props);
            this.state = {favoritecolor: "red"};                                    //Seta a favourite color para red
        }
        componentDidMount() {
            setTimeout(() => {
                this.setState({favoritecolor: "yellow"})                            //Depois que o componente for montado, espere 1s e mude para amarelo
            }, 1000)
        }
        render() {
            return (
                <h1>My Favorite Color is {this.state.favoritecolor}</h1>
            );
        }
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Header />);



////////// Updating //////////
A próxima faze do ciclo de vida é quando um componente for atualizado, que é quando há uma mudança em seu state ou seu props. O React tem cinco métodos de fábrica que são chamados, nessa ordem, quando um componente é atualizado:

    * getDerivedStateFromProps()
    * shouldComponentUpdate()
    * render()
    * getSnapshotBeforeUpdate()
    * componentDidUpdate()

O método render() é necessário e sempre será chamado. Os outros são opcionais e serão chamados se você definí-los.



-------------- getDerivedStateFromProps()
O método getDerivedStateFromProps também é chamado em atualizações. Esse é o primeiro método que é chamado quando um componente é atualizado. Continua sendo o lugar original para se colocar o objeto state baseado no props inicial.

O exempllo abaixo tem um botão que muda a favourite color para blue, mas já que o método getDerivedStateFromProps() é chamado, atualizando o state com a cor do atributo favcol, a favourite color que é renderizada continua sendo yellow:

    class Header extends React.Component {
        constructor(props) {
            super(props);
            this.state = {favoritecolor: "red"};
        }

        static getDerivedStateFromProps(props, state) {
            return {favoritecolor: props.favcol };
        }

        changeColor = () => {
            this.setState({favoritecolor: "blue"});
        }

        render() {
            return (
                <div>
                    <h1>My Favorite Color is {this.state.favoritecolor}</h1>
                    <button type="button" onClick={this.changeColor}>Change color</button>
                </div>
            );
        }
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Header favcol="yellow" />);



-------------- shouldComponentUpdate
No método shouldComponentUpdate() você pode retornar um valor boolean que diz se o React deve continuar com a renderização ou não. O valor padrão é true.

O exemplo abaixo mostra o que acontece quando o método shouldComponentUpdate() retorna false:

    class Header extends React.Component {
        constructor(props) {
            super(props);
            this.state = {favoritecolor: "red"};
        }

        shouldComponentUpdate() {
            return false;
        }

        changeColor = () => {
            this.setState({favoritecolor: "blue"});
        }

        render() {
            return (
                <div>
                    <h1>My Favorite Color is {this.state.favoritecolor}</h1>
                    <button type="button" onClick={this.changeColor}>Change color</button>
                </div>
            );
        }
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Header />);


Nada vai acontecer e o componente não será renderizado, pois o méotod shouldComponentUpdate retornou false. Se o método retornasse true, o componente seria renderizado novamente com o valor blue para a favourite color.


-------------- render
O méotodo render também é chamado quando um componente é atualizado, já que tem que renderizar novamente o HTML para o DOM, com as novas mudanças.

O exemplo abaixo tem um botão que muda a favourite color para blue:

    class Header extends React.Component {
        constructor(props) {
            super(props);
            this.state = {favoritecolor: "red"};
        }

        changeColor = () => {
            this.setState({favoritecolor: "blue"});
        }

        render() {
            return (
                <div>
                    <h1>My Favorite Color is {this.state.favoritecolor}</h1>
                    <button type="button" onClick={this.changeColor}>Change color</button>
                </div>
            );
        }
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Header />);


-------------- getSnapshotBeforeUpdate
No método getSnapshotBeforeUpdate você tem acesso aos props e state antes da atualização, ou seja, mesmo depois que o componente seja atualizado, você pode verificar quais eram os valores antes da atualização.
Se o métodos getSnapshotBeforeUpdate está presente, você também deve incluir o método componentDidUpdate(), caso contrário irá gerar um erro

O exemplo abaixo pode parecer complicado, mas tudo que ele faz é:
    1- Quando o componente está na fase de mounting, a favourite color é red
    2- Quando o componente já estiver sido montado, o mesmo é renderizado com a favourite color red
    3- Essa ação desencadeia a fase de update, e já que o componente possui o método getSnapshotBeforeUpdate(), esse método é executado e escreve uma mensagem para a div1 vazia.
    4- Depois disso o método componentDidUpdate() é executado e excreve uma mensagem na div2 vazia.

    class Header extends React.Component {
        constructor(props) {
            super(props);
            this.state = {favoritecolor: "red"};
        }

        componentDidMount() {
            setTimeout(() => {
                this.setState({favoritecolor: "yellow"})
            }, 1000)
        }

        getSnapshotBeforeUpdate(prevProps, prevState) {
            document.getElementById("div1").innerHTML =
            "Before the update, the favorite was " + prevState.favoritecolor;
        }

        componentDidUpdate() {
            document.getElementById("div2").innerHTML =
            "The updated favorite is " + this.state.favoritecolor;
        }

        render() {
            return (
            <div>
                <h1>My Favorite Color is {this.state.favoritecolor}</h1>
                <div id="div1"></div>
                <div id="div2"></div>
            </div>
            );
        }
    }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />);


-------------- componentDidUpdate
O método componentDidUpdate é chamado depois que o componente tiver sido atualizado no DOM.

O exemplo abaixo pode parecer complicado, mas tudo que ele faz é:
    1- Quando o componente está na fase de mounting, a favourite color é red
    2- Quando o componente já estiver sido montado, um timer muda o state e a cor muda para yellow 
    3- Essa ação desencadeia a fase de update, e já que o componente possui o método componentDidUpdate(), esse método é executado e escreve uma mensagem para a div vazia.

    class Header extends React.Component {
        constructor(props) {
            super(props);
            this.state = {favoritecolor: "red"};
        }
        componentDidMount() {
            setTimeout(() => {
                this.setState({favoritecolor: "yellow"})
            }, 1000)
        }
        componentDidUpdate() {
            document.getElementById("mydiv").innerHTML =
            "The updated favorite is " + this.state.favoritecolor;
        }
        render() {
            return (
            <div>
            <h1>My Favorite Color is {this.state.favoritecolor}</h1>
            <div id="mydiv"></div>
            </div>
            );
        }
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Header />);



////////// Unmounting //////////
A próxima fase no ciclo de vida é quando o componente é removido do DOM, ou desmontado ( como o React gosta de chamar). O React possui apenas um método de fábrica que é chamado quando um componente é desmontado:

    * componentWillUnmount()


-------------- componentWillUnmount()
O método componentWillUnmount é chamado quando o componente está para ser removido do DOM

No exemplo abaixo, quando o elemento h1 está para ser removido, emite um alerta:

    class Container extends React.Component {
        constructor(props) {
            super(props);
            this.state = {show: true};
        }

        delHeader = () => {
            this.setState({show: false});
        }

        render() {
            let myheader;
            if (this.state.show) {
                myheader = <Child />;
            };
            return (
                <div>
                {myheader}
                <button type="button" onClick={this.delHeader}>Delete Header</button>
                </div>
            );
        }
    }

    class Child extends React.Component {
        componentWillUnmount() {
            alert("The component named Header is about to be unmounted.");
        }
        render() {
            return (
            <h1>Hello World!</h1>
            );
        }
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Container />);



=====================================================================================================
============================================== React Props ==========================================
=====================================================================================================

Props são argumentos passados para componentes React via atributos HTML. São como argumentos de uma função em javaScript e atributos em HTML. 
Para enviar props para um componente, use a mesma sintaxe que é utilizada para adicionar um atributo a um elemento HTML:

    const myElement = <Car brand="Ford" />;

Esse componente vai receber o props como se fosse um argumento de uma função

    function Car(props) {
        return <h2>I am a { props.brand }!</h2>;
    }



////////// Pass Data //////////
Props também permite que você passe informações de um componente para outro, como parâmetros. O exemplo abaixo envia a propriedade brand do componente Garage para o componente Car:

    function Car(props) {
        return <h2>I am a { props.brand }!</h2>;
    }

    function Garage() {
        return (
            <>
                <h1>Who lives in my garage?</h1>
                <Car brand="Ford" />
            </>
        );
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Garage />);

Caso você tenha uma variável para enviar, ao invés de uma string como no exemplo anterior, basta colocar o nome da variável entre chaves {}:

    function Car(props) {
        return <h2>I am a { props.brand }!</h2>;
    }

    function Garage() {
        const carName = "Ford";
        return (
            <>
                <h1>Who lives in my garage?</h1>
                <Car brand={ carName } />
            </>
        );
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Garage />);


Ou se for um objeto:

    function Car(props) {
        return <h2>I am a { props.brand.model }!</h2>;
    }

    function Garage() {
        const carInfo = { name: "Ford", model: "Mustang" };
        return (
            <>
                <h1>Who lives in my garage?</h1>
                <Car brand={ carInfo } />
            </>
        );
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Garage />);




=====================================================================================================
============================================== React Events =========================================
=====================================================================================================

Assim como eventos HTML DOM, o React pode executar ações baseadas nos eventos do usuário. O React tem os mesmos eventos que o HTML: click, mouseover, change, etc.
Os eventos em React são escritos em camelCase, ou seja, ao invés de onclick, é escrito onClick.
Os Event handlers em react, são escritos entre chaves, ou seja, ao invés de onclick="shoot()", é escrito onClick={shoot}.

HTML:
    <button onclick="shoot()">Take the Shot!</button>

REACT:
    <button onClick={shoot}>Take the Shot!</button>


    function Football() {
        const shoot = () => {
            alert("Great Shot!");
        }

        return (
            <button onClick={shoot}>Take the shot!</button>
        );
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Football />);



////////// Passing Arguments //////////
Para passar algum argumento para um event handler, use uma arrow function.

O exemplo abaixo envia "GOL!" como um parâmetro para a função shoot, usando arrow function:

    function Football() {
        const shoot = (a) => {
            alert(a);
        }

        return (
            <button onClick={() => shoot("Gol!")}>Take the shot!</button>
        );
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Football />);



////////// React Event Object //////////
Os event handlers têm acesso ao evento React que chamou a função. No exemplo abaixo esse evento é o click:

    function Football() {
        const shoot = (a, b) => {             //"b" representa o evento React que chamou a função. Nesse caso o evento click.
            alert(b.type);		
        }

        return (
            <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
        );
    }
  
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Football />);
  


=====================================================================================================
====================================== React Conditional Rendering ==================================
=====================================================================================================

Em React, você pode renderizar componentes condicionalmente e tem várias maneiras de se fazer isso.



////////// if Statement //////////
Pode-se usar o operador if em javaScript para decidir qual componente será renderizado.

    function MissedGoal() {
        return <h1>MISSED!</h1>;
    }

    function MadeGoal() {
        return <h1>Goal!</h1>;
    }

Baseado nas funções acima, criaremos um componente que decidirá qual componente será renderizado baseado na condição:

    function Goal(props) {
        const isGoal = props.isGoal;
        if (isGoal) {
            return <MadeGoal/>;
        }
        return <MissedGoal/>;
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Goal isGoal={false} />);                                   //Retorna Missed pois o isGoal está definido como false



////////// Logical && Operator //////////
Outra maneira de se renderizar um componente React condicionalmente é usando o operador lógico &&.
Lmebrando que podemos usar código javaScript dentro do JSX usando chaves {}

    function Garage(props) {
        const cars = props.cars;
        return (
            <>
            <h1>Garage</h1>
            {cars.length > 0 &&
                <h2>
                    You have {cars.length} cars in your garage.
                </h2>
            }
            </>
        );
    }

    const cars = ['Ford', 'BMW', 'Audi'];
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Garage cars={cars} />);

Se a condição cars.length for true, então a expressão após o && irá ser renderizada. Se zerarmos a const cars, o car.length vai ser 0, logo a condição não será atingida e a expressão posterior ao && não será renderizada.



////////// Ternary Operator //////////
Outra maneira de renderizar elementos condicionalmente é usando o operador ternário:

    condition ? true : false


    function Goal(props) {
        const isGoal = props.isGoal;                                        //Pega o valor setado no argumento props no componente
        return (
            <>
                { isGoal ? <MadeGoal/> : <MissedGoal/> }                    //Verifica se é true ou false e vai renderizar o componente de acordo com isso.
            </>
        );
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Goal isGoal={false} />);                                   //Sera o valor do argumento props no componente



=====================================================================================================
============================================== React Lists ==========================================
=====================================================================================================

Em React, você irá renderizar listas com algum tipo de loop. O método map() é geralmente o mais escolhido.

    function Car(props) {
    return <li>I am a { props.brand }</li>;
    }

    function Garage() {
        const cars = ['Ford', 'BMW', 'Audi'];
        return (
            <>
                <h1>Who lives in my garage?</h1>
                <ul>
                    {cars.map((car) => <Car brand={car} />)}          //Retorna a mesma coisa para cada item do array cars. Retorna "I'm a Ford", "I'm a BMW", "I'm a Audi".
                </ul>
            </>
        );
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Garage />);


Ao executar esse código em seu arquivo React, você receberá uma mensagem de erro informando que não há key para os itens da lista.



////////// Keys //////////
As keys permitem que o React consiga rastrear os elementos. Dessa maneira, se um item for atualizado ou removido, apenas aquele item será renderizado novamente e não a lista inteira. As keys precisam ser únicas para cada elemento irmão, mas podem ser duplicadas globalmente.
Geralmente a key deve ser um ID único para cada item, mas no último dos casos pode-se usar o index do array como key.

    function Car(props) {
        return <li>I am a { props.brand }</li>;
        }

        function Garage() {
        const cars = [
            {id: 1, brand: 'Ford'},
            {id: 2, brand: 'BMW'},
            {id: 3, brand: 'Audi'}
        ];
        return (
            <>
                <h1>Who lives in my garage?</h1>
                <ul>
                    {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
                </ul>
            </>
        );
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Garage />);




=====================================================================================================
============================================== React Forms ==========================================
=====================================================================================================

Assim como em HTML, React usa formulários para permitir que os usuários interajam com a webpage. Para adicionar um formulário em React é do mesmo jeito que em HTML:

    function MyForm() {
        return (
            <form>
                <label>Enter your name:
                    <input type="text" />
                </label>
            </form>
        )
    }
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<MyForm />);

Isso irá fazer com que o formulário funcione normalmente, ou seja, o forumlário vai ser enviado (submit) e a página será recarregada. Porém geralmente não é isso que queremos, nós queremos previnir esse comportamento padrão e permitir que o React controle o formulário.



////////// Handling Forms //////////
A manipulação do formulário é como você lida com os dados quando eles mudam de valor ou são enviados. Em HTML os dados do formulário geralmente são manipulados pelo DOM, já em React, os dados do formulário são geralmente manipulados pelos componentes.
Quando os dados são manipulados pelo componente, todos os dados são armazenados no state do componente. Você pode controlar as alterações adicionando event handlers no atributo onChange.
Podemos usar também o react Hook useState para acompanhar o valor de cada input e fornecer uma "única fonte de verdade" para a aplicação.

Veremos todos os React Hooks mais aprofundadamente mais para frente.

    import { useState } from 'react';
    import ReactDOM from 'react-dom/client';

    function MyForm() {
    const [name, setName] = useState("");

    return (
        <form>
            <label>Enter your name:
                <input
                    type="text" value={name} onChange={(e) => setName(e.target.value)}      //Pega os valores do input e atualiza no useState.
                    />
            </label>
        </form>
    )
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<MyForm />);



////////// Submitting Forms //////////
Você pode controlar o envio do formulário, adicionando um event handler no atributo onSubmit do form:

    import { useState } from 'react';
    import ReactDOM from 'react-dom/client';

    function MyForm() {
        const [name, setName] = useState("");

        const handleSubmit = (event) => {                       //Função handleSubmit
            event.preventDefault();                             //Previne o comportamento padrão que faz com que a página seja atualizada
            alert(`The name you entered was: ${name}`)          //Emite um alerta com o valor de name
        }

        return (
            <form onSubmit={handleSubmit}>                      //Quando o botão de submit for clicado, chama a função handleSubmit
                <label>Enter your name:
                    <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}       //Cria um event handler que vai pegar os valores do input
                    />
                </label>
            <input type="submit" />
            </form>
        )
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<MyForm />);



////////// Multiple Input Fields //////////
Pode-se controlar os valores de mais de um input adicionando o atributo name a cada elemento.
*Vamos inicializar nosso stat como um objeto vazio.
*Para acessar os campos dos inputs no event handler, basta usar a sintaxe event.target.name e event.target.value.
*Para atualizar o state, use colchetes [] em volta da propriedade name:

    import { useState } from 'react';
    import ReactDOM from 'react-dom/client';

    function MyForm() {
    const [inputs, setInputs] = useState({});                   //Cria o state vazio que vai receber os valores dos inputs

    const handleChange = (event) => {                           //Cria a função handleChange
        const name = event.target.name;                         //Cria a variável name que vai pegar o valor do atributo name do input
        const value = event.target.value;                       //Cria a variável value que vai pegar o valor do input
        setInputs(values => ({...values, [name]: value}))       //Atualiza o state no formato [name]:value
    }

    const handleSubmit = (event) => {                           //Cria a função handleSubmit
        event.preventDefault();                                 //Previne o comportamento padrão do submit de atualizar a página
        alert(inputs);                                          // Pega o valor dos inputs do state e emite como alerta
    }

    return (
        <form onSubmit={handleSubmit}>
        <label>Enter your name:
            <input 
                type="text" 
                name="username"                                 //Atributo name do primeiro input
                value={inputs.username || ""}                   //Atributo valor do primeiro input e o armazena na parte value do state inputs
                onChange={handleChange}                         //Faz a ação acima a cada vez que houver uma mudança no valor do input
            />
        </label>

        <label>Enter your age:
            <input 
                type="number" 
                name="age"                                      //Atributo name do segundo input
                value={inputs.age || ""}                        //Atributo valor do segundo input e o armazena na parte value do state inputs
                onChange={handleChange}                         //Faz a ação acima a cada vez que houver uma mudança no valor do input
            />
        </label>
        
        <input type="submit" />                                 //Botão submit
        </form>
    )
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<MyForm />);



////////// Textarea //////////
O elemento textarea em React é um pouco diferente do HTML. Em HTML o valor do textarea o texto entre o início e o fimg da tag <textaera> </textarea>

    <textarea>
        Conteúdo do textarea
    </textarea>

Em React, o valor do textarea é colocado no atributo value. Usaremos o hook useState para gerenciar o valor do textarea.

    import { useState } from 'react';
    import ReactDOM from 'react-dom/client';

    function MyForm() {
        const [textarea, setTextarea] = useState(                           //Seta o state com a frase em questão
            "The content of a textarea goes in the value attribute"
        );

        const handleChange = (event) => {                                   //Cria a função handleChange
            setTextarea(event.target.value)                                 //Atualiza o valor textarea do state com o valor do campo textarea
        }

        return (
            <form>
            <textarea value={textarea} onChange={handleChange} />           //Passa o valor do textarea do state para o atributo value e chama a função handleChange.
            </form>
        )
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<MyForm />);



////////// Select //////////
Uma lista dropdown ou uma caixa de seleção também funciona de um jeito um pouco diferente em React.
No HTML, o valor selecionado na lista dropdown era definido pelo atributo selected:

    <select>
    <option value="Ford">Ford</option>
    <option value="Volvo" selected>Volvo</option>       //Valor selecionado
    <option value="Fiat">Fiat</option>
    </select>

Em React, o valor selecionado é definido pelo atributo value na tag <select>:

    function MyForm() {
        const [myCar, setMyCar] = useState("Volvo");            //Seta o valor do state como Volvo

        const handleChange = (event) => {                       //Cria a função handleChange
            setMyCar(event.target.value)                        //Atualiza o myCar do state com o valor da opção selecionada
        }

        return (
            <form>
                <select value={myCar} onChange={handleChange}>          //Valor do select é a variável myCar do state e chama a função onChange
                    <option value="Ford">Ford</option>                  // Define o valor do atributo value que será usado na função onChange
                    <option value="Volvo">Volvo</option>                // Define o valor do atributo value que será usado na função onChange
                    <option value="Fiat">Fiat</option>                  // Define o valor do atributo value que será usado na função onChange
                </select>
            </form>
        )
    }


Fazendo essas mudanças no textarea e no select, o React consegue manipular todos os elementos input da mesma maneira.




=====================================================================================================
============================================== React Router =========================================
=====================================================================================================

O create react app não inclui as rotas da página. A sulução mais popular para isso é o React Router DOM.
Para adicionar o Reacr Router DOM em sua aplicação basta usar o comando: npm i -D react-router-dom.



////////// Folder Structure //////////
Para criar uma aplicação com múltiplas páginas, primeiro vamos começar com a estrutura dos arquivos. Dentro da pasta src, criaremos uma pasta chamada pages com vários arquivos:

    src\pages\:

    Layout.js
    Home.js
    Blogs.js
    Contact.js
    NoPage.js

Cada arquivo desses contém um componente React.

Agora basta importar o react router dom no nosso arquivo index.js:

    import ReactDOM from "react-dom/client";
    import { BrowserRouter, Routes, Route } from "react-router-dom";
    import Layout from "./pages/Layout";
    import Home from "./pages/Home";
    import Blogs from "./pages/Blogs";
    import Contact from "./pages/Contact";
    import NoPage from "./pages/NoPage";

    export default function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="blogs" element={<Blogs />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<NoPage />} />
            </Route>
        </Routes>
        </BrowserRouter>
    );
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);

* Explicando o exemplo acima:
* Primeiro precisamos encapsular nosso conteúdo com o <BrowseRouter>
* Depois definimos nossas rotas com o <Routes>. Uma aplicação pode ter múltiplos <Routes>, mas a nossa aplicação só tem um por ser didática
O <Route> pode ser aninhado, onde o primeiro <Route> tem o path de "/" e renderiza o Layout do componente. Já os <Route> aninhados herdam e se adicionam no path do Route pai. Então o path blogs é combinado com o do Route pai e fica /blogs.
* O componente Home não tem o path, mas tem o atributo index. Esse atributo especifica que essa é a rota padrão para o <Route> pai, que é "/"
* Definindo o path para * irá pegar quaisquer URLs não definidas, ou seja, será atribuído a qualquer path que seja digitado na URL e que não tenha nenhum componente Route. Isso é ótimo para uma página de 404 error.



////////// Pages / Components //////////
O componente Layot tem os elementos <Outlet> e <Link>. O <Outlet> renderiza a rota atual selecionada enquanto o <Link> é usado para definir a URL e acompanhar o histórico do browser.
Sempre que linkarmos para um path interno, usamos o <Link> ao invés do <a href=""/>.
A rota Layout é um componente compartilhado que insere um conteúdo comum entre todas as páginas, como o menu nav.

    import { Outlet, Link } from "react-router-dom";

    const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/blogs">Blogs</Link>
                    </li>
                    
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
    };

    export default Layout;


Home.js:

    const Home = () => {
    return <h1>Home</h1>;
    };

    export default Home;


Blogs.js:

    const Blogs = () => {
    return <h1>Blog Articles</h1>;
    };

    export default Blogs;


Contact.js:

    const Contact = () => {
    return <h1>Contact Me</h1>;
    };

    export default Contact;


NoPage.js:

    const NoPage = () => {
    return <h1>404</h1>;
    };

    export default NoPage;




=====================================================================================================
=============================================== React Memo ==========================================
=====================================================================================================

Usar o memo fará com o que o React pule a renderização de um componente se seu props não tiver sido modificado. Isso pode ajudar a melhorar a performance da aplicação.

No exemplo abaixo, o componente Todos renderiza novamente mesmo que os to-dos não tenham sido modificados.

index.js:

    import { useState } from "react";
    import ReactDOM from "react-dom/client";
    import Todos from "./Todos";

    const App = () => {
        const [count, setCount] = useState(0);
        const [todos, setTodos] = useState(["todo 1", "todo 2"]);

        const increment = () => {
            setCount((c) => c + 1);
        };

        return (
            <>
                <Todos todos={todos} />
                <hr />
                <div>
                    Count: {count}
                    <button onClick={increment}>+</button>
                </div>
            </>
        );
    };

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);

Todos.js:

    const Todos = ({ todos }) => {
    console.log("child render");
    return (
        <>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
            return <p key={index}>{todo}</p>;
        })}
        </>
    );
    };

    export default Todos;


Ao cliclar no botão +, o componente Todos renderiza novamente. Se esse componente fosse complexo, causaria porblemas de performance.

Para resolver esse problema, podemos usar o memo para evitar que o componente Todos renderize novamente sem necessidade. Para isso basta usarmos a sintaxe memo(Todos) na hora de fazermos o export do componente:

index.js:

    import { useState } from "react";
    import ReactDOM from "react-dom/client";
    import Todos from "./Todos";

    const App = () => {
        const [count, setCount] = useState(0);
        const [todos, setTodos] = useState(["todo 1", "todo 2"]);

        const increment = () => {
            setCount((c) => c + 1);
        };

        return (
            <>
                <Todos todos={todos} />
                <hr />
                <div>
                    Count: {count}
                    <button onClick={increment}>+</button>
                </div>
            </>
        );
    };

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);


Todos.js:

    import { memo } from "react";

    const Todos = ({ todos }) => {
        console.log("child render");
        return (
            <>
                <h2>My Todos</h2>
                {todos.map((todo, index) => {
                    return <p key={index}>{todo}</p>;
                })}
            </>
        );
    };

    export default memo(Todos);

Agora o componente Todos só irá renderizar novamente quando o todos forem passados para ele quando os props forem atualizados.



=====================================================================================================
======================================== Styling React Using CSS ====================================
=====================================================================================================

Existem diversas maneiras de se estilizar o React com CSS, mas veremos as três principais maneiras:

    * Inline Styling
    * CSS stylesheet
    * CSS Modules



////////// Inline Styling //////////
Para estilizar um elemento com o atributo inline style, o valor deve ser um objeto javaScript:

    const Header = () => {
        return (
            <>
                <h1 style={{color: "red"}}>Hello Style!</h1>
                <p>Add a little style!</p>
            </>
        );
    }

** Em JSX, as expressões javaScript são escritas entre chaves e os objetos javaScript também são escritos entre chaves, por isso no exemplo acima, o style possui duas chaves, onde a primeira é para escrever o código javaScript e a segunda é referente ao objeto.


***************** camelCased Property Names 
Já que o CSS inline é escrito em um objeto javaScript, as propriedades com hífen devem ser escritas em camelCase

    const Header = () => {
        return (
            <>
                <h1 style={{backgroundColor: "lightblue"}}>Hello Style!</h1>
                <p>Add a little style!</p>
            </>
        );
    }



***************** JavaScript Object
Pode-se criar também um objeto com as informações de estilo e depois se referir ao mesmo no atributo style:

    const Header = () => {
        const myStyle = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Sans-Serif"
        };
        
        return (
            <>
                <h1 style={myStyle}>Hello Style!</h1>
                <p>Add a little style!</p>
            </>
        );
    }



////////// Inline Styling //////////
Você pode escrever sua estilização CSS em um arquivo .css separado e importar em sua aplicação:

App.css:

    body {
    background-color: #282c34;
    color: white;
    padding: 40px;
    font-family: Sans-Serif;
    text-align: center;
    }

index.js:

    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import './App.css';

    const Header = () => {
        return (
            <>
                <h1>Hello Style!</h1>
                <p>Add a little style!.</p>
            </>
        );
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Header />);



////////// CSS Modules //////////
Outra maneira de se adicionar estilo para sua aplicação é usar os CSS Modules. Esses são convenientes para componentes que são colocados em pastas separadas.
O CSS dentro do módulo só é disponibilizado para o componente que importar o mesmo e você não precisa se preocupar com os conflitos de nomes.

* Crie um módUlo CSS com a extensão .module.css, exemplo: my-style.module.css

my-style.module.css:

    .bigblue {
        color: DodgerBlue;
        padding: 40px;
        font-family: Sans-Serif;
        text-align: center;
    }

* Importe o stylesheet para seu componente

Car.js:

    import styles from './my-style.module.css'; 

    const Car = () => {
    return <h1 className={styles.bigblue}>Hello Car!</h1>;
    }

    export default Car;

* Importe o componente para sua aplicação:

    import ReactDOM from 'react-dom/client';
    import Car from './Car.js';

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Car />);



=====================================================================================================
======================================== Styling React Using Sass ===================================
=====================================================================================================

Se você usar o create-react-app em seu projeto, você pode facilmente instalar o Sass em seu projeto digitando esse comando em seu terminal: npm i sass 



////////// Create a Sass file //////////
Crie um arquivo Sass da mesma maneira que vocÊ cria um arquivo CSS, porém o Sass possui a extensão .scss.
Em Sass, você pode usar variáveis e outras funções Sass:

    $myColor: red;

    h1 {
    color: $myColor;
    }

E para importar os arquivos Sass é da mesma maneira que você importa um arquivo CSS:

    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import './my-sass.scss';                    //Importação do arquivo Sass.

    const Header = () => {
        return (
            <>
                <h1>Hello Style!</h1>
                <p>Add a little style!.</p>
            </>
        );
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Header />);




=====================================================================================================
============================================== React Hooks ==========================================
=====================================================================================================

Os hooks foram adicionados na versão 16.8 do React e permitem que os function components tenha acesso ao state e a outros recursos do React. Por conta disso, os class components, na grande maioria das vezes, não são mais necessários. 



////////// What is a Hook? //////////
Os Hooks nos permite "pescar" recursos do React como state e métodos do lifecycle:

    import React, { useState } from "react";
    import ReactDOM from "react-dom/client";

    function FavoriteColor() {
        const [color, setColor] = useState("red");

        return (
            <>
                <h1>My favorite color is {color}!</h1>

                <button
                    type="button"
                    onClick={() => setColor("blue")}
                >Blue</button>

                <button
                    type="button"
                    onClick={() => setColor("red")}
                >Red</button>

                <button
                    type="button"
                    onClick={() => setColor("pink")}
                >Pink</button>
                
                <button
                    type="button"
                    onClick={() => setColor("green")}
                >Green</button>
            </>
        );
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<FavoriteColor />);

Você deve importar os Hooks do react, como mostra a primeira linha do exemplo.
Aqui estamos usando o Hook useState para acompanhar o state da aplicação.
State geralmente se refere aos dados ou propriedades da aplicação, que precisam ser rastreados.



////////// Hook Rules //////////
Existem três regras para os Hooks:

    * Hooks só podem ser chamados dentro de function components.
    * Hooks só podem ser chamados no topo de um componente.
    * Hooks não podem ser condicionais.

** Hooks não funcionam em clss components.



////////// Custom Hooks //////////
Se você tiver uma lógica de estado que precisa ser reutilizada em vários componentes, você pode criar seus próprios hooks personalizados. Esse tópico será visto mais adiante. 



=====================================================================================================
========================================== React useState Hook ======================================
=====================================================================================================

O Hook useState nos permite rastrear o state em um function component. State geralmente se refere aos dados ou propriedades da aplicação, que precisam ser rastreados ou acompanhados.


***************** Import useState
Para usar o useState, primeiro precisamos importá-lo em nosso componente. Esse import é feito no topo de nosso componente com a seguinte sintaxe:

    import { useState } from "react";

Note que estamos desestruturando o useState do react, já que é um named import.



***************** Initialize useState
Uma vez que o useState já esteja importado, nós inicializamos nosso state chamando o useState em nosso function component.
O useState aceita um state inicial e retorna dois valores:

    * O state atual
    * Uma função que atualiza o state.


    import { useState } from "react";

    function FavoriteColor() {
        const [color, setColor] = useState("");
    }

Note novamente que estamos desestruturando os valores retornados do useState. Esses nomes são variáveis e podem ser nomeados de acordo com sua vontade.
O primeiro valor, color, é o state atual.
O segundo valor, setColor, é a função que será usada para atualizar o state.
Por último, definimos o valor inicial para nosso state como sendo uma string vazia.



////////// Read State //////////
Agora nós podemos incluir nosso state em qualquer lugar do nosso componente:

    import { useState } from "react";
    import ReactDOM from "react-dom/client";

    function FavoriteColor() {
        const [color, setColor] = useState("red");

        return <h1>My favorite color is {color}!</h1>                   //State color é incluído no h1
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<FavoriteColor />);



////////// Update State //////////
Para atualizar o nosso state, usaremos a função que faz essa atualização.

*OBS: Não devemos nunca atualizar diretamente nosso state, como por exemplo: color="red". Isso não é permitido.

    import { useState } from "react";
    import ReactDOM from "react-dom/client";

    function FavoriteColor() {
        const [color, setColor] = useState("red");

        return (
            <>
                <h1>My favorite color is {color}!</h1>
                <button
                    type="button"
                    onClick={() => setColor("blue")}            //Atualiza o valor state color para blue
                >Blue</button>
            </>
        )
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<FavoriteColor />);



////////// What Can State Hold //////////
O hook useState pode ser usado para rastrear strings, numbers, booleans, arrays, objects, e qualquer combinação desses elementos citados.
Nós podemos criar múltiplos Hooks state para rastrear valores individuais:

    import { useState } from "react";
    import ReactDOM from "react-dom/client";

    function Car() {
        const [brand, setBrand] = useState("Ford");
        const [model, setModel] = useState("Mustang");
        const [year, setYear] = useState("1964");
        const [color, setColor] = useState("red");

        return (
            <>
                <h1>My {brand}</h1>
                <p>
                    It is a {color} {model} from {year}.
                </p>
            </>
        )
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Car />);


Ou ao invés disso, podemos usar um state e incluir um objeto:

    import { useState } from "react";
    import ReactDOM from "react-dom/client";

    function Car() {
        const [car, setCar] = useState({                //State car possui um objeto como valor inicial
            brand: "Ford",
            model: "Mustang",
            year: "1964",
            color: "red"
        });

        return (
            <>
                <h1>My {car.brand}</h1>
                <p>
                    It is a {car.color} {car.model} from {car.year}.
                </p>
            </>
        )
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Car />);



////////// Updating Objects and Arrays in State //////////
Quando um state é atualizado, o state inteiro é sobrescrito. Mas e se nós só quisermos atualizar a cor de nosso carro?
Se nós só chamarmos setCar({color: "blue"}), isso iria remover as propriedades brand, model e year do nosso state.
Para evitarmos isso, podemos usar o operador spread para nos ajudar:

    import { useState } from "react";
    import ReactDOM from "react-dom/client";

    function Car() {
        const [car, setCar] = useState({
            brand: "Ford",
            model: "Mustang",
            year: "1964",
            color: "red"
        });

        const updateColor = () => {
            setCar(previousState => {                               //Pega o state anterior
                return { ...previousState, color: "blue" }          //O spread pega as propriedades do state anterior até chegar na propriedade color, que vai ser atualizada
            });
        }

        return (
            <>
                <h1>My {car.brand}</h1>
                <p>
                    It is a {car.color} {car.model} from {car.year}.
                </p>
                <button
                    type="button"
                    onClick={updateColor}
                >Blue</button>
            </>
        )
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Car />);


Por precisarmos do valor atual do state, nós passamos a função para dentro da nossa função setCar. Essa função recebe o valor anterior do state.
Nós então retornamos um valor, com o spread do previousState e sobrescrevendo a propriedade color




=====================================================================================================
========================================== React useEffect Hooks ====================================
=====================================================================================================

O Hook useEffect nos permite executar efeitos colaterais em nossos componentes. Alguns exemplos de efeitos colaterais são: buscar dados (fetch), atualizar diretamente o DOM, temporizdores.
O useEffect aceita dois argumentos, sendo que o segundo argumento é opcional:

    useEffect(<function>, <dependency>)

Exemplo usando o setTimeOut para contar 1 segundo depois do render inicial:

    import { useState, useEffect } from "react";
    import ReactDOM from "react-dom/client";

    function Timer() {
        const [count, setCount] = useState(0);

        useEffect(() => {
            setTimeout(() => {
                setCount((count) => count + 1);
            }, 1000);
        });

        return <h1>I've rendered {count} times!</h1>;
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Timer />);

Se executarmos esse código em uma aplicação, notaremos que esse código continua contando em loop, sendo que só deveria contar uma vez.
Isso acontece porque o useEffect executa a cada renderização. Isso significa que quando o state count é modificado, há uma renderização que desencadeia outro effect, criando um loop. Existem diferentes maneiras de controlar quando um efeito colateral é executado.
Nós sempre devemos incluir o segundo parâmetro, no qual aceita um array. Nós podemos, opcionalmente, passar as dependências para o useEffect dentro desse array.

1- Sem passar nenhuma dependência:

    useEffect(() => {
    //Executa a cada render
    });

2- Com um array vazio:

    useEffect(() => {
    //Executa apenas no primeiro render
    }, []);

3- Valores do state ou do props:

    useEffect(() => {
    //Executa no primeiro render
    //E qualquer momento que o valor das dependências for alterado.
    }, [prop, state]);


Logo, para consertarmos a situação do exemplo anterior, podemos executar somente no primeiro render:

    import { useState, useEffect } from "react";
    import ReactDOM from "react-dom/client";

    function Timer() {
        const [count, setCount] = useState(0);

        useEffect(() => {
            setTimeout(() => {
            setCount((count) => count + 1);
            }, 1000);
        }, []);                                             // Adicionado o array vazio para executar somente no primeiro render.

        return <h1>I've rendered {count} times!</h1>;
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Timer />);


O exemplo abaixo demonstra a situação de quando o useEffect é dependente de uma variável e só renderiza quando o valor dessa variável é modificado:

    import { useState, useEffect } from "react";
    import ReactDOM from "react-dom/client";

    function Counter() {
        const [count, setCount] = useState(0);
        const [calculation, setCalculation] = useState(0);

        useEffect(() => {
            setCalculation(() => count * 2);                            //Multiplica o valor de count por 2
        }, [count]);                                                    //Executa o useEffect com a função acima toda vez que o valor de count mudar

        return (
            <>
                <p>Count: {count}</p>
                <button onClick={() => setCount((c) => c + 1)}>+</button>           //Função setCount que atualiza o valor do state count
                <p>Calculation: {calculation}</p>
            </>
        );
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Counter />);



////////// Effect Cleanup //////////
Alguns efeitos precisam ser "limpados", para reduzir vazamentos de memória.
TimeOuts, subscriptions, event listeners e outros efeitos que não são mais necessários devem ser descartados. Nós fazemos isso incluíndo uma função return no final do nosso useEffect:

    import { useState, useEffect } from "react";
    import ReactDOM from "react-dom/client";

    function Timer() {
        const [count, setCount] = useState(0);

        useEffect(() => {
            let timer = setTimeout(() => {                      //Cria a função setTimeout
                setCount((count) => count + 1);                 //usa o setCount para atualizar o valor do state count
        }, 1000);

        return () => clearTimeout(timer)                        //Usa o return no final do useEffect, com a função clearTimeout para "limpar" o useEffect
        }, []);

        return <h1>I've rendered {count} times!</h1>;
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Timer />);




=====================================================================================================
========================================== React useContext Hook ====================================
=====================================================================================================

React context é uma maneira de administrar o state globalmente. Pode ser usado junto com o useState para compartilhar o state com componentes muito aninhados de uma maneira mais fácil do que o useState sozinho.

////////// The Problem //////////
O state deve ser mantido pelo componente pai mais alto na pilha que requer acesso ao state.
Para ilustrar, no exemplo abaixo nós temos vários componentes aninhados. O componente mais ao topo e o componente mais ao fundo da pilha precisam de acesso ao state.
Para fazer isso sem usar o React Context, nós precisaremos passar o state como props por cada componente aninhado na pilha. Isso é chamado e "prop drilling".

    import { useState } from "react";
    import ReactDOM from "react-dom/client";

    function Component1() {
    const [user, setUser] = useState("Jesse Hall");

        return (
            <>
                <h1>{`Hello ${user}!`}</h1>
                <Component2 user={user} />
            </>
        );
    }

    function Component2({ user }) {
        return (
            <>
                <h1>Component 2</h1>
                <Component3 user={user} />
            </>
        );
    }

    function Component3({ user }) {
        return (
            <>
                <h1>Component 3</h1>
                <Component4 user={user} />
            </>
        );
    }

    function Component4({ user }) {
        return (
            <>
                <h1>Component 4</h1>
                <Component5 user={user} />
            </>
        );
    }

    function Component5({ user }) {
        return (
            <>
                <h1>Component 5</h1>
                <h2>{`Hello ${user} again!`}</h2>
            </>
        );
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Component1 />);


Mesmo que os componentes de 2 a 4 não tenham usado o state, eles tiveram que passar o state adiante até chegar no componente 5



////////// The Solution //////////
A solução para o problema acima é criar um context. 

1- Create Context:
Para criar o context, devemos importar o createContext e inicializá-lo.

    import { useState, createContext } from "react";
    import ReactDOM from "react-dom/client";

    const UserContext = createContext()

Após isso, iremos criar o o Context Provider, que vai englobar a árvore de componentes que precisa do state Context.


2- Context Provider
O Context Provider engloba os componente filhos e os fornece o valor do state:

    function Component1() {
        const [user, setUser] = useState("Jesse Hall");

        return (
            <UserContext.Provider value={user}>
            <h1>{`Hello ${user}!`}</h1>
            <Component2 user={user} />
            </UserContext.Provider>
        );
    }

Agora todos os componentes dessa árvore de componentes terão acesso ao user Context.


3- Use the useContext Hook
Para usar o Context em um componente filho, nós precisamos acessá-lo usando o Hook useContext, mas primeiro precisamos incluí-lo no import:

    import { useState, createContext, useContext } from "react";

Após isso podemos acessar o user Context em todos os componentes:

    function Component5() {
        const user = useContext(UserContext);

        return (
            <>
                <h1>Component 5</h1>
                <h2>{`Hello ${user} again!`}</h2>
            </>
        );
    }

Segue abaixo o exemplo completo para melhor entendimento da lógica:

    import { useState, createContext, useContext } from "react";
    import ReactDOM from "react-dom/client";

    const UserContext = createContext();

    function Component1() {
        const [user, setUser] = useState("Jesse Hall");

        return (
            <UserContext.Provider value={user}>
            <h1>{`Hello ${user}!`}</h1>
            <Component2 />
            </UserContext.Provider>
        );
    }

    function Component2() {
        return (
            <>
                <h1>Component 2</h1>
                <Component3 />
            </>
        );
    }

    function Component3() {
        return (
            <>
                <h1>Component 3</h1>
                <Component4 />
            </>
        );
    }

    function Component4() {
        return (
            <>
                <h1>Component 4</h1>
                <Component5 />
            </>
        );
    }

    function Component5() {
    const user = useContext(UserContext);

        return (
            <>
                <h1>Component 5</h1>
                <h2>{`Hello ${user} again!`}</h2>
            </>
        );
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Component1 />);




=====================================================================================================
============================================ React useRef Hook ======================================
=====================================================================================================

O Hook useRef permite que você mantenha valores entre os renders. Pode ser usado para armazenar um valor mutável que não causa uma nova renderização quando atualizado.
Também pode ser usado para acessar o DOM diretamente



////////// Does Not Cause Re-renders //////////
Se nós tentássemos contar quantas vezes nossa aplicação renderizou usando o hook useState, nós ficaríamos presos em um loop infinito, já que esse hook causa uma nova renderização.
Para evitarmos isso, podemos usar o useRef:

    import { useState, useEffect, useRef } from "react";
    import ReactDOM from "react-dom/client";

    function App() {
        const [inputValue, setInputValue] = useState("");
        const count = useRef(0);

        useEffect(() => {
            count.current = count.current + 1;
        });

        return (
            <>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h1>Render Count: {count.current}</h1>
            </>
        );
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);

O useRef() só retorna um item, um objeto chamado current.
Quando inicializamos o useRef, nós definimos o valor inicial useRef(0).
É como se estivéssemos fazendo isso:

    const count = {current: 0}          //Um objeto com a propriedade current igual a 0

Logo nós podemos acessar a variável count usando count.current.



////////// Accessing DOM Elements //////////
No geral, queremos que o React lide com toda a manipulação do DOM. Porém, existem algumas instâncias em que o useRef pode ser usado sem causar nenhum problema.
Em React, podemos adicionar o atributo ref a um elemento para acessá-lo diretamente no DOM. 

    import { useRef } from "react";
    import ReactDOM from "react-dom/client";

    function App() {
        const inputElement = useRef();

        const focusInput = () => {
            inputElement.current.focus();
        };

        return (
            <>
                <input type="text" ref={inputElement} />
                <button onClick={focusInput}>Focus Input</button>       //Quando clicado chama função focusInput que por sua vez chama a variável inputElement que pega o input
            </>                                                         // que está com o atributo ref.
        );
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);



////////// Tracking State Changes //////////
O useRef também pode ser usado para acompanhar os valores anteriores do state. Isso acontece porque nós somos capazes de manter o valor do useRef entre as renderizações:

    import { useState, useEffect, useRef } from "react";
    import ReactDOM from "react-dom/client";

    function App() {
        const [inputValue, setInputValue] = useState("");
        const previousInputValue = useRef("");

        useEffect(() => {
            previousInputValue.current = inputValue;
        }, [inputValue]);

        return (
            <>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h2>Current Value: {inputValue}</h2>
            <h2>Previous Value: {previousInputValue.current}</h2>
            </>
        );
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);


No exemplo acima, o valor inicial do state inputValue é uma string vazia. A variável previousInputValue tem o valor do hook useRef, que inicialmente é uma string vazia também.
Toda vez que o valor de inputValue sofrer alguma mudança, o useEffect é executado e o mesmo irá alocar o valor de inputValue no objeto current do useRef, que por sua vez está na variável previousInputValue.
O elemento input tem como seu valor o próprio state inputValue e tem evento onchange, que toda vez que tiver uma mudança no valor do input, irá chamar a função setInputValue, que irá atualizar o valor de inputValue.
Então toda vez que uma nova letra for digitada no input, esse evento irá chamar o setInputValue que irá atualizar o valor de inputValue com a letra que foi digitada. Quando isso acontecer o useEfect será triggado, fazendo com que atualize o valor do useRef dentro da variável previousInputValue. Como essa variável não irá modificar com o render da página, ela sempre irá conter um valor anterior ao digitado atualmente.  




=====================================================================================================
========================================== React useReducer Hook ====================================
=====================================================================================================

O hook useReducer é similar ao hook useState. Esse hook permite uma lágica state customizada. Caso você se encontre acompanhando múliplos trechos de state que dependem de uma lógica complexa, o useReducer pode ser útil.
O useReducer aceita dois argumentos: componentes

    useReducer(<reducer>, <initialState>)

A função reducer contém a sua lógica state customizada e o initialState pode ser o valor simples, mas geralmente contém um objeto.
O hook useReducer retorna a state atual e um método dispatch.

    import { useReducer } from "react";
    import ReactDOM from "react-dom/client";

    const initialTodos = [                      //Cria um array de objetos com o nome de initialTodos
    {
        id: 1,
        title: "Todo 1",
        complete: false,
    },
    {
        id: 2,
        title: "Todo 2",
        complete: false,
    },
    ];

    const reducer = (state, action) => {                    //Cria uma função reducer com parâmetros state e action
    switch (action.type) {                                  //Chama o condicional switch para o action.type
        case "COMPLETE":                                    //Caso COMPLETE
        return state.map((todo) => {                        //Vai pegar o que estiver no statee vai mapear cada item
            if (todo.id === action.id) {                    //Se o item.ide for igual em type e value ao action.id
            return { ...todo, complete: !todo.complete };   //Pega tudo para trás do item e atualiza a propriedade complete 
            } else {                                        //Caso contrário
            return todo;                                    //Retorne o item
            }
        });
        default:
        return state;                                       //Caso siga a rota padrão, retorne o que está em state
    }
    };

    function Todos() {                                                  //Function Component Todos
    const [todos, dispatch] = useReducer(reducer, initialTodos);        //variável com os parâmetros todos e dispatch recebe o useReducer chamando a função reducer com o array
                                                                        //initialTodos como valor inicial, que vai se tornar o valor de dispatch e a função reducer vai ser o valor de todos. Logo na função reducer o todos = state e dispatch = action
                                                                        
    const handleComplete = (todo) => {                                  //Cria função handleComplete passando o todo como props
        dispatch({ type: "COMPLETE", id: todo.id });                    //Ação dispatch
    };

    return (
        <>
        {todos.map((todo) => (
            <div key={todo.id}>
            <label>
                <input
                type="checkbox"
                checked={todo.complete}                                 //Muda o status a propriedade complete do todo
                onChange={() => handleComplete(todo)}                   //Quando tiver uma mudança ma checkbox, chama a função handleComplete
                />
                {todo.title}
            </label>
            </div>
        ))}
        </>
    );
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Todos />);


Essa é apenas a lógica para acompanhar o status complete dos todos. Toda a lógica de adicionar, deletar, e se está completo ou não pode ser contida pelo useReducer, bastando adicionar mais ações.




=====================================================================================================
========================================= React useCallback Hook ====================================
=====================================================================================================

O hook useCallback retorna uma função de ccallback memoizada. Pense em memoização como a alocação de um valor em cache para que o mesmo não precise ser recalculado.
Isso nos permite isolar funções de recursos intensivos para que as mesmas não sejam executadas toda vez que houver uma renderização.
O useCallback só é executado quando uma de suas dependências for atualizada, podendo assim aumentar a performance. 

Os hooks useCallback e useMemo são similares. A principal diferença é que o hook useMemo retorna um VALOR memoizado enquanto o useCallback retorna uma FUNÇÃO memoizada.



////////// Problem //////////
Uma razão para usar o useCallback é para prevenir que um componente seja renderizado novamente a não ser que seu props tenha sido alterado.
No exemplo abaixo, você pode até pensar que o componente Todos não vai ser renderizado novamente a não ser que o todos seja modificado.

* index.js:

    import { useState } from "react";
    import ReactDOM from "react-dom/client";
    import Todos from "./Todos";

    const App = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = () => {
        setCount((c) => c + 1);
    };
    const addTodo = () => {
        setTodos((t) => [...t, "New Todo"]);
    };

    return (
        <>
        <Todos todos={todos} addTodo={addTodo} />
        <hr />
        <div>
            Count: {count}
            <button onClick={increment}>+</button>
        </div>
        </>
    );
    };

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);



* Todos.js: 

    import { memo } from "react";

    const Todos = ({ todos, addTodo }) => {
    console.log("child render");
    return (
        <>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
            return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
        </>
    );
    };

    export default memo(Todos);

Ao executarmos o exemplo acima, podemos notar que o componente Todos é renderizado novamente mesmo quando o todos não é modificado. Isso acontece por conta de algo chamado "referencial equality ou igualdade referencial". Sempre que um componente for renderizado novamente, sua função é recriada. Por conta disso, a função addTodo é modificada.



////////// Solution //////////
Para resolver esse problema, nós podemos usar o hook useCallback para impedir que a função seja recriada a não ser que seja necessário:

* index.js:

    import { useState, useCallback } from "react";
    import ReactDOM from "react-dom/client";
    import Todos from "./Todos";

    const App = () => {
        const [count, setCount] = useState(0);
        const [todos, setTodos] = useState([]);

        const increment = () => {
            setCount((c) => c + 1);
    };

    const addTodo = useCallback(() => {
            setTodos((t) => [...t, "New Todo"]);
        }, [todos]);

        return (
            <>
                <Todos todos={todos} addTodo={addTodo} />
                <hr />
                <div>
                    Count: {count}
                    <button onClick={increment}>+</button>
                </div>
            </>
        );
    };

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);


* Todos.js:

    import { memo } from "react";

    const Todos = ({ todos, addTodo }) => {
    console.log("child render");
    return (
        <>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
            return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
        </>
    );
    };

    export default memo(Todos);

Agora o componente Todos só irá ser renderizado novamente quando o state todos for modificado.




=====================================================================================================
=========================================== React useMemo Hook ======================================
=====================================================================================================

O hook useMemo retorna um valor memoizado. Pense em memoização como a alocação de um valor em cache para que o mesmo não precise ser recalculado.
Esse hook só é executado quando uma de suas dependências é modificada, podendo assim melhorar a performance.
Como dito anteriormente o useMemo e o useCallback são muito parecidos. A única diferença entre eles é que equanto o useMemo retorna um VALOR memoizado, o useCallback retorna uma FUNÇÃO memoizada.



////////// Performance //////////
O hook useMemo pode ser usado para previnir que funções custosas (para a performance) e de recursos intensivos sejam executadas desnecessariamente.
No exemplo abaiaxo temos uma função custosa, que é executada a cada renderização. Quando mudar o count ou adicionar um todo, você notará um delay na execução:

import { useState } from "react";
import ReactDOM from "react-dom/client";

    const App = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    const calculation = expensiveCalculation(count);

    const increment = () => {
        setCount((c) => c + 1);
    };
    const addTodo = () => {
        setTodos((t) => [...t, "New Todo"]);
    };

    return (
        <div>
            <div>
                <h2>My Todos</h2>
                    {todos.map((todo, index) => {
                        return <p key={index}>{todo}</p>;
                    })}
                <button onClick={addTodo}>Add Todo</button>
            </div>
            <hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
                <h2>Expensive Calculation</h2>
                {calculation}
            </div>
        </div>
    );
    };

    const expensiveCalculation = (num) => {
        console.log("Calculating...");
        for (let i = 0; i < 1000000000; i++) {
            num += 1;
        }
        return num;
    };

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);

Por conta  da função expensiveCalculation ser uma função muito pesada, a cada render da página ela é executada e por conta disso gera um delay em cada renderização.



////////// Use useMemo //////////
Para resolver esse problema de performance, nós podemos usar o hook useMemo para memoizar a função expensiveCalculation, fazendo com que a função só seja executada quando necessário. Podemos envolver a função expensiveCalculation com o useMemo.
O hook useMemo aceita ainda um segundo parâmetro para declarar as dependências. Nesse caso a função custosa só vai ser executada quando suas dependências forem modificadas.
No exemplo abaixo a função expensiveCalculation só será executada quando o valor de count for modificado e não quando um todo for adicionado.

    import { useState, useMemo } from "react";
    import ReactDOM from "react-dom/client";

    const App = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    const calculation = useMemo(() => expensiveCalculation(count), [count]);                //hook useMemo

    const increment = () => {
        setCount((c) => c + 1);
    };
    const addTodo = () => {
        setTodos((t) => [...t, "New Todo"]);
    };

    return (
        <div>
            <div>
                <h2>My Todos</h2>
                {todos.map((todo, index) => {
                    return <p key={index}>{todo}</p>;
                })}
                <button onClick={addTodo}>Add Todo</button>
            </div>
            <hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
                <h2>Expensive Calculation</h2>
                {calculation}
            </div>
        </div>
    );
    };

    const expensiveCalculation = (num) => {
        console.log("Calculating...");
        for (let i = 0; i < 1000000000; i++) {
            num += 1;
        }
        return num;
    };

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);




=====================================================================================================
=========================================== React Custom Hooks ======================================
=====================================================================================================

Hooks são funções que podem ser reutilizadas. Quando você tem um componente lógico que precisa ser usado por múltiplos componentes, podemos extrair essa lógica utilizando um hook personalizado.
Os hooks personalizados iniciam usando "use", como o useFetch, por exemplo.



////////// Build a Hook //////////
No exemplo a seguir, nós estaremos buscando um dado em nosso component Home e o exibindo. Usaremos o serviço JSONPlaceholder para buscar por dados fake. Esse serviços é ótimo para testar aplicações quando não se tem dados a extrair.
Use o JSONPlaceholder para buscar is itens todo falsos e exibir os títulos na tela:

    import { useState, useEffect } from "react";
    import ReactDOM from "react-dom/client";

    const Home = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);

    return (
        <>
        {data &&
            data.map((item) => {
            return <p key={item.id}>{item.title}</p>;
            })}
        </>
    );
    };

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Home />);

A lógica de busca (fetch) pode ser necessária para outros componentes também, portanto nós iremos extrair isso para um hook personalizado e com isso outros componentes podem usar dessa mesma lógica:

* useFetch.js:

    import { useState, useEffect } from "react";

    const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data));
    }, [url]);

    return [data];
    };

    export default useFetch;

    
* index.js:

    import ReactDOM from "react-dom/client";
    import useFetch from "./useFetch";

    const Home = () => {
        const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

        return (
            <>
                {data &&
                data.map((item) => {
                    return <p key={item.id}>{item.title}</p>;
                })}
            </>
        );
    };

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Home />);


Foi criado um novo arquivo chamado de useFetch.js contendo uma função chamada useFetch que contém a lógica necessária para buscar os dados.
Removemos a URL escrita da função e colocamos uma variável url que pode ser passada para o hook personalizado.
Por último, retornamos os dados do nosso Hook.
No arquivo index.js, nós importamos nosso hook useFetch e o inicializamos como qualquer outro hook, e nesse momento passamos a url na qual queremos que seja feita a busca dos dados.
Agora podemos usar essa lógica de busca para qualquer componente da aplicação através de um hook personalizado.


































*/