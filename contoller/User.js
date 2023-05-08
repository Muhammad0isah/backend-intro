

const register = (req, res) => {
    res.json({
        mesage: 'register route'
    })
}

const login = (req, res) => {
    res.json({
        mesage: 'login route'
    })
}

const logout = (req, res) => {
    res.json({
        mesage: 'logout route'
    })
}



module.exports = [
    register,
    login,
    logout
]