# Havelock Industries // 2098 Holographic Mesh Terminal

A self-contained static site. No build step, no server-side code, no database.
Drop the `havelock/` folder into the public root of virtualmediainnovations.com and it works.

Target URLs:

- `https://www.virtualmediainnovations.com/havelock/` — public corporate terminal
- `https://www.virtualmediainnovations.com/havelock/employee/` — FMU-3 Common Mesh

## File map

```
havelock/
├── index.html              Public corporate terminal
├── site.css                Public layout
├── site.js                 Boot sequence, mesh search, modals, plate viewer, mobile nav
├── vancouver.html          Havelock Civic Index — Vancouver 2098
├── vancouver.css           City page layout
├── vancouver.js            District atlas data, filter and search
├── audio.js                Ambient score player
├── holo.css                Shared projection shell (cone, scanlines, panels, beam-in)
├── holo.js                 Projection engine (parallax, dust, warm-up, clock)
├── README_DEPLOY.md        This file
│
├── employee/
│   ├── index.html          Login + FMU-3 terminal shell
│   ├── data.js             ALL CONTENT — 42 messages, market data, records
│   ├── views.js            Renders every view; mail client, read tracking, reward
│   ├── employee.js         Boot, login, nav, audio, modals
│   ├── employee.css        Base terminal UI
│   ├── holo-employee.css   Projection re-skin
│   └── employee-views.css  Mail client, market terminal, record views
│
├── assets/
│   ├── havelock_logo.png
│   ├── img/                Facility plates (1800px + 900px "-sm" variants)
│   └── audio/              ambient-terminal, ui-click, access-granted, priority-alert
│
├── downloads/              Player-facing PDFs
└── data/campaign-state.json
```

## Deploying

Everything uses **relative paths**, so the folder can sit at any depth. Nothing to configure.

- **Static host / cPanel / FTP** — upload `havelock/` into `public_html/` (or the web root).
- **Next.js / Astro / Vite** — drop `havelock/` inside `public/`. Do not import it into the app;
  it is deliberately outside the framework so it can't break the main VMI site.
- **Netlify / Vercel / Cloudflare Pages** — commit the folder, push, done.

One server note: `.wav` and `.pdf` must be served with correct MIME types. Every mainstream
host does this by default; if audio 404s or PDFs open as text, that's the cause.

## Running the game

**Employee terminal login**

```
Employee ID:      anything
H3 access phrase: H3-2098
```

"Remember this terminal" stores a flag in `localStorage`, so the player skips the login next
time. **LOCK** in the top bar clears it.

**Changing the in-game date** — one line, near the bottom of `holo.js`:

```js
const IN_GAME_DATE = '2098.06.18';
```

Every clock on both pages reads from it.

**HOLO toggle** — bottom-right corner of every page. Turns off scanlines, dust, flicker and the
projector cone. Use it when players need to read long documents; the preference persists.

**Keyboard** — `Ctrl/Cmd+K` opens mesh search. `Esc` closes anything open and skips the warm-up.

## Vancouver 2098 — the city page

`vancouver.html` is the Havelock Civic Index: the Golden Age explained, regional figures, a
24-entry district atlas, city operations, a visitor guide and the Underlayer. All of it is drawn
from your GOLDENAGE player primer and is player-safe.

The atlas is data, not markup. Every district lives in the `DISTRICTS` array at the top of
`vancouver.js` with a `zone` of `core`, `inner`, `beneath` or `annex`. Add an entry and it
appears in the grid, the zone filters and the atlas search automatically. Adding a place to the
visitor guide is a copy-paste of one `<article class="vis">` block in `vancouver.html`.

## Background music

"The Watcher Wears Our Face" plays under both public pages. Re-encoded to 128 kbps mono-safe
MP3 (4.4 MB, down from 6.7 MB) and stripped of embedded art, at `assets/audio/`.

Browsers block audio that starts without a user gesture, and there is no way around that. So
`audio.js` tries to play immediately; if the browser refuses, the control changes to **"▶ Tap for
sound"** and starts the moment the visitor clicks, taps, scrolls or types anywhere. The button
never claims to be playing when it is not.

- Control sits bottom-right, above the HOLO toggle. Full width on phones.
- Volume fades in to 34% over 2.6 seconds rather than starting cold.
- Pauses automatically when the tab is hidden.
- Turning it off is remembered permanently in `localStorage` under `havelockMusic`.

To change the track, drop a new file in `assets/audio/` and edit the `SRC` and `TITLE`
constants at the top of `audio.js`. To make silence the default, change `wanted` to start
`false`. The employee terminal deliberately does not play the score — it has its own ambience
and the two would fight.

## The employee terminal

Ten views: Home, Messages, Operations, Documents, Medical & Consent, Equipment,
Pay & Benefits, Training, Directory, Market, H3 Secure.

**Everything a player reads lives in `employee/data.js`.** One file, plain JS, heavily
commented. To add a message, copy an existing block in the `mail` array and change the
fields. `cat` must be one of: `exec`, `security`, `people`, `facility`, `clinical`, `ops`,
`mesh`, `finance`, `culture`. Set `pri: true` for a PRIORITY flag. The `body` is HTML —
`<h4>` for section headings, `<p class="signature">` for the sign-off.

### The reader reward

42 messages. Read them all and the **Archive** category unseals, plus a commendation modal.
The payoff is a 2071 routing table listing eleven Pacific facilities where the public
register lists ten — the eleventh is a numeric code with a consumables allocation for forty
people. It raises a question and answers nothing. Dial it up or down in `data.js` under
`reward`.

Read state lives in `localStorage` under `havelockMailRead`. To reset a player's terminal
for a fresh session, have them clear site data, or run this in the browser console:

```js
localStorage.removeItem('havelockMailRead')
```

**MARK ALL READ** in the mail rail also unseals the archive — useful for showing a player
the payoff without making them grind, and for your own testing.

### Market view

`HVLK` on the NAA Pacific exchange, with 60 sessions of price history drawn as an SVG
sparkline, plus the Pacific Continuity Index and its twelve constituents. All of it is
static data in `data.js` under `market` — change `price`, `change`, `history` or any
constituent freely. A crash, a spike or a trading halt is a one-line edit, and makes a good
in-session beat.

## Adding player downloads

1. Drop the PDF into `downloads/`.
2. Add an entry to the `.dl-list` block in `index.html` (public) and/or the `.doc-grid` block in
   `employee/index.html` (in-world).

Anything marked H3/restricted should stay out of `downloads/` — the folder is publicly
listable on most hosts. Do not put GM-only material there.

## Security note

The H3 login is a **prop**. The passphrase lives in front-end JavaScript and anyone can read it
with View Source. It exists to make players feel like they're logging in. Never put real
credentials or private data behind it.

## Next phase (not built yet)

A `/havelock/control/` GM panel that pushes live state to player terminals — new mission file,
priority message from Dagenais, clearance change, alert level, mesh degradation as Day Zero
approaches. That needs a small backend or a hosted JSON store; the static site is deliberately
finished and shippable without it.
