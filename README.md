# Social Integration Proof-of-Concept
---
### Author: Raj Hunjan

## Links:
- [Repo](https://github.com/Raj-Hunjan/cpnt270-a3)
- [Live](https://xenodochial-lovelace-9a971b.netlify.app/)

## Instagram API steps
1. So first you create a dummy [instagram](https://www.instagram.com/) account.

2. Then you have to sign up for [facebook](https://www.facebook.com/) and then make a [developer account](https://developers.facebook.com/apps/).

3. The [getting started](https://developers.facebook.com/docs/instagram-basic-display-api/getting-started) and [overview](https://developers.facebook.com/docs/instagram-basic-display-api/overview) pages helped with the next few steps. On the [app page](https://developers.facebook.com/apps/), click `create app` and choose `consumer`. Then you just name your app and click `create app`.

4. Click Instagram [Basic Display](https://developers.facebook.com/apps/204629698494784/instagram-basic-display/basic-display/) and then click create new app. Then you scroll down to user token generator, click `add or remove instagram testers` and then click `add instagram testers`. 

5. Go to instagram account, settings, apps and websites, tester invites and then you accept the invite. So now you should be able to generate a token.

6. Go to instagram [basic display](https://developers.facebook.com/apps/204629698494784/instagram-basic-display/basic-display/), click `Basic Display`. Then scroll down to user token generator and click `generate token` then you authorize by clicking allow and then you should hav your token. (Just make sure you click `I Understand` to get the full token). Then just save it in your `.env` file.

7. [This website](https://harrisonkolor.medium.com/using-the-instagram-api-serverless-netlify-to-display-your-own-photos-in-2021-7923014522d0) was helpful for the next step. You'll need to get your user ID.

    - You'll need this to get your user ID: `https://graph.instagram.com/me?access_token={access_token}`
8. Now you'll need to test the token and ID: `https://graph.instagram.com/{user-id}/media?fields=id, caption,link,media_url&access_token={access-token}`

9. Success!

## How I secured my API token/key
- I used dotenv and netlify's environment variables
- [Dotenv docs](https://www.npmjs.com/package/dotenv)
- [Netlify docs](https://docs.netlify.com/configure-builds/environment-variables/)

## Other information 
- Instagrams [rate limiting](https://developers.facebook.com/apps/204629698494784/instagram-basic-display/basic-display-rate-limiting/) is kinda annoying. If you request the data too much then the api won't work any more. You'll have to wait an hour for it to work again.

## Market and Problem definition

### User Story:

As a bakery owner, I would like to have my content displayed on a website because I want my business to be found through the most popular way to be found... google.

There are many accounts on instagram and other social media platforms that promote their food services like cakes, donuts, hot chocolate bombs, etc. For business owners, they want to attract the most amount of customers to their business. They can use any social media they want to promote it but not everybody is on social media so thats why its better to have your business on a website so you can get noticed more. If people want to find something, they'll google it and that one of the best ways to get noticed. 

## Taskflow: 
1. Go to Instagram website
2. Log into Instagram account
3. Create a new Instagram post
4. Choose a picture
5. Write a caption
6. Post to Instagram
7. Refresh website to see if your picture is posted
8. Success

## Attributions
- [Cake picture](https://unsplash.com/photos/kPxsqUGneXQ) by [David Holifield](https://unsplash.com/@davidholifield)
- [Cupcakes picrure](https://unsplash.com/photos/S2jw81lfrG0) by [Deva Williamson](https://unsplash.com/@biglaughkitchen)
- [Donuts picture](https://unsplash.com/photos/6SMF42-JTAc) by [Rod Long](https://unsplash.com/@rodlong)
- [Tony's](https://github.com/acidtone) axios [code](https://github.com/sait-wbdv/hello-instagram-netlify/blob/main/functions/lunch.js)
- [Tony's](https://github.com/acidtone) netlify [code](https://github.com/acidtone/hello-netlify-functions)
