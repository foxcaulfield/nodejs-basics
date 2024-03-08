class SuperHero {
    #_name;
    get name() {
        return this.#_name;
    }
    set name(value) {
        this.#_name = value;
    }
    constructor(name) {
        this.#_name = name;
    }
}

module.exports = new SuperHero("Batman");