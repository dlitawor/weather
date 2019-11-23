export const getEnvironmentVar: Function = (code: string): string | undefined =>
  process && process.env && process.env[code] ? process.env[code] : '';
