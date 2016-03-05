import MyRandom from './my-random';

class App {
    constructor() {
        this.random = new MyRandom();
    }

    get(items = 2) {
        let total = 0;
        for( let i = 0; i < items; i++) {
            total += this.random.get();
        }

        return total;
    }
}

export default App;
