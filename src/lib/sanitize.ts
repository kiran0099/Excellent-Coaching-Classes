/**
 * Sanitizes user-supplied text before sending to Google Sheets
 * or rendering on the page.
 *
 * - Strips all HTML tags
 * - Removes javascript: and data: URI schemes
 * - Removes inline event handlers (onclick=, onerror=, …)
 * - Strips null bytes and non-printable control characters
 * - Normalizes whitespace
 * - Trims and enforces a max length
 */
export function sanitizeText(input: string, maxLength = 500): string {
  if (typeof input !== "string") return "";
  return input
    .replace(/<[^>]*>/g, "")                         // strip HTML tags
    .replace(/&(#\d+|#x[\da-f]+|\w+);/gi, " ")       // decode & neutralise HTML entities
    .replace(/javascript\s*:/gi, "")                  // remove javascript: scheme
    .replace(/data\s*:\s*text\/html/gi, "")           // remove data:text/html
    .replace(/vbscript\s*:/gi, "")                    // remove vbscript: scheme
    .replace(/on\w{2,20}\s*=/gi, "")                  // remove event handlers e.g. onclick=
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "") // strip control characters
    .replace(/\s+/g, " ")                             // collapse whitespace
    .trim()
    .slice(0, maxLength);
}

/** Sanitizes a name field — letters, spaces, dots, hyphens only */
export function sanitizeName(input: string): string {
  if (typeof input !== "string") return "";
  return input
    .replace(/<[^>]*>/g, "")
    .replace(/[^a-zA-Z\u0900-\u097F\s.\-']/g, "")   // allow Latin, Devanagari, spaces, . - '
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 80);
}

/** Sanitizes a phone number — digits only */
export function sanitizePhone(input: string): string {
  if (typeof input !== "string") return "";
  return input.replace(/\D/g, "").slice(0, 15);
}
