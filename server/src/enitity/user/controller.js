const service = require('./service');

module.exports.create = async(req, res) => {
    try { const user = await service.create(req.body);
          res.json(user);
    } catch (error) { res.status(500).json(error.message) }

}

module.exports.getAll = async(req, res) => {
    try { const users = await service.getAll();
          res.json(users);
    } catch (error) { res.status(500).json(error.message)}
}

module.exports.getOne = async(req, res) => {
    try { const user = await service.getOne(req.params.id);
          res.json(user);
    } catch (error) { res.status(500).json(error.message)}
        
    
}

module.exports.update = async(req, res) => {
    try { const user = await service.update(req.body);
          res.json(user);
    } catch (error) { res.status(500).json(error.message)}
}

module.exports.delete = async(req, res) => {
    try { service.delete(req.params.id);
          res.json('User deleted');
    } catch (error) { res.status(500).json(error.message)}
        
}