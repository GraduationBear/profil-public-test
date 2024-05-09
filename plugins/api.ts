import { $fetch, type FetchOptions } from 'ofetch';

// locals
import JobsModule from '~/repository/modules/jobs';

/**
 * Interface for the API instance.
 * It contains all the modules that the API instance should have.
 */
interface IApiInstance {
  jobs: JobsModule;
}

/**
 * This is a Nuxt plugin that sets up the API instance.
 * It creates a new instance of $fetch with custom options and exposes all the necessary modules.
 */
export default defineNuxtPlugin((nuxtApp) => {
  // Get the runtime configuration
  const config = useRuntimeConfig();

  // Define fetch options with the base URL from the runtime configuration
  const fetchOptions: FetchOptions = {
    baseURL: config.public.apiBaseUrl,
  };

  // Create a new instance of $fetch with custom options
  const apiFecther = $fetch.create(fetchOptions);

  // An object containing all repositories we need to expose
  const modules: IApiInstance = {
    jobs: new JobsModule(apiFecther),
  };

  // Provide the API instance with the necessary modules
  return {
    provide: {
      api: modules
    }
  };
});