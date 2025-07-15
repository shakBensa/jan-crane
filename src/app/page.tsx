"use client";

import React, { useState } from "react";
import { 
  Truck, 
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
  User
} from "lucide-react";
import Crane from "@/app/Crane";

interface Article {
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
}

interface FormData {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  message: string;
}

type CategoryKey = "בנייה" | "רהיטים" | "סולארי" | "מטבחים" | "פרגולות" | "מוצרי חשמל" | "טיפים" | "מקצועי";

export default function JanCranes() {
  const [activeSection, setActiveSection] = useState("home");
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    serviceType: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const navigation = [
    { name: "בית", href: "home", icon: Home },
    { name: "גלריה", href: "gallery", icon: Users },
    { name: "בלוג", href: "blog", icon: BookOpen },
    { name: "צור קשר", href: "contact", icon: Phone },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setSelectedArticle(null);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const services = [
    {
      icon: Package,
      title: "מנוף הרמה לאתרי בנייה",
      description: "הרמת חומרי בניין לקומות גבוהות - בלוקים, טיט, שקי מלט, גבס וכל מה שצריך לפרויקט",
      features: ["בלוקים וטיט", "שקי מלט", "גבס וקרמיקה", "עד קומה 23"]
    },
    {
      icon: Sofa,
      title: "הרמת רהיטים ומוצרי חשמל",
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

  const projects = [
    {
      title: "הרמת חומרי בניין - פרויקט באשדוד",
      category: "בנייה",
      description: "הרמת בלוקים וטיט לקומה 15 באתר בנייה באשדוד",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500&h=300&fit=crop",
      height: "קומה 15"
    },
    {
      title: "הרמת ספה לדירה - גן יבנה",
      category: "רהיטים",
      description: "הרמת סלון מושלם דרך המרפסת בקומה 8",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=300&fit=crop",
      height: "קומה 8"
    },
    {
      title: "התקנת פאנלים סולאריים - אשקלון",
      category: "סולארי",
      description: "הרמת קולטים סולאריים לגג בית פרטי",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&h=300&fit=crop",
      height: "גג בית"
    },
    {
      title: "הרמת מטבח מפואר - יבנה",
      category: "מטבחים",
      description: "הרמת משטחי שיש וארונות מטבח לקומה 6",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=300&fit=crop",
      height: "קומה 6"
    },
    {
      title: "הנפת פרגולה - מושב בדרום",
      category: "פרגולות",
      description: "הנפת פרגולה אלומיניום לגינה פרטית",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&h=300&fit=crop",
      height: "חצר"
    },
    {
      title: "הרמת מכונת כביסה - אשדוד",
      category: "מוצרי חשמל",
      description: "הרמת מכונת כביסה ומייבש לדירה בקומה 12",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop",
      height: "קומה 12"
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
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=300&fit=crop"
    },
    {
      title: "למה חשוב לבחור מנוף מוסמך לפרויקטים של בנייה?",
      excerpt: "מנוף לאתר בנייה הוא לא רק ציוד – הוא שותף לעבודה. מנוף לא מתאים עלול לעכב את הבנייה ולגרום נזקים.",
      content: "מנוף לאתר בנייה הוא לא רק ציוד – הוא שותף לעבודה. מנוף לא מתאים עלול לעכב את הבנייה ולגרום נזקים. אנחנו בג'אן הרמות עובדים עם קבלנים לפי תקנים מחמירים, עם אישורי עבודה, ניסיון מוכח וציוד מתקדם. יתרונות העבודה עם מנוף מוסמך: עמידה בתקני בטיחות, אישורי עבודה מתאימים, ציוד מתקדם ומתוחזק, מפעילים מקצועיים. העבודה עם מנוף מוסמך מבטיחה שהפרויקט יתקדם בזמן, בבטיחות ובאיכות גבוהה.",
      category: "מקצועי",
      author: "צוות ג'אן",
      date: "10 בדצמבר 2024",
      readTime: "7 דקות קריאה",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=300&fit=crop"
    },
    {
      title: "התקנת פאנלים סולאריים? אל תחסוך במנוף!",
      excerpt: "התקנת קולטים סולאריים דורשת הרמה עד הגג, ובדיוק כאן נכנס לתמונה המנוף.",
      content: "התקנת קולטים סולאריים דורשת הרמה עד הגג, ובדיוק כאן נכנס לתמונה המנוף. הנפה לא מקצועית עלולה לגרום לשבר או סיכון חיים. לכן חשוב לעבוד עם צוות מיומן ומנוף מתאים – וזה בדיוק מה שאנחנו מציעים. חשיבות המנוף בהתקנת פאנלים: דיוק בהצבה, מניעת נזק לפאנלים, בטיחות העובדים, יעילות בזמן. עם הניסיון שלנו והציוד המתקדם, אנחנו מבטיחים התקנה מדויקת ובטוחה של הפאנלים הסולאריים.",
      category: "סולארי",
      author: "צוות ג'אן",
      date: "5 בדצמבר 2024",
      readTime: "6 דקות קריאה",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=300&fit=crop"
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
    "מקצועי": "bg-green-100 text-green-800"
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
    "הרמת חומרי בניין",
    "הרמת רהיטים ומוצרי חשמל",
    "הרמת פאנלים סולאריים",
    "הרמת מטבחים ושיש",
    "הנפת פרגולות ומבנים",
    "אחר"
  ];

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <style jsx global>{`
        * {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        .gradient-bg {
          background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
        }
        
        .orange-gradient {
          background: linear-gradient(135deg, #ea580c 0%, #f97316 100%);
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
          background: #2563eb;
          color: white;
        }
        
        .btn-primary:hover {
          background: #1d4ed8;
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
          border-color: #2563eb;
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
          background-image: url('https://images.unsplash.com/photo-1586458995526-09ce6839babe?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
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
      `}</style>

      <header className="floating-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center">
                <Crane className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">ג'אן מנופים</h1>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8 space-x-reverse">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === item.href
                      ? 'text-blue-700 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/message/KBPJM744WZNBE1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors duration-200 flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp
              </a>
              
              <a
                href="tel:0505477789"
                className="orange-gradient text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity duration-200"
              >
                050-5477789
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-16">
        <section id="home" className="min-h-screen">
          <div className="relative text-white min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 hero-bg"></div>
            <div className="absolute inset-0 hero-gradient-overlay"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="text-center">
                <div className="flex justify-center mb-8">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Crane className="w-16 h-16 text-white" />
                  </div>
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
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Truck className="w-8 h-8 text-white" />
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
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <div className="card-content relative">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
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

          <div className="py-24 orange-gradient text-white">
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

        <section id="gallery" className="min-h-screen bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                גלריית פרויקטים
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                צפו בפרויקטים שביצענו בהצלחה בכל רחבי הדרום
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="card hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`badge ${categoryColors[project.category as CategoryKey]}`}>
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="card-content">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {project.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">גובה: {project.height}</span>
                      <span className="badge bg-blue-50 text-blue-700 border border-blue-200">
                        הושלם בהצלחה
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
                      src={selectedArticle.image}
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
                    בלוג ג'אן הרמות
                  </h1>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    טיפים, מדריכים והכוונה מקצועית בתחום ההרמה והמנופים
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {articles.map((article, index) => (
                    <div 
                      key={index} 
                      className="card hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                      onClick={() => setSelectedArticle(article)}
                    >
                      <div className="aspect-video relative">
                        <img
                          src={article.image}
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
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
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
              </>
            )}
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
                  <h2 className="text-2xl text-gray-900 font-semibold">
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
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          שם מלא
                        </label>
                        <input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="הכניסו את השם המלא"
                          className="input"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          טלפון
                        </label>
                        <input
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="050-1234567"
                          className="input"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          אימייל
                        </label>
                        <input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          className="input"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          סוג השירות
                        </label>
                        <select
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleInputChange}
                          className="input"
                        >
                          <option value="">בחרו סוג שירות</option>
                          {serviceTypes.map((service, index) => (
                            <option key={index} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          הודעה
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="תארו את הפרויקט שלכם..."
                          className="textarea"
                        />
                      </div>
                      
                      <button onClick={handleSubmit} className="btn btn-primary w-full">
                        שלחו הודעה
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
                  <Truck className="w-6 h-6 text-white" />
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
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">השירותים שלנו</h4>
              <ul className="space-y-2 text-blue-100">
                <li>• מנוף הרמה לאתרי בנייה</li>
                <li>• הרמת רהיטים ומוצרי חשמל</li>
                <li>• הרמת פאנלים סולאריים</li>
                <li>• הרמת מטבחים ושיש</li>
                <li>• הנפת פרגולות ומבנים</li>
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