Promise.myAllSettled = function(promises) {
    return new Promise((resolve) => {
        let results = [];
        let remaining = promises.length;

        if (remaining === 0) {
            return resolve([]);
        }

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then(value => {
                    results[index] = {
                        status: "fulfilled",
                        value: value
                    };
                })
                .catch(reason => {
                    results[index] = {
                        status: "rejected",
                        reason: reason
                    };
                })
                .finally(() => {
                    remaining--;
                    if (remaining === 0) {
                        resolve(results);
                    }
                });
        });
    });
};
