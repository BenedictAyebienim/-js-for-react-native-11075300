// Function to create user profiles
function createUserProfiles(names, modifiedNames) {
    if (names.length !== modifiedNames.length) {
        throw new Error("The length of names and modifiedNames arrays must be the same");
    }

    return names.map((name, index) => {
        return {
            originalName: name,
            modifiedName: modifiedNames[index],
            id: index + 1
        };
    });
}
