import NodeCache from "node-cache";

export const cache = new NodeCache({
    stdTTL: 3600, // cache expiry: 1 hour
    maxKeys: 50   // max size
});
