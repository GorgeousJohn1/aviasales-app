export async function fetchSearchID() {
  try {
    const response = await fetch(
      'https://aviasales-test-api.kata.academy/search'
    );
    const data = await response.json();

    return data.searchId;
  } catch (err) {
    throw new Error(err);
  }
}

export async function fetchTickets(searchID) {
  try {
    const response = await fetch(
      `https://aviasales-test-api.kata.academy/tickets?searchId=${searchID}`
    );

    if (!response.ok)
      throw new Error(`Couldn't fetch. Status error: ${response.status}`);

    const data = await response.json();

    return data;
  } catch (err) {
    throw new Error(err);
  }
}
