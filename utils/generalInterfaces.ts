export interface Tip {
  id: number;
  text: string;
}

export interface Rank {
  id: number;
  iconPath: string;
  title: string;
  fromLevel: number;
  xpCount: number;
}

export interface Level {
  id: number;
  xpRequired: number;
  xpTotal: number;
}

export interface IResource {
  id: number;
  iconPath: string;
  title: string;
  difficulties: string;
  prices?: string[];
  obtainingMethod: string;
  applicationScope: string;
  maxAmount: string;
  isDependsOnDifficulty: boolean;
}

interface Direction {
  id: number;
  orientation: number;
  isPressed: boolean;
}

// Здесь 4 keyCodes и 4 directions: 87-1-вверх, 68-2-право, 83-3-низ, 65-4-лево

export interface Stratagem {
  id: number;
  name: string;
  image: string;
  keyCodes: number[];
  directions: Direction[];
}

export interface Enemy {
  id: number;
  iconPath: string;
  imagePath: string;
  dangerous: string;
  tactics: string;
  difficulties: string;
  title: string;
}

export interface CurrentEnemy extends Enemy {
  fractionType: number;
}

export interface Achievement {
  id: number;
  iconPath: string;
  title: string;
  description: string;
  accomplishmentWay: string;
}

export interface Booster {
  id: number;
  iconPath: string;
  title: string;
  effect: string;
  price: number;
}

export interface ResourceTableTitle {
  id: number;
  name: string;
}

interface Weapon {
  id: number;
  imagePath: string;
  name: string;
  description: string;
  price: number | string;
  damage: number;
}

export interface PrimaryOrSecondaryWeapon extends Weapon {
  magsCount: number;
  roundsPerMag: number;
  totalRounds: number;
  recoil: number;
  fireRate: number;
  totalDamage: number;
  dpm: number;
}

export interface Grenade extends Weapon {
  fuseTime: number;
  penetration: number;
  radius: number;
}
