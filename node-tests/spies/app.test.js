// ------ spies replace functions, that get called by other functions so we cann
// determine what the indirect output of the calling functions are
const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {
    //create spy function 
    var db = {
        saveUser: expect.createSpy()
    };
    // replacing db (in app.js) with db variable (object we created above)
    app.__set__('db', db);

    it('should call the spy directly', () => {
      var spy =  expect.createSpy();
      spy();
      expect(spy)  
    }); 

    it('Should call saveUser with user Object', () => {
        var email = 'hartjenstein@yahoo.de';
        var password = '123';
        
        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });
});