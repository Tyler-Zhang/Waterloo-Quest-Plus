export const colors = [
  'darkRed',
  'red',
  'orange',
  'yellow',
  'lightGreen',
  'green'
]

export interface CalculateColorOptions {
  inverted?: boolean
}

export function calculateColor (val: number, max: number, {
  inverted = false
}: CalculateColorOptions = {}) {

  if (inverted) {
    val = max - val;
  }

  if (val <= 1.5) {
    return colors[0];
  } else if (val <= 2) {
    return colors[1];
  } else if (val <= 3) {
    return colors[2];
  } else if (val <= 3.8) {
    return colors[3];
  } else if (val <= 4.4) {
    return colors[4];
  } else {
    return colors[5];
  }
}