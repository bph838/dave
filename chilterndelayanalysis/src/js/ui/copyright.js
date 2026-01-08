/**
 * Sets the current year as the text content of the specified DOM element.
 *
 * @param {string} elementId - The ID of the element where the current year should be displayed.
 */
export function setupCopyright(elementId) {
  const yearEl = document.getElementById(elementId);
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
