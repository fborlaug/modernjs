const TvShow = require('./TvShow');
const createId = require('../utils/idUtil');

class TvShowService {
   constructor() {
      this.tvShows = [new TvShow(createId(), 'Mr.Robot', 'Drama'), new TvShow(createId(), 'Black Mirror', 'Drama')];
   }

   getAll() {
      return this.tvShows;
   }

   getById(tvShowId) {
      return this.tvShows.find(tvShow => tvShow.id == tvShowId);
   }

   createTvShow(name, genre) {
      const newTvShow = new TvShow(createId(), name, genre);
      this.tvShows.push(newTvShow);
      return newTvShow;
   }

   delete(tvShowId) {
      this.tvShows = this.tvShows.filter(tvShow => tvShow.id !== tvShowId);
   }
}

module.exports = new TvShowService();