import Head from 'next/head';

// Função que define o título da aba do navegador e o favicon
function Title(){
    return (
        <Head>
            <title> Meu site</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

// Função que exibe o título principal da página
function Titulo(){
    return <h1>Bem vindo ao meu site</h1>
}

// Função que exibe um parágrafo sobre o tigre
function Paragrafo(){
    return <p> O tigre é o maior felino e na caça ele é implacável</p>
}

// Função que exibe um parágrafo sobre o leão (aceita props como parâmetro)
function Paragrafo2(props){
    console.log(props)
    return <p> O leão é o rei da selva e é conhecido por sua juba majestosa</p>
}

// Função que exibe um parágrafo sobre o guepardo
function Paragrafo3(){
    return <p> O guepardo é o animal terrestre mais rápido, capaz de atingir velocidades impressionantes</p>
}


// Função principal que compõe todos os componentes da página
function Home(){
    return (
        <div>
            <Title />
            <Titulo />
            <Paragrafo />
            <Paragrafo2 />
            <Paragrafo3 />
        </div>
    )
}


export default Home