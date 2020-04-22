import { Widgets } from 'blessed';
import { UIConnector } from 'vuminal';

import { nodeOps } from './nodeOps';
import { SCREEN, startDrawing, stopDrawing } from './SCREEN';

const tomConnector: UIConnector<Widgets.Node, Widgets.BlessedElement> = {
  ROOT: SCREEN as any,
  nodeOps,
  startDrawing,
  stopDrawing,
};

export default tomConnector;
