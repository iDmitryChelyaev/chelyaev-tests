export const timeout =(ms: number): Promise<void> =>
  new Promise((resolve): any => setTimeout(resolve, ms))