const crypto = require('crypto')
const connection = require('../database/connection');
const Request = require('request')


module.exports = {
    async index(request, response) {
        const { token } = request.body;
        
        try {
            await Request.post({ 
                url: "https://accounts.spotify.com/api/token",
                headers: {
                    "Authorization": "Basic M2YwMDI4NGNlNjUwNDc4NGFjNDQ1NDdlMzNkNTg5ZDk6MTBiNGM0NGRhNGY0NGRiOWEwMTkzYjM3NDA4YWU1Yzk=",
                },
                form: {
                    'grant_type': "client_credentials",
                    'code': token,
                    'redirect_uri': 'http://localhost:8080/#'
                }
            },
            (error, responsed, body) => {
                return response.json(JSON.parse(responsed.body))
            })
    
        } catch(e) {
            console.log(e)
        }

    }
}