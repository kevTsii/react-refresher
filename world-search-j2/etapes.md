# Atlas — Plan du mini-projet

## Étape 1 — Initialisation
- Créer le projet avec Vite (`npm create vite@latest`)
- Nettoyer les fichiers par défaut
- Créer la structure de dossiers : `hooks/`, `components/`

---

## Étape 2 — Custom hook `useFetch`
- Créer `src/hooks/useFetch.js`
- Gérer les 3 états : `data`, `loading`, `error`
- Implémenter `AbortController` pour annuler les requêtes
- Retourner `{ data, loading, error }`

---

## Étape 3 — Debounce dans `App.jsx`
- Créer un `useState` pour `query` (ce que l'user tape)
- Créer un `useState` pour `url` (l'URL réelle du fetch)
- Stocker le timer dans un `useRef`
- Implémenter le `useEffect` avec `setTimeout` / `clearTimeout`
- Brancher `useFetch` sur l'`url`
- Ajouter l'`<input>` dans le JSX

---

## Étape 4 — Composant `CountryCard`
- Créer `src/components/CountryCard.jsx`
- Afficher : drapeau, nom, capitale, population, région
- Gérer les valeurs manquantes avec `??`

---

## Étape 5 — Composant `CountryList`
- Créer `src/components/CountryList.jsx`
- Mapper sur les pays et retourner un `<CountryCard>` par pays
- Utiliser `cca3` comme `key`

---

## Étape 6 — États vides
- État initial (champ vide) → message d'accueil
- Loading → spinner ou message
- Erreur 404 → "Aucun pays trouvé"
- Autre erreur → afficher le message d'erreur
- Données reçues → afficher `<CountryList>`
