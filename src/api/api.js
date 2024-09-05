export async function fetchSearchID() {
  const response = await fetch(
    'https://aviasales-test-api.kata.academy/search'
  );
  const json = await response.json();

  return json.searchId;
}

export async function fetchTickets(searchID) {
  const response = await fetch(
    `https://aviasales-test-api.kata.academy/tickets?searchId=${searchID}`
  );

  const json = await response.json();

  return json.tickets;
}
