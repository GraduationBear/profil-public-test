
import type { FetchOptions } from 'ofetch';
import type { AsyncDataOptions } from '#app';

// locals
import FetchFactory from '../factory';

type IJobs = {
  id: number;
  title: string;
  crushes: string;
  answer1: string;
  answer2: string;
  answer3: string;
}

/**
 * @class JobsModule
 * @extends {FetchFactory<IJobs[]>}
 * 
 * This class extends the FetchFactory to provide methods for fetching jobs data.
 */
class JobsModule extends FetchFactory<IJobs[]> {
  private RESOURCE = '/jobs';

  /**
   * Fetches the jobs data from the API.
   * 
   * @returns {Promise} A promise that resolves with the fetched jobs data.
   */
  async getJobs() {
    return useAsyncData(
      () => {
        const fetchOptions: FetchOptions<'json'> = {
          headers: {
            'Content-Type': 'application/json'
          }
        };
        return this.call(
          'GET',
          `${this.RESOURCE}`,
          undefined, // body
          fetchOptions
        )
      },
    )
  }
}

export default JobsModule;