/**
 * @module
 */

/**
 *
 * @param {string} url - URL of page to load.
 * @param {Function} callback
 */
export function ajax (url, callback) {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      callback(xhr.responseText);
    }
  };
  xhr.open('GET', url, true);
  xhr.send();
};