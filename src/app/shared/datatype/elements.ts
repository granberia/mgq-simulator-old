export interface ElementResist {
  physical?: number; // 물리
  pleasure?: number; // 쾌락
  fire?: number; // 화염
  ice?: number; // 얼음
  lightning?: number; // 번개
  wind?: number; // 바람
  earth?: number; // 흙
  water?: number; // 물
  holy?: number; // 신성
  dark?: number; // 어둠
  bio?: number; // 바이오
  sonic?: number; // 음파
  special?: number; // 자폭, 돈 던지기
}

export const ElementList = [
  'physical',
  'pleasure',
  'fire',
  'ice',
  'lightning',
  'wind',
  'earth',
  'water',
  'holy',
  'dark',
  'bio',
  'sonic',
  'special',
];

export const ElementListKor = [
  '물리',
  '쾌락',
  '화염',
  '얼음',
  '번개',
  '바람',
  '흙',
  '물',
  '신성',
  '어둠',
  '바이오',
  '음파',
  '자폭 / 돈 던지기',
];
