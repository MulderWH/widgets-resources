// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the code between BEGIN USER CODE and END USER CODE
// Other code you write will be lost the next time you deploy the project.

/**
 * If the user is logged in, logs out the user and restarts the client.
 *
 * If the user is not logged in, the return value is false.
 *
 * @returns {Promise.<boolean>}
 */
export async function SignOut(): Promise<boolean> {
    // BEGIN USER CODE
    if (!mx.session.isGuest()) {
        mx.logout();
        return Promise.resolve(true);
    }

    return Promise.resolve(false);
    // END USER CODE
}
