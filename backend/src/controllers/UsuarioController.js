const connection = require('../database/connection');

module.exports = {
    async index (request, response) {
        const usuario = await connection('usuario').select('*');
    
        return response.json(usuario);
    },

    async create(request, response) {
        const { login, senha, email, whatsapp, cidade, endereco, n, uf } = request.body;

        await connection('usuario').insert({
            login,
            senha,
            email,
            whatsapp,
            cidade,
            endereco,
            n,
            uf
        });

    return response.json();
    },

    async delete(request, response) {
        const idUsuario = request.headers.autorizacao;

        const usuario = await connection('usuario')
        .where('idUsuario', idUsuario)
        .select('idUsuario')
        .first();

        if (usuario.idUsuario != idUsuario) {
            return response.status(401).json({error: 'Operação não permitida.'});
        }

        await connection('usuario').where('idUsuario', idUsuario).delete();

        return response.status(204).send();
    }
};