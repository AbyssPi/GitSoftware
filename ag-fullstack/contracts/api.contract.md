# API Contract

> Defines the structural guarantees for all API endpoints.

## Rules

1. All endpoints must return JSON
2. All endpoints must use standard HTTP status codes
3. Error responses must follow a consistent format
4. All endpoints must be documented with request/response schemas

## Response Format

```json
{
  "success": true,
  "data": {},
  "error": null,
  "meta": {
    "timestamp": "ISO-8601",
    "requestId": "uuid"
  }
}
```

## Error Format

```json
{
  "success": false,
  "data": null,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable message",
    "details": {}
  }
}
```
