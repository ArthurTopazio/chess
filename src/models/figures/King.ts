import { Cell } from '../Cell';
import { Сolors } from '../Colors';
import { Figure, FigureNames } from './Figure';
import blackLogo from '../../assets/black-king.png';
import whiteLogo from '../../assets/white-king.png';


export class King extends Figure {
  constructor(color: Сolors , cell: Cell) {
    super(color, cell);
    this.logo = color === Сolors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.KING;
  }
}