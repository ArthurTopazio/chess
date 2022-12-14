import { Сolors } from '../Colors';
import { Cell } from '../Cell';
import { Figure, FigureNames } from './Figure';
import blackLogo from '../../assets/black-rook.png';
import whiteLogo from '../../assets/white-rook.png';

export class Rook extends Figure {
  constructor(color: Сolors , cell: Cell) {
    super(color, cell);
    this.logo = color === Сolors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.ROOK;
}
}