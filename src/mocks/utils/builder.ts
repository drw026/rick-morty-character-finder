const merge = require('deepmerge');

type TDeepPartial<T> = T extends object
  ? { [K in keyof T]?: TDeepPartial<T[K]> }
  : T;

export type TBuilder<O> = (attrs?: TDeepPartial<O>) => O;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const overwriteMerge = <T extends any>(
  destinationArray: T[],
  sourceArray: T[],
): T[] => sourceArray;

export const getBuilder =
  <O extends {}>(defaults: O): TBuilder<O> =>
    (attrs) =>
      merge(defaults, attrs || {}, { arrayMerge: overwriteMerge });
