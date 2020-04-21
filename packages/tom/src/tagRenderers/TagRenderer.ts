type TagRendererOptions = {
  children: string[];
};

type TagRenderer<Props extends Record<string, any>> = (props: Props, opts: TagRendererOptions) => string;

export const createTagRenderer = <Props>(tagRenderer: TagRenderer<Props>) => tagRenderer;
