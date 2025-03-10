# 🍽️ Responsive Restaurant Website

Bu proje, **Next.js, React ve Tailwind CSS** kullanılarak geliştirilmiş **responsive bir restoran web sitesi** arayüzü ve backend'ini içermektedir. Kullanıcılar, restoran menüsünü görüntüleyebilir, ürünleri sepete ekleyebilir, ödeme yapabilir ve kullanıcı hesaplarını yönetebilir.

## 🚀 Teknolojiler

### **Frontend**

- **Next.js**: React tabanlı framework, server-side rendering ve statik site üretme
- **React.js**: Kullanıcı arayüzü oluşturmak için kullanılan JavaScript kütüphanesi
- **Tailwind CSS**: Hızlı ve özelleştirilebilir CSS framework’ü
- **Zustand**: Global state yönetimi

### **Backend**

- **NextAuth.js**: Kimlik doğrulama ve kullanıcı yönetimi
- **Prisma**: ORM olarak PostgreSQL veritabanı yönetimi
- **PostgreSQL**: Docker ile kullanılan ilişkisel veritabanı
- **Stripe**: Güvenli ödeme işlemleri
- **Docker**: PostgreSQL konteyner yönetimi

## 📌 Özellikler

### **Kullanıcı Özellikleri**

- **Kayıt ve Giriş İşlemleri** (NextAuth ile kimlik doğrulama)
- **Ürünleri Görüntüleme ve Sepete Ekleme**
- **Ödeme Yapma** (Stripe entegrasyonu)
- **Sipariş Geçmişini Görüntüleme**

## 📂 Kurulum

Projeyi yerel bilgisayarınızda çalıştırmak için aşağıdaki adımları izleyebilirsiniz:

### 1. Repo'yu klonlayın:

```bash
git clone https://github.com/tunahanbucak/restaurant
```

### 2. Projeye gidin:

```bash
cd restaurant
```

### 3. Gerekli bağımlılıkları yükleyin:

```bash
npm install
```

### 4. Çevre Değişkenlerini Ayarlayın:

Projede `.env.local` dosyası oluşturup aşağıdaki bilgileri ekleyin:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/restaurant
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PUBLIC_KEY=your_stripe_public_key
```

### 5. Docker ile PostgreSQL Konteynerini Başlatın:

```bash
docker-compose up -d
```

### 6. Prisma ile Veritabanını Migrasyon Yapın:

```bash
npx prisma migrate dev
```

### 7. Geliştirme Ortamını Başlatın:

```bash
npm run dev
```

Proje, `http://localhost:3000` adresinde çalışacaktır.

## 🎯 Geliştirme Süreci

- **Frontend**: React bileşenleri ile oluşturulmuş, Zustand kullanılarak state yönetimi yapılmıştır.
- **Backend**: NextAuth.js kullanılarak kimlik doğrulama sağlanmış, Prisma ile PostgreSQL bağlantısı yapılmıştır.
- **Ödeme Sistemi**: Stripe entegrasyonu ile güvenli ödeme işlemleri gerçekleştirilmiştir.
