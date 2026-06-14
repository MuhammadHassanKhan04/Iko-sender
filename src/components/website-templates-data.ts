// Website-formed email templates with Header, Hero, Body Sections, and Footer
// Each template represents a complete website-style email layout

export const WEBSITE_TEMPLATE_CATEGORIES = [
  "Business & Corporate",
  "E-Commerce & Retail",
  "Technology & SaaS",
  "Healthcare & Wellness",
  "Education & Training",
  "Real Estate & Property",
  "Food & Restaurant",
  "Travel & Hospitality",
  "Finance & Banking",
  "Fashion & Beauty",
  "Fitness & Sports"
];

export const WEBSITE_TEMPLATES_DATA = [
  // Business & Corporate
  {
    id: "biz_001",
    name: "Corporate Newsletter",
    category: "Business & Corporate",
    description: "Professional corporate newsletter with modern design",
    subject: "📊 Monthly Business Update - {{month}}",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
    previewImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80",
    body: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Arial, sans-serif; background-color: #f4f7fa;">
  <!-- Header -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); padding: 20px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td style="padding: 20px;">
              <img src="https://via.placeholder.com/150x40/ffffff/1e3a8a?text=COMPANY" alt="Logo" style="height: 40px;">
            </td>
            <td align="right" style="padding: 20px;">
              <a href="#" style="color: #ffffff; text-decoration: none; margin-left: 20px; font-size: 14px;">About</a>
              <a href="#" style="color: #ffffff; text-decoration: none; margin-left: 20px; font-size: 14px;">Services</a>
              <a href="#" style="color: #ffffff; text-decoration: none; margin-left: 20px; font-size: 14px;">Contact</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <!-- Hero Section -->
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center" style="background: url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80') center/cover; height: 400px;">
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td style="padding: 60px 40px; background: rgba(30, 58, 138, 0.85); text-align: center; border-radius: 12px;">
              <h1 style="color: #ffffff; font-size: 42px; margin: 0 0 20px; font-weight: 700;">Monthly Business Update</h1>
              <p style="color: rgba(255,255,255,0.9); font-size: 18px; margin: 0 0 30px; line-height: 1.6;">Stay informed with our latest news, insights, and company updates</p>
              <a href="#" style="display: inline-block; padding: 16px 40px; background: #3b82f6; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px;">Read Full Report</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <!-- Content Section 1 -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background: #ffffff;">
    <tr>
      <td align="center" style="padding: 60px 20px;">
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td>
              <h2 style="color: #1e3a8a; font-size: 28px; margin: 0 0 20px; text-align: center;">Key Highlights This Month</h2>
              <p style="color: #6b7280; font-size: 16px; line-height: 1.8; text-align: center; margin-bottom: 40px;">
                We've achieved significant milestones and continue to grow our operations globally.
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <table width="100%" cellpadding="0" cellspacing="20">
                <tr>
                  <td width="50%" style="background: #f8fafc; padding: 30px; border-radius: 12px; vertical-align: top;">
                    <h3 style="color: #1e3a8a; margin: 0 0 10px; font-size: 18px;">📈 Revenue Growth</h3>
                    <p style="color: #6b7280; margin: 0; font-size: 14px; line-height: 1.6;">25% increase in quarterly revenue compared to last year.</p>
                  </td>
                  <td width="50%" style="background: #f8fafc; padding: 30px; border-radius: 12px; vertical-align: top;">
                    <h3 style="color: #1e3a8a; margin: 0 0 10px; font-size: 18px;">🌍 Global Expansion</h3>
                    <p style="color: #6b7280; margin: 0; font-size: 14px; line-height: 1.6;">New offices opened in London, Singapore, and Dubai.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <!-- Image Section -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background: #1e3a8a;">
    <tr>
      <td align="center" style="padding: 60px 20px;">
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td width="50%" style="padding-right: 20px; vertical-align: middle;">
              <h3 style="color: #ffffff; font-size: 24px; margin: 0 0 15px;">Our Team is Growing</h3>
              <p style="color: rgba(255,255,255,0.8); font-size: 15px; line-height: 1.7; margin: 0 0 25px;">
                We've welcomed 50+ new team members this quarter, expanding our capabilities across all departments.
              </p>
              <a href="#" style="display: inline-block; padding: 12px 30px; background: #ffffff; color: #1e3a8a; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px;">Join Our Team</a>
            </td>
            <td width="50%">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80" alt="Team" style="width: 100%; border-radius: 12px;">
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <!-- Content Section 2 -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background: #ffffff;">
    <tr>
      <td align="center" style="padding: 60px 20px;">
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td style="text-align: center;">
              <h2 style="color: #1e3a8a; font-size: 28px; margin: 0 0 40px;">Upcoming Events</h2>
            </td>
          </tr>
          <tr>
            <td>
              <table width="100%" cellpadding="0" cellspacing="0" style="border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden;">
                <tr style="background: #f8fafc;">
                  <td style="padding: 20px; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #1e3a8a;">Dec 15</strong> - Annual General Meeting
                  </td>
                </tr>
                <tr>
                  <td style="padding: 20px; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #1e3a8a;">Dec 20</strong> - Holiday Celebration Party
                  </td>
                </tr>
                <tr style="background: #f8fafc;">
                  <td style="padding: 20px;">
                    <strong style="color: #1e3a8a;">Jan 5</strong> - Q1 Planning Session
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <!-- Footer -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background: #111827;">
    <tr>
      <td align="center" style="padding: 50px 20px;">
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td style="text-align: center;">
              <img src="https://via.placeholder.com/120x35/3b82f6/ffffff?text=COMPANY" alt="Logo" style="height: 35px; margin-bottom: 25px;">
              <p style="color: #9ca3af; font-size: 14px; margin: 0 0 20px; line-height: 1.6;">
                123 Business Avenue, Suite 100<br>
                New York, NY 10001
              </p>
              <div style="margin-bottom: 25px;">
                <a href="#" style="display: inline-block; margin: 0 8px;"><img src="https://img.icons8.com/color/32/facebook.png" alt="Facebook"></a>
                <a href="#" style="display: inline-block; margin: 0 8px;"><img src="https://img.icons8.com/color/32/twitter.png" alt="Twitter"></a>
                <a href="#" style="display: inline-block; margin: 0 8px;"><img src="https://img.icons8.com/color/32/linkedin.png" alt="LinkedIn"></a>
              </div>
              <p style="color: #6b7280; font-size: 12px; margin: 0;">
                © 2024 Company Name. All rights reserved.<br>
                <a href="#" style="color: #3b82f6; text-decoration: none;">Unsubscribe</a> | <a href="#" style="color: #3b82f6; text-decoration: none;">Privacy Policy</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `,
    variables: ["month"]
  },

  // E-Commerce & Retail
  {
    id: "ecom_001",
    name: "Flash Sale Announcement",
    category: "E-Commerce & Retail",
    description: "High-converting flash sale email with product showcase",
    subject: "⚡ 24-Hour Flash Sale - Up to 70% OFF!",
    heroImage: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&q=80",
    previewImage: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400&q=80",
    body: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Arial, sans-serif; background-color: #fef2f2;">
  <!-- Header -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background: #000000; padding: 15px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td style="padding: 10px 20px;">
              <img src="https://via.placeholder.com/140x40/ef4444/ffffff?text=STORE" alt="Store Logo" style="height: 40px;">
            </td>
            <td align="right" style="padding: 10px 20px;">
              <a href="#" style="color: #ffffff; text-decoration: none; margin-left: 20px; font-size: 13px; font-weight: 500;">Shop</a>
              <a href="#" style="color: #ffffff; text-decoration: none; margin-left: 20px; font-size: 13px; font-weight: 500;">Sale</a>
              <a href="#" style="color: #ffffff; text-decoration: none; margin-left: 20px; font-size: 13px; font-weight: 500;">New Arrivals</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <!-- Hero Banner -->
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center" style="background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%); padding: 50px 20px;">
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td style="text-align: center;">
              <p style="color: #fecaca; font-size: 16px; letter-spacing: 4px; margin: 0 0 15px; text-transform: uppercase;">Limited Time Only</p>
              <h1 style="color: #ffffff; font-size: 56px; margin: 0 0 15px; font-weight: 800; line-height: 1.1;">FLASH SALE</h1>
              <p style="color: #ffffff; font-size: 32px; margin: 0 0 30px; font-weight: 700;">Up to 70% OFF</p>
              <div style="background: #000000; display: inline-block; padding: 20px 40px; border-radius: 8px; margin-bottom: 30px;">
                <p style="color: #fecaca; font-size: 12px; margin: 0 0 8px; text-transform: uppercase; letter-spacing: 2px;">Ends In</p>
                <span style="color: #ffffff; font-size: 36px; font-weight: 800; font-family: monospace;">23:59:59</span>
              </div>
              <br>
              <a href="#" style="display: inline-block; padding: 18px 50px; background: #ffffff; color: #dc2626; text-decoration: none; border-radius: 50px; font-weight: 700; font-size: 18px; text-transform: uppercase; letter-spacing: 1px;">Shop Now</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <!-- Product Grid -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background: #ffffff;">
    <tr>
      <td align="center" style="padding: 60px 20px;">
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td style="text-align: center; margin-bottom: 40px;">
              <h2 style="color: #1f2937; font-size: 32px; margin: 0 0 10px;">Top Deals</h2>
              <p style="color: #6b7280; font-size: 16px; margin: 0 0 40px;">Grab these before they're gone!</p>
            </td>
          </tr>
          <tr>
            <td>
              <table width="100%" cellpadding="0" cellspacing="20">
                <tr>
                  <td width="50%" style="background: #f9fafb; border-radius: 16px; overflow: hidden; text-align: center;">
                    <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&q=80" alt="Product 1" style="width: 100%; height: 200px; object-fit: cover;">
                    <div style="padding: 20px;">
                      <p style="color: #9ca3af; text-decoration: line-through; margin: 0; font-size: 14px;">$199.99</p>
                      <p style="color: #dc2626; font-size: 24px; font-weight: 700; margin: 5px 0;">$79.99</p>
                      <p style="color: #1f2937; font-size: 14px; margin: 0 0 15px;">Running Shoes Pro</p>
                      <a href="#" style="display: inline-block; padding: 10px 25px; background: #dc2626; color: #ffffff; text-decoration: none; border-radius: 6px; font-size: 13px; font-weight: 600;">Add to Cart</a>
                    </div>
                  </td>
                  <td width="50%" style="background: #f9fafb; border-radius: 16px; overflow: hidden; text-align: center;">
                    <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&q=80" alt="Product 2" style="width: 100%; height: 200px; object-fit: cover;">
                    <div style="padding: 20px;">
                      <p style="color: #9ca3af; text-decoration: line-through; margin: 0; font-size: 14px;">$299.99</p>
                      <p style="color: #dc2626; font-size: 24px; font-weight: 700; margin: 5px 0;">$149.99</p>
                      <p style="color: #1f2937; font-size: 14px; margin: 0 0 15px;">Smart Watch Elite</p>
                      <a href="#" style="display: inline-block; padding: 10px 25px; background: #dc2626; color: #ffffff; text-decoration: none; border-radius: 6px; font-size: 13px; font-weight: 600;">Add to Cart</a>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <!-- Benefits Section -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background: #f9fafb;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td width="33%" style="text-align: center; padding: 20px;">
              <div style="font-size: 32px; margin-bottom: 10px;">🚚</div>
              <p style="color: #1f2937; font-weight: 600; margin: 0 0 5px; font-size: 14px;">Free Shipping</p>
              <p style="color: #6b7280; font-size: 12px; margin: 0;">On orders $50+</p>
            </td>
            <td width="33%" style="text-align: center; padding: 20px;">
              <div style="font-size: 32px; margin-bottom: 10px;">↩️</div>
              <p style="color: #1f2937; font-weight: 600; margin: 0 0 5px; font-size: 14px;">Easy Returns</p>
              <p style="color: #6b7280; font-size: 12px; margin: 0;">30-day guarantee</p>
            </td>
            <td width="33%" style="text-align: center; padding: 20px;">
              <div style="font-size: 32px; margin-bottom: 10px;">🔒</div>
              <p style="color: #1f2937; font-weight: 600; margin: 0 0 5px; font-size: 14px;">Secure Payment</p>
              <p style="color: #6b7280; font-size: 12px; margin: 0;">SSL encrypted</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <!-- Footer -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background: #000000;">
    <tr>
      <td align="center" style="padding: 50px 20px;">
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td style="text-align: center;">
              <img src="https://via.placeholder.com/120x35/ef4444/ffffff?text=STORE" alt="Logo" style="height: 35px; margin-bottom: 25px;">
              <div style="margin-bottom: 25px;">
                <a href="#" style="color: #9ca3af; text-decoration: none; margin: 0 15px; font-size: 13px;">Shop</a>
                <a href="#" style="color: #9ca3af; text-decoration: none; margin: 0 15px; font-size: 13px;">About</a>
                <a href="#" style="color: #9ca3af; text-decoration: none; margin: 0 15px; font-size: 13px;">Contact</a>
              </div>
              <p style="color: #6b7280; font-size: 12px; margin: 0;">
                © 2024 Store Name. All rights reserved.<br><br>
                <a href="#" style="color: #ef4444; text-decoration: none;">Unsubscribe</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `,
    variables: []
  },

  // Technology & SaaS
  {
    id: "tech_001",
    name: "Product Launch",
    category: "Technology & SaaS",
    description: "Modern SaaS product launch announcement",
    subject: "🚀 Introducing Our Game-Changing New Feature",
    heroImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80",
    previewImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&q=80",
    body: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: 'Inter', 'Segoe UI', Arial, sans-serif; background-color: #0f172a;">
  <!-- Header -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background: rgba(15, 23, 42, 0.95); border-bottom: 1px solid #1e293b;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td style="padding: 20px;">
              <img src="https://via.placeholder.com/140x40/6366f1/ffffff?text=TECHAPP" alt="TechApp Logo" style="height: 40px;">
            </td>
            <td align="right" style="padding: 20px;">
              <a href="#" style="color: #94a3b8; text-decoration: none; margin-left: 25px; font-size: 14px;">Features</a>
              <a href="#" style="color: #94a3b8; text-decoration: none; margin-left: 25px; font-size: 14px;">Pricing</a>
              <a href="#" style="display: inline-block; margin-left: 25px; padding: 10px 24px; background: #6366f1; color: #ffffff; text-decoration: none; border-radius: 8px; font-size: 14px; font-weight: 600;">Try Free</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <!-- Hero Section -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(180deg, #0f172a 0%, #1e1b4b 100%);">
    <tr>
      <td align="center" style="padding: 80px 20px;">
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td style="text-align: center;">
              <div style="display: inline-block; padding: 8px 20px; background: rgba(99, 102, 241, 0.2); border: 1px solid rgba(99, 102, 241, 0.3); border-radius: 50px; margin-bottom: 25px;">
                <span style="color: #a5b4fc; font-size: 13px; font-weight: 500;">✨ NEW RELEASE</span>
              </div>
              <h1 style="color: #ffffff; font-size: 48px; margin: 0 0 20px; font-weight: 800; line-height: 1.2;">
                Introducing<br><span style="background: linear-gradient(135deg, #6366f1, #8b5cf6); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">AI-Powered Analytics</span>
              </h1>
              <p style="color: #94a3b8; font-size: 18px; margin: 0 0 40px; line-height: 1.7;">
                Transform your data into actionable insights with our revolutionary AI engine. Make smarter decisions, faster.
              </p>
              <a href="#" style="display: inline-block; padding: 16px 40px; background: linear-gradient(135deg, #6366f1, #8b5cf6); color: #ffffff; text-decoration: none; border-radius: 12px; font-weight: 600; font-size: 16px; margin-right: 15px;">Get Started Free →</a>
              <a href="#" style="display: inline-block; padding: 16px 40px; background: transparent; border: 2px solid #374151; color: #ffffff; text-decoration: none; border-radius: 12px; font-weight: 600; font-size: 16px;">Watch Demo</a>
            </td>
          </tr>
          <tr>
            <td style="padding-top: 50px;">
              <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80" alt="Product Screenshot" style="width: 100%; border-radius: 16px; border: 1px solid #374151; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);">
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <!-- Features Grid -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background: #0f172a;">
    <tr>
      <td align="center" style="padding: 80px 20px;">
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td style="text-align: center; margin-bottom: 50px;">
              <h2 style="color: #ffffff; font-size: 36px; margin: 0 0 15px;">Why Teams Love It</h2>
              <p style="color: #94a3b8; font-size: 16px; margin: 0 0 50px;">Built for modern teams who demand excellence</p>
            </td>
          </tr>
          <tr>
            <td>
              <table width="100%" cellpadding="0" cellspacing="20">
                <tr>
                  <td width="50%" style="background: #1e293b; padding: 30px; border-radius: 16px; vertical-align: top;">
                    <div style="width: 48px; height: 48px; background: rgba(99, 102, 241, 0.2); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 20px;">
                      <span style="font-size: 24px;">⚡</span>
                    </div>
                    <h3 style="color: #ffffff; margin: 0 0 10px; font-size: 18px;">Lightning Fast</h3>
                    <p style="color: #94a3b8; margin: 0; font-size: 14px; line-height: 1.6;">Process millions of data points in milliseconds with our optimized engine.</p>
                  </td>
                  <td width="50%" style="background: #1e293b; padding: 30px; border-radius: 16px; vertical-align: top;">
                    <div style="width: 48px; height: 48px; background: rgba(99, 102, 241, 0.2); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 20px;">
                      <span style="font-size: 24px;">🔒</span>
                    </div>
                    <h3 style="color: #ffffff; margin: 0 0 10px; font-size: 18px;">Enterprise Security</h3>
                    <p style="color: #94a3b8; margin: 0; font-size: 14px; line-height: 1.6;">SOC 2 certified with end-to-end encryption for your peace of mind.</p>
                  </td>
                </tr>
                <tr>
                  <td width="50%" style="background: #1e293b; padding: 30px; border-radius: 16px; vertical-align: top;">
                    <div style="width: 48px; height: 48px; background: rgba(99, 102, 241, 0.2); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 20px;">
                      <span style="font-size: 24px;">🔗</span>
                    </div>
                    <h3 style="color: #ffffff; margin: 0 0 10px; font-size: 18px;">Easy Integration</h3>
                    <p style="color: #94a3b8; margin: 0; font-size: 14px; line-height: 1.6;">Connect with 100+ tools you already use in minutes.</p>
                  </td>
                  <td width="50%" style="background: #1e293b; padding: 30px; border-radius: 16px; vertical-align: top;">
                    <div style="width: 48px; height: 48px; background: rgba(99, 102, 241, 0.2); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 20px;">
                      <span style="font-size: 24px;">📊</span>
                    </div>
                    <h3 style="color: #ffffff; margin: 0 0 10px; font-size: 18px;">Smart Reports</h3>
                    <p style="color: #94a3b8; margin: 0; font-size: 14px; line-height: 1.6;">AI-generated insights delivered to your inbox automatically.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <!-- CTA Section -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, #4f46e5, #7c3aed);">
    <tr>
      <td align="center" style="padding: 60px 20px;">
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td style="text-align: center;">
              <h2 style="color: #ffffff; font-size: 32px; margin: 0 0 15px;">Ready to get started?</h2>
              <p style="color: rgba(255,255,255,0.8); font-size: 16px; margin: 0 0 30px;">Join 10,000+ companies already using our platform.</p>
              <a href="#" style="display: inline-block; padding: 16px 50px; background: #ffffff; color: #4f46e5; text-decoration: none; border-radius: 12px; font-weight: 700; font-size: 16px;">Start Free Trial →</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <!-- Footer -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background: #0f172a; border-top: 1px solid #1e293b;">
    <tr>
      <td align="center" style="padding: 50px 20px;">
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td style="text-align: center;">
              <img src="https://via.placeholder.com/120x35/6366f1/ffffff?text=TECHAPP" alt="Logo" style="height: 32px; margin-bottom: 25px;">
              <div style="margin-bottom: 25px;">
                <a href="#" style="color: #64748b; text-decoration: none; margin: 0 15px; font-size: 13px;">Documentation</a>
                <a href="#" style="color: #64748b; text-decoration: none; margin: 0 15px; font-size: 13px;">API</a>
                <a href="#" style="color: #64748b; text-decoration: none; margin: 0 15px; font-size: 13px;">Support</a>
              </div>
              <p style="color: #475569; font-size: 12px; margin: 0;">
                © 2024 TechApp Inc. All rights reserved.<br>
                <a href="#" style="color: #6366f1; text-decoration: none;">Unsubscribe</a> • <a href="#" style="color: #6366f1; text-decoration: none;">Privacy Policy</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `,
    variables: []
  },

  // Healthcare & Wellness
  {
    id: "health_001",
    name: "Wellness Newsletter",
    category: "Healthcare & Wellness",
    description: "Calming health and wellness newsletter design",
    subject: "🌿 Your Weekly Wellness Tips",
    heroImage: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&q=80",
    previewImage: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80",
    body: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: 'Georgia', serif; background-color: #f0fdf4;">
  <!-- Header -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background: #ffffff;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td style="padding: 25px; text-align: center;">
              <img src="https://via.placeholder.com/160x50/16a34a/ffffff?text=WELLNESS" alt="Wellness Logo" style="height: 50px;">
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <!-- Hero Section -->
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center" style="background: url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&q=80') center/cover; height: 450px;">
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td style="padding: 60px 40px; background: linear-gradient(180deg, rgba(255,255,255,0.9), rgba(240,253,244,0.95)); text-align: center;">
              <p style="color: #16a34a; font-size: 14px; letter-spacing: 3px; margin: 0 0 20px; text-transform: uppercase;">This Week's Focus</p>
              <h1 style="color: #166534; font-size: 44px; margin: 0 0 20px; font-weight: 400; line-height: 1.2; font-family: Georgia, serif;">
                Finding Balance in<br>Your Daily Life
              </h1>
              <p style="color: #4b5563; font-size: 18px; margin: 0 0 30px; line-height: 1.7;">
                Simple practices to nurture your mind, body, and spirit
              </p>
              <a href="#" style="display: inline-block; padding: 16px 40px; background: #16a34a; color: #ffffff; text-decoration: none; border-radius: 50px; font-weight: 500; font-size: 15px;">Read Full Article</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <!-- Tips Section -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background: #ffffff;">
    <tr>
      <td align="center" style="padding: 60px 20px;">
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td style="text-align: center; margin-bottom: 40px;">
              <h2 style="color: #166534; font-size: 32px; margin: 0 0 15px; font-weight: 400; font-family: Georgia, serif;">Weekly Wellness Tips</h2>
              <div style="width: 50px; height: 2px; background: #16a34a; margin: 0 auto 30px;"></div>
            </td>
          </tr>
          <tr>
            <td>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding: 25px; border-bottom: 1px solid #e5e7eb;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="60" style="vertical-align: top;">
                          <div style="width: 48px; height: 48px; background: #dcfce7; border-radius: 50%; text-align: center; line-height: 48px; font-size: 24px;">🧘</div>
                        </td>
                        <td style="vertical-align: top; padding-left: 15px;">
                          <h3 style="color: #166534; margin: 0 0 8px; font-size: 18px; font-weight: 600;">Morning Meditation</h3>
                          <p style="color: #6b7280; margin: 0; font-size: 14px; line-height: 1.6;">Start each day with 10 minutes of mindful breathing to set a calm tone.</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 25px; border-bottom: 1px solid #e5e7eb;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="60" style="vertical-align: top;">
                          <div style="width: 48px; height: 48px; background: #dcfce7; border-radius: 50%; text-align: center; line-height: 48px; font-size: 24px;">💧</div>
                        </td>
                        <td style="vertical-align: top; padding-left: 15px;">
                          <h3 style="color: #166534; margin: 0 0 8px; font-size: 18px; font-weight: 600;">Stay Hydrated</h3>
                          <p style="color: #6b7280; margin: 0; font-size: 14px; line-height: 1.6;">Aim for 8 glasses of water daily. Add lemon or cucumber for extra freshness.</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 25px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="60" style="vertical-align: top;">
                          <div style="width: 48px; height: 48px; background: #dcfce7; border-radius: 50%; text-align: center; line-height: 48px; font-size: 24px;">🌙</div>
                        </td>
                        <td style="vertical-align: top; padding-left: 15px;">
                          <h3 style="color: #166534; margin: 0 0 8px; font-size: 18px; font-weight: 600;">Sleep Routine</h3>
                          <p style="color: #6b7280; margin: 0; font-size: 14px; line-height: 1.6;">Maintain a consistent sleep schedule for better rest and recovery.</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <!-- Image Feature -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background: #f0fdf4;">
    <tr>
      <td align="center" style="padding: 60px 20px;">
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td>
              <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80" alt="Wellness" style="width: 100%; border-radius: 20px; margin-bottom: 30px;">
            </td>
          </tr>
          <tr>
            <td style="text-align: center;">
              <h3 style="color: #166534; font-size: 24px; margin: 0 0 15px; font-family: Georgia, serif;">Featured: Yoga for Beginners</h3>
              <p style="color: #6b7280; font-size: 15px; margin: 0 0 25px; line-height: 1.7;">
                Discover the transformative power of yoga with our beginner-friendly guide. 
                Start your journey to flexibility and inner peace today.
              </p>
              <a href="#" style="display: inline-block; padding: 14px 35px; background: #16a34a; color: #ffffff; text-decoration: none; border-radius: 50px; font-size: 14px;">Learn More</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <!-- Footer -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background: #166534;">
    <tr>
      <td align="center" style="padding: 50px 20px;">
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td style="text-align: center;">
              <img src="https://via.placeholder.com/140x45/ffffff/166534?text=WELLNESS" alt="Logo" style="height: 40px; margin-bottom: 25px;">
              <p style="color: rgba(255,255,255,0.8); font-size: 14px; margin: 0 0 20px; line-height: 1.6;">
                Helping you live your healthiest life
              </p>
              <div style="margin-bottom: 25px;">
                <a href="#" style="display: inline-block; margin: 0 8px;"><img src="https://img.icons8.com/color/32/instagram-new.png" alt="Instagram"></a>
                <a href="#" style="display: inline-block; margin: 0 8px;"><img src="https://img.icons8.com/color/32/facebook.png" alt="Facebook"></a>
                <a href="#" style="display: inline-block; margin: 0 8px;"><img src="https://img.icons8.com/color/32/youtube.png" alt="YouTube"></a>
              </div>
              <p style="color: rgba(255,255,255,0.6); font-size: 12px; margin: 0;">
                © 2024 Wellness Center. All rights reserved.<br>
                <a href="#" style="color: #86efac; text-decoration: none;">Unsubscribe</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `,
    variables: []
  },

  // Real Estate
  {
    id: "realestate_001",
    name: "Property Listing",
    category: "Real Estate & Property",
    description: "Elegant property showcase email",
    subject: "🏠 Your Dream Home Awaits - New Listings",
    heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    previewImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80",
    body: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: 'Playfair Display', Georgia, serif; background-color: #faf5f0;">
  <!-- Header -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background: #1a1a1a;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td style="padding: 20px;">
              <img src="https://via.placeholder.com/150x45/c9a857/1a1a1a?text=LUXE+HOMES" alt="Luxe Homes" style="height: 45px;">
            </td>
            <td align="right" style="padding: 20px;">
              <a href="#" style="color: #c9a857; text-decoration: none; margin-left: 25px; font-size: 13px; letter-spacing: 1px;">LISTINGS</a>
              <a href="#" style="color: #c9a857; text-decoration: none; margin-left: 25px; font-size: 13px; letter-spacing: 1px;">AGENTS</a>
              <a href="#" style="color: #c9a857; text-decoration: none; margin-left: 25px; font-size: 13px; letter-spacing: 1px;">CONTACT</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <!-- Hero Property -->
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td>
              <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80" alt="Featured Property" style="width: 100%;">
            </td>
          </tr>
          <tr>
            <td style="background: #1a1a1a; padding: 40px;">
              <p style="color: #c9a857; font-size: 12px; letter-spacing: 3px; margin: 0 0 15px; text-transform: uppercase;">Featured Property</p>
              <h1 style="color: #ffffff; font-size: 36px; margin: 0 0 15px; font-weight: 400; font-family: 'Playfair Display', Georgia, serif;">Modern Luxury Villa</h1>
              <p style="color: #9ca3af; font-size: 16px; margin: 0 0 25px; line-height: 1.7;">
                Stunning 5-bedroom contemporary estate with panoramic views, infinity pool, and smart home technology.
              </p>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                <tr>
                  <td width="33%" style="text-align: center; border-right: 1px solid #374151;">
                    <p style="color: #c9a857; font-size: 24px; margin: 0; font-weight: 600;">5</p>
                    <p style="color: #9ca3af; font-size: 12px; margin: 5px 0 0;">Bedrooms</p>
                  </td>
                  <td width="33%" style="text-align: center; border-right: 1px solid #374151;">
                    <p style="color: #c9a857; font-size: 24px; margin: 0; font-weight: 600;">4</p>
                    <p style="color: #9ca3af; font-size: 12px; margin: 5px 0 0;">Bathrooms</p>
                  </td>
                  <td width="33%" style="text-align: center;">
                    <p style="color: #c9a857; font-size: 24px; margin: 0; font-weight: 600;">6,500</p>
                    <p style="color: #9ca3af; font-size: 12px; margin: 5px 0 0;">Sq Ft</p>
                  </td>
                </tr>
              </table>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <p style="color: #ffffff; font-size: 32px; margin: 0; font-weight: 600;">$4,250,000</p>
                  </td>
                  <td align="right">
                    <a href="#" style="display: inline-block; padding: 14px 35px; background: #c9a857; color: #1a1a1a; text-decoration: none; font-weight: 600; font-size: 14px; letter-spacing: 1px;">VIEW PROPERTY</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <!-- More Listings -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background: #ffffff;">
    <tr>
      <td align="center" style="padding: 60px 20px;">
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td style="text-align: center; margin-bottom: 40px;">
              <h2 style="color: #1a1a1a; font-size: 28px; margin: 0 0 10px; font-weight: 400; font-family: 'Playfair Display', Georgia, serif;">More Properties</h2>
              <div style="width: 50px; height: 2px; background: #c9a857; margin: 0 auto 40px;"></div>
            </td>
          </tr>
          <tr>
            <td>
              <table width="100%" cellpadding="0" cellspacing="20">
                <tr>
                  <td width="50%" style="vertical-align: top;">
                    <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=300&q=80" alt="Property 2" style="width: 100%; border-radius: 4px; margin-bottom: 15px;">
                    <h3 style="color: #1a1a1a; font-size: 18px; margin: 0 0 8px; font-family: 'Playfair Display', Georgia, serif;">Oceanview Penthouse</h3>
                    <p style="color: #6b7280; font-size: 14px; margin: 0 0 10px;">3 Bed • 3 Bath • 2,800 sqft</p>
                    <p style="color: #c9a857; font-size: 20px; font-weight: 600; margin: 0;">$2,150,000</p>
                  </td>
                  <td width="50%" style="vertical-align: top;">
                    <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300&q=80" alt="Property 3" style="width: 100%; border-radius: 4px; margin-bottom: 15px;">
                    <h3 style="color: #1a1a1a; font-size: 18px; margin: 0 0 8px; font-family: 'Playfair Display', Georgia, serif;">Garden Estate</h3>
                    <p style="color: #6b7280; font-size: 14px; margin: 0 0 10px;">4 Bed • 3.5 Bath • 4,200 sqft</p>
                    <p style="color: #c9a857; font-size: 20px; font-weight: 600; margin: 0;">$3,450,000</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="text-align: center; padding-top: 30px;">
              <a href="#" style="display: inline-block; padding: 14px 40px; border: 2px solid #1a1a1a; color: #1a1a1a; text-decoration: none; font-weight: 600; font-size: 14px; letter-spacing: 1px;">VIEW ALL LISTINGS</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <!-- Footer -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background: #1a1a1a;">
    <tr>
      <td align="center" style="padding: 50px 20px;">
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td style="text-align: center;">
              <img src="https://via.placeholder.com/140x40/c9a857/1a1a1a?text=LUXE+HOMES" alt="Logo" style="height: 40px; margin-bottom: 25px;">
              <p style="color: #9ca3af; font-size: 14px; margin: 0 0 20px; line-height: 1.6;">
                Luxury Real Estate Since 1985
              </p>
              <p style="color: #6b7280; font-size: 12px; margin: 0;">
                © 2024 Luxe Homes. All rights reserved.<br>
                <a href="#" style="color: #c9a857; text-decoration: none;">Unsubscribe</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `,
    variables: []
  },

  // Education
  {
    id: "edu_001",
    name: "Course Enrollment",
    category: "Education & Training",
    description: "Engaging course enrollment email",
    subject: "📚 New Courses Available - Enroll Today!",
    heroImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80",
    previewImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&q=80",
    body: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: 'Nunito', Arial, sans-serif; background-color: #fef3c7;">
  <!-- Header -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background: #7c3aed;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td style="padding: 20px;">
              <img src="https://via.placeholder.com/150x45/ffffff/7c3aed?text=LEARNHUB" alt="LearnHub" style="height: 45px;">
            </td>
            <td align="right" style="padding: 20px;">
              <a href="#" style="color: #ffffff; text-decoration: none; margin-left: 20px; font-size: 14px;">Courses</a>
              <a href="#" style="color: #ffffff; text-decoration: none; margin-left: 20px; font-size: 14px;">Pricing</a>
              <a href="#" style="display: inline-block; margin-left: 20px; padding: 10px 24px; background: #fbbf24; color: #7c3aed; text-decoration: none; border-radius: 8px; font-size: 14px; font-weight: 700;">Login</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <!-- Hero -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%);">
    <tr>
      <td align="center" style="padding: 60px 20px;">
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td style="text-align: center;">
              <h1 style="color: #ffffff; font-size: 44px; margin: 0 0 20px; font-weight: 800;">
                Learn New Skills<br>Transform Your Career
              </h1>
              <p style="color: rgba(255,255,255,0.9); font-size: 18px; margin: 0 0 30px; line-height: 1.7;">
                Access 500+ courses from industry experts. Start learning today!
              </p>
              <a href="#" style="display: inline-block; padding: 16px 45px; background: #fbbf24; color: #7c3aed; text-decoration: none; border-radius: 50px; font-weight: 700; font-size: 16px;">Explore Courses</a>
            </td>
          </tr>
          <tr>
            <td style="padding-top: 40px;">
              <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80" alt="Students" style="width: 100%; border-radius: 16px;">
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <!-- Featured Courses -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background: #ffffff;">
    <tr>
      <td align="center" style="padding: 60px 20px;">
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td style="text-align: center;">
              <h2 style="color: #1f2937; font-size: 32px; margin: 0 0 10px; font-weight: 700;">Featured Courses</h2>
              <p style="color: #6b7280; font-size: 16px; margin: 0 0 40px;">Hand-picked courses to boost your skills</p>
            </td>
          </tr>
          <tr>
            <td>
              <table width="100%" cellpadding="0" cellspacing="15">
                <tr>
                  <td style="background: #f3f4f6; border-radius: 16px; overflow: hidden;">
                    <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80" alt="Course 1" style="width: 100%; height: 180px; object-fit: cover;">
                    <div style="padding: 25px;">
                      <div style="display: inline-block; padding: 5px 12px; background: #7c3aed; color: #ffffff; font-size: 11px; border-radius: 50px; margin-bottom: 15px;">BESTSELLER</div>
                      <h3 style="color: #1f2937; font-size: 20px; margin: 0 0 10px; font-weight: 700;">Complete Web Development Bootcamp</h3>
                      <p style="color: #6b7280; font-size: 14px; margin: 0 0 15px;">Learn HTML, CSS, JavaScript, React & Node.js</p>
                      <table width="100%">
                        <tr>
                          <td>
                            <span style="color: #7c3aed; font-size: 24px; font-weight: 700;">$49.99</span>
                            <span style="color: #9ca3af; font-size: 14px; text-decoration: line-through; margin-left: 10px;">$199.99</span>
                          </td>
                          <td align="right">
                            <span style="color: #fbbf24; font-size: 14px;">⭐ 4.9 (2.5k)</span>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <!-- Stats -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background: #7c3aed;">
    <tr>
      <td align="center" style="padding: 50px 20px;">
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td width="33%" style="text-align: center;">
              <p style="color: #ffffff; font-size: 36px; font-weight: 800; margin: 0;">500+</p>
              <p style="color: rgba(255,255,255,0.8); font-size: 14px; margin: 10px 0 0;">Courses</p>
            </td>
            <td width="33%" style="text-align: center;">
              <p style="color: #ffffff; font-size: 36px; font-weight: 800; margin: 0;">50K+</p>
              <p style="color: rgba(255,255,255,0.8); font-size: 14px; margin: 10px 0 0;">Students</p>
            </td>
            <td width="33%" style="text-align: center;">
              <p style="color: #ffffff; font-size: 36px; font-weight: 800; margin: 0;">100+</p>
              <p style="color: rgba(255,255,255,0.8); font-size: 14px; margin: 10px 0 0;">Instructors</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <!-- Footer -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background: #1f2937;">
    <tr>
      <td align="center" style="padding: 50px 20px;">
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td style="text-align: center;">
              <img src="https://via.placeholder.com/120x35/fbbf24/7c3aed?text=LEARNHUB" alt="Logo" style="height: 35px; margin-bottom: 25px;">
              <p style="color: #9ca3af; font-size: 14px; margin: 0 0 20px;">Learn anything, anytime, anywhere.</p>
              <p style="color: #6b7280; font-size: 12px; margin: 0;">
                © 2024 LearnHub. All rights reserved.<br>
                <a href="#" style="color: #fbbf24; text-decoration: none;">Unsubscribe</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `,
    variables: []
  },

  // Food & Restaurant
  {
    id: "food_001",
    name: "Restaurant Promotion",
    category: "Food & Restaurant",
    description: "Mouth-watering restaurant promotional email",
    subject: "🍽️ Special Weekend Menu - Reserve Your Table",
    heroImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80",
    previewImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80",
    body: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: 'Cormorant Garamond', Georgia, serif; background-color: #1a1a1a;">
  <!-- Header -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background: #1a1a1a; border-bottom: 1px solid #333;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td style="padding: 25px; text-align: center;">
              <img src="https://via.placeholder.com/180x50/d4af37/1a1a1a?text=LA+MAISON" alt="La Maison" style="height: 50px;">
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <!-- Hero -->
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center" style="background: url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80') center/cover; height: 450px;">
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td style="padding: 60px 40px; background: rgba(26,26,26,0.75); text-align: center;">
              <p style="color: #d4af37; font-size: 14px; letter-spacing: 5px; margin: 0 0 20px; text-transform: uppercase;">Weekend Special</p>
              <h1 style="color: #ffffff; font-size: 52px; margin: 0 0 20px; font-weight: 300; font-family: 'Cormorant Garamond', Georgia, serif; line-height: 1.2;">
                A Culinary<br>Experience
              </h1>
              <p style="color: rgba(255,255,255,0.8); font-size: 18px; margin: 0 0 35px; line-height: 1.7;">
                Indulge in our chef's exclusive tasting menu<br>crafted with seasonal ingredients
              </p>
              <a href="#" style="display: inline-block; padding: 16px 45px; background: #d4af37; color: #1a1a1a; text-decoration: none; font-weight: 600; font-size: 14px; letter-spacing: 2px; text-transform: uppercase;">Reserve Now</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <!-- Menu Preview -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background: #ffffff;">
    <tr>
      <td align="center" style="padding: 60px 20px;">
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td style="text-align: center;">
              <h2 style="color: #1a1a1a; font-size: 36px; margin: 0 0 10px; font-weight: 300; font-family: 'Cormorant Garamond', Georgia, serif;">This Week's Specials</h2>
              <div style="width: 60px; height: 1px; background: #d4af37; margin: 0 auto 40px;"></div>
            </td>
          </tr>
          <tr>
            <td>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="48%">
                    <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&q=80" alt="Dish 1" style="width: 100%; border-radius: 8px; margin-bottom: 15px;">
                    <h3 style="color: #1a1a1a; font-size: 20px; margin: 0 0 8px; font-family: 'Cormorant Garamond', Georgia, serif;">Grilled Sea Bass</h3>
                    <p style="color: #6b7280; font-size: 14px; margin: 0 0 10px;">With roasted vegetables & lemon butter</p>
                    <p style="color: #d4af37; font-size: 18px; font-weight: 600; margin: 0;">$42</p>
                  </td>
                  <td width="4%"></td>
                  <td width="48%">
                    <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&q=80" alt="Dish 2" style="width: 100%; border-radius: 8px; margin-bottom: 15px;">
                    <h3 style="color: #1a1a1a; font-size: 20px; margin: 0 0 8px; font-family: 'Cormorant Garamond', Georgia, serif;">Truffle Risotto</h3>
                    <p style="color: #6b7280; font-size: 14px; margin: 0 0 10px;">Arborio rice with black truffle shavings</p>
                    <p style="color: #d4af37; font-size: 18px; font-weight: 600; margin: 0;">$38</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <!-- Reservation CTA -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background: #d4af37;">
    <tr>
      <td align="center" style="padding: 50px 20px;">
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td style="text-align: center;">
              <h2 style="color: #1a1a1a; font-size: 28px; margin: 0 0 15px; font-family: 'Cormorant Garamond', Georgia, serif;">Make a Reservation</h2>
              <p style="color: rgba(26,26,26,0.8); font-size: 16px; margin: 0 0 25px;">Tables are limited. Book your experience today.</p>
              <a href="#" style="display: inline-block; padding: 16px 50px; background: #1a1a1a; color: #d4af37; text-decoration: none; font-weight: 600; font-size: 14px; letter-spacing: 2px;">BOOK A TABLE</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <!-- Footer -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background: #1a1a1a;">
    <tr>
      <td align="center" style="padding: 50px 20px;">
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td style="text-align: center;">
              <img src="https://via.placeholder.com/160x45/d4af37/1a1a1a?text=LA+MAISON" alt="Logo" style="height: 40px; margin-bottom: 25px;">
              <p style="color: #9ca3af; font-size: 14px; margin: 0 0 10px;">
                123 Gourmet Street, Culinary District
              </p>
              <p style="color: #9ca3af; font-size: 14px; margin: 0 0 20px;">
                Tue-Sun: 6pm - 11pm | Closed Mondays
              </p>
              <p style="color: #6b7280; font-size: 12px; margin: 0;">
                © 2024 La Maison. All rights reserved.<br>
                <a href="#" style="color: #d4af37; text-decoration: none;">Unsubscribe</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `,
    variables: []
  },

  // Travel & Hospitality
  {
    id: "travel_001",
    name: "Travel Package",
    category: "Travel & Hospitality",
    description: "Stunning travel destination email",
    subject: "✈️ Escape to Paradise - Exclusive Deals",
    heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
    previewImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80",
    body: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: 'Poppins', Arial, sans-serif; background-color: #e0f2fe;">
  <!-- Header -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background: #0ea5e9;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td style="padding: 20px;">
              <img src="https://via.placeholder.com/150x45/ffffff/0ea5e9?text=WANDERLUST" alt="Wanderlust" style="height: 45px;">
            </td>
            <td align="right" style="padding: 20px;">
              <a href="#" style="color: #ffffff; text-decoration: none; margin-left: 20px; font-size: 14px;">Destinations</a>
              <a href="#" style="color: #ffffff; text-decoration: none; margin-left: 20px; font-size: 14px;">Deals</a>
              <a href="#" style="color: #ffffff; text-decoration: none; margin-left: 20px; font-size: 14px;">Blog</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <!-- Hero -->
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center" style="background: url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80') center/cover; height: 500px;">
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td style="padding: 60px 40px; text-align: center;">
              <div style="background: rgba(255,255,255,0.95); padding: 50px; border-radius: 20px;">
                <p style="color: #0ea5e9; font-size: 14px; letter-spacing: 3px; margin: 0 0 15px; text-transform: uppercase; font-weight: 600;">Limited Time Offer</p>
                <h1 style="color: #0c4a6e; font-size: 42px; margin: 0 0 15px; font-weight: 700; line-height: 1.2;">
                  Escape to Paradise
                </h1>
                <p style="color: #64748b; font-size: 18px; margin: 0 0 25px; line-height: 1.6;">
                  All-inclusive Maldives getaway starting at
                </p>
                <p style="color: #0ea5e9; font-size: 48px; font-weight: 800; margin: 0 0 25px;">$1,299</p>
                <a href="#" style="display: inline-block; padding: 16px 45px; background: #0ea5e9; color: #ffffff; text-decoration: none; border-radius: 50px; font-weight: 600; font-size: 16px;">Book Now</a>
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <!-- Destinations -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background: #ffffff;">
    <tr>
      <td align="center" style="padding: 60px 20px;">
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td style="text-align: center;">
              <h2 style="color: #0c4a6e; font-size: 32px; margin: 0 0 10px; font-weight: 700;">Trending Destinations</h2>
              <p style="color: #64748b; font-size: 16px; margin: 0 0 40px;">Discover amazing places around the world</p>
            </td>
          </tr>
          <tr>
            <td>
              <table width="100%" cellpadding="0" cellspacing="15">
                <tr>
                  <td width="33%" style="text-align: center;">
                    <img src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=200&q=80" alt="Bali" style="width: 100%; height: 150px; object-fit: cover; border-radius: 12px; margin-bottom: 15px;">
                    <h3 style="color: #0c4a6e; font-size: 16px; margin: 0 0 5px;">Bali, Indonesia</h3>
                    <p style="color: #0ea5e9; font-size: 14px; font-weight: 600; margin: 0;">From $899</p>
                  </td>
                  <td width="33%" style="text-align: center;">
                    <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=200&q=80" alt="Paris" style="width: 100%; height: 150px; object-fit: cover; border-radius: 12px; margin-bottom: 15px;">
                    <h3 style="color: #0c4a6e; font-size: 16px; margin: 0 0 5px;">Paris, France</h3>
                    <p style="color: #0ea5e9; font-size: 14px; font-weight: 600; margin: 0;">From $1,199</p>
                  </td>
                  <td width="33%" style="text-align: center;">
                    <img src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=200&q=80" alt="Rome" style="width: 100%; height: 150px; object-fit: cover; border-radius: 12px; margin-bottom: 15px;">
                    <h3 style="color: #0c4a6e; font-size: 16px; margin: 0 0 5px;">Rome, Italy</h3>
                    <p style="color: #0ea5e9; font-size: 14px; font-weight: 600; margin: 0;">From $999</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="text-align: center; padding-top: 30px;">
              <a href="#" style="display: inline-block; padding: 14px 40px; border: 2px solid #0ea5e9; color: #0ea5e9; text-decoration: none; border-radius: 50px; font-weight: 600; font-size: 14px;">View All Destinations</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <!-- Footer -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background: #0c4a6e;">
    <tr>
      <td align="center" style="padding: 50px 20px;">
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td style="text-align: center;">
              <img src="https://via.placeholder.com/140x40/0ea5e9/ffffff?text=WANDERLUST" alt="Logo" style="height: 40px; margin-bottom: 25px;">
              <p style="color: rgba(255,255,255,0.8); font-size: 14px; margin: 0 0 20px;">Your adventure starts here</p>
              <p style="color: rgba(255,255,255,0.5); font-size: 12px; margin: 0;">
                © 2024 Wanderlust Travel. All rights reserved.<br>
                <a href="#" style="color: #0ea5e9; text-decoration: none;">Unsubscribe</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `,
    variables: []
  },

  // Finance & Banking
  {
    id: "fin_001",
    name: "Investment Portfolio Update",
    category: "Finance & Banking",
    description: "Professional investment and portfolio performance report",
    subject: "📈 Your Monthly Investment Portfolio Report - {{month}}",
    heroImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80",
    previewImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&q=80",
    body: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Arial, sans-serif; background-color: #0f172a;">
  <!-- Header -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 20px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td style="padding: 20px;">
              <img src="https://via.placeholder.com/160x45/10b981/ffffff?text=WEALTH+PRO" alt="Logo" style="height: 45px;">
            </td>
            <td align="right" style="padding: 20px;">
              <a href="#" style="color: #94a3b8; text-decoration: none; margin-left: 25px; font-size: 14px;">Portfolio</a>
              <a href="#" style="color: #94a3b8; text-decoration: none; margin-left: 25px; font-size: 14px;">Markets</a>
              <a href="#" style="color: #94a3b8; text-decoration: none; margin-left: 25px; font-size: 14px;">Insights</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <!-- Hero Section -->
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center" style="background: url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80') center/cover; height: 420px;">
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td style="padding: 60px 40px; background: rgba(15, 23, 42, 0.9); text-align: center; border-radius: 16px; border: 1px solid rgba(16, 185, 129, 0.3);">
              <p style="color: #10b981; font-size: 14px; letter-spacing: 3px; margin: 0 0 15px; text-transform: uppercase;">Portfolio Performance</p>
              <h1 style="color: #ffffff; font-size: 48px; margin: 0 0 10px; font-weight: 700;">+12.4%</h1>
              <p style="color: #94a3b8; font-size: 18px; margin: 0 0 30px;">Year-to-date return on your investments</p>
              <a href="#" style="display: inline-block; padding: 16px 40px; background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px;">View Full Report</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <!-- Portfolio Summary -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background: #1e293b;">
    <tr>
      <td align="center" style="padding: 60px 20px;">
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td>
              <h2 style="color: #ffffff; font-size: 28px; margin: 0 0 30px; text-align: center;">Portfolio Summary</h2>
            </td>
          </tr>
          <tr>
            <td>
              <table width="100%" cellpadding="0" cellspacing="15">
                <tr>
                  <td width="33%" style="background: rgba(16, 185, 129, 0.1); padding: 25px; border-radius: 12px; text-align: center; border: 1px solid rgba(16, 185, 129, 0.2);">
                    <p style="color: #10b981; font-size: 28px; font-weight: 700; margin: 0;">$847,250</p>
                    <p style="color: #94a3b8; font-size: 13px; margin: 10px 0 0;">Total Value</p>
                  </td>
                  <td width="33%" style="background: rgba(59, 130, 246, 0.1); padding: 25px; border-radius: 12px; text-align: center; border: 1px solid rgba(59, 130, 246, 0.2);">
                    <p style="color: #3b82f6; font-size: 28px; font-weight: 700; margin: 0;">$93,197</p>
                    <p style="color: #94a3b8; font-size: 13px; margin: 10px 0 0;">YTD Gain</p>
                  </td>
                  <td width="33%" style="background: rgba(168, 85, 247, 0.1); padding: 25px; border-radius: 12px; text-align: center; border: 1px solid rgba(168, 85, 247, 0.2);">
                    <p style="color: #a855f7; font-size: 28px; font-weight: 700; margin: 0;">24</p>
                    <p style="color: #94a3b8; font-size: 13px; margin: 10px 0 0;">Holdings</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <!-- Holdings Breakdown -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background: #0f172a;">
    <tr>
      <td align="center" style="padding: 60px 20px;">
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td>
              <h2 style="color: #ffffff; font-size: 24px; margin: 0 0 30px;">Top Performing Holdings</h2>
            </td>
          </tr>
          <tr>
            <td style="background: #1e293b; border-radius: 12px; overflow: hidden;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr style="background: #334155;">
                  <td style="padding: 15px 20px; color: #94a3b8; font-size: 12px; text-transform: uppercase;">Asset</td>
                  <td style="padding: 15px 20px; color: #94a3b8; font-size: 12px; text-transform: uppercase;">Value</td>
                  <td style="padding: 15px 20px; color: #94a3b8; font-size: 12px; text-transform: uppercase; text-align: right;">Return</td>
                </tr>
                <tr style="border-bottom: 1px solid #334155;">
                  <td style="padding: 18px 20px; color: #ffffff; font-weight: 500;">AAPL - Apple Inc.</td>
                  <td style="padding: 18px 20px; color: #ffffff;">$124,500</td>
                  <td style="padding: 18px 20px; color: #10b981; text-align: right; font-weight: 600;">+28.4%</td>
                </tr>
                <tr style="border-bottom: 1px solid #334155;">
                  <td style="padding: 18px 20px; color: #ffffff; font-weight: 500;">MSFT - Microsoft</td>
                  <td style="padding: 18px 20px; color: #ffffff;">$98,200</td>
                  <td style="padding: 18px 20px; color: #10b981; text-align: right; font-weight: 600;">+22.1%</td>
                </tr>
                <tr>
                  <td style="padding: 18px 20px; color: #ffffff; font-weight: 500;">NVDA - NVIDIA</td>
                  <td style="padding: 18px 20px; color: #ffffff;">$156,800</td>
                  <td style="padding: 18px 20px; color: #10b981; text-align: right; font-weight: 600;">+45.7%</td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <!-- Market Insights -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background: #1e293b;">
    <tr>
      <td align="center" style="padding: 60px 20px;">
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td width="50%" style="padding-right: 20px; vertical-align: top;">
              <img src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&q=80" alt="Market" style="width: 100%; border-radius: 12px;">
            </td>
            <td width="50%" style="vertical-align: middle;">
              <p style="color: #10b981; font-size: 12px; letter-spacing: 2px; margin: 0 0 10px; text-transform: uppercase;">Market Insights</p>
              <h3 style="color: #ffffff; font-size: 22px; margin: 0 0 15px; line-height: 1.4;">Q4 Market Outlook</h3>
              <p style="color: #94a3b8; font-size: 14px; line-height: 1.7; margin: 0 0 20px;">
                Markets showing strong momentum with tech sector leading gains. Our analysts recommend maintaining diversified positions.
              </p>
              <a href="#" style="display: inline-block; padding: 12px 25px; background: transparent; color: #10b981; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px; border: 2px solid #10b981;">Read Analysis</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <!-- Footer -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background: #0f172a; border-top: 1px solid #334155;">
    <tr>
      <td align="center" style="padding: 50px 20px;">
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td style="text-align: center;">
              <img src="https://via.placeholder.com/140x40/10b981/ffffff?text=WEALTH+PRO" alt="Logo" style="height: 40px; margin-bottom: 25px;">
              <p style="color: #64748b; font-size: 13px; margin: 0 0 20px; line-height: 1.6;">
                Investment involves risk. Past performance is not indicative of future results.<br>
                Please read our terms and disclosures carefully.
              </p>
              <p style="color: #475569; font-size: 12px; margin: 0;">
                © 2024 WealthPro Financial. All rights reserved.<br>
                <a href="#" style="color: #10b981; text-decoration: none;">Unsubscribe</a> | <a href="#" style="color: #10b981; text-decoration: none;">Privacy Policy</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `,
    variables: ["month"]
  },

  // Fashion & Beauty
  {
    id: "fashion_001",
    name: "New Collection Launch",
    category: "Fashion & Beauty",
    description: "Elegant fashion collection announcement with runway imagery",
    subject: "✨ New Season Collection is Here - Be the First to Shop",
    heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    previewImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    body: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: 'Georgia', serif; background-color: #faf5f0;">
  <!-- Header -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background: #1a1a1a; padding: 15px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td style="padding: 15px 20px;">
              <img src="https://via.placeholder.com/150x40/d4af37/1a1a1a?text=LUXE+STYLE" alt="Logo" style="height: 40px;">
            </td>
            <td align="right" style="padding: 15px 20px;">
              <a href="#" style="color: #d4af37; text-decoration: none; margin-left: 25px; font-size: 13px; letter-spacing: 1px; text-transform: uppercase;">New In</a>
              <a href="#" style="color: #d4af37; text-decoration: none; margin-left: 25px; font-size: 13px; letter-spacing: 1px; text-transform: uppercase;">Collections</a>
              <a href="#" style="color: #d4af37; text-decoration: none; margin-left: 25px; font-size: 13px; letter-spacing: 1px; text-transform: uppercase;">Sale</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <!-- Hero Section -->
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center" style="background: url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80') center/cover; height: 500px;">
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td style="padding: 80px 40px; text-align: center;">
              <p style="color: #d4af37; font-size: 14px; letter-spacing: 5px; margin: 0 0 20px; text-transform: uppercase;">Introducing</p>
              <h1 style="color: #ffffff; font-size: 56px; margin: 0 0 20px; font-weight: 400; font-style: italic; text-shadow: 2px 2px 10px rgba(0,0,0,0.5);">Winter Elegance</h1>
              <p style="color: rgba(255,255,255,0.9); font-size: 18px; margin: 0 0 40px; font-style: italic;">The new collection has arrived</p>
              <a href="#" style="display: inline-block; padding: 18px 50px; background: #d4af37; color: #1a1a1a; text-decoration: none; font-size: 14px; letter-spacing: 2px; text-transform: uppercase; font-weight: 600;">Explore Now</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <!-- Collection Preview -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background: #ffffff;">
    <tr>
      <td align="center" style="padding: 70px 20px;">
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td style="text-align: center;">
              <p style="color: #d4af37; font-size: 12px; letter-spacing: 4px; margin: 0 0 15px; text-transform: uppercase;">The Collection</p>
              <h2 style="color: #1a1a1a; font-size: 36px; margin: 0 0 15px; font-weight: 400; font-style: italic;">Timeless Sophistication</h2>
              <p style="color: #666666; font-size: 16px; margin: 0 0 50px; line-height: 1.8;">Curated pieces that blend classic elegance with contemporary design</p>
            </td>
          </tr>
          <tr>
            <td>
              <table width="100%" cellpadding="0" cellspacing="20">
                <tr>
                  <td width="50%" style="text-align: center;">
                    <img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=400&q=80" alt="Look 1" style="width: 100%; height: 350px; object-fit: cover;">
                    <p style="color: #1a1a1a; font-size: 16px; margin: 20px 0 5px; font-style: italic;">Velvet Evening Dress</p>
                    <p style="color: #d4af37; font-size: 18px; margin: 0; font-weight: 600;">$495</p>
                  </td>
                  <td width="50%" style="text-align: center;">
                    <img src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80" alt="Look 2" style="width: 100%; height: 350px; object-fit: cover;">
                    <p style="color: #1a1a1a; font-size: 16px; margin: 20px 0 5px; font-style: italic;">Cashmere Coat</p>
                    <p style="color: #d4af37; font-size: 18px; margin: 0; font-weight: 600;">$850</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <!-- Editorial Section -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background: #1a1a1a;">
    <tr>
      <td align="center" style="padding: 0;">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td width="50%" style="vertical-align: middle;">
              <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80" alt="Editorial" style="width: 100%; height: 450px; object-fit: cover;">
            </td>
            <td width="50%" style="padding: 60px; vertical-align: middle;">
              <p style="color: #d4af37; font-size: 12px; letter-spacing: 3px; margin: 0 0 15px; text-transform: uppercase;">Behind The Collection</p>
              <h3 style="color: #ffffff; font-size: 28px; margin: 0 0 20px; font-weight: 400; font-style: italic; line-height: 1.4;">Where Art Meets Fashion</h3>
              <p style="color: #999999; font-size: 15px; line-height: 1.8; margin: 0 0 30px;">
                Inspired by the golden age of haute couture, our designers have crafted a collection that celebrates feminine grace and modern sophistication.
              </p>
              <a href="#" style="display: inline-block; padding: 14px 35px; background: transparent; color: #d4af37; text-decoration: none; font-size: 12px; letter-spacing: 2px; text-transform: uppercase; border: 1px solid #d4af37;">Watch The Film</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <!-- Beauty Section -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background: #faf5f0;">
    <tr>
      <td align="center" style="padding: 70px 20px;">
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td style="text-align: center;">
              <p style="color: #d4af37; font-size: 12px; letter-spacing: 4px; margin: 0 0 15px; text-transform: uppercase;">Beauty</p>
              <h2 style="color: #1a1a1a; font-size: 32px; margin: 0 0 40px; font-weight: 400; font-style: italic;">Complete Your Look</h2>
            </td>
          </tr>
          <tr>
            <td>
              <table width="100%" cellpadding="0" cellspacing="15">
                <tr>
                  <td width="33%" style="text-align: center;">
                    <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=300&q=80" alt="Beauty 1" style="width: 100%; height: 180px; object-fit: cover; border-radius: 8px;">
                    <p style="color: #1a1a1a; font-size: 14px; margin: 15px 0 5px;">Luxury Lipstick</p>
                    <p style="color: #d4af37; font-size: 16px; margin: 0;">$45</p>
                  </td>
                  <td width="33%" style="text-align: center;">
                    <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&q=80" alt="Beauty 2" style="width: 100%; height: 180px; object-fit: cover; border-radius: 8px;">
                    <p style="color: #1a1a1a; font-size: 14px; margin: 15px 0 5px;">Signature Perfume</p>
                    <p style="color: #d4af37; font-size: 16px; margin: 0;">$120</p>
                  </td>
                  <td width="33%" style="text-align: center;">
                    <img src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=300&q=80" alt="Beauty 3" style="width: 100%; height: 180px; object-fit: cover; border-radius: 8px;">
                    <p style="color: #1a1a1a; font-size: 14px; margin: 15px 0 5px;">Skincare Set</p>
                    <p style="color: #d4af37; font-size: 16px; margin: 0;">$195</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <!-- Footer -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background: #1a1a1a;">
    <tr>
      <td align="center" style="padding: 50px 20px;">
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td style="text-align: center;">
              <img src="https://via.placeholder.com/130x40/d4af37/1a1a1a?text=LUXE+STYLE" alt="Logo" style="height: 40px; margin-bottom: 25px;">
              <div style="margin-bottom: 25px;">
                <a href="#" style="display: inline-block; margin: 0 10px;"><img src="https://img.icons8.com/ios-filled/24/d4af37/instagram-new.png" alt="Instagram"></a>
                <a href="#" style="display: inline-block; margin: 0 10px;"><img src="https://img.icons8.com/ios-filled/24/d4af37/facebook.png" alt="Facebook"></a>
                <a href="#" style="display: inline-block; margin: 0 10px;"><img src="https://img.icons8.com/ios-filled/24/d4af37/pinterest.png" alt="Pinterest"></a>
              </div>
              <p style="color: #666666; font-size: 12px; margin: 0;">
                © 2024 Luxe Style. All rights reserved.<br><br>
                <a href="#" style="color: #d4af37; text-decoration: none;">Unsubscribe</a> | <a href="#" style="color: #d4af37; text-decoration: none;">View in Browser</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `,
    variables: []
  },

  // Fitness & Sports
  {
    id: "fit_001",
    name: "Gym Membership Promo",
    category: "Fitness & Sports",
    description: "High-energy fitness promotion with dynamic imagery",
    subject: "💪 Transform Your Body - 50% OFF First Month!",
    heroImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80",
    previewImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80",
    body: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: 'Arial Black', Arial, sans-serif; background-color: #0a0a0a;">
  <!-- Header -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background: #0a0a0a; padding: 15px 0; border-bottom: 2px solid #ff4500;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td style="padding: 15px 20px;">
              <img src="https://via.placeholder.com/160x45/ff4500/ffffff?text=IRON+GYM" alt="Logo" style="height: 45px;">
            </td>
            <td align="right" style="padding: 15px 20px;">
              <a href="#" style="color: #ffffff; text-decoration: none; margin-left: 25px; font-size: 13px; text-transform: uppercase; font-weight: 700;">Classes</a>
              <a href="#" style="color: #ffffff; text-decoration: none; margin-left: 25px; font-size: 13px; text-transform: uppercase; font-weight: 700;">Trainers</a>
              <a href="#" style="color: #ff4500; text-decoration: none; margin-left: 25px; font-size: 13px; text-transform: uppercase; font-weight: 700;">Join Now</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <!-- Hero Section -->
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center" style="background: url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80') center/cover; height: 480px;">
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td style="padding: 60px 40px; background: linear-gradient(135deg, rgba(255, 69, 0, 0.9) 0%, rgba(0, 0, 0, 0.8) 100%); text-align: center;">
              <p style="color: #ffffff; font-size: 18px; letter-spacing: 4px; margin: 0 0 15px; text-transform: uppercase;">Limited Time Offer</p>
              <h1 style="color: #ffffff; font-size: 52px; margin: 0 0 10px; font-weight: 900; text-transform: uppercase; line-height: 1.1;">50% OFF</h1>
              <p style="color: #ff4500; font-size: 28px; margin: 0 0 30px; font-weight: 700;">First Month Membership</p>
              <a href="#" style="display: inline-block; padding: 20px 50px; background: #ffffff; color: #ff4500; text-decoration: none; font-size: 18px; font-weight: 900; text-transform: uppercase; letter-spacing: 1px;">Claim Offer</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <!-- Benefits Section -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background: #111111;">
    <tr>
      <td align="center" style="padding: 60px 20px;">
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td style="text-align: center;">
              <h2 style="color: #ffffff; font-size: 32px; margin: 0 0 15px; text-transform: uppercase; font-weight: 900;">Why Choose Us</h2>
              <p style="color: #666666; font-size: 16px; margin: 0 0 50px;">Everything you need to reach your fitness goals</p>
            </td>
          </tr>
          <tr>
            <td>
              <table width="100%" cellpadding="0" cellspacing="20">
                <tr>
                  <td width="50%" style="background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%); padding: 30px; border-radius: 12px; border-left: 4px solid #ff4500;">
                    <p style="color: #ff4500; font-size: 36px; margin: 0 0 10px;">🏋️</p>
                    <h3 style="color: #ffffff; font-size: 18px; margin: 0 0 10px; text-transform: uppercase;">State-of-Art Equipment</h3>
                    <p style="color: #888888; font-size: 14px; margin: 0; line-height: 1.6;">Over 200+ machines and free weights for every workout style.</p>
                  </td>
                  <td width="50%" style="background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%); padding: 30px; border-radius: 12px; border-left: 4px solid #ff4500;">
                    <p style="color: #ff4500; font-size: 36px; margin: 0 0 10px;">👥</p>
                    <h3 style="color: #ffffff; font-size: 18px; margin: 0 0 10px; text-transform: uppercase;">Expert Trainers</h3>
                    <p style="color: #888888; font-size: 14px; margin: 0; line-height: 1.6;">Certified professionals to guide your fitness journey.</p>
                  </td>
                </tr>
                <tr>
                  <td width="50%" style="background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%); padding: 30px; border-radius: 12px; border-left: 4px solid #ff4500;">
                    <p style="color: #ff4500; font-size: 36px; margin: 0 0 10px;">📅</p>
                    <h3 style="color: #ffffff; font-size: 18px; margin: 0 0 10px; text-transform: uppercase;">50+ Weekly Classes</h3>
                    <p style="color: #888888; font-size: 14px; margin: 0; line-height: 1.6;">HIIT, Yoga, Spin, Boxing, and more every week.</p>
                  </td>
                  <td width="50%" style="background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%); padding: 30px; border-radius: 12px; border-left: 4px solid #ff4500;">
                    <p style="color: #ff4500; font-size: 36px; margin: 0 0 10px;">🕐</p>
                    <h3 style="color: #ffffff; font-size: 18px; margin: 0 0 10px; text-transform: uppercase;">24/7 Access</h3>
                    <p style="color: #888888; font-size: 14px; margin: 0; line-height: 1.6;">Train whenever it suits your schedule, day or night.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <!-- Classes Section -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background: #0a0a0a;">
    <tr>
      <td align="center" style="padding: 60px 20px;">
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td style="text-align: center;">
              <h2 style="color: #ffffff; font-size: 28px; margin: 0 0 40px; text-transform: uppercase; font-weight: 900;">Popular Classes</h2>
            </td>
          </tr>
          <tr>
            <td>
              <table width="100%" cellpadding="0" cellspacing="15">
                <tr>
                  <td width="33%" style="text-align: center;">
                    <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=300&q=80" alt="HIIT" style="width: 100%; height: 150px; object-fit: cover; border-radius: 8px; border: 2px solid #ff4500;">
                    <p style="color: #ffffff; font-size: 14px; margin: 15px 0 5px; font-weight: 700; text-transform: uppercase;">HIIT Training</p>
                    <p style="color: #ff4500; font-size: 12px; margin: 0;">Mon, Wed, Fri</p>
                  </td>
                  <td width="33%" style="text-align: center;">
                    <img src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=300&q=80" alt="Yoga" style="width: 100%; height: 150px; object-fit: cover; border-radius: 8px; border: 2px solid #ff4500;">
                    <p style="color: #ffffff; font-size: 14px; margin: 15px 0 5px; font-weight: 700; text-transform: uppercase;">Power Yoga</p>
                    <p style="color: #ff4500; font-size: 12px; margin: 0;">Tue, Thu, Sat</p>
                  </td>
                  <td width="33%" style="text-align: center;">
                    <img src="https://images.unsplash.com/photo-1549576490-b0b4831ef60a?w=300&q=80" alt="Boxing" style="width: 100%; height: 150px; object-fit: cover; border-radius: 8px; border: 2px solid #ff4500;">
                    <p style="color: #ffffff; font-size: 14px; margin: 15px 0 5px; font-weight: 700; text-transform: uppercase;">Boxing</p>
                    <p style="color: #ff4500; font-size: 12px; margin: 0;">Daily</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <!-- Testimonial Section -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, #ff4500 0%, #cc3700 100%);">
    <tr>
      <td align="center" style="padding: 60px 20px;">
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td style="text-align: center;">
              <img src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=100&h=100&fit=crop" alt="Member" style="width: 80px; height: 80px; border-radius: 50%; border: 4px solid #ffffff; margin-bottom: 25px;">
              <p style="color: #ffffff; font-size: 20px; font-style: italic; margin: 0 0 20px; line-height: 1.6;">
                "I lost 30 pounds in 3 months! The trainers here are incredible and the community keeps me motivated every day."
              </p>
              <p style="color: rgba(255,255,255,0.8); font-size: 14px; margin: 0; font-weight: 700; text-transform: uppercase;">Sarah M. - Member Since 2023</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <!-- CTA Section -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background: #0a0a0a;">
    <tr>
      <td align="center" style="padding: 60px 20px;">
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td style="text-align: center; background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%); padding: 50px; border-radius: 16px; border: 2px solid #ff4500;">
              <h2 style="color: #ffffff; font-size: 28px; margin: 0 0 15px; text-transform: uppercase; font-weight: 900;">Start Your Transformation</h2>
              <p style="color: #888888; font-size: 16px; margin: 0 0 30px;">No commitment. Cancel anytime. Results guaranteed.</p>
              <a href="#" style="display: inline-block; padding: 18px 50px; background: #ff4500; color: #ffffff; text-decoration: none; font-size: 16px; font-weight: 900; text-transform: uppercase; letter-spacing: 1px; border-radius: 8px;">Get Started Now</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <!-- Footer -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background: #0a0a0a; border-top: 2px solid #ff4500;">
    <tr>
      <td align="center" style="padding: 50px 20px;">
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td style="text-align: center;">
              <img src="https://via.placeholder.com/140x45/ff4500/ffffff?text=IRON+GYM" alt="Logo" style="height: 45px; margin-bottom: 25px;">
              <p style="color: #666666; font-size: 14px; margin: 0 0 20px;">
                123 Fitness Avenue, Los Angeles, CA 90001<br>
                Open 24/7 | (555) 123-4567
              </p>
              <div style="margin-bottom: 25px;">
                <a href="#" style="display: inline-block; margin: 0 8px;"><img src="https://img.icons8.com/color/32/instagram-new.png" alt="Instagram"></a>
                <a href="#" style="display: inline-block; margin: 0 8px;"><img src="https://img.icons8.com/color/32/youtube-play.png" alt="YouTube"></a>
                <a href="#" style="display: inline-block; margin: 0 8px;"><img src="https://img.icons8.com/color/32/tiktok.png" alt="TikTok"></a>
              </div>
              <p style="color: #444444; font-size: 12px; margin: 0;">
                © 2024 Iron Gym. All rights reserved.<br>
                <a href="#" style="color: #ff4500; text-decoration: none;">Unsubscribe</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `,
    variables: []
  }
];
