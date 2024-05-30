function UserService({ children, percentage, onSelect }) {
  
  const handleChange = (e) => {
    onSelect(Number(e.target.value));
  }
  
  return (
    <div>
      <label htmlFor="">{children}</label>
      <select value={percentage} onChange={handleChange}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="10" selected>It was okay (10%)</option>
        <option value="20">It was good (20%)</option>
        <option value="25">Amazing (25%)</option>
      </select>
    </div>
  )
}

export default UserService;