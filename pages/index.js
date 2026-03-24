function Title(){
    return <title> Meu site</title>
}

function Titulo(){
    return <h1>Bem vindo ao meu site</h1>
}

function Paragrafo(){
    return <p> O tigre é o maior felino e na caça ele é implacável</p>
}

function Home(){
    return (
        <div>
            <Title />
            <Titulo />
            <Paragrafo />
        </div>
    )
}


export default Home