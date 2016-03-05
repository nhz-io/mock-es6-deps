import {env, ENV, inject} from 'mocktail';
env(ENV.TESTING);

class MyRandomMock {
    constructor() {
        this.name = 'MyRandomMock';
    }

    get() {
        return 10;
    }
}

inject('MyRandom', MyRandomMock);