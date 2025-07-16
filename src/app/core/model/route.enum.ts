/**
 * Valid application routes.
 *
 * @export
 * @enum {string}
 */
export enum ROUTE {
  HOME = '',
  NEWSLETTER = 'newsletter',
  NEWS = 'newsletter/:slug'
}

/**
 * Type guard for {@link ROUTE}.
 *
 * @export
 * @param {string} route
 * @returns {route is ROUTE}
 */
export function isValidRoute(route?: string): route is ROUTE {
  return Object.values(ROUTE).includes(route as ROUTE);
}
