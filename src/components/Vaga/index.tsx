import { Link } from 'react-router-dom'
import styles from './Vaga.module.css'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
  id: number
}

const Vaga = (props: Props) => (
  <div className={styles.vaga}>
    <h3 className={styles.vagaTitulo}>{props.titulo}</h3>
    <ul>
      <li>Localizacao: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratacao: {props.modalidade}</li>
      <li>
        Salário: {props.salarioMin} - {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </ul>
    <Link className={styles.vagaLink} to={`/vagas/${props.id}`}>
      Ver detalhes e candidatar-se
    </Link>
  </div>
)

export default Vaga
