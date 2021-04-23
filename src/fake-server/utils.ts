export function makeIdGenerator() {
  let lastId = 0;

  return (() => () => {
    lastId += 1;

    return lastId;
  })();
}

export function delayResponse<T>(
  input: Promise<T> | (() => Promise<T>),
  time = 500
): Promise<T> {
  return new Promise<T>((resolve) => {
    setTimeout(resolve, time);
  }).then(() => (input instanceof Promise ? input : input()));
}

export function error<T>(message: string): Promise<T> {
  return Promise.reject<T>(new Error(message));
}

export function clone(data: any): any {
  return JSON.parse(JSON.stringify(data));
}

export function nameToSlug(name: string): string {
  if (name) {
    return name
      ?.toLowerCase()
      .replace(/[^a-z0-9]/, '-')
      .replace(/-+/, '-');
  }

  return;
}
