import {
    
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  interface FAQItemProps {
    question: string;
    answer: string;
    value: string;
  }
  
  export function FAQItem({ question, answer, value }: FAQItemProps) {
    return (
      <AccordionItem value={value}>
        <AccordionTrigger className="text-lg font-medium text-gray-900 hover:bg-gray-50">
          {question}
        </AccordionTrigger>
        <AccordionContent className="text-gray-600">{answer}</AccordionContent>
      </AccordionItem>
    );
  }