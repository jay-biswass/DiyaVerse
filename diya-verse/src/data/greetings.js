import { TEMPLATES, CARD_FONTS, CARD_CATEGORIES } from "./cardTemplates.js";

export { TEMPLATES, CARD_FONTS, CARD_CATEGORIES };

export const RELATIONSHIPS = [
  "Friend",
  "Family",
  "Parents",
  "Sibling",
  "Teacher",
  "Colleague",
  "Partner",
  "Other",
];

export const LANGUAGES = [
  { code: "English", label: "English" },
  { code: "Hindi", label: "हिंदी (Hindi)" },
  { code: "Bengali", label: "বাংলা (Bengali)" },
];

export const STYLES = [
  "Traditional",
  "Emotional",
  "Funny",
  "Professional",
  "Inspirational",
];

export const FESTIVE_QUOTES = [
  {
    quote: "May your life shine brighter than a thousand diyas and fill your home with infinite joy and peace.",
    author: "Ancient Vedic Blessing",
    subtext: "शुभ दीपावली",
  },
  {
    quote: "May this Diwali bring prosperity, good health, boundless happiness, and eternal warmth to your heart.",
    author: "Diwali Reflection",
    subtext: "तमसो मा ज्योतिर्गमय",
  },
  {
    quote: "Just as a single diya dispels centuries of darkness, may your inner wisdom illuminate the entire universe.",
    author: "Philosophy of Lights",
    subtext: "दीपावली की हार्दिक शुभकामनाएं",
  },
  {
    quote: "May Goddess Lakshmi bless your home with eternal abundance, and Lord Ganesha remove every obstacle.",
    author: "Festive Benediction",
    subtext: "सुख, समृद्धि और शान्ति",
  },
];

export const SAMPLE_WISHES = {
  English: {
    Traditional: "Wishing you and your family a blessed and illuminated Diwali. May the divine light guide your steps towards eternal peace, prosperity, and happiness.",
    Emotional: "You bring so much light and joy into my life. On this auspicious festival, I wish our bond continues to shine brighter with every passing year. Happy Diwali!",
    Funny: "May your troubles explode like firecrackers and your happiness sweeten like kaju katli! Eat lots of sweets and enjoy. Happy Diwali!",
    Professional: "Wishing you and your esteemed organization continued success, prosperity, and milestones this festive season. Have a wonderful Diwali!",
    Inspirational: "Let this festival of lights be a reminder of your infinite inner power. May you conquer doubts and illuminate your path with triumph and purpose.",
  },
  Hindi: {
    Traditional: "दीपावली के इस पावन पर्व पर मां लक्ष्मी और भगवान श्री गणेश की कृपा आप और आपके परिवार पर सदा बनी रहे। शुभ दीपावली!",
    Emotional: "जैसे दीये की रोशनी अंधेरे को मिटा देती है, वैसे ही आपका साथ मेरे जीवन को रोशन करता है। आपको दीपावली की ढेरों शुभकामनाएं!",
    Funny: "मिठाइयों का स्वाद और पटाखों की बहार, बस वजन ना बढ़े इस बार! आपको मस्त और हंसमुख दीपावली की बधाई!",
    Professional: "दीपावली के इस पावन अवसर पर आपके व्यापार और करियर में नई ऊंचाइयां और सफलता की कामना करते हैं। शुभ दीपावली।",
    Inspirational: "हर दीपक हमें सिखाता है कि चाहे अंधेरा कितना भी गहरा हो, एक छोटी सी किरण भी विजय ला सकती है। अपने सपनों को रोशन करें!",
  },
  Bengali: {
    Traditional: "শুভ দীপাবলির আন্তরিক প্রীতি ও শুভেচ্ছা। মা লক্ষ্মী ও গণেশের আশীর্বাদে আপনার জীবন সমৃদ্ধি ও শান্তিতে ভরে উঠুক।",
    Emotional: "প্রদীপের স্নিগ্ধ আলোয় মুছে যাক সব দূরত্ব, আমাদের ভালোবাসা হয়ে উঠুক আরও অমলিন। তোমাকে শুভ দীপাবলির আন্তরিক ভালোবাসা!",
    Funny: "মিষ্টির বাটি হোক পূর্ণ, আনন্দ থাকুক অফুরন্ত! পটকা ফাটানোর সময় হাত বাঁচিও কিন্তু! শুভ দীপাবলি!",
    Professional: "দীপাবলির এই আনন্দময় শুভলগ্নে আপনার কর্মক্ষেত্রে সাফল্য ও অপার সমৃদ্ধি কামনা করি। শুভ দীপাবলি।",
    Inspirational: "অন্ধকার পেরিয়ে আলোর পথে চলাই জীবনের মূল সুর। এই দীপাবলিতে আপনার নতুন সম্ভাবনার দ্বার উন্মুক্ত হোক!",
  },
};

export const INITIAL_COMMUNITY_POSTS = [
  {
    id: "post-1",
    sender: "Ananya Mukherjee",
    location: "Kolkata, WB",
    message: "May the divine lights of Deepavali bring wisdom and joy to every corner of JIS University and beyond! 🪔✨",
    timestamp: "Just now",
    likes: 42,
  },
  {
    id: "post-2",
    sender: "Aarav Sharma",
    location: "New Delhi",
    message: "Sending prayers of peace, prosperity, and good health for all our families. Let your light shine bright!",
    timestamp: "12m ago",
    likes: 28,
  },
  {
    id: "post-3",
    sender: "Pooja Patel",
    location: "Ahmedabad",
    message: "Lit 9 virtual diyas today! May this festive season remove all worries and illuminate your path to success.",
    timestamp: "35m ago",
    likes: 35,
  },
  {
    id: "post-4",
    sender: "Rohan Deshmukh",
    location: "Pune",
    message: "Happy Diwali to the incredible builders, creators, and mentors at GDG on Campus & AWS Student Builder Group!",
    timestamp: "1h ago",
    likes: 51,
  },
];
