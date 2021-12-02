import { useMemo } from 'react'
import { Environment, Network, RecordSource, Store } from 'relay-runtime'

let relayEnvironment: Environment;

// Define a function that fetches the results of an operation (query/mutation/etc)
// and return its results as a Promise
async function fetchQuery(operation: any, variables: any, cacheConfig: any, uploadables: any) {
    const headers = {
        Accept: 'application/json',
		'Content-Type': 'application/json'
    } as any;
    return fetch(new URL('graphql', process.env.NEXT_PUBLIC_BACKEND_URL).href, {
       method: 'POST',
       headers: headers,
       body: JSON.stringify({
           query: operation.text, // GraphQL text from input
           variables
       })
    }).then((response) => response.json());
}

function createEnvironment(): Environment {
    return new Environment({
        network: Network.create(fetchQuery),
        store: new Store(new RecordSource())
    });
}

export function initEnvironment(initialRecords?: any) {
    // Create a network layer from the fetch function
    const environment = relayEnvironment ?? createEnvironment();

    // If your page has Next.js data fetching methods that use Relay, the initial records
    // will get hydrated here
    if (initialRecords) {
        environment.getStore().publish(new RecordSource(initialRecords));
    }
    // For SSG and SSR always create a new Relay environment
    if (typeof window === 'undefined') return environment;
    // Create the Relay environment once in the client
    if (!relayEnvironment) relayEnvironment = environment;

    return relayEnvironment;
}

export function useEnvironment(initialRecords: any) {
    const store = useMemo(() => initEnvironment(initialRecords), [initialRecords]);
    return store;
}
