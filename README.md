# 🛠️ Mr. Handy - House Maintenance, One Click Away

Mr. Handy is a modern, two-sided marketplace connecting homeowners with trusted local professionals including plumbers, electricians, and carpenters. Built with speed and reliability in mind.

---

## 🚀 Getting Started

Experience the platform in your local development environment:

1. **Install Dependencies** (if you haven't already):
   ```bash
   npm install
   ```

2. **Run the Development Server**:
   ```bash
   npm run dev
   ```

3. **Visit the App**:
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🗄️ Database Management

We use **Prisma** as our ORM and **SQLite** for the database. To manage your data visually and "beautifully":

### Open Prisma Studio
Run the following command to open a powerful, interactive dashboard for your database:

```bash
npx prisma studio
```

### Sync Schema Changes
Whenever you modify `prisma/schema.prisma`, run this command to update your local database structure:

```bash
npx prisma db push
```

> [!TIP]
> **Prisma Studio** will host a local web application (usually at `http://localhost:5555`) where you can view, edit, and delete records in the `User`, `Worker`, and `Booking` tables without writing a single line of SQL.

---

## ✨ Key Features

- **🏠 Multi-Service Booking**: Seamless workflows for Plumbing, Electrical, and Carpentry services.
- **🔐 Secure Authentication**: Custom-built login and sign-up system with encrypted passwords using `bcryptjs`.
- **🌍 Multi-language Support**: Fully localized in English, Hindi, and Marathi.
- **🎨 Premium UI**: Smooth transitions and modern aesthetics powered by Framer Motion and Tailwind CSS.
- **📱 Responsive Design**: Optimized for both mobile and desktop experiences.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Database**: [Prisma](https://www.prisma.io/) with SQLite
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🏗️ Project Structure

- `/src/app`: Next.js pages and layouts
- `/src/actions`: Server actions for database operations (Auth, Bookings)
- `/src/components`: Reusable UI components
- `/prisma`: Database schema and migrations
