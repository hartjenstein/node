const utils = require('./utils');

// behavior driven development BDD - prinzipal mocha was built on
it('it should add two numbers', () => {
    let res = utils.add(33, 11);
    if(res !== 44){
        throw new Error(`expected 44, but got ${res}.`);
    }
});

it('it should square a number', () => {
    let res = utils.square(2);
    if( res !== 4){
        throw new Error(`expected 4, but got ${res}`)
    }
});