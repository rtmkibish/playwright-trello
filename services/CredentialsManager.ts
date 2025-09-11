class CredentialsManager {
  /* eslint-disable @typescript-eslint/require-await */
  async getCredentialsFor<T>(name: string): Promise<T> {
    const stringifiedCredentials = process.env[name];
    if (!stringifiedCredentials) throw new Error(`No credentials for: ${name}`);
    const credentials = JSON.parse(stringifiedCredentials) as T;
    return credentials;
  }
  /* eslint-enable @typescript-eslint/require-await */
}

export const credentialsManager = new CredentialsManager();
