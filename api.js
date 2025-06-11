// Fetch all games
export async function fetchGames() {
  const response = await fetch(
    'https://ryanstronks.gc-webhosting.nl/api/games'
  );
  if (!response.ok) throw new Error('Failed to fetch games');
  return response.json();
}

// Create a new game
export async function createGame({ name, description, image_path }) {
  const response = await fetch(
    'https://ryanstronks.gc-webhosting.nl/api/games',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, description, image_path }),
    }
  );
  if (!response.ok) throw new Error('Failed to create game');
  return response.json();
}

// Delete a game by ID
export async function deleteGame(id) {
  const response = await fetch(
    `https://ryanstronks.gc-webhosting.nl/api/games/${id}`,
    { method: 'DELETE' }
  );
  if (!response.ok) throw new Error('Failed to delete game');
  return response.json();
}

// Upload an image, returns { path }
export async function uploadImage(file) {
  const formData = new FormData();
  formData.append('file', file);
  const response = await fetch(
    'https://ryanstronks.gc-webhosting.nl/api/upload-image',
    {
      method: 'POST',
      body: formData,
    }
  );
  if (!response.ok) throw new Error('Image upload failed');
  return response.json();
}

// Get image URL for a game image
export function getGameImageUrl(filename) {
  return `https://ryanstronks.gc-webhosting.nl/api/storage/${filename}`;
}
