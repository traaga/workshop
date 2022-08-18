
/**
 * timeout is in milliseconds
 */
export const delay = (timeout: number) => {
    return new Promise( response => setTimeout(response, timeout) );
}
