export interface Children {
  children: ReactNode;
}

export interface LayoutProps<
  ParamsConfig extends Record<string, unknown> | undefined = undefined,
> extends Children {
  params?: ParamsConfig;
}
