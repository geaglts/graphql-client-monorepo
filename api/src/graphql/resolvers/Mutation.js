import prisma from '../../services/prisma';

const Mutation = {
  createClient: async (_, { input }) => {
    try {
      const { name, email, phone } = input;
      const client = await prisma.client.create({
        data: {
          name,
          email,
          Phone: {
            create: {
              number: phone,
            },
          },
        },
      });
      return client;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
};

export default Mutation;
