/**
 * Préfixe un chemin d'asset avec le basePath pour GitHub Pages.
 * En local, retourne le chemin tel quel.
 * @param {string} path - Le chemin de l'asset (ex: "/assets/image.png")
 * @returns {string} Le chemin préfixé
 */
export function assetPath(path) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  // Évite les doubles slashes
  if (path.startsWith('/') && basePath.endsWith('/')) {
    return basePath + path.slice(1);
  }
  return basePath + path;
}

export default assetPath;
