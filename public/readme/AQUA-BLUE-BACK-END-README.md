# 🐠 Aqua Blue Backend

This repository contains the backend implementation of the **Aqua Blue** project — a pet shop and aquarium online store. It is fully powered by **REST API** and built with **Fastify + TypeScript + SQLite**, focusing on simplicity, performance, and clean architecture.

---

## 🚀 Key Features

- Full REST API using Fastify 5
- JWT-based authentication and role-based access control (user/admin/owner)
- SMS verification via ippanel (Faraz SMS)
- File upload support using @fastify/multipart (images only)
- Online payment integration with Zarinpal (ready to connect)
- Cart system with guest merge on login
- Group discount logic with automatic product updates & Alert notifications
- In-app notification system (Alert model) with user targeting
- Bale Bot integration for admin notifications
- Ticket/support system with user alerts
- FAQ templates management
- Sales analytics dashboard
- Free order creation for manual/offline orders
- Smart search with Persian/English number support
- Local cart for guest users
- Automatic file cleanup on product/article deletion

---

## 🧱 Tech Stack

- [Node.js](https://nodejs.org/)
- [Fastify 5](https://fastify.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Drizzle ORM](https://orm.drizzle.team/)
- [Zod](https://zod.dev/)
- [JWT (@fastify/jwt)](https://github.com/fastify/fastify-jwt)
- [@fastify/multipart](https://github.com/fastify/fastify-multipart)
- [@fastify/static](https://github.com/fastify/fastify-static)
- [@fastify/cors](https://github.com/fastify/fastify-cors)
- [Axios](https://axios-http.com/) (Bale Bot API)
- [dotenv](https://github.com/motdotla/dotenv)

---

## 🗂️ Project Structure

```
aqua-blue-backend/
├── src/
│ ├── db/
│ │ ├── schema/ # ۱۹ مدل دیتابیس
│ │ │ ├── index.ts
│ │ │ ├── user.ts
│ │ │ ├── product.ts
│ │ │ ├── productImage.ts
│ │ │ ├── article.ts
│ │ │ ├── articleImage.ts
│ │ │ ├── cart.ts
│ │ │ ├── favorite.ts
│ │ │ ├── readingList.ts
│ │ │ ├── discount.ts
│ │ │ ├── alert.ts
│ │ │ ├── alertRead.ts
│ │ │ ├── order.ts
│ │ │ ├── verificationCode.ts
│ │ │ ├── comment.ts
│ │ │ ├── commentReply.ts
│ │ │ ├── faq.ts
│ │ │ ├── groupDiscount.ts
│ │ │ ├── link.ts
│ │ │ ├── province.ts
│ │ │ ├── shippingCost.ts
│ │ │ └── ticket.ts
│ │ └── index.ts #  اتصال PostgreSQL + Drizzle
│ ├── validators/ # اعتبارسنجی با Zod
│ ├── routes/ # مسیرهای API
│ │ ├── auth.ts
│ │ ├── user.ts
│ │ ├── product.ts
│ │ ├── article.ts
│ │ ├── order.ts
│ │ ├── comment.ts
│ │ ├── ticket.ts
│ │ ├── alert.ts
│ │ ├── faq.ts
│ │ ├── groupDiscount.ts
│ │ ├── shippingCost.ts
│ │ ├── analytics.ts
│ │ └── upload.ts
│ ├── plugins/
│ │ └── auth.ts # JWT + middlewareهای نقش
│ ├── bot/
│ │ └── baleBot.ts # ربات بله
│ ├── services/
│ │ ├── sms.ts # سرویس پیامک
│ │ └── payment.ts # درگاه زرین‌پال
│ ├── utils/
│ │ └── file.ts # مدیریت فایل (حذف فیزیکی)
│ ├── scripts/
│ │ ├── makeOwner.ts
│ │ └── checkUser.ts
│ └── index.ts # نقطه ورود برنامه
├── uploads/ # فایل‌های آپلود شده
├── .env
├── package.json
├── tsconfig.json
└── drizzle.config.ts
```

---

## ⚙️ Environment Variables

Create a `.env` file in the backend directory with:

```env
PORT=3815
JWT_SECRET=aquablue-super-secret-key-2024

# SMS (ippanel)
SMS_USERNAME=your_ippanel_username
SMS_PASSWORD=your_ippanel_password
SMS_FROM=3000505
SMS_PATTERN_CODE=ispyrv56rhgo2yb

# Zarinpal Payment Gateway
ZARINPAL_MERCHANT_ID=your_merchant_id
ZARINPAL_API_BASE_URL=https://api.zarinpal.com/pg/v4/payment/request.json
ZARINPAL_API_VERIFY=https://api.zarinpal.com/pg/v4/payment/verify.json
ZARINPAL_CALLBACK_URL=http://localhost:3000/payment/verify

# Bale Bot
BALE_BOT_TOKEN=your_bot_token_here

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/aquablue
```

---

## 📊 Key Features Explained

### 🛒 Cart System
- Supports **Products** with quantity tracking
- Automatic stock validation when viewing cart
- **Merge guest basket** with user basket on login/verify
- Real-time price, discount, weight, and shipping cost calculation
- Local cart API for unauthenticated users (`/api/products/local-cart`)

### 💰 Discount Types
- **Product Discounts**: Per-product percentage discounts with optional expiry dates
- **Group Discounts**: Category/brand-wide discounts automatically applied to matching products
- **User Promo Codes**: Personalized discount codes assigned to specific users

### 🔔 Alert/Notification System
- Target types: `all` users or specific `user`
- Source tracking: `order`, `discount`, `promo`, `system`, `manual`
- Read/unread tracking per user via `alert_reads` table
- Automatically created on:
  - Order placed
  - Order status changed
  - Payment verified
  - Free order created
  - Comment posted
  - Comment replied
  - Ticket created
  - Ticket answered
  - Discount code assigned
  - Group discount created/updated

### 🤖 Bale Bot (Telegram-like Messenger)
- Phone number authentication via contact sharing
- Browse products by categories
- View active discounts
- View personal discount codes
- View cart with prices
- Order tracking with status
- Support tickets
- Product search
- Admin notifications for new orders, tickets, and payments

### 📦 Order Flow
1. User adds products to cart → `/api/user/cart`
2. User submits order with shipping method → `/api/orders`
3. Payment link generated (Zarinpal)
4. After payment callback → `/api/orders/verify-payment`
5. Stock reduced, Alerts sent, admins notified

### 🎫 Support Tickets
- Users create tickets with title and description
- Admins can respond and change status
- Each status change triggers user alert
- Admins notified via Bale Bot

### 🗑️ File Management
- Uploaded files stored in `uploads/` directory
- Files served statically via `/uploads/` prefix
- Automatic file deletion when product/article is deleted
- Old cover image deleted when updated

### 📈 Sales Analytics
- Product count (total/active)
- User count
- Order statistics (total/pending/today)
- Total revenue
- Top selling products
- Monthly revenue breakdown (6 months)

---

## 📋 API Routes

### 🔐 Authentication
| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `POST` | `/api/auth/send-code` | Public | Send 5-digit verification code via SMS |
| `POST` | `/api/auth/verify` | Public | Verify code + Login/Signup (with optional guest cart merge) |

### 👤 Users
| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `GET` | `/api/user/me` | User | Get current user profile |
| `PUT` | `/api/user/me` | User | Update profile (name, province, city, address, etc.) |
| `GET` | `/api/users` | Admin | List all users (paginated, searchable, filterable by status) |
| `GET` | `/api/users/:id` | Admin | Get user details with discount codes |
| `PUT` | `/api/users/:id` | Admin | Update any user |
| `PUT` | `/api/users/:id/status` | Admin | Change user status (user/admin/owner/banUser/notifUser) |
| `POST` | `/api/users/:id/discount` | Admin | Assign discount code to user |
| `PUT` | `/api/user/address` | User | Update shipping address |

### 🛒 Cart
| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `POST` | `/api/user/cart` | User | Add product to cart |
| `GET` | `/api/user/cart` | User | Get cart with prices, discounts, and shipping options |
| `PUT` | `/api/user/cart/:cartId` | User | Update item quantity |
| `DELETE` | `/api/user/cart/:cartId` | User | Remove item from cart |

### ❤️ Favorites
| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `POST` | `/api/user/favorites` | User | Add product to favorites |
| `GET` | `/api/user/favorites` | User | Get favorite products |
| `DELETE` | `/api/user/favorites/:productId` | User | Remove from favorites |

### 📖 Reading List
| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `POST` | `/api/user/reading-list` | User | Add article to reading list |
| `GET` | `/api/user/reading-list` | User | Get reading list |
| `DELETE` | `/api/user/reading-list/:articleId` | User | Remove from reading list |

### 🛍️ Products
| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `GET` | `/api/products` | Public | List products (search, filter, sort, pagination) |
| `GET` | `/api/products/:id` | Public | Get product details with images |
| `GET` | `/api/products/local-cart` | Public | Guest cart (pricing & stock check) |
| `POST` | `/api/products` | Admin | Create product |
| `PUT` | `/api/products/:id` | Admin | Update product |
| `DELETE` | `/api/products/:id` | Admin | Delete product (files cleaned) |
| `POST` | `/api/products/:id/images` | Admin | Link uploaded images to product |
| `DELETE` | `/api/products/:id/images/:imageId` | Admin | Remove image from product |

### 📝 Articles
| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `GET` | `/api/articles` | Public | List articles (search, filter, sort) |
| `GET` | `/api/articles/:id` | Public | Get article (auto-increment views) |
| `POST` | `/api/articles` | Admin | Create article |
| `PUT` | `/api/articles/:id` | Admin | Update article |
| `DELETE` | `/api/articles/:id` | Admin | Delete article (files cleaned) |
| `POST` | `/api/articles/:id/images` | Admin | Link uploaded images to article |
| `DELETE` | `/api/articles/:id/images/:imageId` | Admin | Remove image from article |

### 📦 Orders
| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `POST` | `/api/orders` | User | Place order from cart (payment link generated) |
| `GET` | `/api/orders` | User | Get user orders |
| `GET` | `/api/orders/all` | Admin | Get all orders (filterable by status) |
| `GET` | `/api/orders/:id` | User | Get order details |
| `PUT` | `/api/orders/:id/status` | Admin | Change order status |
| `PUT` | `/api/orders/:id/post-verify` | Admin | Set tracking code + mark as shipped |
| `POST` | `/api/orders/verify-payment` | System | Verify Zarinpal payment callback |
| `POST` | `/api/orders/free` | Admin | Create manual/offline order |

### 💬 Comments
| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `GET` | `/api/comments` | Public | Get comments for a product/article (with replies) |
| `POST` | `/api/comments` | User | Post comment (pending approval) |
| `PUT` | `/api/comments/:id/status` | Admin | Change comment status |
| `DELETE` | `/api/comments/:id` | Admin | Delete comment |
| `POST` | `/api/comments/:id/reply` | User | Reply to a comment |

### 🎫 Tickets
| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `GET` | `/api/tickets` | User | Get user tickets |
| `GET` | `/api/tickets/all` | Admin | Get all tickets (filterable by status) |
| `POST` | `/api/tickets` | User | Create ticket |
| `PUT` | `/api/tickets/:id` | Admin | Respond/change status |

### 🔔 Notifications
| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `GET` | `/api/alerts` | User | Get user notifications with read/unread count |
| `POST` | `/api/alerts/:id/read` | User | Mark notification as read |
| `POST` | `/api/alerts/read-all` | User | Mark all as read |
| `POST` | `/api/alerts` | Admin | Send notification |
| `DELETE` | `/api/alerts/:id` | Admin | Deactivate notification |

### 🏷️ Group Discounts
| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `GET` | `/api/group-discounts` | Public | List all group discounts |
| `POST` | `/api/group-discounts` | Admin | Create (auto-applies to matching products) |
| `PUT` | `/api/group-discounts/:id` | Admin | Update (re-applies to products) |
| `DELETE` | `/api/group-discounts/:id` | Admin | Delete (removes from products) |

### 🚚 Shipping Costs
| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `GET` | `/api/shipping-costs` | Public | Get shipping methods |
| `POST` | `/api/shipping-costs` | Admin | Add shipping method |
| `PUT` | `/api/shipping-costs/:id` | Admin | Update shipping method |
| `DELETE` | `/api/shipping-costs/:id` | Admin | Delete shipping method |

### ❓ FAQ
| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `GET` | `/api/faq` | Public | Get active FAQ groups |
| `POST` | `/api/faq` | Admin | Create FAQ group |
| `PUT` | `/api/faq/:id` | Admin | Update FAQ group |
| `DELETE` | `/api/faq/:id` | Admin | Delete FAQ group |

### 📊 Analytics
| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `GET` | `/api/analytics` | Admin | Dashboard stats (products, users, orders, revenue, top products, monthly chart) |

### 📤 Upload
| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `POST` | `/api/upload` | Public | Upload images (cover + images fields) |

---

## 🏗️ Architecture Notes

- **Authentication**: JWT token from `Authorization` header (with or without `Bearer` prefix). User is attached to every authenticated request via `authenticate` middleware.
- **Role Middleware**: `isAdmin`, `isOwner`, `isAdminOrOwner`, `notBanned` decorators available on all protected routes.
- **File Upload**: Multipart upload via `@fastify/multipart`. Files saved to `uploads/` directory with UUID filenames. Served statically via `/uploads/` prefix.
- **Database**: PostgreSQL via `pg` driver. Connection string from `DATABASE_URL` environment variable.
- **UUID IDs**: All primary keys use UUID v4 (via `crypto.randomUUID()`) for security and scalability.
- **Validation**: All inputs validated with Zod schemas before processing.
- **Partial Updates**: PUT endpoints only update provided fields — no risk of nullifying existing data.
- **Guest Cart**: Unauthenticated users can use `/api/products/local-cart` for pricing. Cart auto-merges on login via `verify` endpoint.
- **Notifications**: 11 automated events trigger Alert creation. Read status tracked per user in `alert_reads` table.
- **Bot Polling**: Bale Bot uses long polling (`getUpdates`) with automatic reconnection.

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/jvd-malek/aqua-blue-backend.git
cd aqua-blue-backend

# Install dependencies
npm install

# Create .env file (see Environment Variables section)
cp .env.example .env

# Start development server
npm run dev

Server runs on http://localhost:3815
```

### Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server with hot reload (tsx) |
| `npm run build` | Compile TypeScript to JavaScript |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 📄 License

MIT © 2025 | Developed by [javad malekian]

---

## 📬 Contact

For feedback, suggestions or questions:

- 📧 Email: [jvd.malek0079@gmail.com](mailto:jvd.malek0079@gmail.com)
- 🔗 Front-end Repository: [Aqua Blue Frontend](https://github.com/jvd-malek/aqua-blue-frontend)