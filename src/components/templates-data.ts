export const TEMPLATE_CATEGORIES = [
  "Marketing & Promotions",
  "E-commerce",
  "Technology",
  "Healthcare",
  "Education",
  "Real Estate",
  "Non-Profit",
  "Events",
  "Customer Service",
  "Sales"
];

export const TEMPLATES_DATA = [
  // Marketing & Promotions (10)
  {
    id: "marketing_001",
    name: "Summer Sale Launch",
    category: "Marketing & Promotions",
    description: "Announce your summer sale with vibrant energy",
    subject: "☀️ Summer Sale is Here! Up to 50% OFF",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80",
    body: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
        <h1 style="text-align: center; font-size: 36px; margin-bottom: 20px;">☀️ SUMMER SALE</h1>
        <p style="font-size: 24px; text-align: center; margin-bottom: 30px;">Up to 50% OFF Everything!</p>
        <div style="background: white; color: #333; padding: 30px; border-radius: 10px;">
          <p style="font-size: 18px; line-height: 1.6;">Don't miss out on our biggest sale of the season!</p>
          <ul style="font-size: 16px; line-height: 2;">
            <li>Free shipping on orders over $50</li>
            <li>Extra 10% off with code SUMMER10</li>
            <li>Limited time only - ends soon!</li>
          </ul>
          <div style="text-align: center; margin-top: 30px;">
            <a href="#" style="display: inline-block; padding: 15px 40px; background: #667eea; color: white; text-decoration: none; border-radius: 5px; font-size: 18px; font-weight: bold;">Shop Now</a>
          </div>
        </div>
      </div>
    `,
    variables: []
  },
  {
    id: "marketing_002",
    name: "Product Launch Announcement",
    category: "Marketing & Promotions",
    description: "Introduce your new product with excitement",
    subject: "🚀 Introducing Our Latest Innovation",
    image: "https://images.unsplash.com/photo-1526178613552-2b45c6c302f0?w=800&q=80",
    body: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f5f5f5;">
        <div style="background: #2c3e50; color: white; padding: 40px 20px; text-align: center;">
          <h1 style="font-size: 32px; margin-bottom: 10px;">🚀 BIG NEWS!</h1>
          <p style="font-size: 20px;">We've launched something amazing</p>
        </div>
        <div style="padding: 40px 20px; background: white;">
          <h2 style="color: #2c3e50; margin-bottom: 20px;">Meet Our Latest Innovation</h2>
          <p style="font-size: 16px; line-height: 1.8; color: #555;">
            After months of development, we're thrilled to introduce our newest product. 
            Designed with you in mind, it's faster, smarter, and more powerful than ever.
          </p>
          <div style="margin: 30px 0; padding: 20px; background: #ecf0f1; border-radius: 8px;">
            <h3 style="color: #2c3e50; margin-bottom: 15px;">Key Features:</h3>
            <ul style="color: #555; line-height: 2;">
              <li>Lightning-fast performance</li>
              <li>Intuitive user interface</li>
              <li>Advanced security features</li>
              <li>24/7 customer support</li>
            </ul>
          </div>
          <div style="text-align: center;">
            <a href="#" style="display: inline-block; padding: 15px 50px; background: #3498db; color: white; text-decoration: none; border-radius: 25px; font-size: 16px; font-weight: bold;">Learn More</a>
          </div>
        </div>
      </div>
    `,
    variables: []
  },
  {
    id: "marketing_003",
    name: "Newsletter Campaign",
    category: "Marketing & Promotions",
    description: "Modern newsletter design for engagement",
    subject: "📰 This Month's Highlights",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80",
    body: `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: white;">
        <div style="padding: 30px; border-bottom: 3px solid #e74c3c;">
          <h1 style="color: #2c3e50; font-size: 36px; margin: 0;">Monthly Newsletter</h1>
          <p style="color: #7f8c8d; font-size: 14px; margin-top: 5px;">{{month}} Edition</p>
        </div>
        <div style="padding: 30px;">
          <h2 style="color: #e74c3c; margin-bottom: 15px;">What's New This Month</h2>
          <p style="color: #555; line-height: 1.8; margin-bottom: 25px;">
            Discover the latest updates, tips, and insights from our team.
          </p>
          <div style="border-left: 4px solid #e74c3c; padding-left: 20px; margin: 25px 0;">
            <h3 style="color: #2c3e50; margin-bottom: 10px;">Featured Article</h3>
            <p style="color: #555; line-height: 1.6;">
              Learn how to maximize your productivity with our latest tools and techniques.
            </p>
          </div>
          <div style="text-align: center; margin-top: 30px;">
            <a href="#" style="display: inline-block; padding: 12px 35px; background: #e74c3c; color: white; text-decoration: none; border-radius: 5px;">Read Full Newsletter</a>
          </div>
        </div>
      </div>
    `,
    variables: ["month"]
  },
  {
    id: "marketing_004",
    name: "Limited Time Offer",
    category: "Marketing & Promotions",
    description: "Create urgency with time-sensitive deals",
    subject: "⏰ Only 24 Hours Left!",
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&q=80",
    body: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #fff3cd; padding: 20px;">
        <div style="background: #ff6b6b; color: white; padding: 30px; text-align: center; border-radius: 10px;">
          <h1 style="font-size: 42px; margin: 0;">⏰ HURRY!</h1>
          <p style="font-size: 24px; margin: 10px 0;">Only 24 Hours Left</p>
        </div>
        <div style="background: white; padding: 30px; margin-top: 20px; border-radius: 10px;">
          <h2 style="color: #ff6b6b; text-align: center;">Don't Miss This Amazing Deal!</h2>
          <p style="font-size: 18px; text-align: center; color: #555; line-height: 1.6;">
            This is your last chance to save big. Offer expires in 24 hours!
          </p>
          <div style="background: #fff3cd; padding: 20px; margin: 20px 0; border-radius: 5px; text-align: center;">
            <p style="font-size: 16px; color: #333; margin: 0;">Use code:</p>
            <p style="font-size: 32px; font-weight: bold; color: #ff6b6b; margin: 10px 0;">FLASH24</p>
          </div>
          <div style="text-align: center;">
            <a href="#" style="display: inline-block; padding: 18px 50px; background: #ff6b6b; color: white; text-decoration: none; border-radius: 30px; font-size: 18px; font-weight: bold;">Claim Your Discount</a>
          </div>
        </div>
      </div>
    `,
    variables: []
  },
  {
    id: "marketing_005",
    name: "Brand Story Email",
    category: "Marketing & Promotions",
    description: "Share your brand's journey and values",
    subject: "Our Story: Why We Do What We Do",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    body: `
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: white;">
        <div style="padding: 40px 30px; background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%); color: white; text-align: center;">
          <h1 style="font-size: 36px; margin-bottom: 15px;">Our Story</h1>
          <p style="font-size: 18px; opacity: 0.9;">The journey that brought us here</p>
        </div>
        <div style="padding: 40px 30px;">
          <p style="font-size: 16px; line-height: 1.8; color: #333; margin-bottom: 20px;">
            Every great company has a story. Here's ours...
          </p>
          <p style="font-size: 16px; line-height: 1.8; color: #555; margin-bottom: 25px;">
            We started with a simple idea: to make a difference in people's lives. 
            Today, we're proud to serve thousands of customers worldwide, staying true 
            to our core values of quality, integrity, and innovation.
          </p>
          <div style="background: #f8f9fa; padding: 25px; border-radius: 8px; margin: 30px 0;">
            <h3 style="color: #1e3c72; margin-bottom: 15px;">Our Mission</h3>
            <p style="color: #555; line-height: 1.6;">
              To deliver exceptional products and services that empower our customers 
              to achieve their goals and dreams.
            </p>
          </div>
          <div style="text-align: center;">
            <a href="#" style="display: inline-block; padding: 14px 40px; background: #1e3c72; color: white; text-decoration: none; border-radius: 5px; font-size: 16px;">Learn More About Us</a>
          </div>
        </div>
      </div>
    `,
    variables: []
  },
  {
    id: "marketing_006",
    name: "Referral Program",
    category: "Marketing & Promotions",
    description: "Encourage customers to refer friends",
    subject: "🎁 Give $10, Get $10",
    image: "https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?w=800&q=80",
    body: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: white; padding: 20px;">
        <div style="text-align: center; padding: 30px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; border-radius: 10px;">
          <h1 style="font-size: 36px; margin-bottom: 10px;">🎁 Share the Love</h1>
          <p style="font-size: 22px;">Give $10, Get $10</p>
        </div>
        <div style="padding: 30px 0;">
          <h2 style="color: #333; text-align: center; margin-bottom: 20px;">Refer a Friend & Earn Rewards</h2>
          <p style="font-size: 16px; line-height: 1.8; color: #555; text-align: center; margin-bottom: 30px;">
            Love our products? Share them with friends and you'll both get $10 off your next purchase!
          </p>
          <div style="background: #f8f9fa; padding: 25px; border-radius: 8px; margin: 25px 0;">
            <h3 style="color: #f5576c; margin-bottom: 15px;">How It Works:</h3>
            <ol style="color: #555; line-height: 2; padding-left: 20px;">
              <li>Share your unique referral link</li>
              <li>Your friend makes their first purchase</li>
              <li>You both get $10 off your next order</li>
            </ol>
          </div>
          <div style="background: #fff; border: 2px dashed #f5576c; padding: 20px; border-radius: 8px; text-align: center; margin: 25px 0;">
            <p style="color: #555; margin-bottom: 10px;">Your Referral Code:</p>
            <p style="font-size: 28px; font-weight: bold; color: #f5576c; margin: 10px 0;">FRIEND10</p>
          </div>
          <div style="text-align: center;">
            <a href="#" style="display: inline-block; padding: 16px 45px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; text-decoration: none; border-radius: 25px; font-size: 18px; font-weight: bold;">Share Now</a>
          </div>
        </div>
      </div>
    `,
    variables: []
  },
  {
    id: "marketing_007",
    name: "Event Invitation",
    category: "Marketing & Promotions",
    description: "Invite customers to exclusive events",
    subject: "🎉 You're Invited to Our Exclusive Event",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
    body: `
      <div style="font-family: 'Trebuchet MS', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: white;">
        <div style="background: #2d3748; color: white; padding: 40px 20px; text-align: center;">
          <h1 style="font-size: 38px; margin-bottom: 15px;">🎉 You're Invited!</h1>
          <p style="font-size: 20px; opacity: 0.9;">Join us for an exclusive event</p>
        </div>
        <div style="padding: 40px 30px;">
          <p style="font-size: 18px; color: #333; line-height: 1.8; margin-bottom: 25px;">
            We're hosting an exclusive event and we'd love for you to join us!
          </p>
          <div style="background: #edf2f7; padding: 25px; border-radius: 10px; margin: 25px 0;">
            <h3 style="color: #2d3748; margin-bottom: 15px; font-size: 20px;">Event Details:</h3>
            <p style="color: #4a5568; margin: 10px 0;"><strong>Date:</strong> Friday, December 15th</p>
            <p style="color: #4a5568; margin: 10px 0;"><strong>Time:</strong> 6:00 PM - 9:00 PM</p>
            <p style="color: #4a5568; margin: 10px 0;"><strong>Location:</strong> Grand Hotel Ballroom</p>
          </div>
          <p style="font-size: 16px; color: #555; line-height: 1.6; margin: 25px 0;">
            Enjoy an evening of networking, entertainment, and exclusive previews of our latest offerings.
          </p>
          <div style="text-align: center; margin-top: 30px;">
            <a href="#" style="display: inline-block; padding: 16px 50px; background: #2d3748; color: white; text-decoration: none; border-radius: 5px; font-size: 18px; font-weight: bold;">RSVP Now</a>
          </div>
        </div>
      </div>
    `,
    variables: []
  },
  {
    id: "marketing_008",
    name: "Customer Appreciation",
    category: "Marketing & Promotions",
    description: "Thank loyal customers with special offers",
    subject: "💝 Thank You for Being Amazing!",
    image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=800&q=80",
    body: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(180deg, #ffecd2 0%, #fcb69f 100%); padding: 30px;">
        <div style="background: white; border-radius: 15px; overflow: hidden;">
          <div style="padding: 40px 30px; text-align: center;">
            <h1 style="font-size: 42px; color: #ff6b6b; margin-bottom: 15px;">💝</h1>
            <h2 style="font-size: 32px; color: #333; margin-bottom: 10px;">Thank You!</h2>
            <p style="font-size: 18px; color: #666;">For being an amazing customer</p>
          </div>
          <div style="padding: 0 30px 40px;">
            <p style="font-size: 16px; line-height: 1.8; color: #555; text-align: center; margin-bottom: 25px;">
              Your support means the world to us. As a token of our appreciation, 
              here's an exclusive gift just for you!
            </p>
            <div style="background: #fff5f5; padding: 25px; border-radius: 10px; text-align: center; margin: 25px 0;">
              <p style="font-size: 18px; color: #333; margin-bottom: 10px;">Your Exclusive Code:</p>
              <p style="font-size: 36px; font-weight: bold; color: #ff6b6b; margin: 15px 0; letter-spacing: 2px;">THANKYOU20</p>
              <p style="font-size: 16px; color: #666;">20% off your next purchase</p>
            </div>
            <div style="text-align: center; margin-top: 30px;">
              <a href="#" style="display: inline-block; padding: 16px 45px; background: #ff6b6b; color: white; text-decoration: none; border-radius: 25px; font-size: 18px; font-weight: bold;">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
    `,
    variables: []
  },
  {
    id: "marketing_009",
    name: "Survey Request",
    category: "Marketing & Promotions",
    description: "Gather customer feedback",
    subject: "📊 We Want Your Feedback",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    body: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: white; padding: 20px;">
        <div style="text-align: center; padding: 30px; background: #4a90e2; color: white; border-radius: 10px 10px 0 0;">
          <h1 style="font-size: 36px; margin-bottom: 10px;">📊 Your Opinion Matters</h1>
          <p style="font-size: 18px;">Help us serve you better</p>
        </div>
        <div style="padding: 40px 30px; border: 2px solid #4a90e2; border-top: none; border-radius: 0 0 10px 10px;">
          <p style="font-size: 16px; line-height: 1.8; color: #333; margin-bottom: 20px;">
            Hi there!
          </p>
          <p style="font-size: 16px; line-height: 1.8; color: #555; margin-bottom: 25px;">
            We're always looking for ways to improve. Would you spare 2 minutes to share your thoughts?
          </p>
          <div style="background: #f0f8ff; padding: 20px; border-radius: 8px; margin: 25px 0;">
            <h3 style="color: #4a90e2; margin-bottom: 15px;">What to Expect:</h3>
            <ul style="color: #555; line-height: 2;">
              <li>Quick 5-question survey</li>
              <li>Takes only 2 minutes</li>
              <li>Your responses are anonymous</li>
            </ul>
          </div>
          <div style="text-align: center; margin-top: 30px;">
            <a href="#" style="display: inline-block; padding: 16px 45px; background: #4a90e2; color: white; text-decoration: none; border-radius: 5px; font-size: 18px; font-weight: bold;">Take Survey</a>
          </div>
          <p style="text-align: center; font-size: 14px; color: #999; margin-top: 20px;">
            Thank you for helping us improve! 🙏
          </p>
        </div>
      </div>
    `,
    variables: []
  },
  {
    id: "marketing_010",
    name: "Holiday Special",
    category: "Marketing & Promotions",
    description: "Seasonal holiday promotions",
    subject: "🎄 Holiday Special - Limited Time Only",
    image: "https://images.unsplash.com/photo-1512909006721-3d6018887383?w=800&q=80",
    body: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #134e5e 0%, #71b280 100%);">
        <div style="padding: 40px 20px; text-align: center; color: white;">
          <h1 style="font-size: 48px; margin-bottom: 10px;">🎄</h1>
          <h2 style="font-size: 36px; margin-bottom: 15px;">Holiday Special</h2>
          <p style="font-size: 20px;">Spread joy with our exclusive offers</p>
        </div>
        <div style="background: white; padding: 40px 30px; margin: 0 20px 20px; border-radius: 10px;">
          <h3 style="color: #134e5e; font-size: 24px; text-align: center; margin-bottom: 25px;">
            🎁 Holiday Gift Guide
          </h3>
          <p style="font-size: 16px; line-height: 1.8; color: #555; margin-bottom: 25px; text-align: center;">
            Find the perfect gift for everyone on your list. Special holiday pricing on all items!
          </p>
          <div style="background: #f0fff4; border-left: 4px solid #71b280; padding: 20px; margin: 25px 0;">
            <h4 style="color: #134e5e; margin-bottom: 10px;">Holiday Perks:</h4>
            <ul style="color: #555; line-height: 2;">
              <li>30% off sitewide</li>
              <li>Free gift wrapping</li>
              <li>Extended returns through January</li>
              <li>Free shipping on all orders</li>
            </ul>
          </div>
          <div style="text-align: center; margin-top: 30px;">
            <a href="#" style="display: inline-block; padding: 18px 50px; background: linear-gradient(135deg, #134e5e 0%, #71b280 100%); color: white; text-decoration: none; border-radius: 25px; font-size: 18px; font-weight: bold;">Shop Holiday Gifts</a>
          </div>
        </div>
      </div>
    `,
    variables: []
  },

  // E-commerce Templates (10)
  {
    id: "ecommerce_001",
    name: "Order Confirmation",
    category: "E-commerce",
    description: "Professional order confirmation email",
    subject: "✅ Order Confirmed #{{order_number}}",
    image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&q=80",
    body: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: white;">
        <div style="background: #10b981; color: white; padding: 30px 20px; text-align: center;">
          <h1 style="font-size: 36px; margin-bottom: 10px;">✅ Order Confirmed!</h1>
          <p style="font-size: 18px;">Thank you for your purchase</p>
        </div>
        <div style="padding: 40px 30px;">
          <p style="font-size: 16px; color: #333; margin-bottom: 20px;">
            Hi {{customer_name}},
          </p>
          <p style="font-size: 16px; line-height: 1.6; color: #555; margin-bottom: 25px;">
            Your order has been confirmed and will be shipped shortly.
          </p>
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 25px 0;">
            <h3 style="color: #333; margin-bottom: 15px;">Order Details:</h3>
            <p style="color: #555; margin: 10px 0;"><strong>Order Number:</strong> #{{order_number}}</p>
            <p style="color: #555; margin: 10px 0;"><strong>Order Date:</strong> {{order_date}}</p>
            <p style="color: #555; margin: 10px 0;"><strong>Total:</strong> \${{order_total}}</p>
          </div>
          <div style="text-align: center; margin-top: 30px;">
            <a href="#" style="display: inline-block; padding: 14px 35px; background: #10b981; color: white; text-decoration: none; border-radius: 5px; font-size: 16px; font-weight: bold;">Track Your Order</a>
          </div>
        </div>
      </div>
    `,
    variables: ["customer_name", "order_number", "order_date", "order_total"]
  },
  {
    id: "ecommerce_002",
    name: "Shipping Notification",
    category: "E-commerce",
    description: "Notify customers when order ships",
    subject: "📦 Your Order Has Shipped!",
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&q=80",
    body: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: white; padding: 20px;">
        <div style="text-align: center; padding: 30px; background: #3b82f6; color: white; border-radius: 10px;">
          <h1 style="font-size: 42px; margin-bottom: 10px;">📦</h1>
          <h2 style="font-size: 32px; margin-bottom: 10px;">On Its Way!</h2>
          <p style="font-size: 18px;">Your order has been shipped</p>
        </div>
        <div style="padding: 30px 0;">
          <p style="font-size: 16px; color: #333; line-height: 1.8; margin-bottom: 25px;">
            Great news! Your order is on its way to you.
          </p>
          <div style="background: #eff6ff; padding: 25px; border-radius: 8px; margin: 25px 0;">
            <h3 style="color: #3b82f6; margin-bottom: 15px;">Tracking Information:</h3>
            <p style="color: #555; margin: 10px 0;"><strong>Tracking Number:</strong> {{tracking_number}}</p>
            <p style="color: #555; margin: 10px 0;"><strong>Carrier:</strong> {{carrier}}</p>
            <p style="color: #555; margin: 10px 0;"><strong>Expected Delivery:</strong> {{delivery_date}}</p>
          </div>
          <div style="text-align: center; margin-top: 30px;">
            <a href="#" style="display: inline-block; padding: 16px 40px; background: #3b82f6; color: white; text-decoration: none; border-radius: 5px; font-size: 18px; font-weight: bold;">Track Package</a>
          </div>
        </div>
      </div>
    `,
    variables: ["tracking_number", "carrier", "delivery_date"]
  },
  {
    id: "ecommerce_003",
    name: "Abandoned Cart",
    category: "E-commerce",
    description: "Recover abandoned shopping carts",
    subject: "🛒 You Left Something Behind!",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    body: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: white;">
        <div style="padding: 40px 30px; text-align: center;">
          <h1 style="font-size: 48px; margin-bottom: 15px;">🛒</h1>
          <h2 style="font-size: 32px; color: #333; margin-bottom: 15px;">Don't Forget About These!</h2>
          <p style="font-size: 18px; color: #666;">Your items are waiting for you</p>
        </div>
        <div style="padding: 0 30px 40px;">
          <p style="font-size: 16px; line-height: 1.8; color: #555; text-align: center; margin-bottom: 30px;">
            You left some amazing items in your cart. Complete your purchase now before they're gone!
          </p>
          <div style="background: #f9fafb; padding: 25px; border-radius: 10px; margin: 25px 0;">
            <h3 style="color: #333; margin-bottom: 15px;">Items in Your Cart:</h3>
            <p style="color: #555; line-height: 1.8;">{{cart_items}}</p>
            <p style="font-size: 20px; font-weight: bold; color: #10b981; margin-top: 15px;">
              Total: \${{cart_total}}
            </p>
          </div>
          <div style="background: #fef3c7; padding: 20px; border-radius: 8px; text-align: center; margin: 25px 0;">
            <p style="font-size: 16px; color: #92400e; margin-bottom: 10px;">Special Offer!</p>
            <p style="font-size: 20px; font-weight: bold; color: #b45309;">Get 10% OFF with code: COMEBACK10</p>
          </div>
          <div style="text-align: center; margin-top: 30px;">
            <a href="#" style="display: inline-block; padding: 16px 45px; background: #10b981; color: white; text-decoration: none; border-radius: 25px; font-size: 18px; font-weight: bold;">Complete Purchase</a>
          </div>
        </div>
      </div>
    `,
    variables: ["cart_items", "cart_total"]
  },
  {
    id: "ecommerce_004",
    name: "Product Review Request",
    category: "E-commerce",
    description: "Ask customers for product reviews",
    subject: "⭐ How's Your Recent Purchase?",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
    body: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: white; padding: 20px;">
        <div style="text-align: center; padding: 30px;">
          <h1 style="font-size: 42px; margin-bottom: 15px;">⭐⭐⭐⭐⭐</h1>
          <h2 style="font-size: 32px; color: #333; margin-bottom: 10px;">How Did We Do?</h2>
          <p style="font-size: 18px; color: #666;">Share your experience</p>
        </div>
        <div style="padding: 0 30px 30px;">
          <p style="font-size: 16px; line-height: 1.8; color: #555; margin-bottom: 25px;">
            Hi {{customer_name}},
          </p>
          <p style="font-size: 16px; line-height: 1.8; color: #555; margin-bottom: 25px;">
            We hope you're enjoying your recent purchase! Your feedback helps us improve and helps other 
            customers make informed decisions.
          </p>
          <div style="background: #fef9e7; padding: 25px; border-radius: 10px; text-align: center; margin: 30px 0;">
            <h3 style="color: #f59e0b; margin-bottom: 15px;">Leave a Review & Get 10% OFF</h3>
            <p style="color: #92400e; font-size: 16px;">Your next purchase</p>
          </div>
          <div style="text-align: center; margin-top: 30px;">
            <a href="#" style="display: inline-block; padding: 16px 45px; background: #f59e0b; color: white; text-decoration: none; border-radius: 5px; font-size: 18px; font-weight: bold;">Write a Review</a>
          </div>
          <p style="text-align: center; font-size: 14px; color: #999; margin-top: 25px;">
            Takes less than 2 minutes!
          </p>
        </div>
      </div>
    `,
    variables: ["customer_name"]
  },
  {
    id: "ecommerce_005",
    name: "Back in Stock",
    category: "E-commerce",
    description: "Notify customers about restocked items",
    subject: "🎉 Back in Stock: {{product_name}}",
    image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=800&q=80",
    body: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: white;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px 20px; text-align: center;">
          <h1 style="font-size: 42px; margin-bottom: 10px;">🎉 Great News!</h1>
          <h2 style="font-size: 28px; margin-bottom: 10px;">{{product_name}} is Back!</h2>
          <p style="font-size: 18px;">The item you wanted is back in stock</p>
        </div>
        <div style="padding: 40px 30px;">
          <p style="font-size: 16px; line-height: 1.8; color: #555; margin-bottom: 25px;">
            Hi {{customer_name}},
          </p>
          <p style="font-size: 16px; line-height: 1.8; color: #555; margin-bottom: 25px;">
            The wait is over! The item you've been waiting for is back in stock. Don't miss out this time!
          </p>
          <div style="background: #f9fafb; padding: 25px; border-radius: 10px; margin: 30px 0; text-align: center;">
            <h3 style="color: #333; margin-bottom: 15px;">{{product_name}}</h3>
            <p style="font-size: 24px; font-weight: bold; color: #667eea; margin: 15px 0;">\${{product_price}}</p>
            <p style="color: #ef4444; font-size: 14px; font-weight: bold;">Limited quantity available!</p>
          </div>
          <div style="text-align: center; margin-top: 30px;">
            <a href="#" style="display: inline-block; padding: 18px 50px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 25px; font-size: 18px; font-weight: bold;">Shop Now</a>
          </div>
        </div>
      </div>
    `,
    variables: ["customer_name", "product_name", "product_price"]
  },
  {
    id: "ecommerce_006",
    name: "Price Drop Alert",
    category: "E-commerce",
    description: "Alert customers about price reductions",
    subject: "💰 Price Drop on {{product_name}}!",
    image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=800&q=80",
    body: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: white; padding: 20px;">
        <div style="background: #10b981; color: white; padding: 35px 20px; text-align: center; border-radius: 10px;">
          <h1 style="font-size: 48px; margin-bottom: 10px;">💰</h1>
          <h2 style="font-size: 36px; margin-bottom: 10px;">Price Drop Alert!</h2>
          <p style="font-size: 20px;">Save big on {{product_name}}</p>
        </div>
        <div style="padding: 30px 0;">
          <p style="font-size: 16px; line-height: 1.8; color: #555; text-align: center; margin-bottom: 25px;">
            Good news! The price on an item you've been watching just dropped!
          </p>
          <div style="background: #f0fdf4; padding: 30px; border-radius: 10px; text-align: center; margin: 25px 0;">
            <h3 style="color: #333; font-size: 22px; margin-bottom: 20px;">{{product_name}}</h3>
            <p style="text-decoration: line-through; color: #999; font-size: 20px; margin-bottom: 10px;">
              Was: \${{original_price}}
            </p>
            <p style="font-size: 36px; font-weight: bold; color: #10b981; margin: 15px 0;">
              Now: \${{sale_price}}
            </p>
            <p style="font-size: 18px; color: #059669; font-weight: bold; margin-top: 10px;">
              You Save: \${{savings}} ({{discount_percent}}% OFF)
            </p>
          </div>
          <div style="text-align: center; margin-top: 30px;">
            <a href="#" style="display: inline-block; padding: 18px 50px; background: #10b981; color: white; text-decoration: none; border-radius: 25px; font-size: 18px; font-weight: bold;">Grab This Deal</a>
          </div>
          <p style="text-align: center; font-size: 14px; color: #ef4444; margin-top: 20px; font-weight: bold;">
            ⏰ Limited time offer!
          </p>
        </div>
      </div>
    `,
    variables: ["product_name", "original_price", "sale_price", "savings", "discount_percent"]
  },
  {
    id: "ecommerce_007",
    name: "Loyalty Points Update",
    category: "E-commerce",
    description: "Update customers on loyalty points",
    subject: "✨ You've Earned {{points}} Loyalty Points!",
    image: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=800&q=80",
    body: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #ffeaa7 0%, #fdcb6e 100%); padding: 30px;">
        <div style="background: white; border-radius: 15px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%); color: white; padding: 40px 20px; text-align: center;">
            <h1 style="font-size: 48px; margin-bottom: 10px;">✨</h1>
            <h2 style="font-size: 32px; margin-bottom: 10px;">Congratulations!</h2>
            <p style="font-size: 20px;">You've earned rewards points</p>
          </div>
          <div style="padding: 40px 30px;">
            <p style="font-size: 16px; line-height: 1.8; color: #555; text-align: center; margin-bottom: 30px;">
              Your loyalty has been rewarded! Here's your updated points balance:
            </p>
            <div style="background: #f0f3ff; padding: 30px; border-radius: 10px; text-align: center; margin: 30px 0;">
              <p style="font-size: 18px; color: #666; margin-bottom: 15px;">Your Points Balance</p>
              <p style="font-size: 48px; font-weight: bold; color: #6c5ce7; margin: 20px 0;">{{total_points}}</p>
              <p style="font-size: 16px; color: #10b981; font-weight: bold; margin-top: 15px;">
                +{{points}} points earned from recent purchase
              </p>
            </div>
            <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 25px 0;">
              <h3 style="color: #92400e; margin-bottom: 10px; text-align: center;">What You Can Do:</h3>
              <ul style="color: #92400e; line-height: 2;">
                <li>Redeem 100 points = $10 off</li>
                <li>Earn double points on your birthday</li>
                <li>Exclusive member-only deals</li>
              </ul>
            </div>
            <div style="text-align: center; margin-top: 30px;">
              <a href="#" style="display: inline-block; padding: 16px 45px; background: linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%); color: white; text-decoration: none; border-radius: 25px; font-size: 18px; font-weight: bold;">View Rewards</a>
            </div>
          </div>
        </div>
      </div>
    `,
    variables: ["points", "total_points"]
  },
  {
    id: "ecommerce_008",
    name: "New Arrival",
    category: "E-commerce",
    description: "Announce new products",
    subject: "✨ New Arrivals You'll Love",
    image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=800&q=80",
    body: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: white;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px 20px; text-align: center;">
          <h1 style="font-size: 42px; margin-bottom: 10px;">✨ Fresh & New</h1>
          <h2 style="font-size: 28px; margin-bottom: 10px;">Just In: New Arrivals</h2>
          <p style="font-size: 18px;">Be the first to shop our latest collection</p>
        </div>
        <div style="padding: 40px 30px;">
          <p style="font-size: 16px; line-height: 1.8; color: #555; text-align: center; margin-bottom: 30px;">
            Discover our newest additions! Fresh styles just arrived and they're selling fast.
          </p>
          <div style="background: #f9fafb; padding: 25px; border-radius: 10px; margin: 30px 0;">
            <h3 style="color: #333; margin-bottom: 20px; text-align: center;">What's New:</h3>
            <ul style="color: #555; line-height: 2.5; list-style: none; padding: 0;">
              <li>✓ Latest trending styles</li>
              <li>✓ Exclusive designs</li>
              <li>✓ Limited quantities</li>
              <li>✓ Premium quality materials</li>
            </ul>
          </div>
          <div style="background: #fff7ed; padding: 20px; border-radius: 8px; text-align: center; margin: 25px 0;">
            <p style="font-size: 18px; color: #9a3412; font-weight: bold;">
              🎁 Early Bird Special: 15% OFF with code NEWIN15
            </p>
          </div>
          <div style="text-align: center; margin-top: 30px;">
            <a href="#" style="display: inline-block; padding: 18px 50px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 25px; font-size: 18px; font-weight: bold;">Shop New Arrivals</a>
          </div>
        </div>
      </div>
    `,
    variables: []
  },
  {
    id: "ecommerce_009",
    name: "VIP Member Exclusive",
    category: "E-commerce",
    description: "Special offers for VIP members",
    subject: "👑 VIP Exclusive: Early Access Sale",
    image: "https://images.unsplash.com/photo-1607082348094-b82e871dbc36?w=800&q=80",
    body: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); padding: 30px;">
        <div style="background: white; border-radius: 15px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #f8b500 0%, #ffc947 100%); color: #1a1a2e; padding: 40px 20px; text-align: center;">
            <h1 style="font-size: 48px; margin-bottom: 10px;">👑</h1>
            <h2 style="font-size: 32px; margin-bottom: 10px; font-weight: bold;">VIP Exclusive</h2>
            <p style="font-size: 20px;">You're invited to shop early</p>
          </div>
          <div style="padding: 40px 30px;">
            <p style="font-size: 16px; line-height: 1.8; color: #555; text-align: center; margin-bottom: 25px;">
              As a valued VIP member, you get exclusive early access to our biggest sale of the year!
            </p>
            <div style="background: #fffbeb; border: 2px solid #f8b500; padding: 25px; border-radius: 10px; margin: 30px 0;">
              <h3 style="color: #92400e; text-align: center; margin-bottom: 20px;">Your VIP Benefits:</h3>
              <ul style="color: #555; line-height: 2.5;">
                <li>✨ Early access (24 hours before public)</li>
                <li>💰 Extra 20% off sale prices</li>
                <li>🚚 Free express shipping</li>
                <li>🎁 Exclusive VIP gift with purchase</li>
              </ul>
            </div>
            <div style="text-align: center; background: #1a1a2e; color: white; padding: 20px; border-radius: 8px; margin: 25px 0;">
              <p style="font-size: 16px; margin-bottom: 10px;">Your VIP Code:</p>
              <p style="font-size: 32px; font-weight: bold; color: #f8b500; letter-spacing: 2px;">VIPGOLD20</p>
            </div>
            <div style="text-align: center; margin-top: 30px;">
              <a href="#" style="display: inline-block; padding: 18px 50px; background: linear-gradient(135deg, #f8b500 0%, #ffc947 100%); color: #1a1a2e; text-decoration: none; border-radius: 25px; font-size: 18px; font-weight: bold;">Shop VIP Sale</a>
            </div>
            <p style="text-align: center; font-size: 13px; color: #999; margin-top: 20px;">
              This exclusive offer expires in 24 hours
            </p>
          </div>
        </div>
      </div>
    `,
    variables: []
  },
  {
    id: "ecommerce_010",
    name: "Win Back Campaign",
    category: "E-commerce",
    description: "Re-engage inactive customers",
    subject: "💙 We Miss You! Come Back for 25% OFF",
    image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=800&q=80",
    body: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: white; padding: 20px;">
        <div style="text-align: center; padding: 40px 20px;">
          <h1 style="font-size: 56px; margin-bottom: 15px;">💙</h1>
          <h2 style="font-size: 36px; color: #333; margin-bottom: 15px;">We Miss You!</h2>
          <p style="font-size: 20px; color: #666;">It's been a while since your last visit</p>
        </div>
        <div style="padding: 0 30px 40px;">
          <p style="font-size: 16px; line-height: 1.8; color: #555; text-align: center; margin-bottom: 30px;">
            Hi {{customer_name}},<br><br>
            We noticed it's been a while since you shopped with us. We'd love to have you back!
          </p>
          <div style="background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); color: white; padding: 30px; border-radius: 10px; text-align: center; margin: 30px 0;">
            <h3 style="font-size: 24px; margin-bottom: 15px;">Welcome Back Gift</h3>
            <p style="font-size: 48px; font-weight: bold; margin: 20px 0;">25% OFF</p>
            <p style="font-size: 18px; margin-bottom: 20px;">Your entire next purchase</p>
            <div style="background: white; color: #3b82f6; padding: 15px; border-radius: 5px; margin-top: 20px;">
              <p style="font-size: 16px; margin-bottom: 8px;">Use code:</p>
              <p style="font-size: 28px; font-weight: bold; letter-spacing: 1px;">WELCOME25</p>
            </div>
          </div>
          <div style="background: #f9fafb; padding: 25px; border-radius: 10px; margin: 25px 0;">
            <h3 style="color: #333; margin-bottom: 15px; text-align: center;">What You've Missed:</h3>
            <ul style="color: #555; line-height: 2;">
              <li>New product launches</li>
              <li>Improved features & quality</li>
              <li>Exclusive member benefits</li>
              <li>Free shipping on all orders</li>
            </ul>
          </div>
          <div style="text-align: center; margin-top: 30px;">
            <a href="#" style="display: inline-block; padding: 18px 50px; background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); color: white; text-decoration: none; border-radius: 25px; font-size: 18px; font-weight: bold;">Welcome Me Back</a>
          </div>
          <p style="text-align: center; font-size: 14px; color: #ef4444; margin-top: 20px; font-weight: bold;">
            ⏰ Offer expires in 7 days
          </p>
        </div>
      </div>
    `,
    variables: ["customer_name"]
  },

  // Add more categories here following the same structure...
  // For brevity, I'll add just a few more samples

  // Technology Templates
  {
    id: "tech_001",
    name: "Software Update",
    category: "Technology",
    description: "Announce software updates and new features",
    subject: "🚀 New Update Available: Version {{version}}",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
    body: `
      <div style="font-family: 'Courier New', monospace; max-width: 600px; margin: 0 auto; background: #1a1a2e;">
        <div style="padding: 40px 30px; background: linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%); color: white; text-align: center;">
          <h1 style="font-size: 42px; margin-bottom: 15px;">🚀 Update Available</h1>
          <p style="font-size: 24px; margin-bottom: 10px;">Version {{version}}</p>
          <p style="font-size: 16px; opacity: 0.9;">What's new in this release</p>
        </div>
        <div style="background: white; padding: 40px 30px;">
          <p style="font-size: 16px; line-height: 1.8; color: #333; margin-bottom: 25px;">
            We've been working hard to improve your experience. Here's what's new:
          </p>
          <div style="background: #f0f9ff; border-left: 4px solid #3b82f6; padding: 20px; margin: 25px 0;">
            <h3 style="color: #1e40af; margin-bottom: 15px;">✨ New Features:</h3>
            <ul style="color: #555; line-height: 2;">
              <li>Enhanced performance & speed</li>
              <li>New user interface design</li>
              <li>Advanced security features</li>
              <li>Bug fixes and improvements</li>
            </ul>
          </div>
          <div style="text-align: center; margin-top: 30px;">
            <a href="#" style="display: inline-block; padding: 16px 45px; background: linear-gradient(135deg, #0f2027 0%, #2c5364 100%); color: white; text-decoration: none; border-radius: 5px; font-size: 18px; font-weight: bold;">Update Now</a>
          </div>
        </div>
      </div>
    `,
    variables: ["version"]
  },

  // Healthcare Templates
  {
    id: "healthcare_001",
    name: "Appointment Reminder",
    category: "Healthcare",
    description: "Remind patients about upcoming appointments",
    subject: "📅 Appointment Reminder - {{date}}",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    body: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: white;">
        <div style="background: #06b6d4; color: white; padding: 35px 20px; text-align: center;">
          <h1 style="font-size: 42px; margin-bottom: 10px;">📅</h1>
          <h2 style="font-size: 32px; margin-bottom: 10px;">Appointment Reminder</h2>
          <p style="font-size: 18px;">We're looking forward to seeing you</p>
        </div>
        <div style="padding: 40px 30px;">
          <p style="font-size: 16px; color: #333; margin-bottom: 25px;">
            Dear {{patient_name}},
          </p>
          <p style="font-size: 16px; line-height: 1.6; color: #555; margin-bottom: 25px;">
            This is a friendly reminder about your upcoming appointment.
          </p>
          <div style="background: #ecfeff; padding: 25px; border-radius: 10px; margin: 25px 0;">
            <h3 style="color: #0e7490; margin-bottom: 15px;">Appointment Details:</h3>
            <p style="color: #555; margin: 10px 0;"><strong>Date:</strong> {{date}}</p>
            <p style="color: #555; margin: 10px 0;"><strong>Time:</strong> {{time}}</p>
            <p style="color: #555; margin: 10px 0;"><strong>Doctor:</strong> Dr. {{doctor_name}}</p>
            <p style="color: #555; margin: 10px 0;"><strong>Location:</strong> {{location}}</p>
          </div>
          <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 25px 0;">
            <p style="color: #92400e; font-size: 14px; line-height: 1.6;">
              <strong>Please Note:</strong> Please arrive 15 minutes early for check-in. 
              If you need to reschedule, please call us at least 24 hours in advance.
            </p>
          </div>
          <div style="text-align: center; margin-top: 30px;">
            <a href="#" style="display: inline-block; padding: 14px 35px; background: #06b6d4; color: white; text-decoration: none; border-radius: 5px; font-size: 16px; font-weight: bold; margin-right: 10px;">Confirm Appointment</a>
            <a href="#" style="display: inline-block; padding: 14px 35px; background: white; color: #06b6d4; text-decoration: none; border-radius: 5px; border: 2px solid #06b6d4; font-size: 16px; font-weight: bold;">Reschedule</a>
          </div>
        </div>
      </div>
    `,
    variables: ["patient_name", "date", "time", "doctor_name", "location"]
  },

  // Continue with more templates for other categories...
];
