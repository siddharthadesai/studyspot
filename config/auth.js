// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '1660767280865053',
        'clientSecret'  : 'afe80d9cdcf91cb14ccc3d0ea6cd9eaf',
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
    },

    'googleAuth' : {
        'clientID'      : '65843487778-j2e92sl7moec5jobjd6gkjq0vcsgf1gd.apps.googleusercontent.com',
        'clientSecret'  : 'M7Xivo60UAdWXW47H25gzB9E',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};
