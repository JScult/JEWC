import { SectionHeader } from "@/app/components/faq/section-header";
import { FAQItem } from "@/app/components/faq/faq-item";
import { Accordion } from "@/components/ui/accordion";
import { Search } from "lucide-react";

export default function FAQPage() {
  const faqs = [
    {
      question: "What should I do if I didn’t receive a confirmation email?",
      answer:
        "Please check your spam/junk folder. If it’s not there, contact our support team at [insert email/contact info].",
      value: "item-1",
    },
    {
      question: "Can I make changes to my registration after submitting it?",
      answer:
        "Yes, you can update your registration information until [insert date]. Use the 'edit registration' link in your confirmation email or contact us directly.",
      value: "item-2",
    },
    {
      question: "Is on-site registration available?",
      answer:
        "On-site registration is [available/not available]. However, we encourage all participants to register in advance to ensure smooth entry.",
      value: "item-3",
    },
    {
      question: "What should I bring with me to the event?",
      answer:
        "Bring a copy of your registration confirmation (digital or printed), a valid ID, and any materials specified in the participant guide.",
      value: "item-4",
    },
    {
      question: "Will meals or refreshments be provided?",
      answer:
        "[Yes/No]. Details about meals, dietary options, and meal times will be shared closer to the event.",
      value: "item-5",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <SectionHeader
        title="FIND ANSWERS"
        description={
          <>
            Have a question? You might find the answer right here! Explore our FAQs to get quick solutions to common inquiries. If you don’t see what you’re looking for, feel free to reach out, we’re happy to help.
          </>
        }
      />

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-red-600">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          
        </div>
        <p className="text-gray-600 mb-6">
          Find questions and answers related to JEWS25
        </p>

        {/* Accordion with FAQ Items */}
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.value}
              question={faq.question}
              answer={faq.answer}
              value={faq.value}
            />
          ))}
        </Accordion>
      </div>
    </div>
  );
}