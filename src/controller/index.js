const Contatos = require('../models/Contato');

const getContatos = async (req, res) => {
    try {
        const contato = await Contatos.findAll();
        res.status(200).json(contato);
    } catch (error) {
        res.status(500).json({message: `Houve um erro ao obiter os dados da API: ${error}`});
    }
};

const getContato = async (req, res) => {
    try {
        const contato = await Contatos.findOne({ where: {id: `${req.params.id}`}});
        res.status(200).json(contato);
    } catch (error) {
        res.status(500).json({message: `Houve um erro ao obiter os dados da API: ${error}`});
    }
};

const createContato = async (req, res) => {
    try {
        await Contatos.create(req.body);
        res.status(201).json({message: `Contato ${req.body.nome} ${req.body.sobrenome}, Criado com sucesso!`});
    } catch (error) {
        res.status(500).json({message: `Houve um erro ao criar o novo contato: ${error}`});
    }
};

const updateContato = async (req, res) => {
    try {
        await Contatos.update(req.body, { where: {id: `${req.params.id}`}})
        res.status(200).json({message: `Contato ${req.body.nome} ${req.body.sobrenome}, Atualizado com sucesso!`});
    } catch (error) {
        res.status(500).json({message: `Houve um erro ao atualizar o contato: ${error}`});
    }
};

const deleteContato = async (req, res) => {
    try {
        const contato = await Contatos.findOne({ where: {id: `${req.params.id}`}});
        await Contatos.destroy({ where: {id: `${req.params.id}`}});
        res.status(200).json({message: `Contato ${contato.nome} ${contato.sobrenome}, Deletado com sucesso!`})
    } catch (error) {
        res.status(500).json({message: `Houve um erro ao deletar o contato: ${error}`});
    }
}

module.exports = {
    getContatos,
    getContato,
    createContato,
    updateContato,
    deleteContato,
}