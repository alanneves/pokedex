import axios from 'axios';

const paginationSize = 12;

const get = (page = 1) => axios.get('/pokemon', {
  params: {
    limit: paginationSize,
    offset: (page - 1) * paginationSize,
  },
});

const getByName = (name) => axios.get(`/pokemon/${name}`);

const getEncounters = (name) => axios.get(`pokemon/${name}/encounters`);

export default { get, getByName, getEncounters };
