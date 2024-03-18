export interface Quote {
  id: number;
  text: string;
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
