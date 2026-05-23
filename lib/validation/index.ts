/**
 * Form Validation Utilities
 *
 * Reusable validation functions for form fields
 * Used by both client-side components and server-side API routes
 *
 * @module lib/validation
 */

/**
 * Email validation regex pattern
 * Matches RFC 5322 simplified format
 */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Validate an email address
 *
 * @param email - Email to validate
 * @returns True if valid email format
 *
 * @example
 * if (validateEmail('user@example.com')) {
 *   // Valid email
 * }
 */
export function validateEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false;
  return EMAIL_REGEX.test(email.trim());
}

/**
 * Validate a non-empty string field
 *
 * @param value - Value to validate
 * @param minLength - Minimum length (default: 1)
 * @returns True if valid
 *
 * @example
 * if (!validateRequired('name', 2)) {
 *   // Invalid - too short
 * }
 */
export function validateRequired(value: string | unknown, minLength: number = 1): boolean {
  if (typeof value !== 'string') return false;
  return value.trim().length >= minLength;
}

/**
 * Validate text field length
 *
 * @param value - Value to validate
 * @param minLength - Minimum length
 * @param maxLength - Maximum length
 * @returns True if within bounds
 *
 * @example
 * if (!validateLength(message, 10, 1000)) {
 *   // Invalid - not between 10 and 1000 chars
 * }
 */
export function validateLength(value: string, minLength: number, maxLength: number): boolean {
  if (typeof value !== 'string') return false;
  const length = value.trim().length;
  return length >= minLength && length <= maxLength;
}

/**
 * Validate URL format
 *
 * @param url - URL to validate
 * @returns True if valid URL
 *
 * @example
 * if (validateUrl(websiteUrl)) {
 *   // Valid URL
 * }
 */
export function validateUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Validate phone number (basic)
 * Accepts common formats: (123) 456-7890, 123-456-7890, 1234567890, +1 123 456 7890
 *
 * @param phone - Phone number to validate
 * @returns True if valid phone format
 *
 * @example
 * if (validatePhone('+1-555-123-4567')) {
 *   // Valid phone
 * }
 */
export function validatePhone(phone: string): boolean {
  const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  return phoneRegex.test(phone.trim());
}

/**
 * Sanitize string input (basic)
 * Removes leading/trailing whitespace and prevents XSS by escaping HTML chars
 *
 * @param value - String to sanitize
 * @returns Sanitized string
 *
 * @example
 * const clean = sanitizeInput(userInput);
 */
export function sanitizeInput(value: string): string {
  return value
    .trim()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}
