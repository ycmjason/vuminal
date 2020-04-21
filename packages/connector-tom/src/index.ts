import { TomNode, TomElement } from '@vuminal/tom';
import { UIConnector } from 'vuminal';

import { nodeOps } from './nodeOps';
import { TERMINAL, startDrawing, stopDrawing } from './TERMINAL';

const tomConnector: UIConnector<TomNode, TomElement> = {
  ROOT: TERMINAL,
  nodeOps,
  startDrawing,
  stopDrawing,
};

export default tomConnector;
