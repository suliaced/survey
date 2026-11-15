/* ============ EDIT HERE ============ */

/* Title card. After the welcome line, "Made by Suliman" appears, holds, and disappears, each with a sound effect.
   It only starts once the visitor has clicked, tapped or pressed a key on the page (any time since the page opened),
   because that is the one thing that lets browsers play sound. Until then the intro waits on the welcome line.
   The animation is a placeholder: the text fades in sharp out of a blur while its letters draw together,
   and does the reverse on the way out. TITLE_TEXT blank = no title card at all.
   The two sounds are short placeholder effects. Replace the files (keep the names, or change them here).
   Blank a sound's file name for no sound. */
const TITLE_TEXT = "Made by Suliman";
const TITLE_IN_SFX = "audio/title-in.wav";     /* plays as the name appears */
const TITLE_OUT_SFX = "audio/title-out.wav";   /* plays as the name disappears */
const TITLE_SFX_VOLUME = 0.7;     /* 0 = silent, 1 = full volume */
const TITLE_IN_MS = 1800;         /* the name appearing */
const TITLE_HOLD_MS = 1600;       /* how long it stays fully visible */
const TITLE_OUT_MS = 1400;        /* the name disappearing */

/* If the visitor still hasn't clicked or pressed a key a few seconds after the welcome line, a faint hint appears
   under it so they know the intro is waiting. Blank = no hint. */
const INTERACT_HINT = "press any key or click";
const INTERACT_HINT_DELAY_MS = 2500;

/* Opening sequence. Each line is typed out on screen, one after another:
   the welcome line, then the connecting stretch, then "Connected.", then "Let's begin." and the first question. */
const WELCOME_HOLD_MS = 1800;     /* how long the welcome line stays up before it clears */
const INTRO_LINES = {
  welcome: "Welcome to the survey.",
  connecting: "Connecting. .",
  connected: "Connected.",
  begin: "Let's begin."
};

/* The "Connecting. ." stretch, in milliseconds. It lasts CONNECT_QUIET_MS + BACKGROUND_FADE_MS in total (3s + 5s = 8s).
   1. CONNECT_QUIET_MS: "Connecting. ." sits on screen. Nothing else happens.
   2. BACKGROUND_FADE_MS (set further down): the background and the music fade in.
   3. Then "Connected." is typed.
   4. After CONNECTED_HOLD_MS, the "Connected." text fades out over CONNECTED_FADE_MS,
      and then "Let's begin." is typed on its own. */
const CONNECT_QUIET_MS = 3000;
const CONNECTED_HOLD_MS = 2200;   /* how long "Connected." stays up */
const CONNECTED_FADE_MS = 1200;   /* "Connected." fading out */
const BEGIN_HOLD_MS = 1200;       /* how long "Let's begin." stays up before the first question */

/* Background gif, shown behind the survey.
   Put your gif in the repo next to index.html, then type its file name here, e.g. "bg.gif".
   Leave it blank for a plain black background.
   BACKGROUND_DIM darkens it so the text stays readable: 0 = not at all, 1 = fully black. */
const BACKGROUND_GIF = "bg/stars";
const BACKGROUND_DIM = 0.7;

/* Music. Two tracks. It starts at the same moment the background gif begins to fade in.
   SONG_FIRST plays once, all the way through. The moment it ends, SONG_LOOP starts
   and repeats until the survey is over, then fades out.
   Put your audio files in the repo next to index.html, then type their file names here, e.g. "intro.mp3".
   Leave both blank for no music. If only one is filled in, that one is used
   (SONG_FIRST alone plays once and stops; SONG_LOOP alone loops from the start).
   Note: browsers block sound until the visitor has clicked or pressed a key on the page.
   If that hasn't happened yet, the music starts on their first click or key press instead. */
const SONG_FIRST = "audio/anotherme.wav";
const SONG_LOOP = "audio/anothermeshort.wav";
const SONG_VOLUME = 0.8;          /* 0 = silent, 1 = full volume */
const SONG_FADE_MS = 5000;        /* how long the first track takes to fade in (matches BACKGROUND_FADE_MS) */
const SONG_END_FADE_MS = 1000;    /* how long the music takes to fade out when the survey is over */

/* The change after "Connected.", in milliseconds:
   the intro text fades out while the background and song fade in,
   then the first question fades in. */
const INTRO_FADE_MS = 2400;       /* intro text fading out */
const BACKGROUND_FADE_MS = 5000;  /* background gif fading in */
const SURVEY_FADE_MS = 2000;      /* the survey screen fading in */

/* Survey timing, in milliseconds.
   Each question types itself in, then the answer box or sliders fade in below it.
   After you answer, the question disappears and the AI's reply types in on its own,
   stays up for a moment, disappears, and the next question starts after a short break. */
const PROMPT_TYPE_MS = 45;        /* average time per character when a question types in */
const PROMPT_TO_INPUT_MS = 350;   /* pause between the question finishing and the answer box appearing */
const REPLY_TYPE_MS = 55;         /* average time per character when the AI reply types in */
const REPLY_HOLD_MS = 2600;       /* how long the finished reply stays on screen */
const NEXT_PAUSE_MS = 500;        /* break between the reply disappearing and the next question */

/* Survey questions for the teachers. These are first drafts: change the wording freely.
   Keep each id the same if you only want to reword a question.
   type "text"    = open-ended answer
   type "song"    = search for a song and pick one (plays while they choose, saved with their answers)
   type "ratings" = one slider (1 to 10) per item. Not used right now, but still supported:
                    { id:"x", type:"ratings", prompt:"...", items:["One","Two"], colors:["#ff5d5d","#5aa9ff"] } */
const QUESTIONS = [
  { id:"q1", type:"text", prompt:"What do your students call you?" },
  { id:"q2", type:"text", prompt:"Do you think your students enjoy your teaching style?" },
  { id:"q3", type:"text", prompt:"What is your favorite artist/band?" },
  { id:"song", type:"song", prompt:"Enter a song that describes how you feel currently." },
  { id:"q4", type:"text", prompt:"Tell us something about yourself that your students don't know." },
  { id:"why", type:"text", prompt:"What made you become a teacher?" },
  { id:"q5", type:"text", prompt:"What moment in your career are you proudest of?" },
  { id:"q6", type:"text", prompt:"Are you a cat person or a dog person (or something else entirely)?" },
  { id:"q7", type:"text", prompt:"What's your favorite sport?" },
  { id:"q8", type:"text", prompt:"What do you want your students to remember about you?" },
  { id:"q9", type:"text", prompt:"Milk before cereal, or cereal before milk?" }
];

/* Wiring (leave blank until you have them):
   WORKER_URL  = your Cloudflare Worker address. Blank = placeholder compliments.
   SUBMIT_URL  = where finished surveys get sent. Blank = nothing is sent anywhere.
   ARCHIVE_URL = link shown on the last screen. Blank = no link. */
const WORKER_URL  = "https://square-rice-e3b0.cryogenix20.workers.dev";
/* Shows a small "saved / NOT saved" line on the last screen. Set to false once saving works. */
const SHOW_SAVE_STATUS = true;
const SUBMIT_URL  = "https://square-rice-e3b0.cryogenix20.workers.dev/submit";
const ARCHIVE_URL = "";          /* the teachers' survey has no archive link */
const SITE = "teachers";          /* tells the Worker which survey this is (its AI personality and where answers are saved) */

const MAX_CHARS = 400;
const FALLBACK = "Noted";          /* the AI answers with one word, so even the fallback is one word */
const PLACEHOLDER_COMPLIMENTS = ["Thoughtful", "Genuine", "Steady"];

/* The AI replies with one word. This makes sure only one word is ever shown, whatever comes back. */
const FILLER_WORDS = new Set(["the","a","an","i","im","it","its","that","this","what","wow","oh","so","very","you","your","youre","is","are","was","be","to","of","and","or","sounds","seems","feels","like","just"]);
function oneWord(text){
  const words = String(text || "").match(/[A-Za-z][A-Za-z'\u2019-]*/g) || [];
  if (!words.length) return FALLBACK;
  const pick = words.length === 1 ? words[0]
    : (words.find(w => w.length >= 4 && !FILLER_WORDS.has(w.toLowerCase())) || words[0]);
  const w = pick.replace(/^[-'\u2019]+|[-'\u2019]+$/g, "");
  return w.length >= 2 ? w.charAt(0).toUpperCase() + w.slice(1).toLowerCase() : FALLBACK;
}

/* =================================== */

const $ = id => document.getElementById(id);
const sleep = ms => new Promise(r => setTimeout(r, ms));
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

function show(id){
  document.querySelectorAll(".screen").forEach(s => s.classList.toggle("on", s.id === id));
  window.scrollTo(0, 0);
}

function fade(el, ms){
  if (!el || reduced) return;
  el.animate([{opacity:0},{opacity:1}], {duration:ms || 700, easing:"ease"});
}

/* ---------- background gif ---------- */
function setupBackground(){
  if (!BACKGROUND_GIF) return;
  const bg = $("bg");
  bg.style.backgroundImage = 'url("' + BACKGROUND_GIF + '")';
  bg.style.setProperty("--dim-level", BACKGROUND_DIM);
  new Image().src = BACKGROUND_GIF;   /* start loading it now so it doesn't pop in late */
}
function startBackground(){
  if (!BACKGROUND_GIF) return;
  const bg = $("bg");
  bg.style.setProperty("--bg-fade", BACKGROUND_FADE_MS + "ms");
  bg.classList.add("on");
}
setupBackground();

/* ---------- song ---------- */
let songWanted = false, songStopped = false, songFadeTimer = null;
let songNow = null;     /* whichever track is the current one */

function makeTrack(src, loop){
  const a = new Audio(src);
  a.loop = loop;
  a.preload = "auto";   /* both tracks load up front so the second can start the instant the first ends */
  a.volume = 0;
  return a;
}
const songFirst = SONG_FIRST ? makeTrack(SONG_FIRST, false) : null;
const songLoop  = SONG_LOOP  ? makeTrack(SONG_LOOP, true)   : null;

/* When the first track is fully over, the looping track begins right away. */
if (songFirst && songLoop){
  songFirst.addEventListener("ended", () => {
    if (songStopped) return;
    songNow = songLoop;
    songLoop.volume = previewActive ? 0 : SONG_VOLUME;
    songLoop.play().catch(() => {});
  });
}

function fadeSongIn(track){
  clearInterval(songFadeTimer);
  if (reduced){ track.volume = SONG_VOLUME; return; }
  const t0 = performance.now();
  songFadeTimer = setInterval(() => {
    const p = Math.min(1, (performance.now() - t0) / SONG_FADE_MS);
    track.volume = SONG_VOLUME * p;
    if (p >= 1) clearInterval(songFadeTimer);
  }, 50);
}

function startSong(){
  if (songStopped) return;
  const track = songNow || songFirst || songLoop;
  if (!track) return;
  songNow = track;
  songWanted = true;
  /* If the browser blocks it (no click yet), it is tried again on the visitor's first click or key press. */
  track.play().then(() => fadeSongIn(track)).catch(() => {});
}
["pointerdown", "keydown"].forEach(type => {
  document.addEventListener(type, () => {
    if (songWanted && !songStopped && songNow && songNow.paused && !songNow.ended) startSong();
  });
});

/* Fades the music out and stops it. Called when the survey is over. */
function fadeSongOut(){
  songStopped = true;
  songWanted = false;
  clearInterval(songFadeTimer);
  const track = songNow;
  if (!track) return;
  if (reduced){ track.pause(); return; }
  const v0 = track.volume;
  const t0 = performance.now();
  songFadeTimer = setInterval(() => {
    const p = Math.min(1, (performance.now() - t0) / SONG_END_FADE_MS);
    track.volume = v0 * (1 - p);
    if (p >= 1){ clearInterval(songFadeTimer); track.pause(); }
  }, 50);
}

/* ---------- 1. intro ---------- */
/* Pressing Alt during the intro skips straight to the first question. */
const SKIP_KEY = "Alt";
const SKIP = Symbol("skip");
let introSkipped = false, introDone = false, introWake = null;

/* Waits, but wakes early (and stops the whole sequence) if the intro is skipped. */
async function pause(ms){
  if (introSkipped) throw SKIP;
  await new Promise(r => { introWake = r; setTimeout(r, ms); });
  if (introSkipped) throw SKIP;
}

function skipIntro(){
  if (introDone || introSkipped) return;
  introSkipped = true;
  if (introWake) introWake();
}

/* Both keydown and keyup are blocked so the browser doesn't pop open its menu bar on Alt. */
["keydown", "keyup"].forEach(type => {
  document.addEventListener(type, ev => {
    if (ev.key !== SKIP_KEY || introDone) return;
    ev.preventDefault();
    if (type === "keydown") skipIntro();
  });
});

/* Types one line a character at a time. perChar = average milliseconds per character.
   The letters not typed yet are still laid out (invisibly) right after the typed ones, so long lines wrap
   on small screens exactly where they will end up, and the text never jumps around while it types. */
async function typeLine(text, perChar){
  const out = $("msgText"), rest = $("msgGhost");
  $("introSr").textContent = text;      /* screen readers get the whole line at once */
  out.textContent = "";
  rest.textContent = text;
  if (reduced){ out.textContent = text; rest.textContent = ""; return; }
  for (let i = 1; i <= text.length; i++){
    out.textContent = text.slice(0, i);
    rest.textContent = text.slice(i);
    await pause(perChar * (0.65 + Math.random() * 0.7));
  }
}

function clearLine(){
  $("msgText").textContent = "";
  $("msgGhost").textContent = "";
}

/* Fades the intro text out, then clears it so the next line starts clean. */
async function fadeOutIntroItems(){
  const parts = [$("msg")];
  if (!reduced){
    await Promise.all(parts.map(el =>
      el.animate([{opacity:1},{opacity:0}], {duration:CONNECTED_FADE_MS, easing:"ease", fill:"forwards"}).finished));
  }
  clearLine();
  parts.forEach(el => el.getAnimations().forEach(a => a.cancel()));
}

/* ---------- title card ---------- */
function makeSfx(src){
  if (!src) return null;
  const a = new Audio(src);
  a.preload = "auto";
  a.volume = TITLE_SFX_VOLUME;
  return a;
}
const titleInSfx = makeSfx(TITLE_IN_SFX);
const titleOutSfx = makeSfx(TITLE_OUT_SFX);

function playSfx(a){
  if (!a) return;
  try { a.currentTime = 0; } catch (err) {}
  a.play().catch(() => {});             /* if the browser blocks the sound, the title simply plays silently */
}

/* The title card: the name appears with a sound, holds, then disappears with a sound. */
async function playTitle(){
  if (!TITLE_TEXT) return;
  const el = $("title");
  el.textContent = TITLE_TEXT;
  $("introSr").textContent = TITLE_TEXT;        /* screen readers get the name once */

  playSfx(titleInSfx);
  if (reduced){
    el.style.opacity = 1;
    await pause(TITLE_HOLD_MS);
    playSfx(titleOutSfx);
    el.style.opacity = 0;
    await pause(400);
  } else {
    el.animate(
      [{opacity:0, letterSpacing:"0.35em", filter:"blur(12px)", transform:"scale(1.06)"},
       {opacity:1, letterSpacing:"0.12em", filter:"blur(0px)",  transform:"scale(1)"}],
      {duration:TITLE_IN_MS, easing:"cubic-bezier(.2,.8,.2,1)", fill:"forwards"});
    await pause(TITLE_IN_MS + TITLE_HOLD_MS);

    playSfx(titleOutSfx);
    el.animate(
      [{opacity:1, letterSpacing:"0.12em", filter:"blur(0px)",  transform:"scale(1)"},
       {opacity:0, letterSpacing:"0.3em",  filter:"blur(14px)", transform:"scale(0.95)"}],
      {duration:TITLE_OUT_MS, easing:"ease-in", fill:"forwards"});
    await pause(TITLE_OUT_MS);
  }
  el.getAnimations().forEach(a => a.cancel());
  el.style.opacity = 0;
  el.textContent = "";
}

/* Stops the title sounds and hides the card (used when the intro is skipped). */
function stopTitle(){
  $("introHint").style.opacity = 0;
  [titleInSfx, titleOutSfx].forEach(a => { if (a){ a.pause(); } });
  const el = $("title");
  el.getAnimations().forEach(a => a.cancel());
  el.style.opacity = 0;
}

/* ---------- waiting for the visitor to interact ---------- */
/* Only clicks, taps and key presses count: they are what browsers accept as permission to play sound
   (moving the mouse or scrolling does not). Modifier keys alone don't count either, and Alt skips the intro. */
const INTERACT_IGNORE_KEYS = ["Alt", "AltGraph", "Shift", "Control", "Meta", "CapsLock", "Escape"];
let userInteracted = false, interactWake = null;

/* Plays each title sound silently for an instant, inside the click or key press, so every browser allows them later. */
function unlockTitleSounds(){
  [titleInSfx, titleOutSfx].forEach(a => {
    if (!a) return;
    const v = a.volume;
    a.volume = 0;
    a.play().then(() => { a.pause(); a.currentTime = 0; a.volume = v; }).catch(() => { a.volume = v; });
  });
}

function onUserInteract(ev){
  if (userInteracted) return;
  if (ev.type === "keydown" && INTERACT_IGNORE_KEYS.includes(ev.key)) return;
  userInteracted = true;
  unlockTitleSounds();
  if (interactWake) interactWake();
}
["pointerup", "click", "keydown", "touchend"].forEach(t => document.addEventListener(t, onUserInteract, true));

/* Returns at once if the visitor has already interacted. Otherwise waits for them, showing a faint hint after a while. */
async function waitForInteraction(){
  if (userInteracted) return;
  const hint = $("introHint");
  const timer = INTERACT_HINT ? setTimeout(() => { hint.textContent = INTERACT_HINT; hint.style.opacity = 1; }, INTERACT_HINT_DELAY_MS) : null;
  await new Promise(resolve => { interactWake = resolve; introWake = resolve; });   /* Alt wakes it too, and skips the intro */
  interactWake = null;
  clearTimeout(timer);
  hint.style.opacity = 0;
  if (introSkipped) throw SKIP;
}

async function playIntro(){
  try {
    await pause(1000);

    await typeLine(INTRO_LINES.welcome, 60);
    await pause(WELCOME_HOLD_MS);

    /* "Made by Suliman": plays once the visitor has interacted, so its sounds are always allowed. */
    await waitForInteraction();
    clearLine();
    await pause(500);
    await playTitle();
    await pause(900);

    /* Connecting, first stretch: just the line, and nothing else happens. */
    const t0 = performance.now();
    await typeLine(INTRO_LINES.connecting, 85);
    await pause(Math.max(0, CONNECT_QUIET_MS - (performance.now() - t0)));

    /* Connecting, last stretch: the background and the music fade in. The line stays. */
    startBackground();
    startSong();
    await pause(BACKGROUND_FADE_MS);

    /* "Connected." is typed. */
    clearLine();
    await typeLine(INTRO_LINES.connected, 70);
    await pause(CONNECTED_HOLD_MS);

    /* The text fades out, then "Let's begin." appears on its own. */
    await fadeOutIntroItems();
    await pause(500);
    await typeLine(INTRO_LINES.begin, 70);
    await pause(BEGIN_HOLD_MS);
  } catch (e) {
    if (e !== SKIP) throw e;
  }

  await endIntro();
}

async function endIntro(){
  const wasSkipped = introSkipped;
  introDone = true;
  stopTitle();

  /* The background and song have already faded in after the connecting sequence. */
  if (!wasSkipped && !reduced){
    await $("intro").animate([{opacity:1},{opacity:0}], {duration:INTRO_FADE_MS, easing:"ease", fill:"forwards"}).finished;
    await sleep(400);
  }

  /* Then the first question fades in over the background. */
  if (!reduced) $("survey").style.animationDuration = SURVEY_FADE_MS + "ms";
  show("survey");
  askQuestion();
}

/* ---------- 3. survey ---------- */
const answers = {};
let idx = 0, busy = false;

/* Builds the answer box or the sliders for a question (they stay hidden until the question has finished typing). */
function buildAnswer(q){
  const area = $("answerArea");
  area.innerHTML = "";

  if (q.type === "text"){
    const t = document.createElement("textarea");
    t.className = "field";
    t.id = "answerField";
    t.maxLength = MAX_CHARS;
    t.rows = 3;
    t.setAttribute("aria-label", "Your answer");
    t.addEventListener("keydown", ev => {
      if (ev.key === "Enter" && !ev.shiftKey){ ev.preventDefault(); submitAnswer(); }
    });
    area.appendChild(t);
  } else if (q.type === "song"){
    buildSongPicker(area);
  } else {
    q.items.forEach((name, i) => {
      const key = name.toLowerCase();
      const row = document.createElement("div");
      row.className = "rate";
      row.style.setProperty("--c", q.colors[i]);
      const label = document.createElement("label");
      label.htmlFor = "r-" + key;
      label.textContent = name;
      const input = document.createElement("input");
      input.type = "range"; input.min = 1; input.max = 10; input.step = 1; input.value = 5;
      input.id = "r-" + key; input.dataset.key = key;
      const out = document.createElement("output");
      out.htmlFor = input.id;
      out.textContent = input.value;
      input.addEventListener("input", () => { out.textContent = input.value; });
      row.append(label, input, out);
      area.appendChild(row);
    });
  }
}

/* ---------- song preview: the picked song plays (out of sight) until the answer is confirmed ---------- */
let pvPlayer = null, pvHost = null, pvReadyFlag = false, pvWanted = null, pvOnError = null, pvLoading = null;
let previewActive = false, pvDuckTimer = null, pvFadeTimer = null;

function loadYT(){
  if (pvLoading) return pvLoading;
  pvLoading = new Promise(resolve => {
    if (window.YT && YT.Player) return resolve();
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => { if (prev) prev(); resolve(); };
    const s = document.createElement("script");
    s.src = "https://www.youtube.com/iframe_api";
    s.onerror = () => resolve();
    document.head.appendChild(s);
  });
  return pvLoading;
}

/* The background music goes quiet while a preview plays, and comes back after. */
function duckSurveyMusic(on){
  previewActive = on;
  const t = songNow;
  if (!t || t.paused) return;
  clearInterval(pvDuckTimer);
  const from = t.volume, to = on ? 0 : SONG_VOLUME, t0 = performance.now();
  pvDuckTimer = setInterval(() => {
    const p = Math.min(1, (performance.now() - t0) / 700);
    t.volume = Math.max(0, Math.min(1, from + (to - from) * p));
    if (p >= 1) clearInterval(pvDuckTimer);
  }, 40);
}

/* The hidden player is built as soon as the song question appears, so a song can start the instant it is clicked. */
function makePreviewPlayer(){
  if (pvPlayer || !(window.YT && YT.Player)) return;
  if (!pvHost){
    pvHost = document.createElement("div");
    pvHost.setAttribute("aria-hidden", "true");
    /* invisible but still "on screen", so the browser lets it play */
    pvHost.style.cssText = "position:fixed;left:0;bottom:0;width:200px;height:200px;opacity:0;pointer-events:none;z-index:-1;overflow:hidden";
    document.body.appendChild(pvHost);
  }
  const holder = document.createElement("div");
  pvHost.appendChild(holder);
  pvPlayer = new YT.Player(holder, {
    width: "200", height: "200",
    playerVars: { autoplay: 1, controls: 0, playsinline: 1, rel: 0, disablekb: 1 },
    events: {
      onReady: ev => {
        pvReadyFlag = true;
        try { ev.target.setVolume(100); if (pvWanted) ev.target.loadVideoById(pvWanted); } catch (err) {}
      },
      onStateChange: ev => {
        if (ev.data === 1) duckSurveyMusic(true);
        else if (ev.data === 0 || ev.data === 2) duckSurveyMusic(false);   /* ended or paused: the music comes back */
      },
      onError: () => { if (pvOnError) pvOnError(); }
    }
  });
}
function preparePreview(){ loadYT().then(makePreviewPlayer); }

/* Starts a song. When the player is ready this happens right inside the click, so it plays instantly. */
function playPreview(id, onError){
  pvWanted = id; pvOnError = onError;
  clearInterval(pvFadeTimer);
  if (pvPlayer && pvReadyFlag){
    try { pvPlayer.setVolume(100); pvPlayer.loadVideoById(id); } catch (err) {}
    return;
  }
  if (pvPlayer) return;                              /* still starting up: it plays whichever song is wanted once ready */
  loadYT().then(() => {
    if (pvWanted !== id) return;                     /* they picked something else meanwhile */
    if (!(window.YT && YT.Player)){ if (pvOnError) pvOnError(); return; }
    makePreviewPlayer();
  });
}

/* Fades the song out and stops it. */
function stopPreview(){
  pvWanted = null; pvOnError = null;
  if (!pvPlayer && !previewActive) return;
  duckSurveyMusic(false);
  if (!pvPlayer || !pvReadyFlag) return;
  const p = pvPlayer;
  clearInterval(pvFadeTimer);
  if (reduced){ try { p.stopVideo(); } catch (err) {} return; }
  let v = 100;
  pvFadeTimer = setInterval(() => {
    v -= 10;
    try { p.setVolume(Math.max(0, v)); } catch (err) {}
    if (v <= 0){ clearInterval(pvFadeTimer); try { p.stopVideo(); } catch (err) {} }
  }, 60);
}

/* ---------- song picker: search by name, click a result to hear it, press Confirm to answer ---------- */
let selectedSong = null, songSearching = false;
const SEARCH_URL = WORKER_URL ? WORKER_URL.replace(/\/+$/, "") + "/search" : "";

function addSongStyles(){
  if (document.getElementById("songStyles")) return;
  const st = document.createElement("style");
  st.id = "songStyles";
  st.textContent =
    ".song-row{display:flex;gap:12px;align-items:flex-end}" +
    ".song-field{flex:1;min-width:0;background:none;border:0;border-bottom:2px solid var(--tx,#e9e7df);color:var(--tx,#e9e7df);font:inherit;padding:6px 0;text-transform:none}" +
    ".song-field:focus{outline:none;border-bottom-style:dashed}" +
    ".song-field:disabled{color:var(--dim,#77756d);border-bottom-color:var(--ln,#3a3935)}" +
    "#songChosen{min-height:1.7em;margin-top:12px;overflow-wrap:anywhere}" +
    "#songStatus{min-height:1.7em}" +
    ".song-results{display:grid;gap:6px;margin-top:6px}" +
    ".song-pick{display:block;width:100%;text-align:left;text-transform:none;border-width:1px;padding:6px 10px;overflow-wrap:anywhere}" +
    ".song-pick small{display:block;color:var(--dim,#77756d)}" +
    ".song-pick.sel{background-size:100% 100%;color:var(--bg,#050505)}" +
    ".song-pick.sel small{color:inherit}";
  document.head.appendChild(st);
}

function buildSongPicker(area){
  addSongStyles();
  selectedSong = null;
  preparePreview();

  const row = document.createElement("div");
  row.className = "song-row";
  const input = document.createElement("input");
  input.type = "text"; input.id = "songField"; input.className = "song-field";
  input.maxLength = 100; input.autocomplete = "off"; input.spellcheck = false;
  input.setAttribute("aria-label", "Song or artist");
  input.placeholder = "song or artist";
  const btn = document.createElement("button");
  btn.type = "button"; btn.textContent = "Search";
  row.append(input, btn);

  /* always shows which song is currently picked and playing */
  const chosen = document.createElement("div");
  chosen.id = "songChosen";
  chosen.setAttribute("role", "status"); chosen.setAttribute("aria-live", "polite");
  const status = document.createElement("div");
  status.id = "songStatus"; status.className = "dim";
  status.setAttribute("role", "status"); status.setAttribute("aria-live", "polite");
  status.textContent = "type a song name (and the artist) and search";
  const list = document.createElement("div");
  list.className = "song-results";

  function showChosen(){
    chosen.textContent = selectedSong ? "selected: " + selectedSong.title + "  " : "";
    list.querySelectorAll(".song-pick").forEach(b => {
      const on = !!selectedSong && b.dataset.id === selectedSong.id;
      b.classList.toggle("sel", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });
  }

  function choose(item, el){
    selectedSong = item;
    showChosen();
    $("hint").textContent = "";
    /* it plays right away, and keeps playing while they look for another one. A song that can't be played here can't be picked. */
    playPreview(item.id, () => {
      if (selectedSong !== item) return;
      selectedSong = null;
      showChosen();
      el.disabled = true;
      status.textContent = "that one can't be played here, pick another";
    });
  }

  async function search(){
    if (songSearching) return;
    const q = input.value.trim();
    if (q.length < 2){ status.textContent = "type a song or artist first"; return; }
    if (!SEARCH_URL){ status.textContent = "song search isn't set up yet"; return; }
    songSearching = true; btn.disabled = true;
    status.textContent = "searching . . .";
    list.innerHTML = "";                              /* the song they already picked stays picked (and playing) */
    try {
      const res = await fetch(SEARCH_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ q })
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data.error || ("status " + res.status));
      if (!data.results.length){ status.textContent = "nothing found, try different words"; return; }
      status.textContent = "click one to hear it";
      data.results.forEach(item => {
        const b = document.createElement("button");
        b.type = "button"; b.className = "song-pick"; b.setAttribute("aria-pressed", "false");
        b.dataset.id = item.id;
        b.textContent = item.title;
        if (item.channel){ const sm = document.createElement("small"); sm.textContent = item.channel; b.appendChild(sm); }
        b.addEventListener("click", () => choose(item, b));
        list.appendChild(b);
      });
      showChosen();
    } catch (err){
      console.warn("Song search failed.", err);
      status.textContent = "search failed: " + (err && err.message ? err.message : "try again");
    } finally {
      songSearching = false; btn.disabled = false;
    }
  }

  btn.addEventListener("click", search);
  /* Enter in the search box only ever searches. The question is answered only by the Confirm button. */
  input.addEventListener("keydown", ev => {
    if (ev.key === "Enter"){ ev.preventDefault(); search(); }
  });
  area.append(row, chosen, status, list);
}

function readAnswer(q){
  if (q.type === "song"){
    if (!selectedSong) return null;
    return { value: { id: selectedSong.id, title: selectedSong.title },
             summary: "The song I picked to describe how I feel: " + selectedSong.title };
  }
  if (q.type === "text"){
    const v = $("answerField").value.trim();
    return v ? { value: v, summary: v } : null;
  }
  const value = {};
  const parts = [];
  document.querySelectorAll("#answerArea input[type=range]").forEach(inp => {
    value[inp.dataset.key] = Number(inp.value);
    parts.push(inp.dataset.key + " " + inp.value);
  });
  return { value, summary: "My self-ratings out of 10: " + parts.join(", ") + "." };
}

function lockInputs(){
  document.querySelectorAll("#answerArea textarea, #answerArea input").forEach(el => { el.disabled = true; });
}

/* Types text into an element one character at a time, like the intro.
   The characters not typed yet are still laid out (invisibly), so the text never reflows while it types. */
async function typeInto(el, text, perChar){
  el.textContent = "";
  const sr = document.createElement("span");      /* screen readers get the whole text at once */
  sr.className = "sr";
  sr.textContent = text;
  const typed = document.createElement("span");
  typed.setAttribute("aria-hidden", "true");
  const rest = document.createElement("span");
  rest.className = "ghost";
  rest.setAttribute("aria-hidden", "true");
  el.append(sr, typed, rest);

  if (reduced){ typed.textContent = text; return; }
  for (let i = 1; i <= text.length; i++){
    typed.textContent = text.slice(0, i);
    rest.textContent = text.slice(i);
    const ch = text[i - 1];
    const beat = ".?!".includes(ch) && i < text.length ? 220 : 0;   /* small pause after a sentence ends */
    await sleep(perChar * (0.65 + Math.random() * 0.7) + beat);
  }
}

/* Fades an element out, then hides it. */
async function fadeOut(el, ms){
  if (!reduced){
    await el.animate([{opacity:1},{opacity:0}], {duration:ms, easing:"ease", fill:"forwards"}).finished;
  }
  el.hidden = true;
  el.getAnimations().forEach(a => a.cancel());
}

/* Shows one question: the prompt types itself in, then the answer box / sliders fade in below it. */
async function askQuestion(){
  const q = QUESTIONS[idx];
  busy = true;

  $("replyStage").hidden = true;
  $("qstage").hidden = false;
  $("inputs").hidden = true;
  $("hint").textContent = "";
  $("progress").textContent = (idx + 1) + " / " + QUESTIONS.length;
  buildAnswer(q);
  $("go").textContent = q.type === "song" ? "Confirm" : "Enter";

  await typeInto($("prompt"), q.prompt, PROMPT_TYPE_MS);
  await sleep(PROMPT_TO_INPUT_MS);

  $("inputs").hidden = false;
  fade($("inputs"), 700);
  const first = $("answerArea").querySelector("textarea, input");
  if (first) first.focus();
  busy = false;
}

async function submitAnswer(){
  if (busy) return;
  const q = QUESTIONS[idx];
  const a = readAnswer(q);
  if (!a){ $("hint").textContent = q.type === "song" ? "search for a song" : "type something first"; return; }

  busy = true;
  answers[q.id] = a.value;
  stopPreview();                    /* the song they were listening to ends when they enter their choice */
  lockInputs();
  $("hint").textContent = "";

  /* The question and the filled-in answer disappear. */
  await fadeOut($("qstage"), 500);

  /* The AI's reply is shown on its own, typed out like the intro. */
  const reply = $("reply");
  $("replyStage").hidden = false;
  let dots = 0;
  reply.textContent = "";
  const dotTimer = setInterval(() => { dots = (dots + 1) % 4; reply.textContent = ".".repeat(dots); }, 300);

  const line = await getCompliment(a.summary);

  clearInterval(dotTimer);
  await typeInto(reply, line, REPLY_TYPE_MS);
  await sleep(REPLY_HOLD_MS);
  await fadeOut(reply, 500);
  reply.hidden = false;      /* fadeOut hides the element; the stage itself is hidden next */
  $("replyStage").hidden = true;

  /* Short break, then the next question (or the end). */
  await sleep(NEXT_PAUSE_MS);
  idx++;
  if (idx >= QUESTIONS.length) finish(); else askQuestion();
}

/* One sentence from the AI. Falls back to a plain line if anything goes wrong. */
async function getCompliment(text){
  if (!WORKER_URL){
    await sleep(900);
    return PLACEHOLDER_COMPLIMENTS[Math.floor(Math.random() * PLACEHOLDER_COMPLIMENTS.length)];
  }
  const ctrl = new AbortController();
  const timeout = setTimeout(() => ctrl.abort(), 10000);
  try {
    const r = await fetch(WORKER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answer: text, site: SITE }),
      signal: ctrl.signal
    });
    if (!r.ok) throw new Error("bad response");
    const j = await r.json();
    return oneWord(j.compliment);
  } catch {
    return FALLBACK;
  } finally {
    clearTimeout(timeout);
  }
}

/* ---------- 4. finish ---------- */
async function finish(){
  fadeSongOut();
  show("end");
  const end = $("endText");
  end.textContent = "Thank you.";
  if (!reduced){
    end.animate([{opacity:0, transform:"scale(.94)"},{opacity:1, transform:"scale(1)"}],
      {duration:1600, easing:"ease", fill:"forwards"});
  } else {
    end.style.opacity = 1;
  }
  if (ARCHIVE_URL){
    $("archiveLink").href = ARCHIVE_URL;
    $("endLink").hidden = false;
  }

  const prompts = {};
  QUESTIONS.forEach(q => { if (q.type !== "ratings") prompts[q.id] = q.prompt; });
  const payload = { site: SITE, submittedAt: new Date().toISOString(), answers, prompts };
  if (!SUBMIT_URL){
    console.info("Survey finished (not sent anywhere, SUBMIT_URL is blank):", payload);
    return;
  }
  /* A small status line under "Thank you." (created here, so index.html needs no change). */
  let status = null;
  if (SHOW_SAVE_STATUS){
    status = document.createElement("p");
    status.className = "dim";
    $("endText").parentNode.appendChild(status);
  }
  const say = t => { if (status) status.textContent = t; };
  say("saving...");
  try {
    const res = await fetch(SUBMIT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    let body = {};
    try { body = await res.json(); } catch {}
    console.info("Save response:", res.status, body);
    if (res.ok && body.ok) say("saved: " + body.path);
    else say("NOT saved (" + res.status + "): " + (body.error || "no details") + (body.github ? " [github " + body.github + "]" : ""));
  } catch (err) {
    console.warn("Could not reach the Worker.", err);
    say("NOT saved: could not reach the Worker (" + (err && err.message) + ")");
  }
}

/* ---------- events ---------- */
$("go").addEventListener("click", submitAnswer);

/* ---------- silent sound unlock ---------- */
/* Browsers only allow sound after the visitor has interacted with the page. Nothing is shown for this:
   the intro just plays, and the first key press or click during it (it does nothing on screen)
   unlocks the music, so it can fade in later at "Connected." Keys that browsers don't count as
   interaction (Shift, Ctrl, Alt, Escape...) are ignored. */
const UNLOCK_IGNORE_KEYS = ["Alt", "AltGraph", "Shift", "Control", "Meta", "CapsLock", "Escape"];
let musicUnlocked = false;

/* Plays each track silently for an instant, inside the key press, so the browser allows them later. */
function unlockMusic(ev){
  if (musicUnlocked) return;
  if (ev.type === "keydown" && UNLOCK_IGNORE_KEYS.includes(ev.key)) return;
  musicUnlocked = true;
  [songFirst, songLoop].forEach(track => {
    if (!track) return;
    track.play().then(() => {
      if (!songWanted){ track.pause(); track.currentTime = 0; }
    }).catch(() => {});
  });
}
["keydown", "pointerdown"].forEach(type => document.addEventListener(type, unlockMusic));

playIntro();
