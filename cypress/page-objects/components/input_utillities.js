
export const testInputID = (text, possible = '1234567890') => {

    for (var i = 0; i < 6; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

export const shortInputID = (text, organization, possible = '1234567890') => {
    let randomPossible = '';

    for (var i = 0; i < 4; i++)
        randomPossible += possible.charAt(Math.floor(Math.random() * possible.length));

    return `${text}${randomPossible}${organization}`;
}
