# AI-Powered Classical Dance Story Interpretation

Upload dance images (or a short video), or use the **live camera** for real-time recognition. The site finds the hands, face and body with Google MediaPipe,
recognises 10 Bharatanatyam hand gestures, reads a basic facial emotion and body pose, and writes a short
story interpretation. Everything runs in the browser; nothing is uploaded to a server.

## Run it
1. Install Node.js (LTS) from https://nodejs.org
2. In this folder open a terminal and run:
   ```
   npm install
   npm run dev
   ```
3. Open http://localhost:5173 and wait for the green "Ready" message (the AI models download once, ~25 MB).

Optional, to work fully offline (for a viva with bad Wi-Fi): `npm run get-models` once while online.

## Put it online
```
npm run build
```
Drag the `dist` folder onto https://app.netlify.com/drop to get a public link.
(Do not open dist/index.html by double-click; browsers block the AI runtime from file://.)

## Where things are
- `src/lib/mudra.ts`     gesture, emotion and pose rules (thresholds are in the `T` object at the top)
- `src/lib/knowledge.ts` meaning database + gesture/emotion combinations
- `src/lib/vision.ts`    MediaPipe pipeline (pose → hands → face, with zoom-in on small hands/faces)
- `src/lib/story.ts`     sentence and sequence-story generator, report export
- `src/App.tsx`          the page

## Live camera
Press "Start camera" in the "Or use your live camera" section. Hands, face and body are analysed about 8-15 times a second.
- A gesture/emotion is only shown once it wins a majority vote over the last 8 frames (stops flicker). See `WINDOW` / `NEED` in `src/components/LiveCamera.tsx`.
- "Auto-record held gestures": a steady reading held for 1.2 s is added to Results as a story moment. "Capture moment" adds one manually.
- Camera access needs `http://localhost` or `https://` (Netlify gives you https). It will not work from file://.
- If it is slow on a weak laptop, lower `PROC_MAX_SIDE` or raise `FACE_EVERY` at the top of `LiveCamera.tsx`.
