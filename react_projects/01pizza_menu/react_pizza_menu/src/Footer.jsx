function Footer() {
  const hour = new Date().getHours();
  const openHour = 11;
  const closeHour = 22;

  const isOpen = hour >= openHour && hour <= closeHour
  console.log(`Open? ${isOpen}`);
  // if (hour >= openHour && hour <= closeHour) {
  //   alert("We are currently open!");
  // } else {
  //   alert("Sorry, we're closed. See you next time!");
  // }

  return (
    <footer className="footer">{new Date().toLocaleTimeString()} - We are currently open!</footer>
  )
}

export default Footer;