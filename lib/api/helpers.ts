/**
 * API Response Utilities
 *
 * Standardized response helpers for consistent API behavior
 * Handles success and error responses with proper status codes
 *
 * @module lib/api
 */

import { NextResponse } from 'next/server';

/**
 * Standard API success response
 *
 * @param data - Response data to send
 * @param status - HTTP status code (default: 200)
 * @returns NextResponse with JSON data and status code
 *
 * @example
 * export async function POST() {
 *   return apiSuccess({ id: 123 }, 201);
 * }
 */
export function apiSuccess<T>(data: T, status: number = 200) {
  return NextResponse.json(data, { status });
}

/**
 * Standard API error response
 *
 * @param error - Error message to send
 * @param status - HTTP status code (default: 500)
 * @returns NextResponse with error message and status code
 *
 * @example
 * export async function POST() {
 *   return apiError('Invalid input', 400);
 * }
 */
export function apiError(error: string, status: number = 500) {
  return NextResponse.json({ error }, { status });
}

/**
 * Validate required fields in request body
 *
 * @param data - Object to validate
 * @param requiredFields - Array of required field names
 * @returns Object with validation result and missing fields
 *
 * @example
 * const { isValid, missingFields } = validateRequired(data, ['name', 'email']);
 * if (!isValid) {
 *   return apiError(`Missing required fields: ${missingFields.join(', ')}`);
 * }
 */
export function validateRequired(
  data: Record<string, unknown>,
  requiredFields: string[]
): { isValid: boolean; missingFields: string[] } {
  const missingFields = requiredFields.filter(
    (field) => !data[field] || (typeof data[field] === 'string' && !data[field].trim())
  );

  return {
    isValid: missingFields.length === 0,
    missingFields,
  };
}

/**
 * Validate email format
 *
 * @param email - Email address to validate
 * @returns True if email is valid, false otherwise
 *
 * @example
 * if (!isValidEmail(email)) {
 *   return apiError('Invalid email format');
 * }
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
