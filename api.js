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

// Delete a game by ID
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

// Upload an image, returns { path }
export async function uploadImage(file) {
  const formData = new FormData();
  formData.append('file', file);
  const response = await fetch(
    'https://ryanstronks.gc-webhosting.nl/api/upload-image',
    {
      method: 'POST',
      // DO NOT set Content-Type here!
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
