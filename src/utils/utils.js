const checkForAuthToken = () => {
    const authToken = localStorage.getItem('SignedInToken');

    if (authToken) return true;
    return { path: '/signup' }
}