import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function MyAccordion() {
  return (
    <div className="flex justify-center p-5">
      <Accordion
        className="w-1/2 bg-red-700 shadow-lg shadow-zinc-900 rounded-lg"
        type="single"
        collapsible
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
