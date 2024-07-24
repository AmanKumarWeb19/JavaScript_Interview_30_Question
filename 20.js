/** Implement  a try-catch block to handle an error that occurs during API data fetching */

// async function fetchData() {
//   try {
//     let res = await fetch("https://jsonplaceholder.typicode.com/users");
//     let data = await res.json();
//     console.log(data);
//   } catch (err) {
//     console.error("Error in Fetching Api" + err);
//   }
// }
// fetchData()

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