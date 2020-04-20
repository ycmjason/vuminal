type TagRendererOptions = { children: string[] };

type TagRenderer<Props extends Record<string, any>> = (props: Props, opts: TagRendererOptions) => string;

export default <Props>(tagRenderer: TagRenderer<Props>) => tagRenderer;
