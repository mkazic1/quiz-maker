import { createServer, Model } from 'miragejs';

const mockedServer = () => {
  createServer({
    models: {
      quiz: Model,
    },
    seeds(server) {
      server.create('quiz', {
        id: 0,
        name: 'My quiz',
      });
      server.create('quiz', {
        id: 1,
        name: 'The quiz',
      });
    },
    routes() {
      this.namespace = 'api';

      this.get('/quizzes', (schema) => schema.quizzes.all());
    },
  });
};

export default mockedServer;
