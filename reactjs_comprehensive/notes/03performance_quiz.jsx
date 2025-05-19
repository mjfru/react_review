//! React Performance Quiz

/*
? What is the primary purpose of React.memo() function?
* It memoizes a component and prevents unncessary re-renders if the props haven't changed.

? In the following code, why is useCallback used for fetchData?
const fetchData = useCallback(async () => {
  const response = await fetch(url);
  const users = await response.json();
  setUsers(users);
}, [url]);

useEffect(() => {
  fetchData();
}, [fetchData]);

* To ensure the function is memoized and doesn't cause infinite re-renders; it will remain stable unless dependencies change.

? What does useMemo accomplish in the following example?
const processedData = useMemo(() => {
  return data.map((item) => item.toUpperCase());
}, [data]);

* It caches the result of the function, recalculating only when data changes.
*/