import { useEffect, useState } from "react";

import styles from './ReposList.module.css'

const ReposList = ({nomeUsuario}) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        if (!nomeUsuario) {
            setEstaCarregando(false);
            return;
        }
        setEstaCarregando(true);
        setErro(null);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => {
            if(!res.ok) {
                throw new Error ("Falha ao buscar repositórios. Verifique o nome de usuário.")
            }
            return res.json();
        })
        .then(resJson => {
            setTimeout(() => {
                setEstaCarregando(false);
                setRepos (resJson);
            }, 2000);
        })
        .catch(error=> {
            setErro(error.message);
            setEstaCarregando(false);
        })
    }, [nomeUsuario]); //Executar quando ouvermudança no nome usuario

    return (
        <div className="container">
            {/* ? e : seria if else */}
            {estaCarregando && ( 
                <h1>Carregando...</h1>
            )}
                {erro && <p className={styles.error}>{erro}</p>}
            {!estaCarregando && !erro && repos.length === 0 && (
                <p className={styles.noRepos}>Nenhum repositório encontrado.</p>
            )}
                <ul className={styles.list}>
                    {/* {repos.map(repositorio => ( */}
                    {repos.map(({id, name, language, html_url}) => (
                        <li className={styles.listItem} key={id} >
                            <div className={styles.itemName}>
                                <b>Nome</b> {name}
                            </div>
                            <div className={styles.itemLanguage}>
                                <b>Linguagem</b> {language}
                            </div>
                            <a className={styles.itemLink} target="_blank" href={html_url}>Visitar no GitHub</a>
                        </li>
                    ))}
                </ul>
            
        </ div>
    )
};

export default ReposList;