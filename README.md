This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Setup

### Option 1: Docker Environment (Recommended)

1. **Install Docker** and Docker Compose on your system

2. **Start the MySQL database**:
   ```bash
   docker-compose up -d mysql
   ```

3. **Wait for MySQL to be ready** (check logs):
   ```bash
   docker-compose logs mysql
   ```

4. **Run Prisma migrations**:
   ```bash
   npx prisma migrate dev
   npx prisma generate
   ```

5. **Start the development server**:
   ```bash
   npm run dev
   ```

### Option 2: Local Environment

### Environment Variables

1. Copy the `.env.local` file and replace all placeholder values with your actual credentials:

```bash
cp .env.local .env.local.example  # Optional: backup
```

2. **Required Environment Variables:**

- **DATABASE_URL**: MySQL database connection string
  - Format: `mysql://username:password@host:port/database_name`
  - Example: `mysql://root:password@localhost:3306/goshop`

- **Clerk Authentication** (Get from [Clerk Dashboard](https://dashboard.clerk.com)):
  - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
  - `CLERK_SECRET_KEY`

- **Stripe Payment** (Get from [Stripe Dashboard](https://dashboard.stripe.com)):
  - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
  - `STRIPE_SECRET_KEY`
  - `STRIPE_WEBHOOK_SECRET`

- **PayPal** (Get from [PayPal Developer](https://developer.paypal.com)):
  - `PAYPAL_CLIENT_ID`
  - `PAYPAL_CLIENT_SECRET`

3. **Optional Environment Variables:**
- **Elasticsearch**: `ELASTICSEARCH_NODE=http://localhost:9200`
- **Cloudinary**: Get from [Cloudinary Dashboard](https://cloudinary.com/console)

### Temporary Clerk Disable

**Clerk authentication is currently disabled** to allow development without API keys. To re-enable:

1. Update `.env.local` with real Clerk keys
2. Uncomment Clerk imports and components in:
   - `src/middleware.ts` (uncomment clerkMiddleware)
   - `src/app/layout.tsx` (uncomment ClerkProvider)
3. Restart the development server

### Database Setup

1. Make sure you have MySQL running locally or use a cloud database
2. Run Prisma migrations:

```bash
npx prisma migrate dev
npx prisma generate
```

## Getting Started

First, install dependencies:

```bash
npm install --legacy-peer-deps
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
