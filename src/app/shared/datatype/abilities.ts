
export interface Ability {
  id: string;
  name: string;
  description: string;
  type: string;
  icon: number;
  size: number;
}

export const AbilityType = {
  '1': '전투 어빌리티',
  '2': '직업 어빌리티',
  '3': '마법 어빌리티',
  '4': '방어 어빌리티',
  '5': '특수 어빌리티',
};
