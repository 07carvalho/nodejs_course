class Pokemon {
    // _hp = 0;
    // _attack = 0;

    constructor(hp=0, attack=0) {
        this._hp = hp;
        this._attack = attack;
    }

    attackReceive(value) {
        this._hp = this._hp - value;
    }

    isDead() {
        return this._hp <= 0;
    }
}

module.exports = {
    Pokemon
}