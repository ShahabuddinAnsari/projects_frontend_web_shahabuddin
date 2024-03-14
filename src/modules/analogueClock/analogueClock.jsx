import "./style.css";

function AnalogueClock() {
  function clock() {
    const now = new Date();

    const second = now.getSeconds();
    if (document.querySelector(".second"))
      document.querySelector(".second").style.transform = `rotate(${
        second * 6
      }deg)`;

    const min = now.getMinutes();
    if (document.querySelector(".minute"))
      document.querySelector(".minute").style.transform = `rotate(${
        min * 6
      }deg)`;

    const hour = ((now.getHours() + 11) % 12) + 1;
    if (document.querySelector(".hour"))
      document.querySelector(".hour").style.transform = `rotate(${
        hour * 30
      }deg)`;
  }

  setInterval(clock, 1000);

  return (
    <div className="wrapper">
      <div className="clock">
        <div className="wrap">
          <span className="hour"></span>
          <span className="minute"></span>
          <span className="second"></span>
          <span className="dot"></span>
        </div>
      </div>
    </div>
  );
}

export default AnalogueClock;
