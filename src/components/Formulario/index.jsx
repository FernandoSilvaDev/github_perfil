import { useState, useEffect } from "react"

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect (() => {
        console.log ("o componente inicio");

        return () => {
            console.log ("o componente finalizou")
        }
    }, []);

    useEffect(() =>{
        console.log ("o estado nome mudou");
    }, [nome]);

    const alteraNome = (evento) => {
        setNome(estadoAnterior => {
            return evento.target.value
        })
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media >=7) {
            return (
            <p>Olá {nome}, você foi aprovado</p>
            )
        } else {
            return (
                <p>Olá {nome}, infelizmente você foi reprovado</p>
            )
        }
    }
    return (
        <form>
            <ul>
                {["Canada", 2, "Estados Unidos", 4, "Yamaha"].map(item => <li key={item}>{item}</li>)}
            </ul>
            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota matéria A" onChange = {({target}) => setMateriaA(parseInt(target.value))} /> {/* Exemplo de desestruturação */}
            <input type="number" placeholder="Nota matéria B" onChange = {evento => setMateriaB(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota matéria C" onChange = {evento => setMateriaC(parseInt(evento.target.value))} />
            {renderizaResultado()}
        </form>
    )
}




export default Formulario