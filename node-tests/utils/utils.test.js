const utils = require('./utils');
const expect = require('expect');
// it() - string inside it defines expected behavoir - behavior driven development BDD - prinzipal mocha was built on
// describe groups tests together under a topic
describe('utils',() => {

    describe('#add', () => {
        it('it should add two numbers', () => {
        let res = utils.add(33, 11);
        expect(res).toBe(44).toBeA('number');   
        });
        // mocha doesnt no that its an ansyncronous task - thats why the assertions never fire
        // we have to pass in an arguement (done) into to the callback to let it know that its async
        // now mocha will run until done() is called at the end.
        it('should async add two numbers', (done) => {
            utils.asyncAdd(33, 11, (sum) => {
            expect(sum).toBe(44).toBeA('number');
            done();
            });
        });
    });
        

                        
    
    
    

    it('it should square a number', () => {
        let res = utils.square(2);
        expect(res).toBe(4).toBeA('number');
    });

    it('it should async square a number', (done) => {
        utils.asyncSquare(2,(res) => {
            expect(res).toBe(4).toBeA('number');
        done();
        });
    });


    it('it should set firstName and lastName', () => {
        let user = {location: 'Berlin', age: '37'  }
        let res = utils.setName(user,'nicolas hartjenstein');
        expect(res).toInclude({
            firstName: 'nicolas',
            lastName: 'hartjenstein'  
        });
    });
});