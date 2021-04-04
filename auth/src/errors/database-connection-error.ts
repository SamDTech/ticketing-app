export class DatabaseConnectionError extends Error {
reasons= 'Failed to connect to database'

  constructor() {
    super();
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }
}
