const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { senha } = request.body;

        console.log(senha);

        const usuario = await connection('usuario')
        .where('senha', senha)
        .select('login')
        .first();

        if(!usuario) {
            return response.status(400).json({ error: 'Não há um usuário com esse login e (ou) senha!'});
        }
        
        return response.json(usuario);
    }
}