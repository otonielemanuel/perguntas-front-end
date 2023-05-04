import * as styles from './styles'

export default function index() {
  return (
    <styles.Main>
      <styles.titleDiv>
        <styles.Title>120 perguntas front-end</styles.Title>
      </styles.titleDiv>
      <styles.Texts>
        <styles.Paragraph>Olá, nerd! Bem-vindo ao nosso FAQ de front-end, onde são respondidas 120 perguntas relacionadas ao front-end.</styles.Paragraph>
        <styles.Paragraph>Este site foi projetado para fornecer respostas diretas e concisas às perguntas que você pode encontrar em seu trabalho diário de desenvolvimento front-end. Desde as perguntas mais básicas sobre HTML e CSS até as mais complexas.</styles.Paragraph>
        <styles.Paragraph>As perguntas formam retiradas do github do <a href="" className='gitlink' title='github link'>Ruben Paschoarelli</a>. Essas Perguntas têm o intuito de ser uma base para entrevistas e candidatos se nivelarem, em entrevistas de emprego.</styles.Paragraph>
        <styles.Paragraph>Então, se você é um desenvolvedor front-end que está procurando se aprimorar, nosso site FAQ é o recurso perfeito para você. </styles.Paragraph>
        <styles.Paragraph className='italic'>Essas perguntas não são necessariamente o fator decisivo da senioridade de cada candidato, porem, é sempre importante aprender.</styles.Paragraph>
      </styles.Texts>
    </styles.Main>
  )
}
