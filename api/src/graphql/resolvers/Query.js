import prisma from '../../services/prisma';

const Query = {
  clients: async () => {
    const clients = await prisma.client.findMany();
    return clients;
  },
};

export default Query;
