interface Box<X> {
  value: X;
  map: <Y>(fn: (x: X) => Y) => Box<Y>;
}

export const box = <X>(x: X): Box<X> => ({
  value: x,
  map: (fn) => box(fn(x)),
});
