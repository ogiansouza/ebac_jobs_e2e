import { useEffect, useState } from 'react'
import FormVagas from '../../components/FormVagas'

import Vaga from '../../components/Vaga'

import styles from './ListaVagas.module.css'

type Vaga = {
  id: number
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const ListaVagas = () => {
  const [vagas, setVagas] = useState<Vaga[]>([])
  const [filtro, setFiltro] = useState<string>('')

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/vagas')
      .then((res) => res.json())
      .then((res) => {
        setVagas(res)
      })
  }, [])

  const vagasFiltradas = vagas.filter(
    (x) => x.titulo.toLocaleLowerCase().search(filtro) >= 0
  )

  return (
    <div>
      <FormVagas aoPesquisar={(termo: string) => setFiltro(termo)} />
      <ul className={styles.vagas}>
        {vagasFiltradas.map((vag) => (
          <Vaga
            id={vag.id}
            key={vag.id}
            titulo={vag.titulo}
            localizacao={vag.localizacao}
            nivel={vag.nivel}
            modalidade={vag.modalidade}
            salarioMin={vag.salarioMin}
            salarioMax={vag.salarioMax}
            requisitos={vag.requisitos}
          />
        ))}
      </ul>
    </div>
  )
}

export default ListaVagas
