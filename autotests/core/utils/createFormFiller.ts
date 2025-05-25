import { Locator } from '@playwright/test';

async function forEachSeries<T>(
  items: T[],
  callback: (item: T) => Promise<void>,
): Promise<void> {
  for (const item of items) {
    await callback(item);
  }
}

type FormFiller<T> = (
  values?: Partial<Record<keyof T, string>>,
) => Promise<void>;
type FormFillerCreator = <T extends Record<string, [Locator, string]>>(
  fields: T,
) => FormFiller<T>;
type FormFillerFabric = (options: {
  method: 'type' | 'fill';
}) => FormFillerCreator;

const formFillerFabric: FormFillerFabric =
  (options) => (fields) => async (values) => {
    await forEachSeries(
      Object.entries(fields) as Array<[keyof typeof fields, [Locator, string]]>,
      async ([inputName, [locator, defaultValue]]) => {
        const value = values?.[inputName] ?? defaultValue;

        if (options.method === 'type') {
          await locator.type(value, { delay: 10 });
        } else {
          await locator.fill(value);
        }
      },
    );
  };

export const createFormFiller = formFillerFabric({ method: 'fill' });
export const createFormTyper = formFillerFabric({ method: 'type' });

