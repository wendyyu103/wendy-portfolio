# wendy-portfolio

My personal portfolio site. Plain HTML, CSS, and a little JavaScript. No build step.

## What's where

| File | What it is |
|---|---|
| `index.html` | Home: landing with the rotating line + the work sheet with 4 projects. Each card links out (Medium, App Store, GitHub) for now; on-site case study pages will come later |
| `about.html` | About page |
| `styles.css` | All the styling. Colors, fonts, and sizes are at the top in `:root` |
| `script.js` | The slot-machine reel. `SECONDS_PER_PHRASE` sets the timing |
| `images/` | **All images go here.** `handwriting/`, `covers/`, `uplift-slides/`, plus any new ones |
| `assets/` | Resume PDF and favicon |

## Preview it

Double-click `index.html` to open it in your browser. Refresh after you save changes.

## Filling it in

Search the files for `[` to find every placeholder, and `YOUR-` for links to fill in.

- **Resume:** the nav links to your resume on Google Drive. To update it, replace the file in Drive (keep the same link), or change the link in the nav of `index.html` and `about.html`.
- **LinkedIn / email:** in the footer of `index.html` and `about.html`.
- **Link preview:** `images/social-preview.jpg`. Once the site is on your domain, make the `og:image` tag a full URL.
- **Card descriptions:** replace each `[Quick description]` in `index.html`.
- **SOTP slides:** keep PNG exports in `images/uplift-slides/` for when the Uplift case study page is added.
- **Card covers:** put images in `images/covers/` (e.g. `coursegrab.jpg`), then in `index.html`
  add `<img src="images/covers/coursegrab.jpg" alt="">` inside that card's `card__cover` div.

### Handwritten phrases

Already in place: `images/handwriting/phrase-1.png` … `phrase-5.png` were cut from
`all-phrases-original.png` (the full image, kept for reference).

| File | Phrase |
|---|---|
| phrase-1 | builds based on others' needs. |
| phrase-2 | explores creative solutions. |
| phrase-3 | wants to make everyday experiences exciting! |
| phrase-4 | loves matcha! |
| phrase-5 | researches users' motivations. |

To change the order, reorder the `<li>` lines in the reel in `index.html`.
The full sentence is written out for screen readers, so the images use `alt=""` on purpose.

## Putting it online (Netlify + Squarespace domain)

1. **GitHub:** create a new repo called `wendy-portfolio` and upload this folder
   (or ask Claude Code to do it).
2. **Netlify:** sign up at netlify.com → *Add new site* → *Import an existing project* →
   pick the GitHub repo. No build command, publish directory is the root. It goes live on a
   free `something.netlify.app` address. Every time you push to GitHub, it updates.
3. **Add your domain in Netlify:** *Domain management* → *Add a domain* → type your domain.
   Netlify will show you the DNS records to add. Copy those exact values.
4. **Squarespace:** go to domains.squarespace.com → click your domain → *DNS* → *DNS Settings*.
   - Remove Squarespace's default records for `@` and `www` if they conflict.
   - Add the records Netlify gave you (usually an **A** record for `@` and a **CNAME** for `www`).
5. Wait. DNS usually updates within an hour, sometimes up to 48. Netlify adds HTTPS automatically.
