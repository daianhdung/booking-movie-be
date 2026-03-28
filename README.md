# Booking Service (NestJS)

Khung project cho domain Movie / Booking theo hướng:

- `modules/`: domain modules
- `ports/`: interface/port để giữ application layer ít phụ thuộc framework
- `adapters/`: implementation cho JWT, password hashing, payment client

## Database Migration (Flyway SQL-first)

Service uses Flyway SQL migrations (not TypeORM code-first sync).

- Migration files location: `src/database/flyway`
- Naming convention: `V<version>__<description>.sql`
- Config file: `flyway.conf`

Commands:

```bash
npm run flyway:info
npm run flyway:validate
npm run flyway:migrate
```

Example env vars (optional, defaults are in `flyway.conf`):

```bash
DB_HOST=localhost
DB_PORT=5432
DB_NAME=booking_db
DB_USERNAME=postgres
DB_PASSWORD=postgres
```

## Các endpoint auth đã có

```bash
POST /api/v1/auth/register
POST /api/v1/auth/login
GET  /api/v1/auth/profile
```

## Ví dụ curl

```bash
curl -X POST http://localhost:8081/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "demo@example.com",
    "password": "Password123",
    "fullName": "Demo User"
  }'
```

```bash
curl -X POST http://localhost:8081/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "demo@example.com",
    "password": "Password123"
  }'
```

```bash
curl http://localhost:8081/api/v1/auth/profile \
  -H "Authorization: Bearer <ACCESS_TOKEN>"
```

## Gợi ý module tiếp theo

- `movies`
- `showtimes`
- `seats`
- `seat-holds`
- `bookings`
- `payment-integration`
