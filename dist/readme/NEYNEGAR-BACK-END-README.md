# 🖋️ NeyNegar GraphQL Backend

This repository contains the backend implementation of the **NeyNegar** project — an online shop and educational platform for Persian calligraphy. It is fully powered by **GraphQL** and built with **Node.js**, focusing on scalability, modularity, and performance.

---

## 🚀 Key Features

- Full GraphQL API using **Apollo Server 4**
- JWT-based authentication and role-based access control (user/admin/owner)
- SMS verification via **ippanel** (Faraz SMS)
- File upload support using **Multer** (images only)
- Online payment integration with **Zarinpal**
- Persian date support via **jalaali-js**
- Cart system with products & packages support
- Group discount logic with automatic Alert notifications
- Daily promo scheduler (automatic discount codes via SMS)
- In-app notification system (Alert model) with user targeting
- Web Push notifications
- Ticket/support system with user alerts
- FAQ templates attachable to products
- Sales analytics dashboard (Persian calendar support)
- Free order creation for manual/offline orders

---

## 🧱 Tech Stack

- [**Node.js**](https://nodejs.org/)
- [**Express.js** (v5)](https://expressjs.com/)
- [**Apollo Server 4**](https://www.apollographql.com/docs/apollo-server/)
- [**MongoDB**](https://www.mongodb.com/) & [**Mongoose**](https://mongoosejs.com/)
- [**GraphQL**](https://graphql.org/)
- [**JWT** (`jsonwebtoken`)](https://github.com/auth0/node-jsonwebtoken)
- [**Multer**](https://github.com/expressjs/multer)
- [**dotenv**](https://github.com/motdotla/dotenv)
- [**bcryptjs**](https://github.com/dcodeIO/bcrypt.js)
- [**jalaali-js**](https://github.com/jalaali/jalaali-js)
- [**web-push**](https://github.com/web-push-libs/web-push)
- [**cors**](https://github.com/expressjs/cors)

---

## 🗂️ Project Structure

```
├── package.json
├── .env
├── uploads/ # Uploaded images directory
├── src
│   ├── graphql
│   │   ├── resolvers
│   │   │   ├── index.js # Resolver composition
│   │   │   ├── userResolvers.js # User, Auth, Basket, Push Notification
│   │   │   ├── productResolvers.js # Products, HomePage, Search, Filtering
│   │   │   ├── orderResolvers.js # Orders, Sales Analytics, Free Orders
│   │   │   ├── checkoutResolvers.js # Checkout & Zarinpal Payment
│   │   │   ├── commentResolvers.js # Comments & Replies
│   │   │   ├── articleResolvers.js # Articles & Blog
│   │   │   ├── authorResolvers.js # Authors
│   │   │   ├── courseResolvers.js # Courses & Sections
│   │   │   ├── linkResolvers.js # Navigation Links
│   │   │   ├── ticketResolvers.js # Support Tickets
│   │   │   ├── groupDiscountResolvers.js # Group Discounts
│   │   │   ├── shippingCostResolvers.js # Shipping Costs
│   │   │   ├── provinceResolvers.js # Provinces & Cities
│   │   │   ├── packageResolvers.js # Packages/Bundles
│   │   │   ├── faqResolvers.js # FAQ Templates
│   │   │   ├── alertResolvers.js # In-App Notifications
│   │   │   └── scalarResolvers.js # Custom Scalar Types
│   │   ├── schema.js # Main schema composition
│   │   ├── types.js # GraphQL type definitions
│   │   ├── queries.js # GraphQL query definitions
│   │   └── mutations.js # GraphQL mutation definitions
│   ├── middleware
│   │   ├── auth.js # JWT authentication middleware (legacy)
│   │   ├── uploader.js # Multer uploader (legacy)
│   │   ├── userStatus.js # Role-based access middleware
│   │   └── zarinpal.js # Zarinpal payment gateway
│   ├── models
│   │   ├── User.js # User model (status, phone, basket, favorites, etc.)
│   │   ├── Product.js # Product model (price history, discount, weight, etc.)
│   │   ├── Package.js # Package/Bundle model (products with quantities)
│   │   ├── Order.js # Order model (status, payment, shipping)
│   │   ├── Checkout.js # Checkout model (TTL index for expiration)
│   │   ├── Comment.js # Comment model (with replies & likes)
│   │   ├── Article.js # Article/Blog model
│   │   ├── Author.js # Author model
│   │   ├── Course.js # Course model (sections, prerequisites)
│   │   ├── Link.js # Navigation Links model
│   │   ├── Ticket.js # Support Ticket model
│   │   ├── GroupDiscount.js # Group Discount model
│   │   ├── ShippingCost.js # Shipping Cost model
│   │   ├── Province.js # Province & Cities model
│   │   ├── FAQ.js # FAQ Template model
│   │   ├── Alert.js # Notification/Alert model
│   │   └── Code.js # SMS Verification Code model
│   ├── utils
│   │   ├── fileUpload.js # File upload, delete, path resolution
│   │   ├── getUserFromToken.js # JWT to User resolver (Apollo context)
│   │   ├── scheduler.js # Daily promo code job
│   │   └── sendSms.js # ippanel SMS sender
│   └── index.js
```

---

## ⚙️ Environment Variables

Create a `.env` file in the backend directory with:

```env
PORT=4000
MONGODB_URI=mongodb://localhost:27017/neynegar
JWT_KEY=your_jwt_secret

# Push Notifications (Web Push)
push_notification_public_key=your_public_key
push_notification_server_key=your_private_key

# Zarinpal Payment Gateway
zarinpal_api_base_url=https://api.zarinpal.com/pg/v4/payment/request.json
zarinpal_api_verify=https://api.zarinpal.com/pg/v4/payment/verify.json
zarinpal_payment_url=https://www.zarinpal.com/pg/StartPay/
zarinpal_merchant_id=your_merchant_id
zarinpal_api_callBack=your_callback_url

# SMS (ippanel)
SMS_USERNAME=your_ippanel_username
SMS_PASSWORD=your_ippanel_password
SMS_FROM=3000505
SMS_PROMO_PATTERN=ispyrv56rhgo2yb
SMS_VERIFICATION_PATTERN=your_pattern
SMS_VERIFICATION_ORDER_PATTERN=your_pattern

# Promo Defaults
PROMO_DISCOUNT_PERCENT=10
PROMO_VALID_DAYS=7

```

---

## 📊 Key Features Explained

### 📦 Basket System
- Supports both **Products** and **Packages** (bundles)
- Automatic stock validation when viewing basket
- Merge guest basket with user basket on login/signup
- Real-time price, discount, and weight calculation

### 💰 Discount Types
- **Individual Product Discounts**: Per-product percentage discounts with expiry dates
- **Group Discounts**: Category/brand-wide discounts applied to multiple products
- **User Promo Codes**: Personalized discount codes sent via SMS scheduler
- **Package Discounts**: Bundle-specific discounts

### 🔔 Alert/Notification System
- Target types: `all` users, specific `user`(s), or by user `status`
- Source tracking: `order`, `discount`, `promo`, `system`, `manual`
- Read/unread tracking per user
- Automatically created on: order placed, payment verified, comment replied, ticket answered, discount created, order shipped, etc.

### 📈 Sales Analytics
- Persian (Jalaali) calendar support
- Monthly breakdown: revenue, profit, shipping costs, margins
- Top products & packages tracking
- Free vs paid order comparison

### 🛍️ Payment Flow
1. User selects products/packages → `localBasket` or `userFullBasket` for pricing
2. `createCheckoutPayment` → Creates Zarinpal payment + Order + Alert
3. User pays on Zarinpal
4. `verifyOrderPayment` → Verifies payment, empties basket, reduces stock, sends SMS + Alert

---

## 🏗️ Architecture Notes

- **GraphQL Context**: JWT token from `Authorization` header is verified and user is attached to every resolver context
- **File Upload**: Separate REST endpoint `/upload` handles multipart file uploads (images only, max 5 files, 5MB each)
- **Scheduler**: Daily job finds users with inactive baskets (2+ days) and sends promo codes via SMS
- **Checkout TTL**: Checkout documents auto-expire after 1 hour via MongoDB TTL index
- **Phone Normalization**: All phone numbers are normalized to `09XXXXXXXXX` format before saving

---

## 📬 Contact

For feedback, suggestions or questions, feel free to contact me at:

- 📧 Email: [jvd.malek0079@gmail.com](mailto:jvd.malek0079@gmail.com)
- 🔗 [LinkedIn](https://www.linkedin.com/in/javad-malekian)  
- 💻 [Front-end Repository](https://github.com/jvd-malek/neynegar-next-version)
  
Visit [neynegar1.ir](https://neynegar1.ir) for more information or to get in touch.

---

GraphQL playground (local dev): http://localhost:4000/graphql

---

## 📄 License
MIT © 2025 | Developed by Javad Malek
