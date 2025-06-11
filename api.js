// Fetch a list of games
export async function fetchGames() {
  const response = await fetch(
    'https://ryanstronks.gc-webhosting.nl/api/games'
  );
  if (!response.ok) throw new Error('Failed to fetch games');
  return response.json();
}

// Fetch images for a specific game by ID
export async function fetchGameImages(gameId) {
  const url = `https://ryanstronks.gc-webhosting.nl/api/storage/games/${gameId}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error('Failed to fetch game images');
  return response.json();
}
