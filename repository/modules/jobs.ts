
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

class JobsModule extends FetchFactory<IJobs[]> {
  private RESOURCE = '/jobs';

  /**
   * Return the Jobs as array 
   * @param asyncDataOptions options for `useAsyncData`
   * @returns 
   */
  async getJobs(
    asyncDataOptions?: AsyncDataOptions<IJobs[]>
  ) {
    return useAsyncData(
      () => {
        const fetchOptions: FetchOptions<'json'> = {
          headers: {
            'Content-Type': 'application/json'}
        };
        return this.call(
          'GET',
          `${this.RESOURCE}`,
          undefined, // body
          fetchOptions
        )
      },
      asyncDataOptions
    ) 
  }
}

export default JobsModule;