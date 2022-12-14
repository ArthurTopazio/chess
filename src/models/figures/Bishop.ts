import { Cell } from '../Cell';
import { Сolors } from '../Colors';
import { Figure, FigureNames } from './Figure';
import blackLogo from '../../assets/black-bishop.png';
import whiteLogo from '../../assets/white-bishop.png';

export class Bishop extends Figure {
  constructor(color: Сolors , cell: Cell) {
    super(color, cell);
    this.logo = color === Сolors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.BISHOP;
  }
}