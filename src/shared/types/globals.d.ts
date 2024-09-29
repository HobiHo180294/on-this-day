export interface Children {
  children: ReactNode;
}

export interface LayoutProps<
  ParamsConfig extends Record<string, unknown> | undefined = undefined,
> extends Children {
  params?: ParamsConfig;
}

export interface Message {
  message: string;
}

export type ValuesOfObject<EntityObject> = EntityObject[keyof EntityObject];

export type Nullable<Value> = Value | null;
