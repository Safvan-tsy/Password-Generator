const readline = require('readline-sync');

// Constants for password length bounds
const LENGTH_LOWER_BOUND = 8;
const LENGTH_UPPER_BOUND = 128;

// Character sets for each character type
const CHARACTER_TYPES = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numerical: '0123456789',
    special: '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~',
};

/**
 * Generates a random password based on user-specified length and character types.
 */
function generatePassword() {
    // Prompt the user for the password length and validate the input
    let passwordLength = 0;
    while (passwordLength < LENGTH_LOWER_BOUND || passwordLength > LENGTH_UPPER_BOUND) {
        passwordLength = Number(readline.question('Enter a password length (between 8 and 128 characters): '));
    }

    // Prompt the user for the character types to include and store the selections
    let characterTypes = [];
    const characterTypeKeys = Object.keys(CHARACTER_TYPES);
    for (const characterType of characterTypeKeys) {
        const includeCharacterType = readline.keyInYN(`Include ${characterType} characters? `);
        if (includeCharacterType) {
            characterTypes.push(characterType);
        }
    }

    // Generate the password by selecting random characters from the selected character sets
    let password = '';
    while (password.length < passwordLength) {
        const characterType = characterTypes[Math.floor(Math.random() * characterTypes.length)];
        const characterSet = CHARACTER_TYPES[characterType];
        password += characterSet[Math.floor(Math.random() * characterSet.length)];
    }

    // Output the generated password
    console.log(`Generated password: ${password}`);
}

// Generate a password when the application is run
generatePassword();
