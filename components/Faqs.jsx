import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "/components/ui/accordion"


function Faqs() {
  return (
    <Accordion type="single" collapsible className="w-3/4 m-auto flex flex-col mb-40">
        <div className="font-black text-4xl text-neutral-900 mb-8">
            <h2>FAQ<span className="font-black text-2xl">s</span></h2>
        </div>
        <div className=" text-gray-600 text-left text-[17px]">
        <AccordionItem value="item-1">
          <AccordionTrigger>What makes your food delivery service eco-friendly?</AccordionTrigger>
          <AccordionContent>
          Our service is eco-friendly because we use biodegradable packaging, 
          support local and sustainable food sources, and implement efficient delivery routes to reduce carbon emissions. 
          We are committed to minimizing our environmental impact at every step of the process.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How do you ensure the packaging is environmentally friendly?</AccordionTrigger>
          <AccordionContent>
          We use biodegradable and compostable packaging made from plant-based materials. 
          Our packaging is designed to break down naturally, reducing waste and minimizing harm to the environment. 
          We also encourage our customers to recycle or compost the packaging whenever possible.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>What steps do you take to reduce your carbon footprint?</AccordionTrigger>
          <AccordionContent>
          We optimize our delivery routes to minimize fuel consumption and emissions. 
          Our fleet includes electric and hybrid vehicles, and we offset our carbon footprint through various environmental initiatives.
           Additionally, we prioritize local suppliers to reduce the transportation distance of our products.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>How can I recycle or compost the packaging?</AccordionTrigger>
          <AccordionContent>
          Our packaging is designed to be easily recyclable or compostable. You can dispose of it in your regular recycling
           bin if your local recycling program accepts it, or compost it in your home compost bin or through a municipal composting service. 
          Detailed instructions are provided on the packaging.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Do you offer any vegan or vegetarian options?</AccordionTrigger>
          <AccordionContent>
          Yes, we offer a wide range of vegan and vegetarian options. Our menu includes delicious plant-based meals made from fresh, 
          locally-sourced ingredients.
           We strive to cater to various dietary preferences while maintaining our commitment to sustainability.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>How can I help support your eco-friendly initiatives?</AccordionTrigger>
          <AccordionContent>
          You can help by properly recycling or composting our packaging, choosing eco-friendly meal options, 
          and spreading the word about our service. Additionally, providing feedback on our sustainability efforts and suggesting improvements can help us enhance our eco-friendly practices.
           Your support is crucial in driving positive environmental change.
          </AccordionContent>
        </AccordionItem>
        </div>
      </Accordion>
  )
}

export default Faqs