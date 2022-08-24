class Auth {
    login = () => {
        localStorage.setItem('token', '1')
    }
    isLogin = () => {
        return localStorage.getItem('token') ? true : false
    }
    register = () => {
        
    }
    logout = () => {
        localStorage.removeItem('token');
    }
}

export default new Auth()