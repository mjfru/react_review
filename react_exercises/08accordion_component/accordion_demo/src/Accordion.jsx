import { useState } from "react";
import AccordionItem from "./AccordionItem";


function Accordion({ data }) {
  const [currentOpen, setCurrentOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem 
          currentOpen={currentOpen}
          //? Point of momentary confusion: This is passed to the Item as onOpen
          onOpen={setCurrentOpen}
          title={el.title}
          //* Let's use the children prop instead
          // text={el.text}
          num={i}
          key={el.title}>
            {el.text}
          </AccordionItem>
      ))}

      <AccordionItem
        currentOpen={currentOpen}
        onOpen={setCurrentOpen}
        title="Title #1"
        num={10}
        key='test 1'
      >
        <p>Allows React developers to:</p>
        <ul>
          <li>Break up UI into components</li>
          <li>Make components resuable</li>
        </ul>
      </AccordionItem>
    </div>
  );
}

export default Accordion;