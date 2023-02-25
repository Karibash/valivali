export type Resolver<T> = (value: unknown) => T;

export const valivali = <T>(resolver: Resolver<T>, value: unknown): T => {
  return resolver(value);
};
