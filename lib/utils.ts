/**
 * Utility functions for common operations
 */

/**
 * Combines class names conditionally
 * @param classes - Class names to combine
 * @returns Combined class name string
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Delays execution for a given amount of time
 * @param ms - Milliseconds to delay
 * @returns Promise that resolves after delay
 */
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Gets environment variable with fallback
 * @param key - Environment variable key
 * @param defaultValue - Default value if not found
 * @returns Environment variable value or default
 */
export function getEnv(
  key: string,
  defaultValue: string = ''
): string {
  return process.env[key] ?? defaultValue;
}
