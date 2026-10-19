const getModelsByCars = require("./params");

describe("Testing Request Headers and Params", () => {
    test("should return status 'ok' from API", async () => {
        const response = await getModelsByCars();

        expect(response.status).toBe(200);
        expect(response.data.status).toBe("ok");
       
    });

    test("should include URL params and custom headers", async () => {
    const response = await getModelsByCars();

    expect(response.config.headers["x-test-header"])
        .toBe("Testing Request Headers");

    expect(response.config.params).toEqual({
        id: 1,
        carBrandId: 1,
        title: "TT"
    });
});
});
