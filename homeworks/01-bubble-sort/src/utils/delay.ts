export const delay = (timeout: number) => new Promise<void>(res => setTimeout(res, timeout));
