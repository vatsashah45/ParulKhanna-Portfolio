export function validateString(value: unknown, maxLen: number) {
    return typeof value === "string" && value.length > 0 && value.length <= maxLen;
  }
  export function getErrorMessage(error: unknown) {
    return error instanceof Error ? error.message : String(error);
  }
  