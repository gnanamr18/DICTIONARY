export async function dictionary(searchKey) {
  try {
    console.log(searchKey);
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${searchKey}`
    );
    return response.json();
    // setresults(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
