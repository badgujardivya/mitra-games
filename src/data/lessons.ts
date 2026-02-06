export interface Lesson {
  id: number;
  icon: string;
  title: string;
  titleHi: string;
  message: string;
  messageHi: string;
  topic: string;
}

export const lessons: Lesson[] = [
  {
    id: 1,
    icon: "🐷",
    title: "Saving Money",
    titleHi: "पैसे बचाना",
    message: "Save a little every day. Small savings become big over time!",
    messageHi: "हर दिन थोड़ा बचाओ। छोटी बचत बड़ी हो जाती है!",
    topic: "saving",
  },
  {
    id: 2,
    icon: "🏦",
    title: "Bank Account",
    titleHi: "बैंक खाता",
    message: "Keep your money safe in a bank. It earns interest too!",
    messageHi: "अपना पैसा बैंक में सुरक्षित रखो। ब्याज भी मिलता है!",
    topic: "bank",
  },
  {
    id: 3,
    icon: "📱",
    title: "UPI Payments",
    titleHi: "UPI भुगतान",
    message: "Send money easily with UPI. Fast, free, and safe!",
    messageHi: "UPI से आसानी से पैसे भेजो। तेज़, मुफ्त और सुरक्षित!",
    topic: "upi",
  },
  {
    id: 4,
    icon: "⚠️",
    title: "Loan Safety",
    titleHi: "लोन सुरक्षा",
    message: "Borrow only what you can repay. Avoid high-interest loans!",
    messageHi: "जितना चुका सको उतना ही उधार लो। ज़्यादा ब्याज वाले लोन से बचो!",
    topic: "loan",
  },
  {
    id: 5,
    icon: "📈",
    title: "Interest",
    titleHi: "ब्याज",
    message: "Your savings grow with interest. More time = more money!",
    messageHi: "आपकी बचत ब्याज से बढ़ती है। ज़्यादा समय = ज़्यादा पैसा!",
    topic: "interest",
  },
  {
    id: 6,
    icon: "🛡️",
    title: "Insurance",
    titleHi: "बीमा",
    message: "Insurance protects your family in hard times. Stay covered!",
    messageHi: "बीमा मुश्किल समय में परिवार की रक्षा करता है। सुरक्षित रहो!",
    topic: "insurance",
  },
  {
    id: 7,
    icon: "🌾",
    title: "Crop Insurance",
    titleHi: "फसल बीमा",
    message: "Protect your crops from weather. Get crop insurance!",
    messageHi: "अपनी फसल को मौसम से बचाओ। फसल बीमा लो!",
    topic: "crop",
  },
  {
    id: 8,
    icon: "🚨",
    title: "Avoid Scams",
    titleHi: "धोखे से बचें",
    message: "Never share OTP or PIN. Bank never asks for these!",
    messageHi: "OTP या PIN कभी न बताओ। बैंक कभी ये नहीं माँगता!",
    topic: "scam",
  },
  {
    id: 9,
    icon: "📝",
    title: "Budgeting",
    titleHi: "बजट बनाना",
    message: "Plan your spending. Know where your money goes!",
    messageHi: "खर्चे की योजना बनाओ। जानो पैसा कहाँ जाता है!",
    topic: "budget",
  },
  {
    id: 10,
    icon: "🎯",
    title: "Money Goals",
    titleHi: "पैसे के लक्ष्य",
    message: "Set goals for your money. Dream big, save smart!",
    messageHi: "पैसे के लिए लक्ष्य बनाओ। बड़े सपने देखो, समझदारी से बचाओ!",
    topic: "goals",
  },
];
