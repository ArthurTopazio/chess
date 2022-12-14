import { Сolors } from '../Colors';
import { Cell } from '../Cell';
import { Figure, FigureNames } from './Figure';
import blackLogo from '../../assets/black-queen.png';
import whiteLogo from '../../assets/white-queen.png';


export class Queen extends Figure {
  constructor(color: Сolors , cell: Cell) {
    super(color, cell);
    this.logo = color === Сolors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.QUEEN;
}
}