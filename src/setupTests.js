import "@testing-library/jest-dom";

/**
 * Codesandbox executes this setup file in a browser environment.
 * Ensure that the server-side API mocking runs in NodeJS only.
 * @note You DON'T need this condition in your test setup.
 */
if (typeof window === undefined) {
  const { server } = require("./mocks/browser");

  beforeAll(() => {
    server.listen({
      onUnhandledRequest: "warn"
    });
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });
}
