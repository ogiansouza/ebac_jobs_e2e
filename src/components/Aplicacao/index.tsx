import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './Aplicacao.module.css'

type Vaga = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
  id: number
}

const Vaga = () => {
  const [vaga, setVaga] = useState<Vaga>()
  const params = useParams()

  useEffect(() => {
    if (params.id) {
      fetch(`https://fake-api-tau.vercel.app/api/vagas/${params.id}`)
        .then((res) => res.json())
        .then((res) => {
          setVaga(res)
        })
    }
  }, [params])

  return (
    <div className={styles.aplicacao}>
      <h2>Candidate-se para a vaga {vaga?.titulo}</h2>
      <form>
        <div className={[styles.linha, styles.nomeEmail].join(' ')}>
          <input
            required
            type="text"
            placeholder="Nome completo"
            name="nome-completo"
          />
          <input required type="email" placeholder="E-mail" name="email" />
        </div>
        <div className={[styles.linha, styles.contato].join(' ')}>
          <input required type="tel" placeholder="Telefone" name="telefone" />
          <input
            required
            type="text"
            placeholder="Endereço completo"
            name="endereco"
          />
        </div>
        <div className={[styles.linha, styles.setup].join(' ')}>
          <div>
            <p>Setup favorito:</p>
            <input
              defaultChecked
              type="radio"
              name="setup-favorito"
              id="windows"
              value="windows"
            />{' '}
            <label htmlFor="windows">Windows</label>
            <input
              type="radio"
              name="setup-favorito"
              id="linux"
              value="linux"
            />{' '}
            <label htmlFor="linux">Linux</label>
            <input
              type="radio"
              name="setup-favorito"
              id="mac"
              value="mac"
            />{' '}
            <label htmlFor="mac">Mac</label>
          </div>
          <select name="escolaridade" required>
            <option value="">Escolaridade</option>
            <option value="medio-completo">Ensino médio completo</option>
            <option value="bacharelado">Bacharelado</option>
            <option value="tecnologo">Técnologo</option>
            <option value="cursando-superior">Cursando ensino superior</option>
            <option value="pos-graduado">Pós-graduado</option>
            <option value="outros">Outros</option>
          </select>
        </div>
        <button className={styles.button} type="submit">
          Enviar candidatura
        </button>
      </form>
    </div>
  )
}

export default Vaga
