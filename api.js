export async function fetchGames() {
  const response = await fetch(
    'https://ryanstronks.gc-webhosting.nl/api/games'
  );
  const text = await response.text();
  try {
    return JSON.parse(text);
  } catch (e) {
    console.error('fetchGames error:', e, 'Response:', text);
    throw new Error('Failed to fetch games: ' + text);
  }
}

export async function createGame({ name, description, image_path }) {
  const response = await fetch(
    'https://ryanstronks.gc-webhosting.nl/api/games',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, description, image_path }),
    }
  );
  const text = await response.text();
  if (!response.ok) {
    console.error('createGame failed:', response.status, text);
    throw new Error(`Failed to create game (${response.status}): ${text}`);
  }
  try {
    return JSON.parse(text);
  } catch (e) {
    console.error('createGame JSON error:', e, 'Response:', text);
    throw new Error('Failed to create game: ' + text);
  }
}

export async function deleteGame(id) {
  const response = await fetch(
    `https://ryanstronks.gc-webhosting.nl/api/games/${id}`,
    { method: 'DELETE' }
  );
  const text = await response.text();
  if (!response.ok) {
    console.error('deleteGame failed:', response.status, text);
    throw new Error(`Failed to delete game (${response.status}): ${text}`);
  }
  try {
    return JSON.parse(text);
  } catch (e) {
    console.error('deleteGame JSON error:', e, 'Response:', text);
    throw new Error('Failed to delete game: ' + text);
  }
}

export async function uploadImage(file) {
  const formData = new FormData();
  formData.append('file', file);
  const response = await fetch(
    'https://ryanstronks.gc-webhosting.nl/api/upload-image',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: formData,
    }
  );
  const text = await response.text();
  if (!response.ok) {
    console.error('uploadImage failed:', response.status, text);
    throw new Error(`Image upload failed (${response.status}): ${text}`);
  }
  try {
    return JSON.parse(text);
  } catch (e) {
    console.error('uploadImage JSON error:', e, 'Response:', text);
    throw new Error('Image upload failed: ' + text);
  }
}

// Get image URL for a game image
export function getGameImageUrl(filename) {
  return `https://ryanstronks.gc-webhosting.nl/api/storage/${filename}`;
}
