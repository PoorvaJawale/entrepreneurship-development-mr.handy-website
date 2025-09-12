export type Locale = "en" | "hi" | "mr";

type Dictionary = Record<string, string>;

const en: Dictionary = {
  brand: "Mr. Handy",
  tagline: "House Maintenance, One Click Away",
  nav_home: "Home",
  nav_about: "About Us",
  nav_contact: "Contact Us",
  nav_join: "Join Us",
  signup: "Sign Up",
  languages: "English",
  carpenter: "Carpenter",
  plumber: "Plumber",
  electrician: "Electrician",
  carpentry_title: "Carpentry Services",
  carpentry_desc:
    "From custom shelves to door repairs, our experienced carpenters bring a workshop touch to your home with precision and care.",
  plumbing_title: "Plumbing Services",
  plumbing_desc:
    "Leaks, clogs, or new installations—our certified plumbers keep water flowing smoothly with clean, reliable workmanship.",
  electrical_title: "Electrical Services",
  electrical_desc:
    "From outlet installs to lighting upgrades, our electricians deliver safe, bright solutions powered by expertise.",
  book_now: "Book Now",
  back_home: "Back Home",
  about_title: "About Mr. Handy",
  about_body:
    "We connect you with trusted carpenters, plumbers, and electricians to keep your home in perfect shape. Professional, punctual, and friendly service every time.",
  contact_title: "Contact",
  contact_body:
    "Questions or need a quote? Email us at support@mrhandy.example or call (555) 123-4567.",
  join_title: "Join Us",
  join_body:
    "Are you a skilled professional looking to offer services on Mr. Handy? Join our network of trusted experts and grow your business.",
};

const hi: Dictionary = {
  brand: "मिस्टर हैंडी",
  tagline: "घर की रखरखाव, एक क्लिक में",
  nav_home: "होम",
  nav_about: "हमारे बारे में",
  nav_contact: "संपर्क करें",
  nav_join: "हमसे जुड़ें",
  signup: "साइन अप",
  languages: "English",
  carpenter: "बढ़ई",
  plumber: "प्लम्बर",
  electrician: "इलेक्ट्रीशियन",
  carpentry_title: "कारपेंट्री सेवाएँ",
  carpentry_desc:
    "कस्टम शेल्फ से लेकर दरवाज़ों की मरम्मत तक, हमारे अनुभवी बढ़ई आपके घर में वर्कशॉप जैसा फ़िनिश लाते हैं।",
  plumbing_title: "प्लम्बिंग सेवाएँ",
  plumbing_desc:
    "लीकेज, जाम या नई इंस्टॉलेशन—हमारे प्रमाणित प्लम्बर पानी का प्रवाह सुचारू रखते हैं।",
  electrical_title: "इलेक्ट्रिकल सेवाएँ",
  electrical_desc:
    "सॉकेट इंस्टॉल से लेकर लाइटिंग अपग्रेड तक, हमारे इलेक्ट्रिशियन सुरक्षित और उज्ज्वल समाधान देते हैं।",
  book_now: "बुक करें",
  back_home: "होम पर लौटें",
  about_title: "मिस्टर हैंडी के बारे में",
  about_body:
    "हम आपको भरोसेमंद बढ़इयों, प्लम्बरों और इलेक्ट्रिशियनों से जोड़ते हैं ताकि आपका घर बेहतरीन हालत में रहे। हर बार पेशेवर, समय पर और दोस्ताना सेवा।",
  contact_title: "संपर्क",
  contact_body:
    "कोई प्रश्न है या अनुमान चाहिए? हमें support@mrhandy.example पर ईमेल करें या (555) 123-4567 पर कॉल करें।",
  join_title: "हमसे जुड़ें",
  join_body:
    "क्या आप कुशल प्रोफेशनल हैं? मिस्टर हैंडी पर अपनी सेवाएँ दें, हमारे विश्वसनीय नेटवर्क से जुड़ें और अपना व्यवसाय बढ़ाएँ।",
};

const mr: Dictionary = {
  brand: "मिस्टर हॅंडी",
  tagline: "घराची देखभाल, एका क्लिकवर",
  nav_home: "होम",
  nav_about: "आमच्याबद्दल",
  nav_contact: "संपर्क",
  nav_join: "आमच्यात सामील व्हा",
  signup: "साइन अप",
  languages: "English",
  carpenter: "सुतार",
  plumber: "प्लंबर",
  electrician: "इलेक्ट्रीशियन",
  carpentry_title: "कारपेंट्री सेवा",
  carpentry_desc:
    "कस्टम शेल्फपासून दार दुरुस्तीपर्यंत, आमचे अनुभवी सुतार तुमच्या घरात वर्कशॉपसारखी अचूकता आणतात.",
  plumbing_title: "प्लंबिंग सेवा",
  plumbing_desc:
    "गळती, ब्लॉकेज किंवा नवीन इंस्टॉलेशन—आमचे प्रमाणित प्लंबर पाण्याचा प्रवाह सुरळीत ठेवतात.",
  electrical_title: "इलेक्ट्रिकल सेवा",
  electrical_desc:
    "सॉकेट इंस्टॉलपासून लाइटिंग अपग्रेडपर्यंत, आमचे इलेक्ट्रिशियन सुरक्षित, उजळ उपाय देतात.",
  book_now: "बुक करा",
  back_home: "होमवर परत",
  about_title: "मिस्टर हॅंडी विषयी",
  about_body:
    "आम्ही तुम्हाला विश्वासार्ह सुतार, प्लंबर आणि इलेक्ट्रिशियनशी जोडतो जेणेकरून तुमचे घर उत्तम स्थितीत राहील. प्रत्येक वेळी व्यावसायिक, वेळेवर आणि मैत्रीपूर्ण सेवा.",
  contact_title: "संपर्क",
  contact_body:
    "प्रश्न आहे किंवा कोट हवा आहे? support@mrhandy.example वर ईमेल करा किंवा (555) 123-4567 वर कॉल करा.",
  join_title: "आमच्यात सामील व्हा",
  join_body:
    "तुम्ही कुशल व्यावसायिक आहात का? Mr. Handy वर सेवा द्या, आमच्या विश्वासार्ह नेटवर्कमध्ये सामील व्हा आणि तुमचा व्यवसाय वाढवा.",
};

export const dictionaries: Record<Locale, Dictionary> = { en, hi, mr };


