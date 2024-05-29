function AccordionItem({ num, title,  currentOpen, onOpen, children }) {

const isOpen = num === currentOpen;

//? Point of momentary confusion: onOpen is what we named state's setCurrentOpen from the parent component.
//? Essentially, clicking on an element passes it in and sets it to the currentOpen state
function handleToggle() {
  onOpen(isOpen ? null : num)
}

  return (
    // Will always have the className of 'item' but only conditionally the 'open' className if it's clicked on.
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? '-' : '+'}</p>

      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}

export default AccordionItem;