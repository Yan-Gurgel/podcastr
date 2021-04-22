type User = {
    name: String;
    anddress: {
        city: String;
        state: String;
    }
}

function create (user: User){
    return `Olá, ${user.name}, Cidade ${user.anddress.city} - ${user.anddress.state}`
}

const welcome = creatWelcome({
    
})