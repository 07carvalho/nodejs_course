const {Pokemon} = require('../Pokemon')

describe("Test Pokemon", function() {
    let pokemon;

    beforeEach(function() {
        pokemon = new Pokemon(100, 60);
    });

    it("Test is dead", function() {
        pokemon.attackReceive(100);
        expect(pokemon.isDead()).toBeTruthy();
    });
})