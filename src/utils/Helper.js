/**
 * Author: Ankit Jain
 * Project Name: Icicle App
 * Date: 02-March-2018
 */


import {AsyncStorage} from 'react-native';

// ------------------------------------------------Database related Helper
// options------------------------------------------------// List of methods
// which deals with async storage method to obtain data from database

/*Set auth0 logged status and token into async storage */
export async function setMemberTokenDetails(tokenDetails) {

    console.log("Aaya na: " + tokenDetails);
    try {
        await AsyncStorage.setItem('@MySuperStore:userLoggedIn', 'true');
    } catch (error) {
        // Error saving data
        return false;
    }

    try {
        await AsyncStorage.setItem('@MySuperStore:memberToken', JSON.stringify(tokenDetails));
        return true;
    } catch (error) {
        // Error saving data
        return false;
    }

}

/*Fetch member vehicle from async storage */
export async function getMemberTokenDetails() {
    let vehicle = {};

    try {
        const value = await AsyncStorage.getItem('@MySuperStore:memberToken');
        if (value !== null) {
            // We have data!!
            value = JSON.parse(value);
            console.log("lilian: " + JSON.stringify(value))
            return value["accessToken"];
        }
    } catch (error) {
        // Error retrieving data
        return false;
    }
}



// ------------------------------------------------Non database related Helper
// options------------------------------------------------// List of methods
// which deals without using async storage method to to resolve data



/*Check whether JSON is empty or not */
export function isEmpty(obj) {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) 
            return false;
        }
    
    return true;
}