async function fetchData() {
  try {
    let fetchApi = await fetch("https://jsonplaceholder.typicode.com/users");
    let res = await fetchApi.json();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}
fetchData()