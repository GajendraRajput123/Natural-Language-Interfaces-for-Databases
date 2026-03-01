export function parseQuery(nlQuery) {
    nlQuery = nlQuery.toLowerCase();

    let collection = "sales";
    let filter = {};

    if (nlQuery.includes("greater than")) {
        const match = nlQuery.match(/greater than (\d+)/);
        if (match) {
            filter.amount = { $gt: parseInt(match[1]) };
        }
    }

    if (nlQuery.includes("less than")) {
        const match = nlQuery.match(/less than (\d+)/);
        if (match) {
            filter.amount = { $lt: parseInt(match[1]) };
        }
    }

    if (nlQuery.includes("delhi")) {
        filter.city = "Delhi";
    }

    return { collection, filter };
}