"use client";

import React, { useEffect, useState } from "react";
import {
  Home,
  Users,
  Phone,
  BookOpen,
  Facebook,
  Instagram,
  MessageSquare,
  Package,
  Sofa,
  Sun,
  ChefHat,
  Building,
  MapPin,
  Clock,
  Shield,
  Star,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  User,
  Menu,
  X,
  BaggageClaim,
  BadgeHelp,
  BadgeIcon,
  InfoIcon,

} from "lucide-react";
import Crane from "@/app/Crane";
/* Varela Round font import moved to global style below */



interface FormData {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  message: string;
}

type CategoryKey = "בנייה" | "רהיטים" | "סולארי" | "מטבחים" | "פרגולות" | "מוצרי חשמל" | "טיפים" | "מקצועי" | "שירותים" | "אחר";

export default function JanCranes() {
  const [activeSection, setActiveSection] = useState("home");
  const [selectedArticle, setSelectedArticle] = useState<any | null>(null);
  const [selectedImage, setSelectedImage] = useState<any | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    serviceType: "",
    message: ""
  });
  const galleryScrollRef = React.useRef<HTMLDivElement>(null);
  const articlesScrollRef = React.useRef<HTMLDivElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const imagesPerPageMobile = 3;
  const [currentArticlePage, setCurrentArticlePage] = useState(0);
  const articlesPerPageMobile = 3;
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  // Add this state and effect at the top of your component
const [isDesktop, setIsDesktop] = useState(false);

useEffect(() => {
  const checkScreenSize = () => {
    setIsDesktop(isDesktop);
  };
  
  // Check on mount
  checkScreenSize();
  
  // Add resize listener
  window.addEventListener('resize', checkScreenSize);
  
  return () => window.removeEventListener('resize', checkScreenSize);
}, []);
useEffect(() => {
  const checkScreenSize = () => {
    setIsDesktop(isDesktop);
  };
  
  // Check on mount
  checkScreenSize();
  
  // Add resize listener
  window.addEventListener('resize', checkScreenSize);
  
  return () => window.removeEventListener('resize', checkScreenSize);
}, []);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };
  const navigation = [
    { name: "בית", href: "home", icon: Home },
    { name: "גלריה", href: "gallery", icon: Users },
    { name: "בלוג", href: "blog", icon: BookOpen },
    { name: "צור קשר", href: "contact", icon: Phone },
  ];



  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();

  // WhatsApp requires international format without "+" or leading zeros
  const whatsappNumber = "972505477789"; // 050-5477789

  const lines = [
    `שם: ${formData.name || "-"}`,
    `טלפון לחזרה: ${formData.phone || "-"}`,
    formData.email ? `אימייל: ${formData.email}` : null,
    formData.serviceType ? `סוג שירות: ${formData.serviceType}` : null,
    formData.message ? `הודעה: ${formData.message}` : null,
  ].filter(Boolean);

  const text = `שלום, אשמח לקבל הצעת מחיר/פרטים:\n${lines.join("\n")}`;
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

  // Open WhatsApp chat (works for mobile & desktop)
  window.open(url, "_blank", "noopener,noreferrer");

  // Optional: clear the form
  setFormData({
    name: "",
    phone: "",
    email: "",
    serviceType: "",
    message: ""
  });

  // Keep your submitted state if you still want the success UI
  setIsSubmitted(true);
  setTimeout(() => setIsSubmitted(false), 3000);
};


  // Updated cleanedReviews array with ALL unique reviews
  const cleanedReviews = [
    {
      name: "נופר בכור",
      text: "שירות מעולה זמינים תמיד גם בהתראה קצרה. חייכנים ואדיבים, לא סתם אני לקוחה חוזרת כבר הפעם השלישית.. תבורכו פרנסה בשפע בע״ה 🫶",
      date: "לפני חודש",
      rating: 5
    },
    {
      name: "Avi Attar",
      text: "אני רוצה לציין את ישראל הגיע אליי בדיוק בזמן עם המוביל של המקרר ובאמת היה שירות מעולה ואדיב מאוד אני ממליץ עליו בחום לפעמים הבאות שאצטרך אותו וגם לחברים ולמשפחה",
      date: "לפני חודש",
      rating: 5
    },
    {
      name: "yuri fedorovich",
      text: "שירות מעולה, ממליץ בחום. עבודה מכל הלב.",
      date: "לפני שבוע",
      rating: 5
    },
    {
      name: "Ruven DAN",
      text: "הזמנתי מנוף באשדוד הגיע בחור בשם ישראל נתן שירות ברמה גבוהה ממליץ מאוד אלוף",
      date: "לפני 4 חודשים",
      rating: 5
    },
    {
      name: "vered cohen",
      text: "מומלץ בחום שירות ברמה גבוהה השאירו לי סלון למטה והוא עשה גם את הסבלות",
      date: "לפני 3 חודשים",
      rating: 5
    },
    {
      name: "ליאם טגביה",
      text: "אלוף עולם מקצועי שירות אדיב אני ממש הייתי מרוצה ממליצה לכולם",
      date: "לפני חודש",
      rating: 5
    },
    {
      name: "tami elashvili",
      text: "השירות, המקצועיות, הזמינות והעבודה הנפלאה שלך מוערכת מאוד! תודה על שירות יוצא דופן יצאתי מאוד מרוצה..",
      date: "לפני 4 חודשים",
      rating: 5
    },
    {
      name: "ivgeny drukov",
      text: "שירות ברמה הכי טובה שנתקלתי חבל שאי אפשר לשים יותר מ5 כוכבים",
      date: "לפני 4 חודשים",
      rating: 5
    },
    {
      name: "מיכאל מ",
      text: "לוח זמנים : בדיוק כמו שנקבע עבודה מדויקת ומקצועית לשביעות רצוננו המלאה",
      date: "לפני חודשיים",
      rating: 5
    },
    {
      name: "moshe buchnik",
      text: "הגיע בזמן למקום, אדיבות בחור מקצועי מיומן, תודה רבה מומלץ בחום",
      date: "לפני 3 חודשים",
      rating: 5
    },
    {
      name: "מוטי יוסבשוילי",
      text: "שירות מקצועי ממליץ תודה על השירות",
      date: "לפני חודש",
      rating: 5
    },
    {
      name: "יולי פ",
      text: "מאוד מקצועי סבלני והוגן. והכי חשוב אמין! ממליצה בחום!",
      date: "לפני 4 חודשים",
      rating: 5
    },
    {
      name: "אהרון דן",
      text: "שירות מקצועי אדיב ואמין ממליץ על שירותיו",
      date: "לפני 4 חודשים",
      rating: 5
    },
    {
      name: "מאיר מיכאלי",
      text: "מנוף הרמה באשדוד מקצועי נותן שירות ברמה גבוהה",
      date: "לפני 4 חודשים",
      rating: 5
    },
    {
      name: "נעמי אמסלם",
      text: "שירות אדיב ממש טוב ממליצה בחום !!!!!",
      date: "לפני 3 חודשים",
      rating: 5
    },
    {
      name: "אידית קסבי",
      text: "שירות מדהים ממליצה בחום",
      date: "לפני חודשיים",
      rating: 5
    },
    {
      name: "נזים רזאייב",
      text: "בחור נחמד מאוד, הגיע בזמן, עשה הכל כמו שצריך!! מעולה!!!!",
      date: "לפני 4 חודשים",
      rating: 5
    },
    {
      name: "יעקב ראוי",
      text: "מנוף באשדוד מומלץ רמה אחת מעל כולם",
      date: "לפני 4 חודשים",
      rating: 5
    },
    {
      name: "Noya Gabay",
      text: "אלופים שירות מקצועי תודה רבה",
      date: "לפני שבוע",
      rating: 5
    },
    {
      name: "ameh ameh",
      text: "עבודה מעולה מהירה ומושלמת",
      date: "לפני חודשיים",
      rating: 5
    },
    {
      name: "אליה איבגי",
      text: "מומלץ מספר אחד שירות אדיב ומקצועי",
      date: "לפני 4 חודשים",
      rating: 5
    },
    {
      name: "מילה רזאייב",
      text: "שירות טוב!!! ממליצה",
      date: "לפני 4 חודשים",
      rating: 5
    },
    {
      name: "Aliza Svat",
      text: "חוויה ממש ממליצה לכם 😍😍😍",
      date: "לפני 4 חודשים",
      rating: 5
    },
    {
      name: "מוריה איפרגן",
      text: "שירות אדיב ומקצועי אלוף",
      date: "לפני 3 חודשים",
      rating: 5
    },
    {
      name: "שליו טורגמן",
      text: "שירות מעולה וטוב",
      date: "לפני 3 חודשים",
      rating: 5
    },
    {
      name: "אלי קייסי",
      text: "שירות מעולה וזמינות גבוהה",
      date: "לפני חודשיים",
      rating: 5
    },
    {
      name: "שחף אייש",
      text: "שירות מקצועי ואמין",
      date: "לפני 3 חודשים",
      rating: 5
    },
    {
      name: "shimon ben haim",
      text: "מקצועי ואמין",
      date: "לפני 4 חודשים",
      rating: 5
    },
    {
      name: "יעקב זוהר",
      text: "שירות מצוין",
      date: "לפני 4 חודשים",
      rating: 5
    }
  ];

  // Update the useEffect for faster auto-play (2.5 seconds instead of 4)
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        if (isDesktop) {
          // Desktop: move 3 reviews at a time
          setCurrentReviewIndex((prev) =>
            prev + 3 >= cleanedReviews.length ? 0 : prev + 3
          );
        } else {
          // Mobile: move 1 review at a time
          setCurrentReviewIndex((prev) =>
            (prev + 1) % cleanedReviews.length
          );
        }
      }, 2500); // Changed from 4000 to 2500 milliseconds

      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, cleanedReviews.length]);

  const services = [
    {
      icon: Package,
      title: "מנוף הרמה",
      description: "הרמת חומרי בניין לקומות גבוהות - בלוקים, טיט, שקי מלט, גבס וכל מה שצריך לפרויקט",
      features: ["בלוקים וטיט", "שקי מלט", "גבס וקרמיקה", "עד קומה 23"]
    },
    {
      icon: Sofa,
      title: "הובלת דירות ומשרדים",
      description: "הובלתם דירה? מכניסים מקרר, ספה או מיטה דרך המרפסת בזהירות וללא נזק",
      features: ["רהיטים כבדים", "מוצרי חשמל", "דרך המרפסת", "ללא נזק"]
    },
    {
      icon: Sun,
      title: "הרמת פאנלים סולאריים",
      description: "שירות מקצועי לקולטים סולאריים ודודי שמש לגגות עם דיוק עד רמת המילימטר",
      features: ["קולטים סולאריים", "דודי שמש", "התקנה מדויקת", "לקהל הפרטי"]
    },
    {
      icon: ChefHat,
      title: "הרמת מטבחים ושיש",
      description: "הרמת משטחי שיש כבדים, ארונות מטבח מוכנים וחיפויי קיר במהירות וללא נזק",
      features: ["משטחי שיש", "ארונות מטבח", "חיפויי קיר", "במהירות"]
    },
    {
      icon: Building,
      title: "הנפת פרגולות ומבנים",
      description: "עובדים עם נגריות ומתקינים - הנפות מדויקות לפרגולות, גדרות אלומיניום ומבנים קלים",
      features: ["פרגולות", "גדרות אלומיניום", "מבנים קלים", "הנפות מדויקות"]
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "בטיחות מלאה",
      description: "ציוד מתקדם ומפעילים מוסמכים"
    },
    {
      icon: Clock,
      title: "שירות מהיר",
      description: "זמינות גם בהתראה קצרה"
    },
    {
      icon: Star,
      title: "ניסיון מוכח",
      description: "מאות לקוחות מרוצים ופרויקטים מוצלחים"
    }
  ];

  const galleryImages = [
    {
      id: 1,
      filename: "אלומיניום-1.jpeg",
      title: "הרמת חומרי בניין לאתר בנייה",
      description: "הרמת ציוד בניין לקומות גבוהות בפרויקט מגורים"
    },
    {
      id: 2,
      filename: "פינוי פסולת-2.jpeg",
      title: "פינוי פסולת מאתר בנייה",
      description: "פינוי מקצועי של פסולת בניין"
    },
    {
      id: 3,
      filename: "פרגולות-3.jpeg",
      title: "הרמת פרגולות",
      description: "התקנה והרמה של פרגולות לגגות ומרפסות"
    },
    {
      id: 4,
      filename: "בניה-4.jpeg",
      title: "עבודה באתר בנייה",
      description: "הרמת חומרי בניין לאתר בנייה עם פיגומים"
    },
    {
      id: 5,
      filename: "שיש ומטבחים-5.jpeg",
      title: "הרמת משטחי שיש ומטבחים",
      description: "הרמת משטחי שיש וארונות מטבח לקומות גבוהות"
    },
    {
      id: 6,
      filename: "ריהוט ומוצרי חשמל-6.jpeg",
      title: "הרמת ריהוט ומוצרי חשמל",
      description: "הרמה בטוחה של רהיטים ומוצרי חשמל דרך החלון"
    },
    {
      id: 7,
      filename: "אתרי בניה-7.jpeg",
      title: "שירות לאתרי בנייה",
      description: "הרמת חומרי בניין לפרויקטים גדולים"
    },
    {
      id: 8,
      filename: "דודי שמש ופנלים סולארים-8.jpeg",
      title: "התקנת דודי שמש ופאנלים סולאריים",
      description: "הרמה והתקנה של מערכות סולאריות על גגות"
    }
  ];


  const articles = [
    {
      title: "איך בוחרים מנוף הרמה מתאים לדירה?",
      excerpt: "כשעוברים דירה לדירה גבוהה או כשאין מעלית – חשוב לבחור מנוף עם כושר נשיאה מתאים, מפעיל מוסמך, וביטוח.",
      content: "כשעוברים דירה לדירה גבוהה או כשאין מעלית – חשוב לבחור מנוף עם כושר נשיאה מתאים, מפעיל מוסמך, וביטוח. מנופי ההרמה של ג'אן מתאימים לדירות עד קומה 23 וכוללים שירות מלא כולל אבטחת המטען, הורדה מדויקת והצבת הפריט במקום הרצוי. נקודות חשובות לבחירת מנוף: וודאו שיש ביטוח מקיף, בדקו שהמפעיל מוסמך ומנוסה, וודאו שכושר הנשיאה מתאים לפריט, בדקו זמינות ומהירות השירות. בג'אן הרמות אנחנו מספקים את כל הדרישות הללו ועוד, עם ניסיון מוכח ושירות אמין.",
      category: "טיפים",
      author: "צוות ג'אן",
      date: "15 בדצמבר 2024",
      readTime: "5 דקות קריאה",
      imageIndex: 0
    },
    {
      title: "למה חשוב לבחור מנוף מוסמך לפרויקטים של בנייה?",
      excerpt: "מנוף לאתר בנייה הוא לא רק ציוד – הוא שותף לעבודה. מנוף לא מתאים עלול לעכב את הבנייה ולגרום נזקים.",
      content: "מנוף לאתר בנייה הוא לא רק ציוד – הוא שותף לעבודה. מנוף לא מתאים עלול לעכב את הבנייה ולגרום נזקים. אנחנו בג'אן הרמות עובדים עם קבלנים לפי תקנים מחמירים, עם אישורי עבודה, ניסיון מוכח וציוד מתקדם. יתרונות העבודה עם מנוף מוסמך: עמידה בתקני בטיחות, אישורי עבודה מתאימים, ציוד מתקדם ומתוחזק, מפעילים מקצועיים. העבודה עם מנוף מוסמך מבטיחה שהפרויקט יתקדם בזמן, בבטיחות ובאיכות גבוהה.",
      category: "מקצועי",
      author: "צוות ג'אן",
      date: "10 בדצמבר 2024",
      readTime: "7 דקות קריאה",
      imageIndex: 3
    },
    {
      title: "התקנת פאנלים סולאריים? אל תחסוך במנוף!",
      excerpt: "התקנת קולטים סולאריים דורשת הרמה עד הגג, ובדיוק כאן נכנס לתמונה המנוף.",
      content: "התקנת קולטים סולאריים דורשת הרמה עד הגג, ובדיוק כאן נכנס לתמונה המנוף. הנפה לא מקצועית עלולה לגרום לשבר או סיכון חיים. לכן חשוב לעבוד עם צוות מיומן ומנוף מתאים – וזה בדיוק מה שאנחנו מציעים. חשיבות המנוף בהתקנת פאנלים: דיוק בהצבה, מניעת נזק לפאנלים, בטיחות העובדים, יעילות בזמן. עם הניסיון שלנו והציוד המתקדם, אנחנו מבטיחים התקנה מדויקת ובטוחה של הפאנלים הסולאריים.",
      category: "סולארי",
      author: "צוות ג'אן",
      date: "5 בדצמבר 2024",
      readTime: "6 דקות קריאה",
      imageIndex: 7
    },
    {
      title: "מנוף להרמת ריהוט באשדוד, אשקלון, יבנה וגן יבנה",
      excerpt: "הפתרון המושלם להרמת ריהוט כבד – בלי לפרק, בלי להזיע",
      content: "מעבירים ספה, מזנון, מיטה זוגית או שולחן אוכל כבד? במקום לפרק, להרים ולסכן את הריהוט – שירות מנוף להרמת ריהוט מאפשר לכם להעביר כל פריט בקלות, דרך המרפסת או החלון, גם לקומה 10 ומעלה. אנחנו מספקים שירות מהיר, מקצועי ובטוח של מנוף רהיטים באשדוד, באשקלון, ביבנה ובגן יבנה, עם ניסיון רב באתרים מורכבים ובגישה מאתגרת. יתרונות השירות: שמירה על הריהוט ושלמותו, הרמה מהירה עד הקומה הדרושה, ביטוח מלא ואחריות על כל פריט.",
      category: "שירותים",
      author: "צוות ג'אן",
      date: "6 באוגוסט 2025",
      readTime: "4 דקות קריאה",
      imageIndex: 5
    },
    {
      title: "מנוף להרמת מוצרי חשמל – באשדוד, יבנה, אשקלון וגן יבנה",
      excerpt: "מקרר שלא נכנס במעלית? מכונת כביסה כבדה? אנחנו כאן בשביל זה",
      content: "רכשתם מוצר חשמל חדש ומתקשים להעלות אותו לדירה? שירות מנוף הרמה למוצרי חשמל הוא בדיוק מה שאתם צריכים. אנחנו מתמחים בהרמה בטוחה ועדינה של: מקררים ומקפיאים, תנורים, כיריים ומדיחים, מזגנים מיני מרכזיים, טלוויזיות גדולות ורגישות. היכן אנחנו פועלים? באשדוד, גן יבנה, יבנה ואשקלון – זמינים מהיום להיום! היתרון שלנו: שמירה על מוצרים עדינים, מניעת נזק לקירות ומעברים, פתרון מידי במקרים דחופים.",
      category: "שירותים",
      author: "צוות ג'אן",
      date: "6 באוגוסט 2025",
      readTime: "4 דקות קריאה",
      imageIndex: 5
    },
    {
      title: "מנוף לשיפוצים והרמת חומרי בניין באשדוד והסביבה",
      excerpt: "פתרון מהיר, יעיל ובטיחותי לאתרי בנייה ולשיפוצים",
      content: "קבלנים, אנשי שיפוצים ודיירים – במקום לסחוב במדרגות, הרימו בקלות ובמהירות עם מנוף הרמה מקצועי. אנחנו מספקים שירות הרמת חומרי בניין באשדוד, וגם בגן יבנה, אשקלון ויבנה – לכל צורך: שקי מלט וטיט, דליים, אריחים, בלוקים, ציוד וכלים כבדים. למה אנחנו? זמינות גבוהה לבניינים בבנייה, חיסכון עצום בזמן וכוח אדם, דיוק בפריקה לפי דרישת הלקוח.",
      category: "בנייה",
      author: "צוות ג'אן",
      date: "6 באוגוסט 2025",
      readTime: "5 דקות קריאה",
      imageIndex: 3
    },
    {
      title: "מנוף להרמת לוחות גבס, עץ וחומרי גמר – באשדוד ובערים הסמוכות",
      excerpt: "כשאין גישה דרך המדרגות – אנחנו מעלים דרך האוויר",
      content: "לוחות גבס באורך מלא, קירות מוכנים, קרניזים, דלתות עץ או פרופילים – כל אלה קשה להעביר דרך חדר מדרגות. אנחנו מציעים פתרון מותאם אישית – מנוף להרמת גבס באשדוד, גן יבנה, אשקלון ויבנה – כולל חומרים באורך מלא, עד גובה רב. מה אנחנו מרימים? גבס באורך 2.4–3 מטר, קורות עץ ואלומיניום, כל חומר גמר שלא נכנס במעלית. למי זה מתאים? קבלנים ולקוחות פרטיים, שיפוץ דירות ישנות, עבודות גמר בבניינים חדשים.",
      category: "שירותים",
      author: "צוות ג'אן",
      date: "6 באוגוסט 2025",
      readTime: "4 דקות קריאה",
      imageIndex: 4
    }
  ];


  const categoryColors = {
    "בנייה": "bg-blue-100 text-blue-800",
    "רהיטים": "bg-purple-100 text-purple-800",
    "סולארי": "bg-yellow-100 text-yellow-800",
    "מטבחים": "bg-green-100 text-green-800",
    "פרגולות": "bg-orange-100 text-orange-800",
    "מוצרי חשמל": "bg-red-100 text-red-800",
    "טיפים": "bg-blue-100 text-blue-800",
    "מקצועי": "bg-green-100 text-green-800",
    "שירותים": "bg-pink-100 text-pink-800",
    "אחר": "bg-gray-100 text-gray-800"
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "טלפון",
      details: "050-5477789",
      action: "tel:0505477789"
    },
    {
      icon: MessageSquare,
      title: "וואטסאפ",
      details: "שירות מהיר בווטסאפ",
      action: "https://wa.me/message/KBPJM744WZNBE1"
    },
    {
      icon: MapPin,
      title: "איזור השירות",
      details: "אשדוד, יבנה, גן יבנה, אשקלון, מושבי הדרום",
      action: null
    },
    {
      icon: Clock,
      title: "שעות פעילות",
      details: "ראשון-חמישי: 7:00-18:00 | שבת: לפי תיאום",
      action: null
    }
  ];

  const faqItems = [
    {
      question: "מה ההבדל בין מנוף סל למנוף הרמה לרהיטים?",
      answer: "מנוף סל נועד להרמת אנשים, מנוף הרמה לרהיטים נועד לפריטים כבדים דרך החלון/מרפסת."
    },
    {
      question: "האם אפשר להזמין מהיום להיום?",
      answer: "בהחלט! במקרים רבים נוכל לספק שירות מהיר תוך מספר שעות."
    },
    {
      question: "האם אתם עובדים עם קבלנים בפרויקטים גדולים?",
      answer: "כן. אנו עובדים מול קבלנים, יזמים וחברות בנייה בכל אזור הדרום."
    },
    {
      question: "מה העלות?",
      answer: "המחיר משתנה לפי גובה, סוג ההרמה, מיקום ומשך זמן העבודה. אפשר לקבל הצעת מחיר מדויקת בטלפון או בווטסאפ."
    }
  ];

  const serviceTypes = [
    "מנוף הרמה",
    "מנוף זרוע",
    "מנוף ספיידר",
    "הובלת דירות ומשרדים",
    "אחר"
  ];

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
        * {
          font-family: 'Varela Round', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        .gradient-bg {
          background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
        }
        
        .orange-gradient {
          background: linear-gradient(135deg, #ea580c 0%, #f97316 100%);
        }
        .blue-gradient {
          background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%);
        }
        
        .floating-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.95);
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }
        
        .card {
          background: white;
          border-radius: 0.5rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }
        
        .card-content {
          padding: 1.5rem;
        }
        
        .card-header {
          padding: 1.5rem 1.5rem 0;
        }
        
        .badge {
          display: inline-flex;
          align-items: center;
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 500;
        }
        
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
          font-weight: 500;
          transition: all 0.2s;
          text-decoration: none;
          border: none;
          cursor: pointer;
          font-size: 1rem;
        }
        
        .btn-primary {
          background: ##011659;
          color: white;
        }
        
        .btn-primary:hover {
          background: #0393d6;
        }
        
        .input, .textarea {
          width: 100%;
          padding: 0.5rem 0.75rem;
          border: 1px solid #d1d5db;
          border-radius: 0.375rem;
          font-size: 0.875rem;
          font-family: inherit;
        }
        
        .input:focus, .textarea:focus {
          outline: none;
          border-color: ##011659;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }
        
        .textarea {
          resize: vertical;
          min-height: 100px;
        }
        
        .text-shadow {
          text-shadow: 0 2px 4px rgba(0,0,0,0.5);
        }
        
        .hero-bg {
          background-image: url('11.jpeg');
          background-size: cover;
          background-position: center;
          animation: heroZoom 30s ease-in-out infinite alternate;
        }
        
        @keyframes heroZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.05); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-delay-300 {
          animation-delay: 0.3s;
        }
        
        .animate-delay-600 {
          animation-delay: 0.6s;
        }
        
        .animate-delay-900 {
          animation-delay: 0.9s;
        }
        
        .animate-delay-1200 {
          animation-delay: 1.2s;
        }
        
        .hero-gradient-overlay {
          background: linear-gradient(135deg, rgba(30, 58, 138, 0.8) 0%, rgba(30, 64, 175, 0.6) 50%, rgba(59, 130, 246, 0.4) 100%);
        }
                .m-gradient-overlay {
          background: linear-gradient(135deg, #1e3a8acc 0%, rgba(30, 64, 175, 0.6) 50%, rgba(59, 130, 246, 0.4) 100%);
        }
      `}</style>

      <>
<header
  className={`floating-header fixed top-0 
              !inset-x-3 sm:inset-x-0
              px-5 sm:px-6 lg:px-8
              bg-white/80 shadow-xl border border-gray-200 rounded-3xl
              max-w-6xl mx-auto mt-4 rounded-4xl backdrop-blur-md
              relative`}
  dir="rtl"
>
  <div className="flex justify-between items-center h-16">
    <div className="flex items-center gap-3">
      <Crane fill={'#0a2b86cc'} className="w-20 h-20 text-white" />
      <div>
        <h1 className="text-xl font-bold text-gray-900" style={{ color: '#011659' }}>ג'אן מנופים</h1>
<p className="text-sm text-gray-600 leading-snug ">
  מנוף הרמה עד <span className="hidden sm:inline"> </span>
  <br className="inline sm:hidden" />
  קומה 23
</p>
      </div>
    </div>

    <nav className="hidden md:flex space-x-4 space-x-reverse">
      {navigation.map((item) => (
        <button
          key={item.name}
          onClick={() => scrollToSection(item.href)}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative overflow-hidden ${
            activeSection === item.href
              ? "text-[#011659] bg-[#E6F8FF] shadow-lg scale-105"
              : "text-gray-700 hover:text-[#011659] hover:bg-[#E6F8FF]"
          }`}
        >
          <item.icon className={`w-4 h-4 z-10 ${activeSection === item.href ? "text-[#011659]" : ""}`} />
          <span className="z-10">{item.name}</span>
        </button>
      ))}
    </nav>

    <div className="flex items-center gap-3">
      <a
        href="https://wa.me/message/KBPJM744WZNBE1"
        target="_blank"
        rel="noopener noreferrer"
        style={{ backgroundColor: '#00AFFE' }}
        className="text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-colors duration-200 flex items-center gap-2"
      >
        <MessageSquare className="w-4 h-4" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>

      <a
        href="tel:0505477789"
        style={{ backgroundColor: '#00AFFE', whiteSpace: 'nowrap' }}
        className="text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity duration-200 flex items-center gap-2"
      >
        <Phone className="w-4 h-4 flex-shrink-0" />
        <span className="hidden sm:inline" style={{ whiteSpace: 'nowrap' }}>050-5477789</span>
      </a>

      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none"
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
    </div>
  </div>

  {isMobileMenuOpen && (
    <div className="md:hidden absolute top-full mt-2 left-0 right-0 z-[60] bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl px-4 py-4 space-y-2 max-h-[70vh] overflow-auto">
      {navigation.map((item) => (
        <button
          key={item.name}
          onClick={() => scrollToSection(item.href)}
          className={`flex w-full items-center justify-between px-3 py-3 rounded-lg text-base font-medium transition-all ${
            activeSection === item.href
              ? "text-[#011659] bg-[#E6F8FF]"
              : "text-gray-700 hover:text-[#011659] hover:bg-[#E6F8FF]"
          }`}
        >
          <span>{item.name}</span>
          <item.icon className="w-5 h-5" />
        </button>
      ))}
    </div>
  )}
</header>

      </>


      <main >
        <section id="home" className="min-h-screen">
          <div className="relative text-white min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 hero-bg"></div>
            <div className="absolute inset-0 hero-gradient-overlay"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="text-center">
                <div className="flex justify-center ">
                  <Crane
                    className="w-44 h-44 " />
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow animate-fadeInUp">
                  ג'אן מנופים
                </h1>

                <p className="text-2xl md:text-3xl mb-6 text-blue-100 font-semibold text-shadow animate-fadeInUp animate-delay-300">
                  מנוף הרמה עד קומה 23
                </p>

                <p className="text-xl mb-12 max-w-4xl mx-auto text-blue-100 leading-relaxed text-shadow animate-fadeInUp animate-delay-600">
                  החברה המובילה להרמה לגובה בדרום הארץ. עם ניסיון של שנים, צי מנופים חדיש ושירות שלא מתפשר – אנחנו כאן כדי להרים לכם את הכל.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a
                    href="tel:0505477789"
                    className="orange-gradient hover:opacity-90 text-xl px-10 py-6 rounded-lg text-white font-medium transition-all duration-300 flex items-center justify-center gap-3 animate-slideInLeft animate-delay-900 hover:scale-105"
                  >
                    <Phone className="w-6 h-6" />
                    התקשרו עכשיו
                  </a>

                  <button
                    onClick={() => scrollToSection('contact')}
                    className="bg-transparent border-2 border-white/80 text-white hover:bg-white hover:text-blue-700 transition-all duration-300 text-xl px-10 py-6 rounded-lg font-medium flex items-center justify-center gap-3 animate-slideInRight animate-delay-1200 hover:scale-105"
                  >
                    <ArrowRight className="w-6 h-6" />
                    צרו קשר
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="py-16 bg-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-8">
                  שירות בפריסה רחבה
                </h2>
                <div className="flex flex-wrap justify-center gap-6 text-lg">
                  {["אשדוד", "יבנה", "גן יבנה", "אשקלון", "מושבי הדרום"].map((area) => (
                    <div key={area} className="flex items-center gap-3 bg-white px-6 py-4 rounded-lg shadow-md hover:shadow-xl hover:scale-105 hover:bg-blue-50 transition-all duration-300 cursor-pointer group">
                      <MapPin className="w-5 h-5 text-blue-600 group-hover:text-orange-600 transition-colors duration-300" />
                      <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="py-24 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-20">
                <div className="inline-block mb-4">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <InfoIcon className="w-14 h-14 text-white" />
                  </div>
                </div>
                <h2 className="text-5xl font-bold text-gray-900 mb-6">
                  השירותים שלנו
                </h2>
                <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  אנחנו מתמחים בהרמות לכל מטרה עם ציוד מתקדם ושירות מקצועי
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div key={index} className="card group hover:shadow-2xl transition-all duration-500 bg-white hover:-translate-y-2 relative">
                    <div className="card-content relative">
                      <div className="flex items-center gap-4 mb-6">

                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                            {service.title}
                          </h3>
                          <div className="w-12 h-1 bg-orange-500 mt-2 group-hover:w-16 transition-all duration-300"></div>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-6 leading-relaxed text-base">
                        {service.description}
                      </p>
                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-3 text-gray-700">
                            <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                              <CheckCircle className="w-3 h-3 text-green-600" />
                            </div>
                            <span className="text-sm font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-20 left-10 w-32 h-32 bg-blue-600 rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-500 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center mb-20">
                <div className="inline-block mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl">
                    <Star className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h2 className="text-5xl font-bold text-gray-900 mb-6 relative">
                  למה לבחור בנו?
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
                </h2>
                <p className="text-2xl text-gray-600 max-w-2xl mx-auto">
                  הדיוק שמרימים איתו – השירות שחוזרים אליו
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {features.map((feature, index) => (
                  <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300 flex flex-col h-full">
                    <div className="relative mb-8">
                      <div className="w-24 h-24 gradient-bg rounded-full flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <feature.icon className="w-12 h-12 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      {/* Decorative ring */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-blue-200 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></div>
                    </div>

                    <div className="bg-white rounded-xl p-8 shadow-lg group-hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-blue-200 relative overflow-hidden flex-1 flex flex-col">
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-orange-500/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex-1">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom accent */}
              <div className="mt-16 text-center">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full shadow-lg">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">מאות לקוחות מרוצים בוחרים בנו שוב ושוב</span>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundColor: '#00AFFE' }}
            className="py-24 text-white m-gradient-overlay">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-5xl font-bold mb-8">
                מוכנים להרמה?
              </h2>
              <p className="text-2xl mb-12 opacity-90">
                שירות מהיר גם בהתראה קצרה! צרו קשר עכשיו לקבלת הצעת מחיר
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="tel:0505477789"
                  style={{ color: '#011659' }}

                  className="bg-white text-orange-600 hover:bg-gray-100 text-xl px-10 py-6 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-3"
                >
                  <Phone className="w-6 h-6" />
                  050-5477789
                </a>
                <a
                  href="https://wa.me/message/KBPJM744WZNBE1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white/30 text-white hover:bg-white/10 text-xl px-10 py-6 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-3"
                >
                  <MessageSquare className="w-6 h-6" />
                  צרו קשר בווטסאפ
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                גלריית פרויקטים
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                צפו בפרויקטים שביצענו בהצלחה בכל רחבי הדרום
              </p>
            </div>

            {/* Desktop View - Horizontal Scroll */}
            <div className="hidden md:block relative">
              <div className="relative">
                <div 
                  ref={galleryScrollRef}
                  className="overflow-x-auto scrollbar-hide scroll-smooth"
                  style={{ scrollBehavior: 'smooth' }}
                >
                  <div className="flex gap-6 pb-4" style={{ width: 'max-content' }}>
                    {galleryImages.map((image, index) => (
                      <div
                        key={index}
                        className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white flex-shrink-0"
                        style={{ width: '350px' }}
                        onClick={() => setSelectedImage({ ...image, index })}
                      >
                        <div className="aspect-[4/3] relative overflow-hidden">
                          <img
                            src={`${index + 1}.jpeg`}
                            alt={image.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="text-white font-bold text-lg mb-1">{image.title}</h3>
                            <p className="text-white/90 text-sm">{image.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Navigation Arrows */}
                <button
                  onClick={() => {
                    if (galleryScrollRef.current) {
                      galleryScrollRef.current.scrollBy({ left: 370, behavior: 'smooth' });
                    }
                  }}
                  className="absolute top-1/2 -translate-y-1/2 right-0 -mr-12 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-200 z-10 hover:scale-110"
                >
                  <ArrowRight className="w-6 h-6 text-gray-700" />
                </button>
                
                <button
                  onClick={() => {
                    if (galleryScrollRef.current) {
                      galleryScrollRef.current.scrollBy({ left: -370, behavior: 'smooth' });
                    }
                  }}
                  className="absolute top-1/2 -translate-y-1/2 left-0 -ml-12 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-200 z-10 hover:scale-110"
                >
                  <ArrowLeft className="w-6 h-6 text-gray-700" />
                </button>
              </div>
              
              {/* Scroll Indicator */}
              <div className="flex justify-center mt-6 gap-2">
                <div className="flex items-center gap-2 text-gray-500">
                  <span className="text-sm">לחצו על החצים או גללו לראות עוד פרויקטים</span>
                </div>
              </div>
            </div>

            {/* Mobile View - Pagination */}
            <div className="md:hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {galleryImages
                  .slice(currentPage * imagesPerPageMobile, (currentPage + 1) * imagesPerPageMobile)
                  .map((image, index) => {
                    const actualIndex = currentPage * imagesPerPageMobile + index;
                    return (
                      <div
                        key={actualIndex}
                        className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white"
                        onClick={() => setSelectedImage({ ...image, index: actualIndex })}
                      >
                        <div className="aspect-[4/3] relative overflow-hidden">
                          <img
                            src={`${actualIndex + 1}.jpeg`}
                            alt={image.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <h3 className="text-white font-bold text-base mb-1">{image.title}</h3>
                            <p className="text-white/90 text-sm line-clamp-2">{image.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>

              {/* Pagination Controls */}
              <div className="flex justify-center items-center gap-4 mt-8">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
                  disabled={currentPage === 0}
                  className={`p-2 rounded-lg ${currentPage === 0
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-blue-500 text-white hover:bg-blue-700'
                    } transition-colors`}
                >
                  <ArrowRight className="w-5 h-5" />
                </button>

                <div className="flex gap-2">
                  {Array.from({ length: Math.ceil(galleryImages.length / imagesPerPageMobile) }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPage(index)}
                      className={`w-2 h-2 rounded-full transition-all ${currentPage === index
                        ? 'bg-blue-500 w-8'
                        : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setCurrentPage(prev => Math.min(Math.ceil(galleryImages.length / imagesPerPageMobile) - 1, prev + 1))}
                  disabled={currentPage === Math.ceil(galleryImages.length / imagesPerPageMobile) - 1}
                  className={`p-2 rounded-lg ${currentPage === Math.ceil(galleryImages.length / imagesPerPageMobile) - 1
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-blue-500 text-white hover:bg-blue-700'
                    } transition-colors`}
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Image Modal - Same as before */}
          {selectedImage && (
            <div
              className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <div className="relative max-w-6xl w-full" style={{ animation: 'fadeInScale 0.3s ease-out forwards' }}>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
                >
                  <X className="w-8 h-8" />
                </button>
                <img
                  src={`${selectedImage.index + 1}.jpeg`}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                  <h3 className="text-white font-bold text-2xl mb-2">{selectedImage.title}</h3>
                  <p className="text-white/90">{selectedImage.description}</p>
                </div>
              </div>
            </div>
          )}
        </section>


        <section id="blog" className="min-h-screen bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {selectedArticle ? (
              <div className="max-w-4xl mx-auto">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8"
                >
                  <ArrowLeft className="w-4 h-4" />
                  חזרה לבלוג
                </button>

                <article className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="aspect-video relative">
                    <img
                      src={`${selectedArticle.imageIndex + 1}.jpeg`}
                      alt={selectedArticle.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`badge ${categoryColors[selectedArticle.category as CategoryKey]}`}>
                        {selectedArticle.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">
                      {selectedArticle.title}
                    </h1>

                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-8">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {selectedArticle.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {selectedArticle.readTime}
                      </div>
                      <span>{selectedArticle.date}</span>
                    </div>

                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                      <p className="mb-4">{selectedArticle.content}</p>
                    </div>
                  </div>
                </article>
              </div>
            ) : (
              <>
                <div className="text-center mb-16">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    בלוג
                  </h1>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    טיפים, מדריכים והכוונה מקצועית בתחום ההרמה והמנופים
                  </p>
                </div>

                {/* Desktop View - Horizontal Scroll */}
                <div className="hidden md:block relative">
                  <div className="relative">
                    <div 
                      ref={articlesScrollRef}
                      className="overflow-x-auto scrollbar-hide scroll-smooth"
                      style={{ scrollBehavior: 'smooth' }}
                    >
                      <div className="flex gap-6 pb-4" style={{ width: 'max-content' }}>
                        {articles.map((article, index) => (
                          <div
                            key={index}
                            className="card hover:shadow-xl transition-shadow duration-300 cursor-pointer flex-shrink-0"
                            style={{ width: '400px' }}
                            onClick={() => setSelectedArticle(article)}
                          >
                            <div className="aspect-video relative">
                              <img
                                src={`${article.imageIndex + 1}.jpeg`}
                                alt={article.title}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute top-4 right-4">
                                <span className={`badge ${categoryColors[article.category as CategoryKey]}`}>
                                  {article.category}
                                </span>
                              </div>
                            </div>

                            <div className="card-content">
                              <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                                {article.title}
                              </h3>
                              <p className="text-gray-600 mb-4 line-clamp-3">
                                {article.excerpt}
                              </p>
                              <div className="flex items-center justify-between text-sm text-gray-500">
                                <div className="flex items-center gap-1">
                                  <Clock className="w-4 h-4" />
                                  {article.readTime}
                                </div>
                                <span>{article.date}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Navigation Arrows */}
                    <button
                      onClick={() => {
                        if (articlesScrollRef.current) {
                          articlesScrollRef.current.scrollBy({ left: 420, behavior: 'smooth' });
                        }
                      }}
                      className="absolute top-1/2 -translate-y-1/2 right-0 -mr-12 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-200 z-10 hover:scale-110"
                    >
                      <ArrowRight className="w-6 h-6 text-gray-700" />
                    </button>
                    
                    <button
                      onClick={() => {
                        if (articlesScrollRef.current) {
                          articlesScrollRef.current.scrollBy({ left: -420, behavior: 'smooth' });
                        }
                      }}
                      className="absolute top-1/2 -translate-y-1/2 left-0 -ml-12 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-200 z-10 hover:scale-110"
                    >
                      <ArrowLeft className="w-6 h-6 text-gray-700" />
                    </button>
                  </div>
                  
                  {/* Scroll Indicator */}
                  <div className="flex justify-center mt-6 gap-2">
                    <div className="flex items-center gap-2 text-gray-500">
                      <span className="text-sm">לחצו על החצים או גללו לראות עוד מאמרים</span>
                    </div>
                  </div>
                </div>
                
                {/* Mobile View - Pagination */}
                <div className="md:hidden">
                  <div className="grid grid-cols-1 gap-6">
                    {articles
                      .slice(currentArticlePage * articlesPerPageMobile, (currentArticlePage + 1) * articlesPerPageMobile)
                      .map((article, index) => (
                        <div
                          key={index}
                          className="card hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                          onClick={() => setSelectedArticle(article)}
                        >
                          <div className="aspect-video relative">
                            <img
                              src={`${article.imageIndex + 1}.jpeg`}
                              alt={article.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute top-4 right-4">
                              <span className={`badge ${categoryColors[article.category as CategoryKey]}`}>
                                {article.category}
                              </span>
                            </div>
                          </div>

                          <div className="card-content">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                              {article.title}
                            </h3>
                            <p className="text-gray-600 mb-3 text-sm line-clamp-2">
                              {article.excerpt}
                            </p>
                            <div className="flex items-center justify-between text-xs text-gray-500">
                              <div className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {article.readTime}
                              </div>
                              <span>{article.date}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>

                  {/* Pagination Controls */}
                  <div className="flex justify-center items-center gap-4 mt-8">
                    <button
                      onClick={() => setCurrentArticlePage(prev => Math.max(0, prev - 1))}
                      disabled={currentArticlePage === 0}
                      className={`p-2 rounded-lg ${currentArticlePage === 0
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-blue-500 text-white hover:bg-blue-600'
                        } transition-colors`}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </button>

                    <div className="flex gap-2">
                      {Array.from({ length: Math.ceil(articles.length / articlesPerPageMobile) }).map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentArticlePage(index)}
                          className={`w-2 h-2 rounded-full transition-all ${currentArticlePage === index
                            ? 'bg-blue-500 w-8'
                            : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={() => setCurrentArticlePage(prev => Math.min(Math.ceil(articles.length / articlesPerPageMobile) - 1, prev + 1))}
                      disabled={currentArticlePage === Math.ceil(articles.length / articlesPerPageMobile) - 1}
                      className={`p-2 rounded-lg ${currentArticlePage === Math.ceil(articles.length / articlesPerPageMobile) - 1
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-blue-500 text-white hover:bg-blue-700'
                        } transition-colors`}
                    >
                      <ArrowLeft className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                מה הלקוחות שלנו אומרים
              </h2>
              <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                ביקורות אמיתיות מלקוחות מרוצים
              </p>
            </div>

            {/* Google Reviews Summary */}
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 max-w-2xl mx-auto">
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                    alt="Google"
                    className="h-8"
                  />
                  <span className="text-2xl font-semibold text-gray-800">ביקורות</span>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <span className="text-5xl font-bold text-gray-900">5.0</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                <p className="text-gray-600 mb-6">מבוסס על {cleanedReviews.length} ביקורות בגוגל</p>

                <a
                  href="https://www.google.com/maps/place/%D7%92'%D7%90%D7%9F+%D7%9E%D7%A0%D7%95%D7%A4%D7%99%D7%9D%E2%80%AD/@31.7874689,34.6637159,17z/data=!4m8!3m7!1s0x8635f802abd3071:0xf851b0803867d32!8m2!3d31.7874644!4d34.6662908!9m1!1b1!16s%2Fg%2F11m6h_w3zx?entry=ttu&g_ep=EgoyMDI1MDgwNC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2"
                >
                  ראו את כל הביקורות בגוגל
                  <ArrowLeft className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Reviews Carousel */}
            <div
              className="relative max-w-6xl mx-auto"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {/* Desktop Carousel - Shows 3 reviews at a time */}
              <div className="hidden md:block">
                <div className="flex gap-6">
                  {cleanedReviews.slice(currentReviewIndex, currentReviewIndex + 3).map((review, index) => (
                    <div key={currentReviewIndex + index} className="flex-1">
                      <div className="bg-white rounded-xl shadow-lg p-6 h-full hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                              <User className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">{review.name}</h4>
                              <p className="text-sm text-gray-500">{review.date}</p>
                            </div>
                          </div>
                          <div className="flex">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed line-clamp-3">{review.text}</p>
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <img
                              src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_42x16dp.png"
                              alt="Google"
                              className="h-4"
                            />
                            <span>ביקורת מאומתת</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Carousel - Shows 1 review at a time */}
              <div className="md:hidden">
                <div className="px-3">
                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <User className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{cleanedReviews[currentReviewIndex].name}</h4>
                          <p className="text-sm text-gray-500">{cleanedReviews[currentReviewIndex].date}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex mb-3">
                      {[...Array(cleanedReviews[currentReviewIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 leading-relaxed">{cleanedReviews[currentReviewIndex].text}</p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <img
                          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_42x16dp.png"
                          alt="Google"
                          className="h-4"
                        />
                        <span>ביקורת מאומתת</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows - Corrected for RTL */}
              <button
                onClick={() => {
                  if (isDesktop) {
                    // Desktop: move 3 reviews at a time
                    setCurrentReviewIndex((prev) =>
                      prev + 3 >= cleanedReviews.length ? 0 : prev + 3
                    );
                  } else {
                    // Mobile: move 1 review at a time
                    setCurrentReviewIndex((prev) =>
                      (prev + 1) % cleanedReviews.length
                    );
                  }
                  setIsAutoPlaying(false);
                }}
                className="absolute top-1/2 -translate-y-1/2 left-0 -ml-4 md:-ml-12 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors z-10"
              >
                <ArrowLeft className="w-6 h-6 text-gray-700" />
              </button>{/* Navigation Arrows - Corrected for RTL */}
              <button
                onClick={() => {
                  if (isDesktop) {
                    // Desktop: move 3 reviews at a time
                    setCurrentReviewIndex((prev) =>
                      prev + 3 >= cleanedReviews.length ? 0 : prev + 3
                    );
                  } else {
                    // Mobile: move 1 review at a time
                    setCurrentReviewIndex((prev) =>
                      (prev + 1) % cleanedReviews.length
                    );
                  }
                  setIsAutoPlaying(false);
                }}
                className="absolute top-1/2 -translate-y-1/2 left-0 -ml-4 md:-ml-12 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors z-10"
              >
                <ArrowLeft className="w-6 h-6 text-gray-700" />
              </button>

              <button
                onClick={() => {
                  if (isDesktop) {
                    // Desktop: move 3 reviews at a time
                    setCurrentReviewIndex((prev) =>
                      prev - 3 < 0 ? Math.floor((cleanedReviews.length - 1) / 3) * 3 : prev - 3
                    );
                  } else {
                    // Mobile: move 1 review at a time
                    setCurrentReviewIndex((prev) =>
                      prev === 0 ? cleanedReviews.length - 1 : prev - 1
                    );
                  }
                  setIsAutoPlaying(false);
                }}
                className="absolute top-1/2 -translate-y-1/2 right-0 -mr-4 md:-mr-12 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors z-10"
              >
                <ArrowRight className="w-6 h-6 text-gray-700" />
              </button>

              {/* Enhanced Navigation Indicator with animation */}
              <div className="flex justify-center gap-3 mt-8 items-center">
                {/* Left side indicators */}
                <div className="flex gap-2 items-center">
                  <div className={`rounded-full transition-all duration-500 ${currentReviewIndex > 0
                      ? 'w-1.5 h-1.5 bg-gray-300 opacity-60'
                      : 'w-1 h-1 bg-gray-200 opacity-30'
                    }`}></div>
                  <div className={`rounded-full transition-all duration-500 ${currentReviewIndex > 0
                      ? 'w-2 h-2 bg-gray-400 opacity-80'
                      : 'w-1.5 h-1.5 bg-gray-200 opacity-40'
                    }`}></div>
                </div>

                {/* Center active indicator */}
                <div className="relative">
                  <div className="w-8 h-3 bg-blue-600 rounded-full shadow-md"></div>
                  <div className="absolute inset-0 bg-blue-400 rounded-full animate-pulse opacity-50"></div>
                </div>

                {/* Right side indicators */}
                <div className="flex gap-2 items-center">
                  <div className={`rounded-full transition-all duration-500 ${(isDesktop ? currentReviewIndex + 3 < cleanedReviews.length : currentReviewIndex < cleanedReviews.length - 1)
                      ? 'w-2 h-2 bg-gray-400 opacity-80'
                      : 'w-1.5 h-1.5 bg-gray-200 opacity-40'
                    }`}></div>
                  <div className={`rounded-full transition-all duration-500 ${(isDesktop ? currentReviewIndex + 3 < cleanedReviews.length : currentReviewIndex < cleanedReviews.length - 1)
                      ? 'w-1.5 h-1.5 bg-gray-300 opacity-60'
                      : 'w-1 h-1 bg-gray-200 opacity-30'
                    }`}></div>
                </div>
              </div>
            </div>

            {/* Write Review CTA */}
            <div className="mt-16 text-center">
              <p className="text-gray-600 mb-4">עבדתם איתנו? נשמח לשמוע על החוויה שלכם!</p>
              <a
                href="https://www.google.com/search?q=%D7%92%27%D7%90%D7%9F+%D7%9E%D7%A0%D7%95%D7%A4%D7%99%D7%9D#lrd=0x151d36db19c64a3b:0xf87d7ec383f8632,3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200"
              >
                <Star className="w-5 h-5" />
                כתבו ביקורת בגוגל
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="min-h-screen bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                צרו קשר
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                שירות מהיר גם בהתראה קצרה! צרו קשר עכשיו לקבלת הצעת מחיר
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
              <div className="card shadow-lg">
                <div className="card-header">
                  <h2 className=" text-2xl text-gray-900 font-semibold">
                    שלחו הודעה
                  </h2>
                </div>
                <div className="card-content">
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        תודה על פנייתכם!
                      </h3>
                      <p className="text-gray-600">
                        נחזור אליכם בהקדם האפשרי
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: "#011659" }}>
                          שם מלא
                        </label>
                        <input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="הכניסו את השם המלא"
                          className="input"
                          style={{ color: "#011659" }}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: "#011659" }}>
                          טלפון
                        </label>
                        <input
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="050-1234567"
                          className="input"
                          style={{ color: "#011659" }}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: "#011659" }}>
                          אימייל
                        </label>
                        <input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          className="input"
                          style={{ color: "#011659" }}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: "#011659" }}>
                          סוג השירות
                        </label>
                        <select
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleInputChange}
                          className="input"
                          style={{ color: "#011659" }}
                        >
                          <option value="" style={{ color: "#011659" }}>בחרו סוג שירות</option>
                          {serviceTypes.map((service, index) => (
                            <option key={index} value={service} style={{ color: "#011659" }}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: "#011659" }}>
                          הודעה
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="תארו את הפרויקט שלכם..."
                          className="textarea"
                          style={{ color: "#011659" }}
                        />
                      </div>

<button
  onClick={handleSubmit}
  style={{ backgroundColor: '#00AFFE', fontWeight: 'bold' }}
  className="btn blue-gradient w-full flex items-center justify-center gap-2"
>
  <MessageSquare className="w-5 h-5" />
  שלחו בווטסאפ
</button>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-6">
                <div className="card shadow-lg">
                  <div className="card-header">
                    <h2 className="text-2xl text-gray-900 font-semibold">
                      פרטי קשר
                    </h2>
                  </div>
                  <div className="card-content space-y-4">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <info.icon className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{info.title}</h4>
                          {info.action ? (
                            <a
                              href={info.action}
                              target={info.action.startsWith('http') ? '_blank' : '_self'}
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800"
                            >
                              {info.details}
                            </a>
                          ) : (
                            <p className="text-gray-600">{info.details}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="card shadow-lg">
                  <div className="card-header">
                    <h2 className="text-2xl text-gray-900 font-semibold">
                      עקבו אחרינו
                    </h2>
                  </div>
                  <div className="card-content">
                    <div className="flex gap-4">
                      <a
                        href="https://www.facebook.com/share/16cAPR1D7K/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
                      >
                        <Facebook className="w-6 h-6" />
                      </a>
                      <a
                        href="https://www.instagram.com/jan.manofim.i?igsh=MTJ4eGVzbDcyNXNhbg=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-pink-600 text-white rounded-lg flex items-center justify-center hover:bg-pink-700 transition-colors duration-200"
                      >
                        <Instagram className="w-6 h-6" />
                      </a>
                      <a href="https://www.tiktok.com/@jan_haramot"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors duration-200"
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
                          <title>TikTok icon</title>
                          <path fill="currentColor" d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card shadow-lg">
              <div className="card-header">
                <h2 className="text-2xl text-gray-900 font-semibold">
                  שאלות נפוצות
                </h2>
              </div>
              <div className="card-content">
                <div className="space-y-6">
                  {faqItems.map((item, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {item.question}
                      </h4>
                      <p className="text-gray-600">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <Crane className="w-14 h-14 text-white" />
                </div>
                <h3 className="text-xl font-bold">ג'אן מנופים</h3>
              </div>
              <p className="text-blue-100 mb-4">
                החברה המובילה להרמה לגובה בדרום הארץ. שירות מקצועי, בטוח ואמין.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/share/16cAPR1D7K/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/jan.manofim.i?igsh=MTJ4eGVzbDcyNXNhbg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                {/* ADD THIS TIKTOK LINK HERE */}
                <a
                  href="https://www.tiktok.com/@jan_haramot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
                    <title>TikTok icon</title>
                    <path fill="currentColor" d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </a>

              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">השירותים שלנו</h4>
              <ul className="space-y-2 text-blue-100">
                <li>• מנוף הרמה</li>
                <li>• מנוף זרוע</li>
                <li>• מנוף ספיידר</li>
                <li>• הובלת דירות ומשרדים</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">צור קשר</h4>
              <div className="space-y-3 text-blue-100">
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  050-5477789
                </p>
                <p>שירות בפריסה רחבה:</p>
                <p className="text-sm">אשדוד | יבנה | גן יבנה | אשקלון | מושבי הדרום</p>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-700 mt-8 pt-8 text-center text-blue-100">
            <p>&copy; 2024 ג'אן מנופים. כל הזכויות שמורות.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
