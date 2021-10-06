module.exports = (contact) => {

    switch (true) {
        case !contact.email: {
            throw "Insira um email válido!";
        }
        case !contact.password: {
            throw "Insira uma senha válida!";
        }
        case !contact.name: {
            throw "Insira um nome válido!";
        }
        case
        !contact.age ||
        contact.age === 0 ||
        contact.age < 5 ||
        contact.age > 99: {
            throw "Insira uma idade válida!";
        }
        case
        !contact.weight ||
        contact.weight === 0 ||
        contact.weight < 1 ||
        contact.weight > 200: {
            throw "Insira um peso válido!";
        }
    }
    
};
