export const signInAction = content => {
    // console.log('in signinaction', content);
    return ({
        type: 'signIn',
        payload: content,
    })
}