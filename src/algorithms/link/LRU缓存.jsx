const LRUCache = (capacity) => {
    this.capacity = capacity;
    this.map = new Map();
};

LRUCache.prototype.get = (key) => {
    if (this.map.has(key)) {
        const val = this.map.get(key);
        this.map.delete(key);
        this.map.set(key, val);
        return val
    }
    return -1;
};

LRUCache.prototype.put = (key, value) => {
    const item = this.map.get(key);
    if (item) {
        this.map.delete(key);
    } else {
        // this.map.keys().next().value
        if (this.capacity === this.map.size) {
            this.map.delete(this.map.keys().next().value);
        }
    }
    this.map.set(key, value);
};