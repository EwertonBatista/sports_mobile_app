import type { ImageSourcePropType } from 'react-native';

export type MatchStatus = 'confirmado' | 'aberto' | 'lotado';

export type MatchItem = {
  id: string;
  title: string;
  dateLabel: string;
  slotsTaken: number;
  slotsTotal: number;
  status: MatchStatus;
  description: string;
  image: ImageSourcePropType;
};

export const MATCHES: MatchItem[] = [
  {
    id: 'arena-1',
    title: 'Quadra do Parque Ibirapuera',
    dateLabel: 'SÁB, 25 MAI - 19:00',
    slotsTaken: 10,
    slotsTotal: 12,
    status: 'confirmado',
    description:
      'Partida confirmada para sábado. Chegue com 15 minutos de antecedência. Leve colete e tênis adequado para quadra.',
    image: require('../../assets/images/bolabg.jpg'),
  },
  {
    id: 'arena-2',
    title: 'Arena de Vôlei Copacabana',
    dateLabel: 'DOM, 26 MAI - 10:00',
    slotsTaken: 5,
    slotsTotal: 12,
    status: 'aberto',
    description:
      'Partida aberta para inscrição. Confirme sua presença e confira as regras do local. Recomenda-se protetor solar.',
    image: require('../../assets/images/react-logo.png'),
  },
  {
    id: 'arena-3',
    title: 'Ginásio Municipal de Esportes',
    dateLabel: 'TER, 28 MAI - 20:30',
    slotsTaken: 12,
    slotsTotal: 12,
    status: 'lotado',
    description:
      'Partida com vagas esgotadas. Você pode acompanhar os detalhes e entrar na lista de espera caso alguém desista.',
    image: require('../../assets/images/partial-react-logo.png'),
  },
];

export function getMatchById(id: string): MatchItem | undefined {
  return MATCHES.find((match) => match.id === id);
}
