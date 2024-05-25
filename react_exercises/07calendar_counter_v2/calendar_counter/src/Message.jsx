function Message({ date, count }) {
  return (
    <div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} day(s) from today will be: `
            : count < 0
            ? `${Math.abs(count)} day(s) ago was `
            : ""}
        </span>
        <span>{date.toDateString()}.</span>
      </p>
    </div>
  );
}

export default Message;
