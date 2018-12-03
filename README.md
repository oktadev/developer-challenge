# developer-challenge

**Thanks for checking out our developer challenge!**

The way this works is simple: follow the instructions listed below. They will
teach you how to create an extremely simple website using Okta's free developer
API.

The project you'll build is a simple static website. Once you get it working
(with user login) you'll automatically have your email address added a list and
you can then claim your prize from the Okta booth in the sponsor hall.

If you're in and want a prize, let's do this!


## Step 1: Create a Free Okta Developer Account

Go to https://developer.okta.com/signup/ and create a free account. Once you're
done, log into the Okta developer dashboard and then move onto the next step.


## Step 2: Clone This Repo Locally

Run the following command to clone this repo locally:

```bash
git clone https://github.com/oktadeveloper/developer-challenge.git
```

Then enter the `developer-challenge` project directory:

```bash
cd developer-challenge
```


## Step 3: Configure Okta

Okta is an API service that you can use to store user accounts for the
applications you build. It handles things like user registration, login,
password reset, social login, active directory synchronization, etc. It does a
lot of stuff.


### Create an Okta Application

![Okta Create Application](https://raw.githubusercontent.com/oktadeveloper/developer-challenge/master/assets/okta-create-app.gif)

When you use Okta to manage users for your applications, the first thing you
need to do is tell Okta what application it will be storing users for.

From the Okta dashboard, you can do this by going to the **Applications** tab
and clicking the big **Add Application** button then selecting the
**Single-Page App** option and clicking **Next**.

Specify the following values for your new application:

- **Name** - whatever you want
- **Base URIs** - `http://localhost:8000`
- **Login redirect URIs** - `http://localhost:8000`

Leave all other options as their default values, then click **Done**.

Once your application has been created, copy down the **Client ID** value, you
will need this soon!


### Copy Your Okta Org URL

![Okta Org URL](https://raw.githubusercontent.com/oktadeveloper/developer-challenge/master/assets/okta-org-url.gif)

When you signed up for Okta you created a private "organization" that will hold
and store all of your application's users. Each org has a specific URL, and when
you build applications with Okta, we need to know what that org URL is so we
know where your users should go.

Behind the scenes, all of the Okta tech is built on top of the OAuth and OpenID
Connect protocols.

Anyhow: return to your dashboard page and copy down the **Org URL** value. You
will need this in a moment.


## Step 4: Configure Your Application

The sample project that you cloned earlier is a simple static website. It has
Okta auth built into it already. All you need to do to get it working is add
your Okta Org URL and Client ID into the correct places.

To do this, open up the file `static/js/sign-in.js` in your favorite code
editor. Modify the top two lines of the file and substitute in your org-specific
settings.

Here's what the default values look like (you will need to replace them with the
two values you copied down earlier in order for this to work):

```javascript
var OKTA_BASE_URL = "https://dev-842917.oktapreview.com";
var OKTA_CLIENT_ID = "0oahnh5ai0wMErUCC0h7";
```

**PS**: If you're wondering whether or not these values are sensitive
information: worry not! They are **not** sensitive, private credentials. They
can be shared publicly at no risk to you or your websites due to the way OpenID
Connect works.

The last application-specific setting you need to specify is your trusted
origin. You need to tell Okta which URLs your app will be running on publicly so
it knows which domains it should enable CORS for.

Go to the **API** drop-down menu and select the **Trusted Origins** tab. Then
click the **Add Origin** button and enter the following information:

- **Name**: `Okta Developer Challenge`
- **Origin URL**: `http://localhost:8000`
- **Type**: CORS + Redirect

Make sure you check the boxes next to the **CORS** and **Redirect** boxes.


## Step 5: Run the Web App

![Run the App](https://raw.githubusercontent.com/oktadeveloper/developer-challenge/master/assets/run-the-app.gif)

You've now got everything working, or at least it should be! Let's test it out!
If this works, you're good to go and can go claim your prize.

If you have `python` installed on your computer, you can run the following
commands (depending on whether you have Python 2 or 3 installed) to launch a web
server on port 8000.

```bash
python -m http.server       # python 3
python -m SimpleHTTPServer  # python 2
```

If you don't have python installed on your computer, feel free to run the
app however you want with any other web server -- just make sure you use an
actual web server and don't try to open the file directly with your browser!
If you do this, the app won't work due to JavaScript permissions.

Finally: now that your app is running, please visit http://localhost:8000 in
your favorite browser and follow the on-screen instructions to complete the
challenge and claim your prize!

Have any questions? Visit us at the Okta booth and ask for help!
