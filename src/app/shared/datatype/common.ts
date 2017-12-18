import { ElementResist, ElementAdd, ElementPower } from './elements';
import { StateResist, StateOnHit } from './status';


export interface Equip extends Common {
  description: string;
  type: string;
  icon: number;
  price: number;
  hpAdd: number;
  mpAdd: number;
  atkAdd: number;
  defAdd: number;
  matAdd: number;
  mdfAdd: number;
  agiAdd: number;
  lukAdd: number;
  accuracyAdd?: number;
  criticalAdd?: number;
  evasionAdd?: number;
  magicEvasionAdd?: number;
  counterAdd?: number;
  reflectAdd?: number;
  magicReflectAdd?: number;
  // 춤사용시의 스테이터스 이상 발생율이 올라간다 - 접시

  // <ゴールド消費率 80%> 골드 소비율
  // 종족 특공은 미루자 (번호로 추출)
  // 확장 hp mp sp 재생율도 있으나 무시
  displaySpecialStat?: string;
}

// 공격시 속성 미구현

export interface Common {
  id: string;
  name: string;
  learningSkills?: string[];
  addSkill?: string[];
  addWeapon?: string[];
  addArmor?: string[];
  // 기본 능력 배율
  hp?: number;
  mp?: number;
  sp?: number;
  atk?: number;
  def?: number;
  mat?: number;
  mdf?: number;
  agi?: number;
  luk?: number;
  accuracy?: number;
  critical?: number;
  evasion?: number;
  magicEvasion?: number;
  counter?: number;
  magicCounter?: number;
  // 특수 능력
  hpRegen?: number;
  mpRegen?: number;
  spRegen?: number;
  spCharge?: number;
  mpCost?: number;
  spCost?: number;
  healRate?: number;
  itemUseRate?: number;
  stealRate?: number;
  reflect?: number;
  magicReflect?: number;
  expRate?: number;
  jobExpRate?: number;
  goldRate?: number;
  itemGetRate?: number;
  aggroRate?: number;
  defenceRate?: number;
  // 속성 내성
  elementResist?: ElementResist;
  // 속성 부여
  elementAdd?: ElementAdd;
  // 속성 강화
  elementPower?: ElementPower;
  // 스킬군 강화
  skillPower?: {
    id: string,
    power: number,
  }[];
  // 상태이상 내성
  stateResist?: StateResist;
  // 공격시 상태이상 ( TODO 아직 직업 및 종족에서 안 불러오니 참고!!)
  stateOnHit?: StateOnHit;
}

export const NOT_LEARN_ACTORS: number[] = [
  1, // 루카
];


/* 빠진 것 목록
  通常攻撃強化 일반 공격 강화 (무기군, 퍼센트)
  武器スキル倍率強化 무기 스킬 배율 강화 (무기군, 스킬군, 퍼센트)
  HPタイプ消費率 HP 소비율 (스킬군, 퍼센트)
  TP消費率 SP 소모율 (퍼센트)
  武器マスタリー 무기 마스터리 (무기군, 배율)
  通常攻撃強 바다 강화
  海地形超強化 바다 초 강화
  32로 시작하는 feature (온히트 상태이상) - 아직 직업 및 종족 및 액터에 적용 X
  34 0 2.0 (스큐라 공격횟수 2회 및 무기 공격횟수 2회)
  55 1 0.0 이도류
  바닥 피해율 (23으로 시작함)
*/
