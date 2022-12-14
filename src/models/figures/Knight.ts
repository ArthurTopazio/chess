import { Cell } from '../Cell';
import { Сolors } from '../Colors';
import { Figure, FigureNames } from './Figure';
import blackLogo from '../../assets/black-knight.png';
import whiteLogo from '../../assets/white-knight.png';


export class Knight extends Figure {
  constructor(color: Сolors , cell: Cell) {
    super(color, cell);
    this.logo = color === Сolors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.KNIGHT;
}
}