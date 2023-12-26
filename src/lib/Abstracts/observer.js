class AbstractObserver {
    constructor() {
        if (new.target === AbstractObserver) {
            throw new TypeError('Cannot instantiate abstract class directly');
        }

        this.events = {};
    }

    addObserver(eventName, callback) {
        if (!(eventName in this.events)) {
            this.events[eventName] = [];
        }

        this.events[eventName].push(callback);
    }

    fireEvent(eventName, data) {
        if (Array.isArray(this.events[eventName])) {
            const observers = [...this.events[eventName]];

            observers.forEach((observer) => {
                observer.update(data);
            });
        }
    }
}

export default AbstractObserver;
