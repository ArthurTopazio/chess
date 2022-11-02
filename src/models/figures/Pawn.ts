import { Сolors } from '../Colors';
import { Cell } from '../Cell';
import { Figure, FigureNames } from './Figure';
import blackLogo from '../../assets/black-pawn.png';
import whiteLogo from '../../assets/white-pawn.png';


export class Pawn extends Figure {
  constructor(color: Сolors , cell: Cell) {
    super(color, cell);
    this.logo = color === Сolors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.PAWN;
}
}