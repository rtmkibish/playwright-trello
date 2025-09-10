class CredentialsManager {

    async getCredentialsFor<T>(name: string): Promise<T> {
        const stringifiedCredentials = process.env[name]!;
        const credentials:T = JSON.parse(stringifiedCredentials);
        return credentials;
    }
}

export const credentialsManager = new CredentialsManager();
