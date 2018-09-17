console.log("actions");
export const updateUserAction = (user) => ({
    type: 'updateUser',
    payload: {
        user,
    }
})