function Title(){
    return <title> Meu site</title>
}

function Titulo(){
    return <h1>Bem vindo ao meu site</h1>
}

function Paragrafo(){
    return <p> O tigre é o maior felino e na caça ele é implacável</p>
}

function Paragrafo2(props){
    console.log(props)
    return <p> O leão é o rei da selva e é conhecido por sua juba majestosa</p>
}

function Paragrafo3(){
    return <p> O guepardo é o animal terrestre mais rápido, capaz de atingir velocidades impressionantes</p>
}

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