import prisma from '../../services/prisma';

const Query = {
  clients: async () => {
    const clients = await prisma.client.findMany();
    console.log(clients);
    return clients;
  },
};

export default Query;
