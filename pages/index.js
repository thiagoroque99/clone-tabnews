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
    return <p> O tigre é o maior felino e na caça ele é implacável e feroz</p>
}


// teste 1
// Função principal que compõe todos os componentes da página
function Index(){
    return (
        <div>
            <Title />
            <Titulo />
            <Paragrafo />
        </div>
    )
}


export default Index