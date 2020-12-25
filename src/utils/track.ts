import { doSendMobileEvent } from '@services/kasbah'
import { getDateIso } from './fp/functions/getDateIso'
import { getOrigin } from './getOrigin'
import { getChannel } from './getChannel'
import { getLocalUUID } from './uuid'
import { isDesktop } from './getOs'

export interface TrackerMetaData {
  key?: string
  type: string
  value: string
}

enum EventsTrackBase {
  'Abriu o card',
  'Clicou em entendi na pagina final',
  'Clicou em sala VIP em aeroportos',
  'Clicou em seguro viagem',
  'Clicou no botao ir para parceiro',
  'Conheca o Cartao Neon',
  'Clicou no slider 1',
  'Clicou no slider 2',
  'Clicou ver lojas parceiras',
  'Clique em ainda tenho duvidas',
  'Clique em quero pedir o cartao',
  'Voltou de dados pessoais para detalhamento',
  'Voltou de endereco para dados pessoais',
  'Voltou de vencimento para endereco',
  'Voltou do loader para vencimento',
  'Voltou de endereço para dados pessoais',
  'Clicou em ver todos os beneficios',
  'Clicou em ver regulamento 70 de volta',
  'Clicou em saiba como no desconto da anuidade',
  'Clicou conheca opcoes em pontos',
  'Clicou em entenda como funciona em ganhe mais pontos',
  'Clicou em saiba como aproveitar no wifi',
  'Clicou em conheca todas as lojas em parceiros bv',
  'Clicou em veja todos os detalhes na assistencia automóvel',
  'Clicou em entenda como funciona na assistencia residencial',
  'Clicou em conheça os benefícios da bandeira em elo',
  'Simulou BV',
  'Clicou em quero pedir o cartão',
  'Clicou em quero investir',
  'Qual o valor mínimo para começar a investir na Órama?',
  'Quais são as taxas cobradas pela Órama?',
  'O FGC está disponível para quais produtos de investimento?',
  'Como funciona a liquidez e o tempo de resgate de cada produto?',
  'Como funciona a tributação e como o imposto de Renda afeta o rendimento?',
  'Qual o significado de cada índice? Como cada um afeta os investimentos?',
  'Qual a diferença entre Renda Fica e Renda Variável?',
  'O que são ações? Quais ações a Órama e o Guiabolso me recomendam investir?',
  'O que é Tesouro Direto?',
  'O que são debêntures?',
  'Qual a diferença entre CDB, CDI e SELIC?',
  'Qual a diferença do LCI para o LCA?',
  'Qual a diferença entre Fundos de Investimento e Fundos Imobiliários?',
  'Clicou no FAQ',
  'Enviou proposta',
  'Clicou no Whatsapp',
  'Terminou de carregar a esteira',
  'Iniciar cadastro',
  'Clicou abrir simulador',
  'Clicou editar dados simulador',
  'Front - 01.0 - Carregou - LP',
  'Front - 01.1 - Clicou em (LP) Botão - Simular um plano',
  'Front - 01.2 - Clicou em (LP) Botão - Quero simular um plano',
  'Front - 01.9 - Clicou em (LP) Botão - FAQ contratar',
  'Front - 01.10 - Clicou em (LP) Botão - FAQ garantias',
  'Front - 01.11 - Clicou em (LP) Botão - FAQ carência',
  'Front - 01.12 - Clicou em (LP) Botão - FAQ caro',
  'Front - 01.13 - Clicou em (LP) Botão - FAQ uso',
  'Front - 02.0 - Carregou - Calculadora',
  'Front - 02.1 - Clicou em (Calculadora) Botão - Renda mensal',
  'Front - 02.2 - Clicou em (Calculadora) Botão - Data nascimento',
  'Front - 02.3 - Clicou em (Calculadora) Botão - Dependentes',
  'Front - 02.4 - Clicou em (Calculadora) Botão - Plano saúde',
  'Front - 02.5 - Clicou em (Calculadora) Botão - Continuar',
  'Front - 03.0 - Carregou - Cotação',
  'Front - 03.1 - Clicou em (Cotação) Botão - Editar',
  'Front - 03.3 - Clicou em (Cotação) Botão - Expandir dados simulador',
  'Front - 07.0 - Carregou - Detalhes cadastrais',
  'Front - 07.1 - Clicou em (Detalhes cadastrais) Botão - Continuar',
  'Front - 08.0 - Carregou - Endereço',
  'Front - 08.1 - Clicou em (Endereço) Botão - Continuar',
  'Front - 09.0 - Carregou - Beneficiários',
  'Front - 09.1 - Clicou em (Beneficiários) Botão - Cadastrar agora',
  'Front - 09.2 - Clicou em (Beneficiários) Botão - Cadastrar depois',
  'Front - 10.0 - Carregou - Beneficiários parentesco',
  'Front - 10.1 - Clicou em (Beneficiários parentesco) Botão - Continuar',
  'Front - 11.0 - Carregou - Beneficiários porcentagens',
  'Front - 11.1 - Clicou em (Beneficiários porcentagens) Botão - Continuar',
  'Front - 12.0 - Carregou - Pagamento',
  'Front - 12.1 - Clicou em (Pagamento) Botão - Pagar com boleto',
  'Front - 13.0 - Carregou - Assinatura',
  'Front - 13.1 - Clicou em (Assinatura) Botão - Enviar proposta',
  'Front - 14.0 - Carregou - Proposta',
  'Front - 15.0 - Carregou - Proposta enviada',
  'Front - 15.1 - Clicou em (Proposta enviada) Botão - Voltar para finanças',
}

export type EventsTrack = keyof typeof EventsTrackBase

export const track = (
  nameEvent: EventsTrack,
  metaData: TrackerMetaData[] = [],
  prefix = '',
) => {
  const isSite = isDesktop
  const sendNameEvent = `NP - ${getOrigin().toUpperCase()}${
    isSite ? ' - SITE' : ''
  } - ${prefix && `${prefix} - `}${nameEvent}`

  if (__DEV__) {
    console.warn(sendNameEvent)

    return
  }

  const uuid = getLocalUUID()
  ;(window as any).dataLayer.push({
    event: sendNameEvent,
    uuid,
    Parceiro: getOrigin().toUpperCase(),
  })

  doSendMobileEvent({
    name: sendNameEvent,
    createdAt: getDateIso(),
    properties: [
      ...metaData,
      {
        key: 'channel',
        type: 'string',
        value: getChannel(),
      },
    ],
  })
}
