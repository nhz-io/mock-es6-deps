import chai from 'chai';
import App from '../src/app';
import './setup';

// Tell chai that we'll be using the "should" style assertions.
chai.should();

describe('App', () => {
    describe('#get', () => {
        let app;

        beforeEach(() => {
            app = new App();
        });

        it('returns a default number', () => {
            app.get().should.equal(20);
        });
    });
});