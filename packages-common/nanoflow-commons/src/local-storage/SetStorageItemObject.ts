// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the code between BEGIN USER CODE and END USER CODE
// Other code you write will be lost the next time you deploy the project.

import { AsyncStorageStatic } from "@react-native-community/async-storage";
import { StorageValue } from "./StorageValue";

/**
 * Store a Mendix object in device storage, identified by a unique key. Can be accessed by the GetStorageItemObject action. Please note that users can clear the device storage.
 * @param {string} key - This field is required.
 * @param {MxObject} value - This field is required.
 * @returns {Promise.<void>}
 */
export async function SetStorageItemObject(key?: string, value?: mendix.lib.MxObject): Promise<void> {
    // BEGIN USER CODE

    if (!key) {
        return Promise.reject(new Error("Input parameter 'Key' is required"));
    }

    if (!value) {
        return Promise.reject(new Error("Input parameter 'Value' is required"));
    }

    const serializedObject = serializeMxObject(value);

    return setItem(key, JSON.stringify(serializedObject));

    function setItem(key: string, value: string): Promise<void> {
        if (navigator && navigator.product === "ReactNative") {
            const AsyncStorage: AsyncStorageStatic = require("@react-native-community/async-storage").default;
            return AsyncStorage.setItem(key, value);
        }

        if (window) {
            window.localStorage.setItem(key, value);
            return Promise.resolve();
        }

        return Promise.reject(new Error("No storage API available"));
    }

    function serializeMxObject(object: mendix.lib.MxObject): StorageValue {
        return object.getAttributes().reduce<StorageValue>(
            (accumulator, attributeName) => {
                accumulator[attributeName] = object.get(attributeName);
                return accumulator;
            },
            { guid: object.getGuid() }
        );
    }
    // END USER CODE
}
