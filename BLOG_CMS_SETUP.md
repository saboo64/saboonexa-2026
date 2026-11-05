# Dashboard setup

Staff manage the blog, offers, and SEO at `/admin`. Text is stored in Firestore, and images are stored on ImageKit. These steps only need to be done once.

## 1. Firebase

Use a separate Firebase project from Maruti. The free Spark plan is enough.

1. **Create the project:** go to <https://console.firebase.google.com> and select **Add project**.
2. **Turn on login:** go to **Authentication > Sign-in method** and enable **Email/Password**.
3. **Approve the website address:** go to **Authentication > Settings > Authorized domains** and add `www.saboonexa.in` and `saboonexa.in`. To log in on a Vercel preview, also add that preview's address.
4. **Create the database:** go to **Firestore Database > Create database**. Choose a location near India, such as `asia-south1`. The location can't be changed later.
5. **Add the security rules:** in **Firestore > Rules**, paste the contents of `firestore.rules`, then select **Publish**.
6. **Add the web app settings:** in **Project settings > General > Your apps**, register a web app. Copy its values into the `REACT_APP_FIREBASE_*` variables.
7. **Create the server key:** in **Project settings > Service accounts**, select **Generate new private key**. Keep the downloaded file out of the project folder, and never paste it into a chat. Convert it with PowerShell:

   ```powershell
   [Convert]::ToBase64String([IO.File]::ReadAllBytes("C:\path\to\key.json"))
   ```

   The output is the value of `FIREBASE_SERVICE_ACCOUNT`.

## 2. ImageKit

Nexa shares the Saboo ImageKit account with Maruti. Images go in the `/popular_rks_nexa/` folder, which is created automatically. Find the keys at <https://imagekit.io/dashboard/developer/api-keys>. Set the URL endpoint in both `IMAGEKIT_URL_ENDPOINT` and `REACT_APP_IMAGEKIT_URL_ENDPOINT`.

Put real keys only in `.env` and Vercel. Never put them in `.env.example`, because this repository is public.

## 3. Vercel

`.env` is ignored by Git, so Vercel can't read it. Add every variable listed in `.env.example` under **Project > Settings > Environment Variables**, then redeploy. `REACT_APP_*` values are built into the site, so a change only takes effect after a redeploy.

Create a hook under **Project > Settings > Git > Deploy Hooks** for the `main` branch. Add its URL as `VERCEL_DEPLOY_HOOK`. Each build reads saved SEO changes, so `FIREBASE_SERVICE_ACCOUNT` must also be available to builds.

**Add these variables before merging.** Without them, the offers page shows the "contact us" message instead of offers, and the blog can't load.

## 4. Give a staff member access

1. In Firebase, go to **Authentication > Users > Add user** and enter their email and a password.
2. Copy the new user's **User UID**.
3. In Firestore, create a collection named `admins`. Add a document whose **Document ID is that UID**. It needs no meaningful data, but the console requires one field, such as `name`.

To remove access, delete that document from `admins`.

To limit what they can manage, add an array field named `roles` to that document, with any of `blog`, `offers`, and `seo`. With no `roles` field, they can manage everything.

## 5. Check it works

1. Log in at `/admin` and publish a test post with a cover image and an image in the text.
2. Within about a minute, check that it appears at `/blog` and `/blog/<url>`.
3. Open the post's page source and confirm its title and text are in the HTML.
4. Check that `/blog-sitemap.xml` lists the post.
5. Delete the test post.

## Good to know

- **Running locally:** `npm start` runs the dashboard, blog, uploads, and sitemap using the values in `.env`. Restart it after changing `.env`. It doesn't apply `vercel.json` or the server-built page HTML, so check those on a Vercel preview.
- **Offers:** changes go live within about a minute, and an offer hides itself after its end date, using India's date.
- **Banners:** the built-in banner stays until staff add one in the dashboard. It's bundled with the site, so it can't be imported.
- **SEO:** saved changes go live after **Publish SEO changes**, which rebuilds the site and takes a few minutes. Structured data stays in the code. `{{SEASON}}` and `{{YEAR}}` in text are filled in automatically. After adding a page to the site, run `npm run build`, then `node scripts/extract-seo-defaults.js`, to add it to the SEO list.
- **Link previews:** only `/blog`, `/blog/<url>`, and the offers page have their real tags in the page's raw HTML. Other pages reach WhatsApp and Facebook as a plain shell with the default title, because the site isn't prerendered. Google runs JavaScript, so it can read their tags.
- **Redirects:** the live site is on Vercel, so old-address redirects belong in `vercel.json`. Those in `firebase.json` have no effect there.
- **Deleting images:** deleting a post doesn't delete its images from ImageKit. Remove them in the ImageKit dashboard if needed.
- **Writing posts:** format text with the editor's toolbar, and use the Preview tab to see the finished post. To change an image's size or description after adding it, click the image.
