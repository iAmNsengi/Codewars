function getState(promise) {
    let initialState = {};
    return Promise.race([promise, initialState])
        .then(state => state == initialState ? 'pending' : 'fulfilled')
        .catch(() => 'rejected')

}