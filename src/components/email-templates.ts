export interface EmailTemplate {
  id: string;
  name: string;
  category: string;
  subject: string;
  body: string;
  variables: string[];
}

export const EMAIL_CATEGORIES = {
  welcome: "Welcome & Onboarding",
  marketing: "Marketing & Promotions",
  sales: "Sales & Follow-ups",
  customer_service: "Customer Service",
  newsletter: "Newsletters",
  announcement: "Announcements",
  event: "Events & Webinars",
  feedback: "Feedback & Surveys",
  reminder: "Reminders",
  seasonal: "Seasonal & Holidays",
  ecommerce: "E-commerce",
  hr: "HR & Internal",
  nonprofit: "Non-Profit",
  real_estate: "Real Estate",
  healthcare: "Healthcare",
  education: "Education",
  finance: "Finance & Banking",
  legal: "Legal Services",
  tech: "Technology Services",
  ikoteks: "iKoteks Solutions"
};

export const EMAIL_TEMPLATES: EmailTemplate[] = [
  // Welcome & Onboarding (10)
  {
    id: "welcome_01",
    name: "Welcome Email",
    category: "welcome",
    subject: "Welcome to {{company_name}}!",
    body: `Dear {{customer_name}},

Welcome to {{company_name}}! We're thrilled to have you join our community.

We're here to help you get the most out of your experience. If you have any questions, feel free to reach out to our support team.

Best regards,
{{sender_name}}
{{company_name}}`,
    variables: ["customer_name", "company_name", "sender_name"]
  },
  {
    id: "welcome_02",
    name: "Account Activation",
    category: "welcome",
    subject: "Your {{company_name}} Account is Ready!",
    body: `Hi {{customer_name}},

Your account has been successfully activated! You can now access all features at {{website_url}}.

Get started by:
• Completing your profile
• Exploring our features
• Connecting with our community

Welcome aboard!
{{sender_name}}`,
    variables: ["customer_name", "company_name", "website_url", "sender_name"]
  },
  {
    id: "welcome_03",
    name: "Trial Welcome",
    category: "welcome",
    subject: "Start Your {{trial_days}}-Day Free Trial",
    body: `Hello {{customer_name}},

Your {{trial_days}}-day free trial has started! Experience all premium features without any commitment.

During your trial, you'll have access to:
• {{feature_1}}
• {{feature_2}}
• {{feature_3}}

Questions? Our team is here to help!

Best,
{{company_name}}`,
    variables: ["customer_name", "trial_days", "feature_1", "feature_2", "feature_3", "company_name"]
  },
  {
    id: "welcome_04",
    name: "Onboarding Guide",
    category: "welcome",
    subject: "Your Getting Started Guide",
    body: `Hi {{customer_name}},

Let's get you started with {{company_name}}! Here's your quick start guide:

Step 1: {{step_1}}
Step 2: {{step_2}}
Step 3: {{step_3}}

Need help? Check out our resources at {{support_url}}

Cheers,
{{sender_name}}`,
    variables: ["customer_name", "company_name", "step_1", "step_2", "step_3", "support_url", "sender_name"]
  },
  {
    id: "welcome_05",
    name: "Welcome Package",
    category: "welcome",
    subject: "Your Welcome Package Inside!",
    body: `Dear {{customer_name}},

As a warm welcome, we've prepared a special package for you:

🎁 {{gift_1}}
🎁 {{gift_2}}
🎁 {{gift_3}}

Claim your gifts at {{claim_url}}

We're excited to have you!
{{company_name}} Team`,
    variables: ["customer_name", "gift_1", "gift_2", "gift_3", "claim_url", "company_name"]
  },
  {
    id: "welcome_06",
    name: "VIP Welcome",
    category: "welcome",
    subject: "Welcome to Our VIP Program",
    body: `Hello {{customer_name}},

Congratulations on joining our VIP program! You now have exclusive access to:

✨ {{benefit_1}}
✨ {{benefit_2}}
✨ {{benefit_3}}

Your VIP benefits start immediately.

Thank you for choosing {{company_name}}!`,
    variables: ["customer_name", "benefit_1", "benefit_2", "benefit_3", "company_name"]
  },
  {
    id: "welcome_07",
    name: "Partner Welcome",
    category: "welcome",
    subject: "Welcome to Our Partnership",
    body: `Dear {{partner_name}},

We're excited to begin our partnership with {{partner_company}}!

Your partnership benefits:
• {{benefit_1}}
• {{benefit_2}}
• Account Manager: {{account_manager}}

Let's achieve great things together!

Best regards,
{{sender_name}}`,
    variables: ["partner_name", "partner_company", "benefit_1", "benefit_2", "account_manager", "sender_name"]
  },
  {
    id: "welcome_08",
    name: "Welcome Survey",
    category: "welcome",
    subject: "We'd Love Your Input!",
    body: `Hi {{customer_name}},

Welcome! We'd love to learn more about you to personalize your experience.

Take 2 minutes to complete our welcome survey: {{survey_url}}

As a thank you, you'll receive {{incentive}}.

Thanks,
{{company_name}}`,
    variables: ["customer_name", "survey_url", "incentive", "company_name"]
  },
  {
    id: "welcome_09",
    name: "Community Welcome",
    category: "welcome",
    subject: "Join Our Community!",
    body: `Hello {{customer_name}},

Welcome to the {{community_name}} community!

Connect with us:
• Forum: {{forum_url}}
• Discord: {{discord_url}}
• Monthly Meetups: {{meetup_url}}

See you in the community!
{{company_name}}`,
    variables: ["customer_name", "community_name", "forum_url", "discord_url", "meetup_url", "company_name"]
  },
  {
    id: "welcome_10",
    name: "Product Launch Welcome",
    category: "welcome",
    subject: "You're First to Know About {{product_name}}",
    body: `Hi {{customer_name}},

As a valued member, you get early access to {{product_name}}!

What's new:
{{feature_list}}

Launch date: {{launch_date}}
Early bird offer: {{discount}}% off

Get started: {{product_url}}

Excited to have you on board!
{{company_name}}`,
    variables: ["customer_name", "product_name", "feature_list", "launch_date", "discount", "product_url", "company_name"]
  },

  // Marketing & Promotions (15)
  {
    id: "marketing_01",
    name: "Limited Time Offer",
    category: "marketing",
    subject: "🎉 {{discount}}% OFF - Limited Time!",
    body: `Hi {{customer_name}},

Special offer just for you!

💰 Save {{discount}}% on {{product_name}}
⏰ Offer ends: {{expiry_date}}
🎁 Use code: {{promo_code}}

Shop now: {{shop_url}}

Don't miss out!
{{company_name}}`,
    variables: ["customer_name", "discount", "product_name", "expiry_date", "promo_code", "shop_url", "company_name"]
  },
  {
    id: "marketing_02",
    name: "Flash Sale",
    category: "marketing",
    subject: "⚡ Flash Sale: {{hours}} Hours Only!",
    body: `{{customer_name}},

FLASH SALE ALERT! 

{{discount}}% OFF everything for the next {{hours}} hours!

No code needed - discount applied automatically at {{shop_url}}

Hurry, sale ends {{end_time}}!

{{company_name}}`,
    variables: ["customer_name", "discount", "hours", "shop_url", "end_time", "company_name"]
  },
  {
    id: "marketing_03",
    name: "New Product Launch",
    category: "marketing",
    subject: "Introducing {{product_name}}",
    body: `Hello {{customer_name}},

We're excited to announce {{product_name}}!

{{product_description}}

Launch benefits:
• {{benefit_1}}
• {{benefit_2}}
• {{benefit_3}}

Pre-order now: {{product_url}}

Best,
{{company_name}}`,
    variables: ["customer_name", "product_name", "product_description", "benefit_1", "benefit_2", "benefit_3", "product_url", "company_name"]
  },
  {
    id: "marketing_04",
    name: "Exclusive Member Offer",
    category: "marketing",
    subject: "Members Only: {{offer_title}}",
    body: `Dear {{customer_name}},

As a valued member, you get exclusive access to:

{{offer_details}}

Member price: {{member_price}}
Regular price: {{regular_price}}
You save: {{savings}}

Claim your offer: {{offer_url}}

Valid until {{expiry_date}}

{{company_name}}`,
    variables: ["customer_name", "offer_title", "offer_details", "member_price", "regular_price", "savings", "offer_url", "expiry_date", "company_name"]
  },
  {
    id: "marketing_05",
    name: "Bundle Deal",
    category: "marketing",
    subject: "Bundle & Save {{discount}}%",
    body: `Hi {{customer_name}},

Get more for less with our bundle deal!

Bundle includes:
✓ {{item_1}}
✓ {{item_2}}
✓ {{item_3}}

Bundle price: {{bundle_price}}
Individual price: {{individual_price}}
You save: {{savings}}

Shop bundle: {{bundle_url}}

{{company_name}}`,
    variables: ["customer_name", "discount", "item_1", "item_2", "item_3", "bundle_price", "individual_price", "savings", "bundle_url", "company_name"]
  },
  {
    id: "marketing_06",
    name: "Referral Program",
    category: "marketing",
    subject: "Give {{discount}}%, Get {{discount}}%",
    body: `Hello {{customer_name}},

Love {{company_name}}? Share it with friends!

Your referral link: {{referral_url}}

When they sign up:
• They get {{discount}}% off
• You get {{discount}}% off your next purchase

Plus, refer {{referral_count}} friends and unlock {{bonus_reward}}!

Start sharing!
{{company_name}}`,
    variables: ["customer_name", "discount", "company_name", "referral_url", "referral_count", "bonus_reward"]
  },
  {
    id: "marketing_07",
    name: "Cart Abandonment",
    category: "marketing",
    subject: "You Left Something Behind!",
    body: `Hi {{customer_name}},

You left items in your cart:

{{cart_items}}

Complete your order now and get {{discount}}% off!
Use code: {{promo_code}}

Your cart: {{cart_url}}

Offer expires in {{hours}} hours.

{{company_name}}`,
    variables: ["customer_name", "cart_items", "discount", "promo_code", "cart_url", "hours", "company_name"]
  },
  {
    id: "marketing_08",
    name: "Back in Stock",
    category: "marketing",
    subject: "{{product_name}} is Back!",
    body: `{{customer_name}},

Good news! {{product_name}} is back in stock!

You asked to be notified, so here's your chance to grab it before it sells out again.

{{product_description}}

Shop now: {{product_url}}

Hurry, limited quantity available!

{{company_name}}`,
    variables: ["customer_name", "product_name", "product_description", "product_url", "company_name"]
  },
  {
    id: "marketing_09",
    name: "Loyalty Rewards",
    category: "marketing",
    subject: "You've Earned {{points}} Points!",
    body: `Hi {{customer_name}},

Great news! You now have {{points}} loyalty points!

Your rewards:
• {{reward_1}}
• {{reward_2}}
• {{reward_3}}

Redeem at: {{rewards_url}}

Keep earning - {{points_to_next}} points until {{next_tier}} status!

{{company_name}}`,
    variables: ["customer_name", "points", "reward_1", "reward_2", "reward_3", "rewards_url", "points_to_next", "next_tier", "company_name"]
  },
  {
    id: "marketing_10",
    name: "Win Back Campaign",
    category: "marketing",
    subject: "We Miss You, {{customer_name}}",
    body: `Dear {{customer_name}},

It's been {{days}} days since your last visit. We miss you!

Come back and enjoy:
• {{offer_1}}
• {{offer_2}}
• {{offer_3}}

Special welcome back discount: {{discount}}%
Code: {{promo_code}}

Visit us: {{website_url}}

Hope to see you soon!
{{company_name}}`,
    variables: ["customer_name", "days", "offer_1", "offer_2", "offer_3", "discount", "promo_code", "website_url", "company_name"]
  },
  {
    id: "marketing_11",
    name: "Birthday Offer",
    category: "marketing",
    subject: "🎂 Happy Birthday {{customer_name}}!",
    body: `Happy Birthday {{customer_name}}! 🎉

To celebrate YOUR special day, here's OUR gift to you:

🎁 {{birthday_gift}}
💝 {{discount}}% off your birthday purchase
🎈 Free shipping on any order

Use code: {{promo_code}}
Valid until: {{expiry_date}}

Treat yourself: {{shop_url}}

Have an amazing birthday!
{{company_name}} Team`,
    variables: ["customer_name", "birthday_gift", "discount", "promo_code", "expiry_date", "shop_url", "company_name"]
  },
  {
    id: "marketing_12",
    name: "Product Recommendation",
    category: "marketing",
    subject: "Picked Just For You",
    body: `Hi {{customer_name}},

Based on your interests, we think you'll love:

{{product_1}}
{{product_2}}
{{product_3}}

Special offer: {{discount}}% off these items
Code: {{promo_code}}

Shop recommendations: {{shop_url}}

{{company_name}}`,
    variables: ["customer_name", "product_1", "product_2", "product_3", "discount", "promo_code", "shop_url", "company_name"]
  },
  {
    id: "marketing_13",
    name: "Upgrade Promotion",
    category: "marketing",
    subject: "Upgrade to {{plan_name}} & Save {{discount}}%",
    body: `Hello {{customer_name}},

Ready for more? Upgrade to {{plan_name}}!

New features you'll get:
✨ {{feature_1}}
✨ {{feature_2}}
✨ {{feature_3}}

Limited time: {{discount}}% off annual plan
Price: {{price}} (was {{original_price}})

Upgrade now: {{upgrade_url}}

{{company_name}}`,
    variables: ["customer_name", "plan_name", "discount", "feature_1", "feature_2", "feature_3", "price", "original_price", "upgrade_url", "company_name"]
  },
  {
    id: "marketing_14",
    name: "Free Shipping",
    category: "marketing",
    subject: "Free Shipping on All Orders!",
    body: `{{customer_name}},

FREE SHIPPING WEEKEND! 🚚

No minimum purchase required
All orders shipped free
Ends {{end_date}}

Shop now: {{shop_url}}

{{company_name}}`,
    variables: ["customer_name", "end_date", "shop_url", "company_name"]
  },
  {
    id: "marketing_15",
    name: "Clearance Sale",
    category: "marketing",
    subject: "Clearance: Up to {{discount}}% OFF",
    body: `Hi {{customer_name}},

CLEARANCE SALE - Everything must go!

Save up to {{discount}}% on:
• {{category_1}}
• {{category_2}}
• {{category_3}}

While supplies last!

Shop clearance: {{sale_url}}

{{company_name}}`,
    variables: ["customer_name", "discount", "category_1", "category_2", "category_3", "sale_url", "company_name"]
  },

  // Sales & Follow-ups (10)
  {
    id: "sales_01",
    name: "Sales Follow-up",
    category: "sales",
    subject: "Following Up on Our Conversation",
    body: `Hi {{customer_name}},

Thank you for speaking with me about {{topic}}.

As discussed, {{key_points}}

Next steps:
• {{next_step_1}}
• {{next_step_2}}

Best time to connect: {{follow_up_time}}

Looking forward to working together!

Best regards,
{{sender_name}}
{{company_name}}
{{phone}}`,
    variables: ["customer_name", "topic", "key_points", "next_step_1", "next_step_2", "follow_up_time", "sender_name", "company_name", "phone"]
  },
  {
    id: "sales_02",
    name: "Proposal Sent",
    category: "sales",
    subject: "Your Proposal from {{company_name}}",
    body: `Dear {{customer_name}},

As discussed, I've prepared a proposal for {{project_name}}.

Proposal highlights:
• {{highlight_1}}
• {{highlight_2}}
• Investment: {{price}}

View proposal: {{proposal_url}}

I'm available to discuss any questions at {{phone}} or {{email}}.

Best regards,
{{sender_name}}`,
    variables: ["customer_name", "company_name", "project_name", "highlight_1", "highlight_2", "price", "proposal_url", "phone", "email", "sender_name"]
  },
  {
    id: "sales_03",
    name: "Demo Invitation",
    category: "sales",
    subject: "Schedule Your Personal Demo",
    body: `Hi {{customer_name}},

I'd love to show you how {{product_name}} can help with {{pain_point}}.

In this demo, you'll see:
• {{demo_point_1}}
• {{demo_point_2}}
• {{demo_point_3}}

Schedule your {{duration}}-minute demo: {{calendar_url}}

Questions? Call me at {{phone}}

Best,
{{sender_name}}`,
    variables: ["customer_name", "product_name", "pain_point", "demo_point_1", "demo_point_2", "demo_point_3", "duration", "calendar_url", "phone", "sender_name"]
  },
  {
    id: "sales_04",
    name: "Quote Request",
    category: "sales",
    subject: "Your Quote #{{quote_number}}",
    body: `Dear {{customer_name}},

Thank you for your interest in {{service_name}}.

Quote Details:
Service: {{service_description}}
Timeline: {{timeline}}
Investment: {{price}}
Valid until: {{expiry_date}}

View full quote: {{quote_url}}

Ready to proceed? Reply to this email or call {{phone}}.

Best regards,
{{sender_name}}
{{company_name}}`,
    variables: ["customer_name", "quote_number", "service_name", "service_description", "timeline", "price", "expiry_date", "quote_url", "phone", "sender_name", "company_name"]
  },
  {
    id: "sales_05",
    name: "Meeting Confirmation",
    category: "sales",
    subject: "Confirmed: Meeting on {{meeting_date}}",
    body: `Hi {{customer_name}},

This confirms our meeting:

Date: {{meeting_date}}
Time: {{meeting_time}}
Duration: {{duration}}
Location/Link: {{meeting_link}}

Agenda:
• {{agenda_item_1}}
• {{agenda_item_2}}
• {{agenda_item_3}}

Looking forward to it!

{{sender_name}}
{{company_name}}
{{phone}}`,
    variables: ["customer_name", "meeting_date", "meeting_time", "duration", "meeting_link", "agenda_item_1", "agenda_item_2", "agenda_item_3", "sender_name", "company_name", "phone"]
  },
  {
    id: "sales_06",
    name: "Cold Outreach",
    category: "sales",
    subject: "{{customer_name}}, Solving {{pain_point}}",
    body: `Hi {{customer_name}},

I noticed {{observation}} and thought {{product_name}} might help.

We've helped companies like {{competitor}} achieve:
• {{result_1}}
• {{result_2}}
• {{result_3}}

Worth a 15-minute conversation?

Book a time: {{calendar_url}}

Best,
{{sender_name}}
{{company_name}}`,
    variables: ["customer_name", "pain_point", "observation", "product_name", "competitor", "result_1", "result_2", "result_3", "calendar_url", "sender_name", "company_name"]
  },
  {
    id: "sales_07",
    name: "Objection Handler",
    category: "sales",
    subject: "Re: Your Concerns About {{concern}}",
    body: `Hi {{customer_name}},

Thank you for sharing your concerns about {{concern}}.

Let me address this:

{{solution_paragraph}}

Additionally:
• {{point_1}}
• {{point_2}}

Case study: {{case_study_url}}

Can we schedule a call to discuss? {{calendar_url}}

Best,
{{sender_name}}`,
    variables: ["customer_name", "concern", "solution_paragraph", "point_1", "point_2", "case_study_url", "calendar_url", "sender_name"]
  },
  {
    id: "sales_08",
    name: "Contract Sent",
    category: "sales",
    subject: "Your Contract is Ready to Sign",
    body: `Dear {{customer_name}},

Great news! Your contract for {{service_name}} is ready.

Contract details:
• Start date: {{start_date}}
• Terms: {{terms}}
• Investment: {{price}}

Review and sign: {{contract_url}}

Once signed, we'll begin {{next_step}}.

Questions? I'm here: {{phone}}

Best regards,
{{sender_name}}`,
    variables: ["customer_name", "service_name", "start_date", "terms", "price", "contract_url", "next_step", "phone", "sender_name"]
  },
  {
    id: "sales_09",
    name: "Re-engagement",
    category: "sales",
    subject: "Still Interested in {{product_name}}?",
    body: `Hi {{customer_name}},

I wanted to follow up on {{product_name}}.

Since we last spoke:
• {{update_1}}
• {{update_2}}
• Special offer: {{offer}}

Still interested? Let's reconnect: {{calendar_url}}

If timing isn't right, just let me know.

Best,
{{sender_name}}`,
    variables: ["customer_name", "product_name", "update_1", "update_2", "offer", "calendar_url", "sender_name"]
  },
  {
    id: "sales_10",
    name: "Testimonial Request",
    category: "sales",
    subject: "Quick Favor?",
    body: `Hi {{customer_name}},

I'm thrilled that {{product_name}} has helped you {{achievement}}!

Would you be willing to share a brief testimonial? It would help other businesses like yours discover our solution.

It takes just 2 minutes: {{testimonial_url}}

As thanks, I'd like to offer {{incentive}}.

Appreciate your support!

Best,
{{sender_name}}`,
    variables: ["customer_name", "product_name", "achievement", "testimonial_url", "incentive", "sender_name"]
  },

  // Customer Service (10)
  {
    id: "service_01",
    name: "Support Ticket Received",
    category: "customer_service",
    subject: "Ticket #{{ticket_number}} Received",
    body: `Hi {{customer_name}},

We've received your support request.

Ticket #{{ticket_number}}
Issue: {{issue_description}}
Priority: {{priority}}
Expected response: {{response_time}}

Track your ticket: {{ticket_url}}

Our team is on it!

{{company_name}} Support`,
    variables: ["customer_name", "ticket_number", "issue_description", "priority", "response_time", "ticket_url", "company_name"]
  },
  {
    id: "service_02",
    name: "Issue Resolved",
    category: "customer_service",
    subject: "Your Issue Has Been Resolved",
    body: `Hello {{customer_name}},

Great news! We've resolved ticket #{{ticket_number}}.

Solution: {{solution_description}}

Please confirm everything is working: {{feedback_url}}

If you need anything else, we're here to help!

Best regards,
{{agent_name}}
{{company_name}} Support`,
    variables: ["customer_name", "ticket_number", "solution_description", "feedback_url", "agent_name", "company_name"]
  },
  {
    id: "service_03",
    name: "Password Reset",
    category: "customer_service",
    subject: "Reset Your Password",
    body: `Hi {{customer_name}},

We received a request to reset your password.

Reset your password: {{reset_url}}

This link expires in {{expiry_hours}} hours.

If you didn't request this, please ignore this email.

{{company_name}} Security Team`,
    variables: ["customer_name", "reset_url", "expiry_hours", "company_name"]
  },
  {
    id: "service_04",
    name: "Account Update",
    category: "customer_service",
    subject: "Your Account Has Been Updated",
    body: `Dear {{customer_name}},

Your account settings have been updated:

Changes made:
• {{change_1}}
• {{change_2}}

Date: {{update_date}}

If you didn't make these changes, contact us immediately: {{support_email}}

{{company_name}} Security`,
    variables: ["customer_name", "change_1", "change_2", "update_date", "support_email", "company_name"]
  },
  {
    id: "service_05",
    name: "Refund Processed",
    category: "customer_service",
    subject: "Refund Processed - Order #{{order_number}}",
    body: `Hi {{customer_name}},

Your refund has been processed.

Order #{{order_number}}
Refund amount: {{refund_amount}}
Refund method: {{refund_method}}
Processing time: {{processing_days}} business days

Questions? Contact support: {{support_email}}

We're sorry to see you go!

{{company_name}}`,
    variables: ["customer_name", "order_number", "refund_amount", "refund_method", "processing_days", "support_email", "company_name"]
  },
  {
    id: "service_06",
    name: "Service Maintenance",
    category: "customer_service",
    subject: "Scheduled Maintenance on {{maintenance_date}}",
    body: `Dear {{customer_name}},

Scheduled maintenance notification:

Date: {{maintenance_date}}
Time: {{maintenance_time}}
Duration: {{duration}}
Affected services: {{affected_services}}

What to expect:
{{maintenance_details}}

We apologize for any inconvenience.

{{company_name}} Operations`,
    variables: ["customer_name", "maintenance_date", "maintenance_time", "duration", "affected_services", "maintenance_details", "company_name"]
  },
  {
    id: "service_07",
    name: "Feedback Thank You",
    category: "customer_service",
    subject: "Thank You for Your Feedback",
    body: `Hi {{customer_name}},

Thank you for taking the time to share your feedback about {{topic}}.

Your input helps us improve! Here's what we're doing:

{{action_items}}

We value customers like you who help us grow.

Best regards,
{{sender_name}}
{{company_name}}`,
    variables: ["customer_name", "topic", "action_items", "sender_name", "company_name"]
  },
  {
    id: "service_08",
    name: "Billing Question",
    category: "customer_service",
    subject: "Re: Your Billing Question",
    body: `Hello {{customer_name}},

Regarding your billing question:

Question: {{question}}
Answer: {{answer}}

Current balance: {{balance}}
Next billing date: {{next_billing_date}}

View billing details: {{billing_url}}

Need more help? Reply to this email.

{{company_name}} Billing`,
    variables: ["customer_name", "question", "answer", "balance", "next_billing_date", "billing_url", "company_name"]
  },
  {
    id: "service_09",
    name: "Appointment Reminder",
    category: "customer_service",
    subject: "Reminder: Appointment Tomorrow",
    body: `Hi {{customer_name}},

Reminder for your appointment:

Service: {{service_name}}
Date: {{appointment_date}}
Time: {{appointment_time}}
Location: {{location}}

Need to reschedule? {{reschedule_url}}

See you soon!

{{company_name}}`,
    variables: ["customer_name", "service_name", "appointment_date", "appointment_time", "location", "reschedule_url", "company_name"]
  },
  {
    id: "service_10",
    name: "Subscription Renewal",
    category: "customer_service",
    subject: "Your Subscription Renews Soon",
    body: `Dear {{customer_name}},

Your {{plan_name}} subscription renews on {{renewal_date}}.

Renewal amount: {{amount}}
Payment method: {{payment_method}}

Manage subscription: {{manage_url}}

Thank you for being a valued customer!

{{company_name}}`,
    variables: ["customer_name", "plan_name", "renewal_date", "amount", "payment_method", "manage_url", "company_name"]
  },

  // iKoteks Solutions - Professional Services (20)
  {
    id: "ikoteks_01",
    name: "Service Consultation Request",
    category: "ikoteks",
    subject: "Your Business Growth Consultation with iKoteks Solutions",
    body: `Dear {{customer_name}},

Thank you for your interest in growing your business with iKoteks Solutions!

We'd love to discuss how our {{service_type}} services can help you achieve {{business_goal}}.

Consultation Details:
• Duration: 30 minutes
• Topics: {{consultation_topics}}
• Next Steps: {{next_steps}}

Schedule your free consultation: {{booking_url}}

Our Services:
✓ {{service_1}}
✓ {{service_2}}
✓ {{service_3}}

Let's grow your business together!

Best regards,
{{consultant_name}}
iKoteks Solutions
{{phone}} | {{email}}`,
    variables: ["customer_name", "service_type", "business_goal", "consultation_topics", "next_steps", "booking_url", "service_1", "service_2", "service_3", "consultant_name", "phone", "email"]
  },
  {
    id: "ikoteks_02",
    name: "Custom Solution Proposal",
    category: "ikoteks",
    subject: "Your Custom Business Solution from iKoteks",
    body: `Dear {{customer_name}},

Based on our discussion about {{company_name}}'s needs, we've crafted a custom solution.

Your Business Challenges:
• {{challenge_1}}
• {{challenge_2}}
• {{challenge_3}}

Our Proposed Solution:
{{solution_overview}}

Implementation Timeline: {{timeline}}
Investment: {{investment_amount}}
ROI Expected: {{roi_estimate}}

Detailed proposal: {{proposal_url}}

Ready to transform your business? Let's schedule a call: {{calendar_url}}

Best regards,
{{sender_name}}
Senior Consultant, iKoteks Solutions
{{phone}}`,
    variables: ["customer_name", "company_name", "challenge_1", "challenge_2", "challenge_3", "solution_overview", "timeline", "investment_amount", "roi_estimate", "proposal_url", "calendar_url", "sender_name", "phone"]
  },
  {
    id: "ikoteks_03",
    name: "Project Kickoff",
    category: "ikoteks",
    subject: "Welcome to Your {{project_name}} Project!",
    body: `Hi {{customer_name}},

Welcome to iKoteks Solutions! We're excited to begin {{project_name}}.

Your Project Team:
• Project Manager: {{pm_name}}
• Lead Consultant: {{consultant_name}}
• Technical Lead: {{tech_lead}}

Project Timeline:
Phase 1: {{phase_1}} ({{phase_1_duration}})
Phase 2: {{phase_2}} ({{phase_2_duration}})
Phase 3: {{phase_3}} ({{phase_3_duration}})

Kickoff Meeting: {{kickoff_date}} at {{kickoff_time}}
Meeting Link: {{meeting_url}}

Access your project portal: {{portal_url}}

Let's achieve great results together!

{{sender_name}}
iKoteks Solutions`,
    variables: ["customer_name", "project_name", "pm_name", "consultant_name", "tech_lead", "phase_1", "phase_1_duration", "phase_2", "phase_2_duration", "phase_3", "phase_3_duration", "kickoff_date", "kickoff_time", "meeting_url", "portal_url", "sender_name"]
  },
  {
    id: "ikoteks_04",
    name: "Monthly Progress Report",
    category: "ikoteks",
    subject: "Your Monthly Progress Report - {{month}} {{year}}",
    body: `Dear {{customer_name}},

Here's your {{month}} progress report for {{project_name}}.

This Month's Achievements:
✅ {{achievement_1}}
✅ {{achievement_2}}
✅ {{achievement_3}}

Key Metrics:
• {{metric_1}}: {{value_1}}
• {{metric_2}}: {{value_2}}
• {{metric_3}}: {{value_3}}

Next Month's Goals:
🎯 {{goal_1}}
🎯 {{goal_2}}
🎯 {{goal_3}}

Full report: {{report_url}}

Monthly review call scheduled: {{review_date}}

Great progress! Keep it up!

{{consultant_name}}
iKoteks Solutions`,
    variables: ["customer_name", "month", "year", "project_name", "achievement_1", "achievement_2", "achievement_3", "metric_1", "value_1", "metric_2", "value_2", "metric_3", "value_3", "goal_1", "goal_2", "goal_3", "report_url", "review_date", "consultant_name"]
  },
  {
    id: "ikoteks_05",
    name: "Strategy Workshop Invitation",
    category: "ikoteks",
    subject: "Invitation: {{workshop_name}} Strategy Workshop",
    body: `Hello {{customer_name}},

You're invited to our exclusive {{workshop_name}} workshop!

Workshop Details:
📅 Date: {{workshop_date}}
⏰ Time: {{workshop_time}}
📍 Location: {{location}}
👥 Attendees: {{attendee_count}} business leaders

What You'll Learn:
• {{learning_1}}
• {{learning_2}}
• {{learning_3}}

Workshop Benefits:
✓ {{benefit_1}}
✓ {{benefit_2}}
✓ Free consultation worth {{consultation_value}}

Register now: {{registration_url}}
Limited spots - only {{spots_left}} remaining!

See you there!

{{organizer_name}}
iKoteks Solutions
{{phone}}`,
    variables: ["customer_name", "workshop_name", "workshop_date", "workshop_time", "location", "attendee_count", "learning_1", "learning_2", "learning_3", "benefit_1", "benefit_2", "consultation_value", "registration_url", "spots_left", "organizer_name", "phone"]
  },
  {
    id: "ikoteks_06",
    name: "Digital Transformation Quote",
    category: "ikoteks",
    subject: "Your Digital Transformation Quote #{{quote_number}}",
    body: `Dear {{customer_name}},

Thank you for considering iKoteks Solutions for your digital transformation journey.

Transformation Package: {{package_name}}

Included Services:
✓ {{service_1}}
✓ {{service_2}}
✓ {{service_3}}
✓ {{service_4}}

Timeline: {{timeline}}
Investment: {{total_investment}}

Payment Options:
• Option 1: {{payment_option_1}}
• Option 2: {{payment_option_2}}

Expected Outcomes:
• {{outcome_1}}
• {{outcome_2}}
• {{outcome_3}}

Download full quote: {{quote_url}}

Questions? Let's talk: {{phone}}

Best regards,
{{sender_name}}
Digital Transformation Specialist
iKoteks Solutions`,
    variables: ["customer_name", "quote_number", "package_name", "service_1", "service_2", "service_3", "service_4", "timeline", "total_investment", "payment_option_1", "payment_option_2", "outcome_1", "outcome_2", "outcome_3", "quote_url", "phone", "sender_name"]
  },
  {
    id: "ikoteks_07",
    name: "Consultation Follow-up",
    category: "ikoteks",
    subject: "Following Up: Your Business Growth Strategy",
    body: `Hi {{customer_name}},

Thank you for the great conversation about {{discussion_topic}}!

Key Takeaways from Our Call:
• {{takeaway_1}}
• {{takeaway_2}}
• {{takeaway_3}}

Recommended Next Steps:
1. {{step_1}}
2. {{step_2}}
3. {{step_3}}

Custom recommendations for {{company_name}}: {{recommendations_url}}

I've reserved {{offer_type}} for you: {{offer_details}}

Let's schedule your next call: {{calendar_url}}

Looking forward to helping you grow!

{{consultant_name}}
Business Growth Consultant
iKoteks Solutions
{{phone}} | {{email}}`,
    variables: ["customer_name", "discussion_topic", "takeaway_1", "takeaway_2", "takeaway_3", "step_1", "step_2", "step_3", "company_name", "recommendations_url", "offer_type", "offer_details", "calendar_url", "consultant_name", "phone", "email"]
  },
  {
    id: "ikoteks_08",
    name: "Service Package Options",
    category: "ikoteks",
    subject: "Choose Your Perfect Growth Package",
    body: `Dear {{customer_name}},

Based on {{company_name}}'s goals, here are your recommended packages:

🥉 STARTER PACKAGE - {{starter_price}}
{{starter_features}}
Best for: {{starter_best_for}}

🥈 PROFESSIONAL PACKAGE - {{pro_price}}
{{pro_features}}
Best for: {{pro_best_for}}

🥇 ENTERPRISE PACKAGE - {{enterprise_price}}
{{enterprise_features}}
Best for: {{enterprise_best_for}}

All packages include:
✓ {{common_feature_1}}
✓ {{common_feature_2}}
✓ {{common_feature_3}}

Compare packages: {{comparison_url}}

Ready to choose? Schedule a call: {{calendar_url}}

Best regards,
{{sender_name}}
iKoteks Solutions`,
    variables: ["customer_name", "company_name", "starter_price", "starter_features", "starter_best_for", "pro_price", "pro_features", "pro_best_for", "enterprise_price", "enterprise_features", "enterprise_best_for", "common_feature_1", "common_feature_2", "common_feature_3", "comparison_url", "calendar_url", "sender_name"]
  },
  {
    id: "ikoteks_09",
    name: "Project Milestone Completed",
    category: "ikoteks",
    subject: "🎉 Milestone Achieved: {{milestone_name}}",
    body: `Congratulations {{customer_name}}!

We've successfully completed {{milestone_name}} for {{project_name}}!

Milestone Results:
✅ {{result_1}}
✅ {{result_2}}
✅ {{result_3}}

Impact on Your Business:
• {{impact_1}}
• {{impact_2}}
• {{impact_3}}

Next Milestone: {{next_milestone}}
Target Date: {{target_date}}

View detailed results: {{results_url}}

Celebrate with us - you're {{completion_percentage}}% complete!

Keep up the great work!

{{project_manager}}
Project Manager, iKoteks Solutions`,
    variables: ["customer_name", "milestone_name", "project_name", "result_1", "result_2", "result_3", "impact_1", "impact_2", "impact_3", "next_milestone", "target_date", "results_url", "completion_percentage", "project_manager"]
  },
  {
    id: "ikoteks_10",
    name: "ROI Report",
    category: "ikoteks",
    subject: "Your Return on Investment Report - Q{{quarter}}",
    body: `Dear {{customer_name}},

Here's your Q{{quarter}} ROI report for your investment with iKoteks Solutions.

Your Investment: {{investment_amount}}

Returns This Quarter:
💰 Revenue increase: {{revenue_increase}}
📈 Growth rate: {{growth_rate}}%
⏱️ Time saved: {{time_saved}} hours
💵 Cost reduction: {{cost_reduction}}

Total ROI: {{total_roi}}%

Key Performance Indicators:
• {{kpi_1}}: {{kpi_1_value}}
• {{kpi_2}}: {{kpi_2_value}}
• {{kpi_3}}: {{kpi_3_value}}

Year-over-year improvement: {{yoy_improvement}}%

Full report: {{report_url}}

Your success is our success! Let's discuss Q{{next_quarter}} goals: {{calendar_url}}

Best regards,
{{account_manager}}
Account Manager, iKoteks Solutions`,
    variables: ["customer_name", "quarter", "investment_amount", "revenue_increase", "growth_rate", "time_saved", "cost_reduction", "total_roi", "kpi_1", "kpi_1_value", "kpi_2", "kpi_2_value", "kpi_3", "kpi_3_value", "yoy_improvement", "report_url", "next_quarter", "calendar_url", "account_manager"]
  },
  {
    id: "ikoteks_11",
    name: "Implementation Training",
    category: "ikoteks",
    subject: "Your Training Schedule for {{system_name}}",
    body: `Hello {{customer_name}},

Your {{system_name}} implementation includes comprehensive training!

Training Schedule:
Session 1: {{session_1_topic}}
Date: {{session_1_date}}
Duration: {{session_1_duration}}

Session 2: {{session_2_topic}}
Date: {{session_2_date}}
Duration: {{session_2_duration}}

Session 3: {{session_3_topic}}
Date: {{session_3_date}}
Duration: {{session_3_duration}}

Training Materials: {{materials_url}}
Training Portal: {{portal_url}}

All sessions include:
✓ Live demonstrations
✓ Q&A sessions
✓ Hands-on practice
✓ Recorded sessions for review

Questions? Contact your trainer: {{trainer_name}} at {{trainer_email}}

See you in training!

iKoteks Solutions Training Team`,
    variables: ["customer_name", "system_name", "session_1_topic", "session_1_date", "session_1_duration", "session_2_topic", "session_2_date", "session_2_duration", "session_3_topic", "session_3_date", "session_3_duration", "materials_url", "portal_url", "trainer_name", "trainer_email"]
  },
  {
    id: "ikoteks_12",
    name: "Success Story Feature",
    category: "ikoteks",
    subject: "Feature Your Success Story?",
    body: `Hi {{customer_name}},

Your results with {{project_name}} have been outstanding!

Your Achievements:
🏆 {{achievement_1}}
🏆 {{achievement_2}}
🏆 {{achievement_3}}

We'd love to feature your success story to inspire other businesses. 

What's involved:
• 30-minute interview
• Professional writeup
• Your approval before publishing
• Increased visibility for {{company_name}}

As a thank you: {{incentive}}

Interested? Let me know: {{response_url}}

Keep up the amazing work!

{{sender_name}}
Marketing Director, iKoteks Solutions`,
    variables: ["customer_name", "project_name", "achievement_1", "achievement_2", "achievement_3", "company_name", "incentive", "response_url", "sender_name"]
  },
  {
    id: "ikoteks_13",
    name: "Annual Review Invitation",
    category: "ikoteks",
    subject: "Schedule Your Annual Business Review",
    body: `Dear {{customer_name}},

It's time for your annual business review with iKoteks Solutions!

This Year's Highlights:
• Projects completed: {{projects_completed}}
• Total ROI: {{annual_roi}}%
• Key achievements: {{key_achievements}}

Annual Review Agenda:
1. {{agenda_item_1}}
2. {{agenda_item_2}}
3. {{agenda_item_3}}
4. {{agenda_item_4}}

We'll discuss:
✓ {{year}} performance analysis
✓ {{next_year}} strategic planning
✓ New opportunities for growth
✓ Service optimization

Schedule your review: {{calendar_url}}

Looking forward to another successful year!

{{account_manager}}
Senior Account Manager
iKoteks Solutions
{{phone}}`,
    variables: ["customer_name", "projects_completed", "annual_roi", "key_achievements", "agenda_item_1", "agenda_item_2", "agenda_item_3", "agenda_item_4", "year", "next_year", "calendar_url", "account_manager", "phone"]
  },
  {
    id: "ikoteks_14",
    name: "Emergency Support",
    category: "ikoteks",
    subject: "24/7 Support Available for {{issue_type}}",
    body: `Hi {{customer_name}},

We understand you're experiencing {{issue_type}} with {{system_name}}.

Our support team is on it!

Ticket #{{ticket_number}}
Priority: {{priority_level}}
Assigned to: {{support_engineer}}
Estimated resolution: {{resolution_time}}

Emergency contact:
📞 {{emergency_phone}}
📧 {{emergency_email}}

Current status: {{current_status}}

Track progress: {{tracking_url}}

We're working to resolve this as quickly as possible.

{{support_manager}}
Support Manager, iKoteks Solutions`,
    variables: ["customer_name", "issue_type", "system_name", "ticket_number", "priority_level", "support_engineer", "resolution_time", "emergency_phone", "emergency_email", "current_status", "tracking_url", "support_manager"]
  },
  {
    id: "ikoteks_15",
    name: "Referral Program",
    category: "ikoteks",
    subject: "Refer & Earn with iKoteks Solutions",
    body: `Hello {{customer_name}},

Love working with iKoteks Solutions? Share the success!

Referral Benefits:
💰 {{referral_reward}} for each referral
🎁 {{bonus_gift}} after {{referral_count}} referrals
⭐ VIP status and premium support

Who can you refer?
• Businesses needing {{service_1}}
• Companies looking for {{service_2}}
• Organizations seeking {{service_3}}

Your unique referral link: {{referral_url}}

When they sign up:
✓ They get {{new_client_discount}}% off
✓ You get {{referral_reward}}
✓ Both businesses grow!

Start referring: {{referral_portal}}

Thanks for spreading the word!

{{sender_name}}
iKoteks Solutions`,
    variables: ["customer_name", "referral_reward", "bonus_gift", "referral_count", "service_1", "service_2", "service_3", "referral_url", "new_client_discount", "referral_portal", "sender_name"]
  },
  {
    id: "ikoteks_16",
    name: "Service Upgrade Offer",
    category: "ikoteks",
    subject: "Exclusive Upgrade: {{upgrade_package}}",
    body: `Dear {{customer_name}},

Based on {{company_name}}'s growth, you're ready for our {{upgrade_package}}!

Your Current Plan: {{current_plan}}
Recommended Upgrade: {{upgrade_package}}

New Features You'll Get:
✨ {{new_feature_1}}
✨ {{new_feature_2}}
✨ {{new_feature_3}}
✨ {{new_feature_4}}

Upgrade Benefits:
• {{benefit_1}}
• {{benefit_2}}
• {{benefit_3}}

Exclusive upgrade pricing: {{upgrade_price}} (save {{savings_amount}})
Valid until: {{offer_expiry}}

See full details: {{upgrade_url}}

Schedule upgrade consultation: {{calendar_url}}

Let's take your business to the next level!

{{consultant_name}}
Growth Consultant, iKoteks Solutions`,
    variables: ["customer_name", "company_name", "upgrade_package", "current_plan", "new_feature_1", "new_feature_2", "new_feature_3", "new_feature_4", "benefit_1", "benefit_2", "benefit_3", "upgrade_price", "savings_amount", "offer_expiry", "upgrade_url", "calendar_url", "consultant_name"]
  },
  {
    id: "ikoteks_17",
    name: "Compliance Audit Report",
    category: "ikoteks",
    subject: "Your {{audit_type}} Audit Results",
    body: `Dear {{customer_name}},

Your {{audit_type}} compliance audit is complete.

Audit Score: {{audit_score}}/100

Compliant Areas:
✅ {{compliant_1}}
✅ {{compliant_2}}
✅ {{compliant_3}}

Areas Needing Attention:
⚠️ {{attention_1}}
⚠️ {{attention_2}}

Recommendations:
1. {{recommendation_1}}
2. {{recommendation_2}}
3. {{recommendation_3}}

Action Plan:
{{action_plan}}

Full audit report: {{report_url}}

Compliance consultation: {{calendar_url}}

We're here to help you stay compliant!

{{auditor_name}}
Compliance Specialist, iKoteks Solutions`,
    variables: ["customer_name", "audit_type", "audit_score", "compliant_1", "compliant_2", "compliant_3", "attention_1", "attention_2", "recommendation_1", "recommendation_2", "recommendation_3", "action_plan", "report_url", "calendar_url", "auditor_name"]
  },
  {
    id: "ikoteks_18",
    name: "Market Analysis Report",
    category: "ikoteks",
    subject: "Your Custom Market Analysis - {{industry}}",
    body: `Hello {{customer_name}},

Your custom {{industry}} market analysis is ready!

Market Overview:
• Market size: {{market_size}}
• Growth rate: {{growth_rate}}%
• Key trends: {{key_trends}}

Your Position:
• Current market share: {{market_share}}%
• Competitive ranking: #{{ranking}}
• Growth opportunity: {{opportunity}}

Competitor Analysis:
{{competitor_analysis}}

Recommendations for {{company_name}}:
1. {{recommendation_1}}
2. {{recommendation_2}}
3. {{recommendation_3}}

Strategic opportunities: {{opportunities}}

Download full report: {{report_url}}

Strategy session: {{calendar_url}}

Let's capitalize on these insights!

{{analyst_name}}
Market Analyst, iKoteks Solutions`,
    variables: ["customer_name", "industry", "market_size", "growth_rate", "key_trends", "market_share", "ranking", "opportunity", "competitor_analysis", "company_name", "recommendation_1", "recommendation_2", "recommendation_3", "opportunities", "report_url", "calendar_url", "analyst_name"]
  },
  {
    id: "ikoteks_19",
    name: "Partnership Opportunity",
    category: "ikoteks",
    subject: "Strategic Partnership Opportunity",
    body: `Dear {{customer_name}},

We see an exciting partnership opportunity for {{company_name}}!

Partnership Proposal:
{{partnership_description}}

Mutual Benefits:
• For {{company_name}}: {{benefit_1}}
• For iKoteks: {{benefit_2}}
• For clients: {{benefit_3}}

Partnership Terms:
• Duration: {{duration}}
• Revenue share: {{revenue_share}}
• Marketing support: {{marketing_support}}

Success stories from similar partnerships:
{{case_study_1}}
{{case_study_2}}

Let's discuss this opportunity: {{calendar_url}}

Partnership proposal: {{proposal_url}}

Looking forward to collaborating!

{{sender_name}}
Partnership Director
iKoteks Solutions
{{phone}}`,
    variables: ["customer_name", "company_name", "partnership_description", "benefit_1", "benefit_2", "benefit_3", "duration", "revenue_share", "marketing_support", "case_study_1", "case_study_2", "calendar_url", "proposal_url", "sender_name", "phone"]
  },
  {
    id: "ikoteks_20",
    name: "Contract Renewal",
    category: "ikoteks",
    subject: "Your Contract Renewal - Enhanced Benefits",
    body: `Dear {{customer_name}},

Your contract with iKoteks Solutions renews on {{renewal_date}}.

This Year's Results:
🎯 {{result_1}}
🎯 {{result_2}}
🎯 {{result_3}}

Renewal Package: {{package_name}}

What's New for {{next_year}}:
✨ {{new_feature_1}}
✨ {{new_feature_2}}
✨ {{new_feature_3}}

Renewal Terms:
• Investment: {{renewal_amount}}
• Early renewal discount: {{discount}}%
• Payment options: {{payment_options}}

Additional benefits:
• {{benefit_1}}
• {{benefit_2}}
• Priority support upgrade

Review contract: {{contract_url}}
Renew early and save: {{renewal_url}}

Thank you for your continued trust!

{{account_manager}}
Account Manager, iKoteks Solutions
{{phone}}`,
    variables: ["customer_name", "renewal_date", "result_1", "result_2", "result_3", "package_name", "next_year", "new_feature_1", "new_feature_2", "new_feature_3", "renewal_amount", "discount", "payment_options", "benefit_1", "benefit_2", "contract_url", "renewal_url", "account_manager", "phone"]
  },

  // Add more categories and templates to reach 100+
  // Newsletters (5), Events (5), Seasonal (5), etc.
  // ... continuing with more templates
];
