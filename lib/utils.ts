/**
 * Get the correct image path based on the environment
 * @param imagePath - The image path starting with /images/
 * @returns The full image path with base path if needed
 */
export function getImagePath(imagePath: string): string {
  // For GitHub Pages root domain (start-source.github.io)
  return imagePath;
}

/**
 * Get the base path for the application
 * @returns The base path string
 */
export function getBasePath(): string {
  return '';
}

/**
 * Get the correct navigation path based on the environment
 * @param path - The navigation path starting with /
 * @returns The full navigation path with base path if needed
 */
export function getNavPath(path: string): string {
  // For GitHub Pages root domain (start-source.github.io)
  return path;
}
