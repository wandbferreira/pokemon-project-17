export function Confirmable(message = 'Tem certeza?') {
  return (_target: unknown, _methodName: string | symbol, descriptor: PropertyDescriptor) => {
    const method = descriptor.value;
    descriptor.value = function (...args: []) {
      if (confirm(message)) {
        method!.apply(this, args);
      }
    };
  };
}
