import User from '../models/User';
import File from '../models/File';

class ProviderController {
  // List all Providers
  async index(req, res) {
    const providers = await User.findAll({
      where: {
        provider: true,
      },
      attributes: ['id', 'name', 'email', 'avatar_id'],
      // Show file information of user's avatar
      include: [
        { model: File, as: 'avatar', attributes: ['name', 'path', 'url'] },
      ],
    });
    return res.json(providers);
  }
}

export default new ProviderController();
