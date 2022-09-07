import request from 'superagent';

// const userSever = '/user'

export function loginUser (user) {
    return request.post('/login')
        .send({
            username: user.username,
            password: user.passowrd
        })
}