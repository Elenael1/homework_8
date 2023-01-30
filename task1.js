const my_biography = {
    name: "Elena",
    lastName: "Leptyuk",
    age: 17,
    stats: "IT student",
    zodiacSign: "Cancer",

    relax() {
        console.log('relax', "I'm resting")
    },

    progLanguage: [],
    learnProgLanguage(language_name) {
        return this.progLanguage.push(language_name);
    },
};

my_biography.relax();
my_biography.learnProgLanguage("JavaScript");