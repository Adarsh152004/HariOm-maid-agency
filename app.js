/* ==========================================================================
   HARI OM MAID AGENCY - MULTI-LANGUAGE TRANSLATION ENGINE (app.js)
   ========================================================================== */

const AGENCY_WHATSAPP_NUMBER = "919004873201";

// Comprehensive Dictionary for English (en), Hindi (hi), and Marathi (mr)
const translations = {
  en: {
    top_hours: "Mon – Sun: 8:00 AM – 9:00 PM",
    top_wa: "WhatsApp Support",
    logo_title: "HARI OM",
    logo_sub: "MAID AGENCY",
    nav_services: "Services",
    nav_verification: "Verification",
    nav_charges: "Our Charges",
    nav_process: "How It Works",
    nav_blogs: "Blogs",
    nav_reviews: "Reviews",
    nav_faq: "FAQ",
    btn_call: "Call Us",
    btn_call_num: "Call +91 90048 73201",
    btn_book_fast: "Book in 24h",
    btn_req_staff: "Request Staff",
    btn_find_maids: "Find Maids Now",
    btn_wa_chat: "Chat on WhatsApp",
    btn_inquire: "Inquire Now",
    
    hero_badge: "PLACEMENT IN 24 HOURS",
    hero_title_prefix: "Hire Trusted Domestic Staff For",
    hero_title_highlight: "Your Home",
    hero_subtext: "Reliable full-time house maids, expert home cooks, caring nannies, and 24-hour live-in housekeepers matched quickly for your family.",
    pill_1: "30-Day Free Replacement",
    pill_2: "Zero Registration Fee",
    pill_3: "Pure Veg & Jain Cooks",
    pill_4: "24-Hour Live-In Experts",
    rating_score: "4.9 / 5.0",
    rating_text: "Rating from 1,400+ Families",

    feat_1_title: "Background Verified",
    feat_1_sub: "Complete identity & paper check",
    feat_2_title: "30-Day Replacement",
    feat_2_sub: "Zero extra agency placement fees",
    feat_3_title: "Jain & Veg Cook",
    feat_3_sub: "Hygienic traditional home recipes",
    feat_4_title: "Multi-Lingual Helpers",
    feat_4_sub: "Hindi, Marathi, Gujarati & English",

    sec_services_badge: "OUR SERVICES",
    sec_services_title: "Domestic Solutions For Every Home",
    sec_services_sub: "Trained, background-checked helpers tailored for your daily household management.",

    tag_popular: "MOST POPULAR",

    s1_title: "Full-Time House Maid",
    s1_shift: "☀️ 8h – 12h Day Shift",
    s1_desc: "Sweeping, mopping, dusting, utensil washing, bathroom cleaning & daily laundry upkeep.",
    s1_b1: "Floor Sweeping & Mopping",
    s1_b2: "Utensil Washing & Sanitation",
    s1_b3: "Laundry Washing & Folding",
    s1_rate: "₹18,000 – ₹25,000 / mo",

    s2_title: "Home Cook & Chef",
    s2_shift: "☀️ Breakfast, Lunch & Dinner",
    s2_desc: "Home-style delicious meals prepared strictly according to your family taste and recipe rules.",
    s2_b1: "Pure Veg, Jain & Non-Veg Dishes",
    s2_b2: "North, South & Gujarati Cuisines",
    s2_b3: "Kitchen Cleaning & Vegetable Prep",
    s2_rate: "From ₹8,000 / mo",

    s3_title: "24-Hour Live-In Housekeeper",
    s3_shift: "🏠 24×7 Stay-At-Home",
    s3_desc: "Dedicated stay-at-home resident handling cooking or cleaning (Scope depends on family size; min 4 duties).",
    s3_b1: "24/7 Home Availability & Security",
    s3_b2: "Housekeeping / Cooking Specialist",
    s3_b3: "Food & Stay Provided By Client",
    s3_rate: "From ₹25,000 / mo",

    s4_title: "Nanny & Babysitter",
    s4_shift: "🏠 24-Hour Live-In Care",
    s4_desc: "Patient, gentle stay-at-home caretakers attending to infant and toddler feeding, bathing, play & safety routine.",
    s4_b1: "Baby Bathing, Feeding & Care",
    s4_b2: "Sleep Routine & Play Engagement",
    s4_b3: "Utensil & Linen Sterilization",
    s4_rate: "₹30,000 / mo (Live-In)",

    s5_title: "Japa Maid (Post-Natal Care)",
    s5_shift: "👶 45-Day Specialist",
    s5_desc: "Traditional care for new mother & newborn baby including oil massages, baths & recovery diet.",
    s5_b1: "Mother & Baby Massage & Bath",
    s5_b2: "Newborn Sleep & Burping Support",
    s5_b3: "Post-Delivery Healing Diet",
    s5_rate: "₹40,000 – ₹45,000 / mo",

    s6_title: "Elderly & Patient Caretaker",
    s6_shift: "☀️ 12h / 🏠 24h Caregiver",
    s6_desc: "Empathetic attendants aiding seniors with mobility, washroom assistance, medicines & companionship.",
    s6_b1: "Walking, Bathing & Washroom Aid",
    s6_b2: "Timely Medication Reminders",
    s6_b3: "Post-Surgery Bedside Support",
    s6_rate: "From ₹20,000 / mo",

    sec_trust_badge: "SAFETY & SECURITY",
    sec_trust_title: "4-Level Background Screening",
    sec_trust_sub: "We perform thorough screening before introducing any helper to your family.",
    ts1_title: "Government ID Authentication",
    ts1_desc: "Biometric database verification to confirm identity and permanent address details.",
    ts2_title: "Police Station Background Screening",
    ts2_desc: "Official records verification to ensure zero criminal background or legal issues.",
    ts3_title: "2x Past Employer Reference Calls",
    ts3_desc: "Personal reference calls with past employers to check honesty, behavior and punctuality.",
    ts4_title: "Skill Assessment & Hygiene Review",
    ts4_desc: "Face-to-face cooking & cleaning evaluation along with general fitness check.",
    photo_overlay_title: "Complete Peace of Mind",
    photo_overlay_sub: "15,000+ happy families trust Hari Om Maid Agency",

    sec_charges_badge: "TRANSPARENT PRICING",
    sec_charges_title: "Our Service Charges & Shift Plans",
    sec_charges_sub: "Clear monthly salary benchmarks based on duty hours with zero hidden costs.",
    badge_livein: "24-HOUR STAY-IN",
    badge_popular: "MOST POPULAR",
    per_month: "/ month",
    charges_note_text: "Important Note: ☀️ Day Shifts mean staff comes daily for morning/day hours. 🏠 24-Hour Live-In means staff resides at your home with food & stay provided. A single helper performs contracted duties based on family size (min 4 core tasks). Placement fee terms are disclosed upfront.",

    c1_shift: "🏠 24-Hours Live-In",
    c1_title: "24x7 Live-In Maid / Cook",
    c1_desc: "Dedicated round-the-clock stay-at-home helper for cooking or house maintenance.",
    c1_l1: "Sweeping, mopping & house cleaning",
    c1_l2: "All meals cooking (Veg / Jain / Non-veg)",
    c1_l3: "Utensil washing & kitchen upkeep",
    c1_l4: "Salary depends on family size (min 4 duties)",
    c1_l5: "30-Day Free Unlimited Replacement",
    btn_book_c1: "Book 24-Hr Live-In (₹25,000+)",

    c2_shift: "☀️ 10-Hours Day Shift",
    c2_title: "10-Hours Extended Shift",
    c2_desc: "Full daytime support for working couples and busy households.",
    c2_l1: "Full house floor cleaning & dusting",
    c2_l2: "Breakfast, lunch & evening meal prep",
    c2_l3: "Utensil dishwashing & kitchen cleaning",
    c2_l4: "Clothes laundry & ironing",
    c2_l5: "30-Day Free Replacement Guarantee",
    btn_book_c2: "Book 10-Hr Staff (₹22k–₹25k)",

    c3_shift: "☀️ 8-Hours Day Shift",
    c3_title: "8-Hours Standard Shift",
    c3_desc: "Standard business-hours domestic help for daily tasks.",
    c3_l1: "Daily floor sweeping & mopping",
    c3_l2: "Utensil washing & kitchen tidying",
    c3_l3: "Cooking support / Laundry assistance",
    c3_l4: "Background & identity checked",
    c3_l5: "30-Day Free Replacement",
    btn_book_c3: "Book 8-Hr Staff (₹18k–₹20k)",

    c4_shift: "☀️ 2-Hours Daily Shift",
    c4_title: "2-Hours Daily Chores",
    c4_desc: "Quick morning/evening shift for sweeping, mopping & utensil washing.",
    c4_l1: "Daily floor sweeping & mopping",
    c4_l2: "Daily utensil dishwashing",
    c4_l3: "Trash disposal & sink wipe-down",
    c4_l4: "Identity verified staff",
    c4_l5: "30-Day Free Replacement",
    btn_book_c4: "Book 2-Hr Staff (₹7k–₹8k)",

    c5_shift: "🏠 24-Hour Live-In Care",
    c5_title: "Nanny / Babysitter (Live-In)",
    c5_desc: "Full stay-at-home child caretaker for babies & toddlers.",
    c5_l1: "Baby massage, bathing & feeding",
    c5_l2: "Sleep routine & play engagement",
    c5_l3: "Baby clothes & utensil sanitation",
    c5_l4: "24-Hour stay-in care",
    c5_l5: "30-Day Free Replacement",
    btn_book_c5: "Book Nanny (₹30,000)",

    c6_shift: "👶 45-Day Post-Natal Care",
    c6_title: "Japa Maid (Specialist)",
    c6_desc: "Specialized care for mother & newborn after delivery.",
    c6_l1: "Mother & baby oil massage & bath",
    c6_l2: "Postpartum recovery diet prep",
    c6_l3: "Newborn sleep & burping care",
    c6_l4: "24x7 Post-natal assistance",
    c6_l5: "30-Day Free Replacement",
    btn_book_c6: "Book Japa Maid (₹40k–₹45k)",

    sec_process_badge: "SIMPLE STEPS",
    sec_process_title: "How To Hire In 24 Hours",
    sec_process_sub: "Simple matching process without long waiting or heavy paperwork.",
    ps1_title: "1. Share Your Needs",
    ps1_desc: "Tell us your required shift (live-in or day shift), work duties (cooking, cleaning, nanny), and language preference on WhatsApp or call.",
    ps2_title: "2. Meet 2–3 Candidates",
    ps2_desc: "Within 24 hours, review background-checked candidate profiles and conduct a video or in-person interview to choose your helper.",
    ps3_title: "3. Hire with Guarantee",
    ps3_desc: "Candidate starts work. You are protected by our 30-Day Free Replacement Guarantee with zero extra agency charges.",

    sec_blogs_badge: "HELPFUL GUIDES",
    sec_blogs_title: "Domestic Care Articles & Blogs",
    sec_blogs_sub: "Useful insights for managing household help, infant care, and elderly assistance.",
    b1_tag: "SAFETY & HIRING",
    b1_title: "5 Essential Safety Checks Before Hiring a 24-Hour Live-In Maid",
    b1_desc: "Hiring a stay-at-home housekeeper requires extra care. Discover key background checks and trial guidelines every family should follow.",

    b2_tag: "NEWBORN CARE",
    b2_title: "What Every New Mother Should Expect from a Professional Japa Maid",
    b2_desc: "Learn about traditional postnatal massages, newborn bath care routines, and recovery diets that make Japa maids essential for new mothers.",

    b3_tag: "VERIFICATION",
    b3_title: "Why Police Station Verification & Identity Checks Protect Your Family",
    b3_desc: "Why simple ID cards are not enough. Learn how certified police verification and employer reference calls protect your household.",

    b4_tag: "COOKING & FOOD",
    b4_title: "Finding the Right Pure Vegetarian & Jain Home Cook in Mumbai",
    b4_desc: "Tips on specifying satvik food rules, onion-garlic restrictions, and managing kitchen hygiene with your home cook.",

    sec_reviews_badge: "REVIEWS",
    sec_reviews_title: "Trusted By 15,000+ Families",
    sec_reviews_sub: "Feedback from homeowners, working couples, and senior citizens.",
    rev1_quote: `"We needed a full-time Jain cook urgently. Hari Om Maid Agency matched us with an experienced cook within 12 hours! She prepares delicious satvik food and keeps the kitchen spotless."`,
    rev1_author: "Ghatkopar East · Full-Time Cook",
    rev2_quote: `"Both of us work corporate jobs and needed a reliable live-in nanny for our toddler. Sunita didi from Hari Om Agency is warm, patient, and very responsible."`,
    rev2_author: "Powai · Live-In Nanny",
    rev3_quote: `"My father needed a patient attendant after his knee surgery. The agency provided a gentle caretaker within 1 day and shared all verification papers."`,
    rev3_author: "Andheri West · Patient Attendant",

    sec_faq_badge: "FAQ",
    sec_faq_title: "Frequently Asked Questions",
    sec_faq_sub: "Quick answers to common questions about domestic staffing.",
    faq1_q: "How fast can I get a maid or cook?",
    faq1_a: "We shortlist 2 to 3 candidate profiles matching your requirements within 24 hours. You can interview candidates and start duty immediately.",
    faq2_q: "How is background verification done?",
    faq2_a: "Every candidate undergoes government ID verification, local police station background check, 2 past employer calls, and a practical skill review.",
    faq3_q: "What does the 30-Day Free Replacement Guarantee mean?",
    faq3_a: "If you are not satisfied with the candidate during the first 30 days, we provide a free replacement candidate with zero extra placement charges.",
    faq4_q: "Are 24-hour live-in maids available?",
    faq4_a: "Yes, we specialize in 24-hour live-in maids, cooks, nannies, and patient care attendants with food & stay provided by the client.",

    cta_heading: "Need A Verified Maid At Home Today?",
    cta_sub: "Talk to our placement manager directly or send your requirements on WhatsApp.",

    f_title_services: "Our Services",
    f_title_links: "Quick Links",
    f_title_contact: "Contact & Office",
    footer_bio: "Mumbai's trusted domestic help placement agency for full-time house maids, cooks, babysitters & senior caregivers.",

    modal_head_title: "Request Domestic Staff",
    modal_head_sub: "Get 2–3 matching candidate profiles on WhatsApp.",
    modal_label_service: "Select Service",
    modal_label_shift: "Shift Duration",
    modal_label_area: "Your Area / City",
    modal_label_phone: "Your WhatsApp Mobile Number",
    modal_btn_submit: "Get Profiles on WhatsApp",
    m_opt_maid: "Full-Time House Maid (Cleaning & Upkeep)",
    m_opt_cook: "Home Cook (Veg / Jain / Non-veg)",
    m_opt_livein: "24-Hour Live-In Housekeeper",
    m_opt_nanny: "Nanny / Babysitter (Childcare)",
    m_opt_japa: "Japa Maid (Post-Natal Care)",
    m_opt_elderly: "Elderly & Patient Caretaker",

    contact_sec_badge: "QUICK INQUIRY",
    contact_sec_title: "Send Your Requirement To Our Placement Manager",
    contact_sec_sub: "Fill out this short form to instantly receive matching staff profiles on WhatsApp.",
    lbl_name: "Your Name",
    lbl_phone: "WhatsApp Mobile Number",
    lbl_service: "Select Service",
    lbl_shift: "Shift Duration",
    lbl_area: "Your Area / City",
    lbl_notes: "Special Requirements / Notes (Optional)",
    btn_send_wa: "Send Requirement on WhatsApp"
  },

  hi: {
    top_hours: "सोम - रवि: सुबह 8:00 - रात 9:00",
    top_wa: "व्हाट्सएप सहायता",
    logo_title: "हरि ओम",
    logo_sub: "मेड एजेंसी",
    nav_services: "सेवाएं",
    nav_verification: "सत्यापन",
    nav_charges: "हमारे शुल्क",
    nav_process: "प्रक्रिया",
    nav_blogs: "ब्लॉग्स",
    nav_reviews: "समीक्षाएं",
    nav_faq: "प्रश्न",
    btn_call: "कॉल करें",
    btn_call_num: "कॉल करें +91 90048 73201",
    btn_book_fast: "24h में बुक करें",
    btn_req_staff: "मेड मंगवाएं",
    btn_find_maids: "अभी मेड खोजें",
    btn_wa_chat: "व्हाट्सएप पर बात करें",
    btn_inquire: "जानकारी लें",
    
    hero_badge: "24 घंटे में सेवा उपलब्ध",
    hero_title_prefix: "अपने घर के लिए विश्वसनीय",
    hero_title_highlight: "घरेलू स्टाफ लें",
    hero_subtext: "24 घंटे में प्राप्त करें वेरिफाइड फुल-टाइम मेड, होम कुक, नैनी और 24-घंटे रहने वाली सहायिका।",
    pill_1: "30-दिन मुफ़्त रिप्लेसमेंट",
    pill_2: "ज़ीरो रजिस्ट्रेशन शुल्क",
    pill_3: "शुद्ध शाकाहारी व जैन कुक",
    pill_4: "24-घंटे रहने वाली मेड",
    rating_score: "4.9 / 5.0",
    rating_text: "1,400+ परिवारों की रेटिंग",

    feat_1_title: "बैकग्राउंड वेरिफाइड",
    feat_1_sub: "पहचान और दस्तावेजों की जांच",
    feat_2_title: "30-दिन रिप्लेसमेंट",
    feat_2_sub: "बिना किसी अतिरिक्त शुल्क के बदलाव",
    feat_3_title: "जैन व वेज कुक",
    feat_3_sub: "घर जैसा शुद्ध और स्वादिष्ट भोजन",
    feat_4_title: "बहुभाषी सहायिका",
    feat_4_sub: "हिंदी, मराठी, गुजराती और अंग्रेजी",

    sec_services_badge: "हमारी सेवाएं",
    sec_services_title: "हर घर के लिए संपूर्ण समाधान",
    sec_services_sub: "आपके घर की दैनिक देखभाल के लिए प्रशिक्षित और वेरिफाइड स्टाफ।",

    tag_popular: "सबसे लोकप्रिय",

    s1_title: "फुल-टाइम हाउस मेड",
    s1_shift: "☀️ 8 से 12 घंटे डे शिफ्ट",
    s1_desc: "झाड़ू, पोछा, डस्टिंग, बर्तन धोना, बाथरूम सफाई और कपड़े धोना।",
    s1_b1: "घर की झाड़ू-पोछा और सफाई",
    s1_b2: "बर्तन धोना व रैक सफाई",
    s1_b3: "कपड़े धोना व सुखाना",
    s1_rate: "₹18,000 से ₹25,000 / महीना",

    s2_title: "होम कुक व शेफ",
    s2_shift: "☀️ नाश्ता, दोपहर व रात का खाना",
    s2_desc: "आपके परिवार के स्वाद और रेसिपी के अनुसार घर जैसा स्वादिष्ट भोजन।",
    s2_b1: "शुद्ध शाकाहारी, जैन व नॉन-वेज खाना",
    s2_b2: "नॉर्थ, साउथ व गुजराती व्यंजन",
    s2_b3: "सब्जी काटना व रसोई सफाई",
    s2_rate: "₹8,000 से ₹25,000 / महीना",

    s3_title: "24-घंटे रहने वाली मेड (Live-In)",
    s3_shift: "🏠 24 घंटे घर में रहने वाली",
    s3_desc: "घर पर रहकर खाना या सफाई का काम करने वाली मेड (परिवार के आकार के अनुसार कम से कम 4 काम)।",
    s3_b1: "24 घंटे उपलब्धता व सुरक्षा",
    s3_b2: "केवल खाना या सफाई का काम",
    s3_b3: "रहना व खाना मालिक द्वारा",
    s3_rate: "₹25,000+ / महीना से",

    s4_title: "नैनी और बेबीसिटर (Live-In)",
    s4_shift: "🏠 24 घंटे लाइव-इन नैनी",
    s4_desc: "घर पर रहकर बच्चों और नवजात शिशुओं की देखभाल, मालिश, खान-पान व सुरक्षा का ध्यान रखने वाली नैनी।",
    s4_b1: "बेबी नहलाना, खिलाना व मालिश",
    s4_b2: "सोने का नियम व सुरक्षा",
    s4_b3: "बच्चों के कपड़ों व बर्तनों की सफाई",
    s4_rate: "₹30,000 / महीना (लाइव-इन)",

    s5_title: "जापा मेड (प्रसवोत्तर देखभाल)",
    s5_shift: "👶 45-दिन जापा विशेषज्ञ",
    s5_desc: "नवेली मां और नवजात शिशु के लिए पारंपरिक तेल मालिश, स्नान और स्वास्थ्यप्रद आहार।",
    s5_b1: "मां और शिशु की तेल मालिश व स्नान",
    s5_b2: "शिशु की नींद व डकार का ध्यान",
    s5_b3: "मां के लिए पौष्टिक आहार पकाना",
    s5_rate: "₹40,000 से ₹45,000 / महीना",

    s6_title: "बुजुर्गों व मरीजों की देखभाल",
    s6_shift: "☀️ 12 घंटे / 🏠 24 घंटे",
    s6_desc: "बुजुर्गों को चलने, नहाने, टॉयलेट, दवाइयों के समय व सहारे के लिए समर्पित केयरटेकर।",
    s6_b1: "चलने, नहाने व टॉयलेट में सहायता",
    s6_b2: "समय पर दवाई याद दिलाना",
    s6_b3: "ऑपरेशन के बाद बेडसाइड सहारा",
    s6_rate: "₹20,000 से ₹25,000 / महीना",

    sec_trust_badge: "सुरक्षा व विश्वास",
    sec_trust_title: "4-स्तरीय बैकग्राउंड जांच",
    sec_trust_sub: "किसी भी स्टाफ को आपके घर भेजने से पहले हम पूरी जांच करते हैं।",
    ts1_title: "सरकारी आईडी सत्यापन",
    ts1_desc: "आधार बायोमेट्रिक डेटाबेस से पहचान और पते का सत्यापन।",
    ts2_title: "पुलिस स्टेशन बैकग्राउंड जांच",
    ts2_desc: "स्थानीय पुलिस रिकॉर्ड से कोई आपराधिक मामला न होने का सत्यापन।",
    ts3_title: "2 पुराने मालिकों से फीडबैक",
    ts3_desc: "ईमानदारी, स्वभाव और काम की जांच के लिए पिछले मालिकों को सीधे कॉल।",
    ts4_title: "कौशल व स्वच्छता परीक्षा",
    ts4_desc: "खाना पकाने, सफाई और स्वास्थ्य की आमने-सामने जांच।",
    photo_overlay_title: "पूर्ण मानसिक शांति",
    photo_overlay_sub: "15,000+ परिवार हरि ओम मेड एजेंसी पर भरोसा करते हैं",

    sec_charges_badge: "स्पष्ट दरें",
    sec_charges_title: "हमारे सर्विस चार्ज व वेतन दरें",
    sec_charges_sub: "काम के घंटों के आधार पर पारदर्शी मासिक वेतन दरें।",
    badge_livein: "24-घंटे रहने वाली",
    badge_popular: "सबसे लोकप्रिय",
    per_month: "/ महीना",
    charges_note_text: "महत्वपूर्ण नोट: ☀️ **डे शिफ्ट** (2h, 8h, 10h) का अर्थ है मेड सुबह/दिन में काम पर आएगी। 🏠 **24-घंटे लाइव-इन** का अर्थ है मेड आपके घर रहेगी (रहना-खाना मालिक द्वारा)। एक मेड सीमित काम करती है (परिवार के अनुसार कम से कम 4 मुख्य काम)।",

    c1_shift: "🏠 24-घंटे रहने वाली मेड",
    c1_title: "24x7 लाइव-इन मेड / कुक",
    c1_desc: "घर रहकर खाना बनाने या सफाई के लिए 24 घंटे की मेड।",
    c1_l1: "झाड़ू, पोछा व पूरे घर की सफाई",
    c1_l2: "सभी समय का खाना (शाकाहारी / जैन / नॉन-वेज)",
    c1_l3: "बर्तन धोना व रसोई सफाई",
    c1_l4: "वेतन परिवार के आकार पर निर्भर (कम से कम 4 काम)",
    c1_l5: "30-दिन मुफ़्त अनलिमिटेड रिप्लेसमेंट",
    btn_book_c1: "24-घंटे मेड बुक करें (₹25,000+)",

    c2_shift: "☀️ 10-घंटे डे शिफ्ट",
    c2_title: "10-घंटे एक्सटेंडेड शिफ्ट",
    c2_desc: "कामकाजी परिवारों के लिए दिनभर की संपूर्ण घरेलू सहायता।",
    c2_l1: "पूरे घर की झाड़ू-पोछा व डस्टिंग",
    c2_l2: "नाश्ता, दोपहर व शाम का खाना",
    c2_l3: "बर्तन धोना व रसोई व्यवस्था",
    c2_l4: "कपड़े धोना व प्रेस करना",
    c2_l5: "30-दिन मुफ़्त रिप्लेसमेंट गारंटी",
    btn_book_c2: "10-घंटे मेड बुक करें (₹22k–₹25k)",

    c3_shift: "☀️ 8-घंटे डे शिफ्ट",
    c3_title: "8-घंटे मानक शिफ्ट",
    c3_desc: "दैनिक कामों के लिए 8 घंटे की सामान्य मदद।",
    c3_l1: "रोजाना झाड़ू-पोछा सफाई",
    c3_l2: "बर्तन धोना व रसोई सफाई",
    c3_l3: "खाना बनाना या कपड़े धोना",
    c3_l4: "आईडी वेरिफाइड स्टाफ",
    c3_l5: "30-दिन मुफ़्त रिप्लेसमेंट",
    btn_book_c3: "8-घंटे मेड बुक करें (₹18k–₹20k)",

    c4_shift: "☀️ 2-घंटे दैनिक काम",
    c4_title: "2-घंटे सफाई व बर्तन",
    c4_desc: "झाड़ू-पोछा और बर्तन धोने के लिए 2 घंटे की मेड।",
    c4_l1: "रोजाना झाड़ू व पोछा सफाई",
    c4_l2: "रोजाना बर्तन धोना",
    c4_l3: "कचरा हटाना व बेसिन सफाई",
    c4_l4: "वेरिफाइड स्टाफ",
    c4_l5: "30-दिन मुफ़्त रिप्लेसमेंट",
    btn_book_c4: "2-घंटे मेड बुक करें (₹7k–₹8k)",

    c5_shift: "🏠 24-घंटे लाइव-इन नैनी",
    c5_title: "नैनी और बेबीसिटर (Live-In)",
    c5_desc: "घर पर रहकर बच्चों और शिशुओं की संपूर्ण देखभाल।",
    c5_l1: "बेबी मालिश, नहलाना व खिलाना",
    c5_l2: "सोने का नियम व सुरक्षा",
    c5_l3: "बच्चों के बर्तनों व कपड़ों की सफाई",
    c5_l4: "24 घंटे घर में रहना",
    c5_l5: "30-दिन मुफ़्त रिप्लेसमेंट",
    btn_book_c5: "नैनी बुक करें (₹30,000)",

    c6_shift: "👶 45-दिन प्रसवोत्तर देखभाल",
    c6_title: "जापा मेड (विशेषज्ञ)",
    c6_desc: "नवेली मां और नवजात शिशु के लिए 24 घंटे समर्पित देखभाल।",
    c6_l1: "मां और शिशु की तेल मालिश व स्नान",
    c6_l2: "मां के लिए पौष्टिक आहार पकाना",
    c6_l3: "शिशु की नींद व डकार का ध्यान",
    c6_l4: "24 घंटे देखभाल सेवा",
    c6_l5: "30-दिन मुफ़्त रिप्लेसमेंट",
    btn_book_c6: "जापा मेड बुक करें (₹40k–₹45k)",

    sec_process_badge: "आसान चरण",
    sec_process_title: "24 घंटे में कैसे रखें मेड?",
    sec_process_sub: "बिना लंबे इंतजार के आसान और पारदर्शी प्रक्रिया।",
    ps1_title: "1. अपनी जरूरत बताएं",
    ps1_desc: "व्हाट्सएप या कॉल पर अपनी समय-सीमा (24 घंटे या डे शिफ्ट) और काम (खाना, सफाई, नैनी) बताएं।",
    ps2_title: "2. 2-3 उम्मीदवारों से मिलें",
    ps2_desc: "24 घंटे के अंदर जांचे गए प्रोफाइल देखें और वीडियो या इन-पर्सन इंटरव्यू लेकर अपनी पसंद चुनें।",
    ps3_title: "3. गारंटी के साथ रखें",
    ps3_desc: "स्टाफ काम शुरू करेगा। आप 30-दिन मुफ़्त रिप्लेसमेंट गारंटी से सुरक्षित हैं।",

    sec_blogs_badge: "उपयोगी ब्लॉग्स",
    sec_blogs_title: "घरेलू देखभाल से जुड़े लेख व ब्लॉग",
    sec_blogs_sub: "मेड प्रबंधन, शिशु देखभाल और बुजुर्गों की देखभाल पर उपयोगी सुझाव।",
    b1_tag: "सुरक्षा व भर्ती",
    b1_title: "24-घंटे रहने वाली मेड रखने से पहले 5 जरूरी सुरक्षा जांच",
    b1_desc: "घर पर रहने वाली मेड रखते समय इन 5 महत्वपूर्ण बैकग्राउंड चेक्स का ध्यान जरूर रखें।",

    b2_tag: "शिशु देखभाल",
    b2_title: "जापा मेड से नवजात शिशु और मां को क्या लाभ मिलते हैं?",
    b2_desc: "पारंपरिक मालिश, शिशु स्नान और मां के स्वास्थ्यप्रद आहार के बारे में जानें।",

    b3_tag: "सत्यापन",
    b3_title: "पुलिस सत्यापन और बायोमेट्रिक जांच आपके परिवार की सुरक्षा क्यों जरूरी है?",
    b3_desc: "केवल आईडी प्रूफ काफी नहीं है, पुलिस सत्यापन से घर की सुरक्षा कैसे सुनिश्चित होती है।",

    b4_tag: "खाना व रसोई",
    b4_title: "मुंबई में शुद्ध शाकाहारी और जैन कुक कैसे खोजें?",
    b4_desc: "बिना प्याज-लहसुन और सात्विक भोजन के नियमों के साथ कुक चुनने के आसान टिप्स।",

    sec_reviews_badge: "ग्राहकों के अनुभव",
    sec_reviews_title: "15,000+ परिवारों का भरोसा",
    sec_reviews_sub: "हमारे संतुष्ट ग्राहकों और परिवारों के विचार।",
    rev1_quote: `"हमें तुरंत जैन कुक की जरूरत थी। हरि ओम मेड एजेंसी ने 12 घंटे में हमें बहुत बढ़िया शेफ दिया। वे बहुत ही सात्विक खाना बनाती हैं।"`,
    rev1_author: "घाटकोपर ईस्ट · फुल-टाइम कुक",
    rev2_quote: `"हम दोनों जॉब करते हैं और हमारे छोटे बच्चे के लिए विश्वसनीय नैनी चाहिए थी। सुनीता दीदी बहुत ही स्नेही और जिम्मेदार हैं।"`,
    rev2_author: "पवई · लाइव-इन नैनी",
    rev3_quote: `"पिताजी के ऑपरेशन के बाद केयरटेकर चाहिए था। एजेंसी ने 1 ही दिन में अच्छा केयरटेकर भेजा और सभी पेपर्स शेयर किए।"`,
    rev3_author: "अंधेरी वेस्ट · पेशेंट केयरटेकर",

    sec_faq_badge: "सवाल-जवाब",
    sec_faq_title: "अक्सर पूछे जाने वाले प्रश्न",
    sec_faq_sub: "घरेलू स्टाफ रखने से जुड़े आपके सामान्य सवालों के जवाब।",
    faq1_q: "मुझे मेड या कुक कितनी जल्दी मिल सकता है?",
    faq1_a: "हम 24 घंटे के अंदर आपकी जरूरत के हिसाब से 2 से 3 वेरिफाइड प्रोफाइल भेजते हैं। आप तुरंत इंटरव्यू लेकर काम शुरू करवा सकते हैं।",
    faq2_q: "बैकग्राउंड वेरिफिकेशन कैसे किया जाता है?",
    faq2_a: "हर कैंडिडेट का सरकारी आधार चेक, स्थानीय पुलिस स्टेशन वेरिफिकेशन, 2 पुराने मालिकों से फीडबैक और प्रैक्टिकल टेस्ट लिया जाता है।",
    faq3_q: "30-दिन मुफ़्त रिप्लेसमेंट गारंटी का क्या मतलब है?",
    faq3_a: "यदि पहले 30 दिनों में आप काम से संतुष्ट नहीं हैं, तो हम बिना किसी अतिरिक्त एजेंसी शुल्क के दूसरी मेड उपलब्ध कराते हैं।",
    faq4_q: "क्या 24 घंटे रहने वाली (Live-In) मेड उपलब्ध हैं?",
    faq4_a: "हाँ, हमारे पास 24 घंटे रहने वाली मेड, कुक, नैनी और पेशेंट केयरटेकर उपलब्ध हैं।",

    cta_heading: "क्या आपको आज ही वेरिफाइड मेड चाहिए?",
    cta_sub: "हमारे प्लेसमेंट मैनेजर से सीधे बात करें या व्हाट्सएप पर अपनी जरूरत भेजें।",

    f_title_services: "हमारी सेवाएं",
    f_title_links: "महत्वपूर्ण लिंक",
    f_title_contact: "संपर्क व पता",
    footer_bio: "मुंबई की भरोसेमंद डोमेस्टिक हेल्प प्लेसमेंट एजेंसी - मेड, कुक, नैनी और केयरटेकर के लिए।",

    modal_head_title: "घरेलू स्टाफ मंगवाएं",
    modal_head_sub: "व्हाट्सएप पर 2-3 मिलान वाले प्रोफाइल प्राप्त करें।",
    modal_label_service: "सेवा चुनें",
    modal_label_shift: "शिफ्ट का समय",
    modal_label_area: "आपका इलाका / शहर",
    modal_label_phone: "आपका व्हाट्सएप मोबाइल नंबर",
    modal_btn_submit: "व्हाट्सएप पर प्रोफाइल पाएं",
    m_opt_maid: "फुल-टाइम हाउस मेड (सफाई व काम)",
    m_opt_cook: "होम कुक (शाकाहारी / जैन / नॉन-वेज)",
    m_opt_livein: "24-घंटे रहने वाली मेड",
    m_opt_nanny: "नैनी / बेबीसिटर (बच्चों की देखभाल)",
    m_opt_japa: "जापा मेड (प्रसूति देखभाल)",
    m_opt_elderly: "बुजुर्ग व मरीज केयरटेकर",

    contact_sec_badge: "त्वरित पूछताछ",
    contact_sec_title: "अपनी आवश्यकता हमारे प्लेसमेंट मैनेजर को भेजें",
    contact_sec_sub: "व्हाट्सएप पर तुरंत मिलान वाले प्रोफाइल प्राप्त करने के लिए यह छोटा फॉर्म भरें।",
    lbl_name: "आपका नाम",
    lbl_phone: "व्हाट्सएप मोबाइल नंबर",
    lbl_service: "सेवा चुनें",
    lbl_shift: "शिफ्ट का समय",
    lbl_area: "आपका इलाका / शहर",
    lbl_notes: "विशेष आवश्यकताएँ (वैकल्पिक)",
    btn_send_wa: "व्हाट्सएप पर आवश्यकता भेजें"
  },

  mr: {
    top_hours: "सोम - रविवारी: सकाळी 8:00 - रात्री 9:00",
    top_wa: "व्हॉट्सॲप सपोर्ट",
    logo_title: "हरी ओम",
    logo_sub: "मेड एजन्सी",
    nav_services: "सेवा",
    nav_verification: "पडताळणी",
    nav_charges: "आमचे दर",
    nav_process: "प्रक्रिया",
    nav_blogs: "ब्लॉग्स",
    nav_reviews: "प्रतिक्रिया",
    nav_faq: "प्रश्न",
    btn_call: "कॉल करा",
    btn_call_num: "कॉल करा +91 90048 73201",
    btn_book_fast: "२४ तासांत बुक करा",
    btn_req_staff: "मेड मागवा",
    btn_find_maids: "आत्ताच मेड शोधा",
    btn_wa_chat: "व्हॉट्सॲपवर चॅट करा",
    btn_inquire: "चौकशी करा",
    
    hero_badge: "२४ तासांत सेवा उपलब्ध",
    hero_title_prefix: "आपल्या घरासाठी विश्वासू",
    hero_title_highlight: "घरगुती कामगार मिळवा",
    hero_subtext: "२४ तासांत मिळवा पडताळणी केलेली मेड, स्वयंपाकी, नॅनी आणि २४-तास राहणारी मदतनीस.",
    pill_1: "३०-दिवस मोफत रिप्लेसमेंट",
    pill_2: "शून्य नोंदणी शुल्क",
    pill_3: "शुद्ध शाकाहारी व जैन स्वयंपाकी",
    pill_4: "२४-तास राहणारी मेड",
    rating_score: "4.9 / 5.0",
    rating_text: "१,४००+ कुटुंबांचे रेटिंग",

    feat_1_title: "पडताळणी पूर्ण",
    feat_1_sub: "ओळखपत्र व पोलिसांची तपासणी",
    feat_2_title: "३०-दिवस रिप्लेसमेंट",
    feat_2_sub: "कोणत्याही अतिरिक्त शुल्काशिवाय बदल",
    feat_3_title: "जैन व शाकाहारी स्वयंपाकी",
    feat_3_sub: "घरासारखे शुद्ध व चवदार जेवण",
    feat_4_title: "बहुभाषिक मदतनीस",
    feat_4_sub: "मराठी, हिंदी, गुजराती व इंग्रजी",

    sec_services_badge: "आमच्या सेवा",
    sec_services_title: "प्रत्येक घरासाठी संपूर्ण उपाय",
    sec_services_sub: "आपल्या घरच्या दैनंदिन कामांसाठी प्रशिक्षित आणि विश्वासू मदतनीस.",

    tag_popular: "सर्वात लोकप्रिय",

    s1_title: "फुल-टाइम हाउस मेड",
    s1_shift: "☀️ ८ ते १२ तास डे शिफ्ट",
    s1_desc: "झाडू, पुछा, डस्टिंग, भांडी घासणे, बाथरूम स्वच्छता आणि कपडे धुणे.",
    s1_b1: "घर स्वच्छ झाडणे व पुसणे",
    s1_b2: "भांडी घासणे व वाळवणे",
    s1_b3: "कपडे धुणे व घड्या घालणे",
    s1_rate: "₹18,000 ते ₹25,000 / महिना",

    s2_title: "होम कुक (स्वयंपाकी)",
    s2_shift: "☀️ नाश्ता, दुपारचे व रात्रीचे जेवण",
    s2_desc: "तुमच्या कुटुंबाच्या आवडीनुसार आणि पद्धतीनुसार घरासारखे चवदार जेवण.",
    s2_b1: "शुद्ध शाकाहारी, जैन व मांसाहारी जेवण",
    s2_b2: "महाराष्ट्रीयन, नॉर्थ व गुजराती पदार्थ",
    s2_b3: "भाजी चिरणे व स्वयंपाकघर स्वच्छता",
    s2_rate: "₹8,000 ते ₹25,000 / महिना",

    s3_title: "२४-तास राहणारी मेड (Live-In)",
    s3_shift: "🏠 २४ तास घरात राहणारी",
    s3_desc: "घरात राहून स्वयंपाक किंवा स्वच्छतेचे काम करणारी मेड (कुटुंबाच्या आकारानुसार किमान ४ कामे).",
    s3_b1: "२४ तास उपलब्ध व पूर्ण सुरक्षा",
    s3_b2: "स्वयंपाक किंवा स्वच्छता काम",
    s3_b3: "रहणे व जेवण मालकाकडून",
    s3_rate: "₹25,000+ / महिना पासून",

    s4_title: "नॅनी आणि बेबीसिटर (Live-In)",
    s4_shift: "🏠 २४ तास राहणारी नॅनी",
    s4_desc: "घरात राहून लहान मुलांची व बाळांची काळजी, आंघोळ, खाणे-पिणे व सुरक्षेची काळजी घेणारी नॅनी.",
    s4_b1: "बाळाची आंघोळ, मालिश व खाणे",
    s4_b2: "झोपेचे व खेळाचे नियोजन",
    s4_b3: "बाळाची भांडी व कपडे स्वच्छता",
    s4_rate: "₹30,000 / महिना (राहणारी)",

    s5_title: "जापा मेड (बाळंतीण काळजी)",
    s5_shift: "👶 ४५-दिवस जापा तज्ज्ञ",
    s5_desc: "बाळंतीण माता व नवजात बाळासाठी पारंपरिक तेल मालिश, आंघोळ व पौष्टिक आहार.",
    s5_b1: "माता व बाळाची तेल मालिश व आंघोळ",
    s5_b2: "बाळाची झोप व ढेकरांचे नियोजन",
    s5_b3: "मातेसाठी पौष्टिक सुंठ-डिंक आहार",
    s5_rate: "₹40,000 ते ₹45,000 / महिना",

    s6_title: "ज्येष्ठ नागरिक व रुग्ण काळजी",
    s6_shift: "☀️ १२ तास / 🏠 २४ तास",
    s6_desc: "ज्येष्ठ नागरिकांना चालणे, आंघोळ, शौचालय, औषधे वेळेवर देणे यासाठी मदतनीस.",
    s6_b1: "चालणे, आंघोळ व टॉयलेटमध्ये मदत",
    s6_b2: "वेळेवर औषधांची आठवण",
    s6_b3: "शस्त्रक्रियेनंतर बेडसाइड आधार",
    s6_rate: "₹20,000 ते ₹25,000 / महिना",

    sec_trust_badge: "सुरक्षा व विश्वास",
    sec_trust_title: "४-स्तरीय पार्श्वभूमी तपासणी",
    sec_trust_sub: "कोणत्याही कामगाराला तुमच्या घरी पाठवण्यापूर्वी आम्ही कडक तपासणी करतो.",
    ts1_title: "सरकारी ओळखपत्र पडताळणी",
    ts1_desc: "आधार बायोमेट्रिक डेटाबेसद्वारे ओळख आणि पत्त्याची तपासणी.",
    ts2_title: "पोलीस ठाणे पार्श्वभूमी तपासणी",
    ts2_desc: "कोणताही गुन्हेगारी नोंद नसल्याची पोलीस ठाण्याकडून खात्री.",
    ts3_title: "२ जुन्या मालकांकडून अभिप्राय",
    ts3_desc: "प्रामाणिकपणा व वर्तनाची खात्री करण्यासाठी जुन्या मालकांना थेट कॉल.",
    ts4_title: "कौशल्य व स्वच्छता परीक्षा",
    ts4_desc: "स्वयंपाक, स्वच्छता आणि आरोग्याची प्रत्यक्ष तपासणी.",
    photo_overlay_title: "पूर्ण मानसिक समाधान",
    photo_overlay_sub: "१५,०००+ कुटुंबे हरी ओम मेड एजन्सीवर विश्वास ठेवतात",

    sec_charges_badge: "पारदर्शक दर",
    sec_charges_title: "आमचे सर्व्हिस चार्ज व वेतन दर",
    sec_charges_sub: "कामाच्या तासांनुसार स्पष्ट मासिक वेतन दर.",
    badge_livein: "२४-तास राहणारी",
    badge_popular: "सर्वात लोकप्रिय",
    per_month: "/ महिना",
    charges_note_text: "महत्त्वाची टीप: ☀️ **डे शिफ्ट** (2h, 8h, 10h) म्हणजे मदतनीस सकाळी/दिवसा कामावर येईल. 🏠 **२४-तास लाइव्ह-इन** म्हणजे मदतनीस तुमच्या घरात राहील (रहणे व जेवण मालकाकडून). एक मदतनीस ठराविक कामे करते (कुटुंबाच्या आकारानुसार किमान ४ मुख्य कामे).",

    c1_shift: "🏠 २४-तास राहणारी मेड",
    c1_title: "24x7 लाइव्ह-इन मेड / कुक",
    c1_desc: "घरात राहून स्वयंपाक किंवा स्वच्छतेसाठी २४ तासांची मेड.",
    c1_l1: "झाडू, पुछा व घर स्वच्छता",
    c1_l2: "सर्व वेळचे स्वयंपाक (शाकाहारी / जैन / मांसाहारी)",
    c1_l3: "भांडी घासणे व स्वयंपाकघर",
    c1_l4: "वेतन कुटुंबाच्या आकारानुसार (किमान ४ कामे)",
    c1_l5: "३०-दिवस मोफत अमर्याद रिप्लेसमेंट",
    btn_book_c1: "२४-तास मेड बुक करा (₹25,000+)",

    c2_shift: "☀️ १०-तास डे शिफ्ट",
    c2_title: "१०-तास एक्सटेंडेड शिफ्ट",
    c2_desc: "नोकरदार कुटुंबांसाठी दिवसभराची पूर्ण घरगुती मदत.",
    c2_l1: "झाडू-पुछा व संपूर्ण डस्टिंग",
    c2_l2: "नाश्ता, दुपारचे व रात्रीचे जेवण",
    c2_l3: "भांडी घासणे व स्वयंपाकघर मांडणी",
    c2_l4: "कपडे धुणे व इस्त्री करणे",
    c2_l5: "३०-दिवस मोफत रिप्लेसमेंट गॅरंटी",
    btn_book_c2: "१०-तास मेड बुक करा (₹22k–₹25k)",

    c3_shift: "☀️ ८-तास डे शिफ्ट",
    c3_title: "८-तास सामान्य शिफ्ट",
    c3_desc: "दैनंदिन कामांसाठी ८ तासांची मदत.",
    c3_l1: "रोज झाडू व पुछा करणे",
    c3_l2: "भांडी घासणे व स्वच्छता",
    c3_l3: "जेवण बनवणे किंवा कपडे धुणे",
    c3_l4: "आयडी पडताळणी झालेले कामगार",
    c3_l5: "३०-दिवस मोफत रिप्लेसमेंट",
    btn_book_c3: "८-तास मेड बुक करा (₹18k–₹20k)",

    c4_shift: "☀️ २-तास दैनंदिन कामे",
    c4_title: "२-तास झाडू-पुछा व भांडी",
    c4_desc: "झाडू-पुछा आणि भांडी घासण्यासाठी २ तासांची मेड.",
    c4_l1: "रोज झाडू व पुछा करणे",
    c4_l2: "रोज भांडी घासणे",
    c4_l3: "कचरा टाकणे व बेसिन स्वच्छता",
    c4_l4: "पडताळणी झालेले कामगार",
    c4_l5: "३०-दिवस मोफत रिप्लेसमेंट",
    btn_book_c4: "२-तास मेड बुक करा (₹7k–₹8k)",

    c5_shift: "🏠 २४-तास राहणारी नॅनी",
    c5_title: "नॅनी आणि बेबीसिटर (Live-In)",
    c5_desc: "घरात राहून लहान मुलांची व बाळांची संपूर्ण काळजी.",
    c5_l1: "बाळाची मालिश, आंघोळ व खाणे",
    c5_l2: "झोपेचे व खेळाचे नियोजन",
    c5_l3: "बाळाची भांडी व कपडे स्वच्छता",
    c5_l4: "२४ तास घरात राहणे",
    c5_l5: "३०-दिवस मोफत रिप्लेसमेंट",
    btn_book_c5: "नॅनी बुक करा (₹30,000)",

    c6_shift: "👶 ४५-दिवस बाळंतीण काळजी",
    c6_title: "जापा मेड (तज्ज्ञ)",
    c6_desc: "बाळंतीण माता व नवजात बाळासाठी २४ तास समर्पित सेवा.",
    c6_l1: "माता व बाळाची तेल मालिश व आंघोळ",
    c6_l2: "मातेसाठी पौष्टिक आहार बनवणे",
    c6_l3: "बाळाची झोप व ढेकरांचे नियोजन",
    c6_l4: "२४ तास काळजी सेवा",
    c6_l5: "३०-दिवस मोफत रिप्लेसमेंट",
    btn_book_c6: "जापा मेड बुक करा (₹40k–₹45k)",

    sec_process_badge: "सोपे टप्पे",
    sec_process_title: "२४ तासांत कामगार कसा मिळवावा?",
    sec_process_sub: "वेळ न घालवता अत्यंत सोपी आणि पारदर्शक प्रक्रिया.",
    ps1_title: "१. गरज सांगा",
    ps1_desc: "व्हॉट्सॲप किंवा कॉलवर तुमच्या वेळा (२४ तास किंवा डे शिफ्ट) आणि काम सांगा.",
    ps2_title: "२. २-३ कामगारांना भेटा",
    ps2_desc: "२४ तासांत पडताळलेले प्रोफाईल पहा आणि व्हिडिओ किंवा प्रत्यक्ष मुलाखत घेऊन आवडता कामगार निवडा.",
    ps3_title: "३. गॅरंटीसह कामावर ठेवा",
    ps3_desc: "कामगार काम सुरू करेल. तुम्ही ३०-दिवस मोफत रिप्लेसमेंट गॅरंटीने सुरक्षित आहात.",

    sec_blogs_badge: "उपयुक्त लेख",
    sec_blogs_title: "घरगुती काळजी विषयी ब्लॉग्स",
    sec_blogs_sub: "कामगारांचे नियोजन, बाळांची काळजी आणि वृद्धांची सेवा यावरील उपयुक्त माहिती.",
    b1_tag: "सुरक्षा व निवड",
    b1_title: "२४-तास राहणारी मेड ठेवण्यापूर्वी ५ महत्त्वाच्या गोष्टी तपासा",
    b1_desc: "घरात राहणारी मेड ठेवताना कोणत्या गोष्टींची काळजी घ्यावी हे जाणून घ्या.",

    b2_tag: "बाळाची काळजी",
    b2_title: "जापा मेड नवजात बाळ आणि मातेची कशी काळजी घेते?",
    b2_desc: "पारंपरिक मालिश, बाळाची आंघोळ आणि बाळंतीण आहाराविषयी माहिती.",

    b3_tag: "पडताळणी",
    b3_title: "पोलीस पडताळणी तुमच्या कुटुंबाच्या सुरक्षेसाठी का आवश्यक आहे?",
    b3_desc: "केवळ आधार कार्ड पुरेसे का नाही आणि पोलीस तपासणीचे महत्त्व काय.",

    b4_tag: "स्वयंपाक व अन्न",
    b4_title: "मुंबईत शुद्ध शाकाहारी आणि जैन स्वयंपाकी कसा शोधावा?",
    b4_desc: "कांदा-लसूण विरहित आणि सात्विक जेवणाच्या नियमांनुसार स्वयंपाकी निवडण्याच्या सोप्या टिप्स.",

    sec_reviews_badge: "ग्राहकांचे अभिप्राय",
    sec_reviews_title: "१५,000+ कुटुंबांचा विश्वास",
    sec_reviews_sub: "आमच्या समाधानी ग्राहकांच्या प्रतिक्रिया.",
    rev1_quote: `"आम्हाला तातडीने जैन स्वयंपाकी हवा होता. हरी ओम मेड एजन्सीने १२ तासांत छान स्वयंपाकी दिला. त्या खूप सात्विक जेवण बनवतात."`,
    rev1_author: "घाटकोपर पूर्व · फुल-टाइम कुक",
    rev2_quote: `"आम्ही दोघेही नोकरी करतो, आमच्या लहान बाळासाठी नॅनी हवी होती. सुनिता ताई खूप प्रेमळ आणि जबाबदार आहेत."`,
    rev2_author: "पवई · लाइव्ह-इन नॅनी",
    rev3_quote: `"बाबांच्या शस्त्रक्रियेनंतर केअरटेकर हवा होता. एजन्सीने एका दिवसात उत्तम मदतनीस दिला."`,
    rev3_author: "अंधेरी पश्चिम · पेशंट केअरटेकर",

    sec_faq_badge: "प्रश्न-उत्तरे",
    sec_faq_title: "सतत विचारले जाणारे प्रश्न",
    sec_faq_sub: "घरगुती कामगार ठेवण्याबाबतच्या तुमच्या प्रश्नांची उत्तरे.",
    faq1_q: "मला मेड किंवा स्वयंपाकी किती लवकर मिळू शकतो?",
    faq1_a: "आम्ही २४ तासांत तुमच्या गरजेनुसार २ ते ३ प्रोफाईल देतो. तुम्ही मुलाखत घेऊन लगेच काम सुरू करू शकता.",
    faq2_q: "पार्श्वभूमी पडताळणी कशी केली जाते?",
    faq2_a: "प्रत्येक कामगाराचे सरकारी आधार कार्ड, पोलीस ठाणे पडताळणी, २ जुन्या मालकांचे अभिप्राय आणि प्रात्यक्षिक परीक्षा घेतली जाते.",
    faq3_q: "३०-दिवस मोफत रिप्लेसमेंट गॅरंटी म्हणजे काय?",
    faq3_a: "पहिल्या ३० दिवसांत काम आवडले नाही तर आम्ही विनाशुल्क दुसरा कामगार उपलब्ध करून देतो.",
    faq4_q: "२४ तास राहणाऱ्या (Live-In) मेड उपलब्ध आहेत का?",
    faq4_a: "होय, आमच्याकडे २४ तास राहणाऱ्या मेड, स्वयंपाकी, नॅनी आणि केअरटेकर उपलब्ध आहेत.",

    cta_heading: "तुम्हाला आजच पडताळणी केलेली मेड हवी आहे का?",
    cta_sub: "आमच्या प्लेसमेंट मॅनेजरशी थेट बोला किंवा व्हॉट्सॲपवर गरज पाठवा.",

    f_title_services: "आमच्या सेवा",
    f_title_links: "महत्त्वाच्या लिंक्स",
    f_title_contact: "संपर्क व पत्ता",
    footer_bio: "मुंबईतील विश्वासू घरगुती कामगार पुरवणारी एजन्सी - मेड, स्वयंपाकी, नॅनी व केअरटेकरसाठी.",

    modal_head_title: "घरगुती कामगार मागवा",
    modal_head_sub: "व्हॉट्सॲपवर २-३ प्रोफाईल मिळवा.",
    modal_label_service: "सेवा निवडा",
    modal_label_shift: "शिफ्ट वेळ",
    modal_label_area: "तुमचा परिसर / शहर",
    modal_label_phone: "तुमचा व्हॉट्सॲप नंबर",
    modal_btn_submit: "व्हॉट्सॲपवर प्रोफाईल मिळवा",
    m_opt_maid: "फुल-टाइम हाउस मेड (स्वच्छता)",
    m_opt_cook: "होम कुक (शाकाहारी / जैन / मांसाहारी)",
    m_opt_livein: "२४-तास राहणारी मेड",
    m_opt_nanny: "नॅनी / बेबीसिटर (मुलांची काळजी)",
    m_opt_japa: "जापा मेड (बाळंतीण काळजी)",
    m_opt_elderly: "ज्येष्ठ नागरिक व रुग्ण केअरटेकर",

    contact_sec_badge: "जलद चौकशी",
    contact_sec_title: "तुमची गरज आमच्या प्लेसमेंट मॅनेजरला पाठवा",
    contact_sec_sub: "व्हॉट्सॲपवर त्वरित जुळणारे प्रोफाइल मिळवण्यासाठी हा छोटा फॉर्म भरा.",
    lbl_name: "आपले नाव",
    lbl_phone: "व्हॉट्सॲप मोबाईल नंबर",
    lbl_service: "सेवा निवडा",
    lbl_shift: "शिफ्ट वेळ",
    lbl_area: "तुमचा परिसर / शहर",
    lbl_notes: "विशेष गरज (पर्यायी)",
    btn_send_wa: "व्हॉट्सॲपवर पाठवा"
  }
};

/* ==========================================================================
   MULTI-LANGUAGE SWITCHER LOGIC
   ========================================================================== */
let currentLang = "en";

function changeLanguage(langKey) {
  if (!translations[langKey]) langKey = "en";
  currentLang = langKey;
  localStorage.setItem("hariom_lang", langKey);

  const topSelect = document.getElementById("langSelectTop");
  const navSelect = document.getElementById("langSelectNav");
  const mobileSelect = document.getElementById("langSelectMobile");

  if (topSelect) topSelect.value = langKey;
  if (navSelect) navSelect.value = langKey;
  if (mobileSelect) mobileSelect.value = langKey;

  document.documentElement.lang = langKey;

  const i18nElements = document.querySelectorAll("[data-i18n]");
  i18nElements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[langKey] && translations[langKey][key]) {
      el.textContent = translations[langKey][key];
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  initNavbar();
  initFaqAccordion();

  const savedLang = localStorage.getItem("hariom_lang") || "en";
  changeLanguage(savedLang);
});

/* ==========================================================================
   NAVIGATION & DRAWER
   ========================================================================== */
function initNavbar() {
  const menuToggle = document.getElementById("menuToggle");
  const closeDrawer = document.getElementById("closeDrawer");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const drawerLinks = document.querySelectorAll(".drawer-item");

  if (menuToggle && mobileDrawer) {
    menuToggle.addEventListener("click", () => {
      mobileDrawer.classList.add("open");
    });
  }

  if (closeDrawer && mobileDrawer) {
    closeDrawer.addEventListener("click", () => {
      mobileDrawer.classList.remove("open");
    });
  }

  drawerLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (mobileDrawer) mobileDrawer.classList.remove("open");
    });
  });

  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.style.boxShadow = "0 4px 16px rgba(30, 58, 138, 0.1)";
    } else {
      navbar.style.boxShadow = "var(--shadow-sm)";
    }
  });
}

/* ==========================================================================
   FAQ ACCORDION
   ========================================================================== */
function initFaqAccordion() {
  const faqToggles = document.querySelectorAll(".faq-toggle");
  faqToggles.forEach((btn) => {
    btn.addEventListener("click", function () {
      const item = this.parentElement;
      const isActive = item.classList.contains("active");

      document.querySelectorAll(".faq-item").forEach((fi) => {
        fi.classList.remove("active");
      });

      if (!isActive) {
        item.classList.add("active");
      }
    });
  });
}

/* ==========================================================================
   MODAL POPUP
   ========================================================================== */
function openBookingModal() {
  const modal = document.getElementById("bookingModal");
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeBookingModal() {
  const modal = document.getElementById("bookingModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
}

window.addEventListener("click", function (e) {
  const modal = document.getElementById("bookingModal");
  if (e.target === modal) {
    closeBookingModal();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeBookingModal();
  }
});

function openBookingWithService(serviceName) {
  openBookingModal();
  const select = document.getElementById("modalServiceSelect");
  if (select) {
    for (let i = 0; i < select.options.length; i++) {
      if (select.options[i].text.toLowerCase().includes(serviceName.toLowerCase()) ||
          select.options[i].value.toLowerCase().includes(serviceName.toLowerCase())) {
        select.selectedIndex = i;
        break;
      }
    }
  }
}

/* ==========================================================================
   FORM SUBMISSION -> DIRECT WHATSAPP ROUTING
   ========================================================================== */

function sendToWhatsApp(data) {
  let msg = `🚩 *NEW INQUIRY - HARI OM MAID AGENCY*\n\n`;
  if (data.name) msg += `👤 *Client Name:* ${data.name}\n`;
  msg += `🧹 *Service Needed:* ${data.service}\n`;
  msg += `⏱️ *Shift Duration:* ${data.shift}\n`;
  msg += `📍 *Area / City:* ${data.area}\n`;
  msg += `📱 *WhatsApp Number:* +91 ${data.phone}\n`;
  if (data.notes) msg += `💬 *Requirements/Notes:* ${data.notes}\n`;
  msg += `\nPlease share background-verified candidate profiles as soon as possible.`;

  const waUrl = `https://wa.me/${AGENCY_WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(waUrl, "_blank");
}

function handleModalSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("modalNameInput")?.value || "";
  const service = document.getElementById("modalServiceSelect")?.value || "Full-Time Maid";
  const shift = document.getElementById("modalShiftSelect")?.value || "12 Hours";
  const area = document.getElementById("modalAreaInput")?.value || "Mumbai";
  const phone = document.getElementById("modalPhoneInput")?.value || "";

  sendToWhatsApp({ name, service, shift, area, phone });
  closeBookingModal();
}

function handleInlineContactSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("cNameInput")?.value || "";
  const phone = document.getElementById("cPhoneInput")?.value || "";
  const area = document.getElementById("cAreaInput")?.value || "Mumbai";
  const service = document.getElementById("cServiceSelect")?.value || "Full-Time Maid";
  const shift = document.getElementById("cShiftSelect")?.value || "12 Hours";
  const notes = document.getElementById("cNotesInput")?.value || "";

  sendToWhatsApp({ name, service, shift, area, phone, notes });
}
