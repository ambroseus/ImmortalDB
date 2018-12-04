//
// ImmortalDB - A resilient key-value store for browsers.
//
// Ansgar Grunseid
// grunseid.com
// grunseid@gmail.com
//
// License: MIT
//

// TypeScript type definitions for ImmortalDB.

export interface Store {
    get(key: string): Promise<string | undefined>;
    set(key: string, value: string): Promise<void>;
    remove(key: string): Promise<void>;
}

export const DEFAULT_STORES: Store[];
export const DEFAULT_KEY_PREFIX: string;
export class CookieStore implements Store {
    constructor(ttl?: number);

    get(key: string): Promise<string | undefined>;
    set(key: string, value: string): Promise<void>;
    remove(key: string): Promise<void>;
}
export class IndexedDbStore implements Store {
    constructor(dbName?: string, storeName?: string);

    get(key: string): Promise<string | undefined>;
    set(key: string, value: string): Promise<void>;
    remove(key: string): Promise<void>;
}
declare class StorageApiWrapper implements Store {
    constructor(store: Storage);

    get(key: string): Promise<string | undefined>;
    set(key: string, value: string): Promise<void>;
    remove(key: string): Promise<void>;
}
export class LocalStorageStore extends StorageApiWrapper {}
export class SessionStorageStore extends StorageApiWrapper {}

export class ImmortalStorage {
    constructor(stores?: Store[]);

    get(key: string, _default?: null): Promise<string | null>;
    get(key: string, _default: string): Promise<string>;
    set(key: string, value: string): Promise<string>;
    remove(key: string): Promise<void>;
}

export const ImmortalDB: ImmortalStorage;
