---
title: API Reference

language_tabs: # must be one of https://git.io/vQNgJ
  - shell
  - ruby

toc_brand:
  - <a href="/"> <span class="brand"></span><h1 class="header-logo-type">DEVELOPER PORTAL<br/> UNITED STATES DEPARTMENT OF LABOR</h1> </a>

toc_footers:
  - <a href='https://devtools.dol.gov/developer'>DOL Public API</a>

toc_logo_footers:
  - <a href='https://www.dol.gov/'><img src='/img/dol-logo-white.png' alt='U.S.Department of Labor'/> <span class='header-logo-type-white'>UNITED STATES<br>DEPARTMENT OF LABOR</span></a>

toc_social_footers:
  - <a href='http://www.facebook.com/departmentoflabor' class='sm-facebook'>Facebook</a>
  - <a href='https://twitter.com/usdol' class='sm-twitter'>Twitter</a>
  - <a href='https://www.instagram.com/USDOL/' class='sm-instagram'>DOL Instagram</a>
  - <a href='https://plus.google.com/+USDOL/posts' class='sm-gplus'>Google Plus</a>
  - <a href='https://www.dol.gov/rss' class='sm-rss-btm'>RSS</a>
  - <a href="javascript:window.open('https://public.govdelivery.com/accounts/USDOL/subscriber/new','Popup','width=800,height=500,toolbar=no,scrollbars=yes,resizable=yes'); void('');" ONCLICK="window.status='Subscribe'; return true" ONMOUSEOVER="window.status='Subscribe'; return true" ONMOUSEOUT="window.status=''; return true" class='sm-email-btm'>Email</a>        

toc_location_footers:
  - <p>200 Constitution Ave. NW<br> Washington DC 20210<br> <a href='tel:1-866-487-2365'>1-866-4-USA-DOL</a><br> <a href='tel:1-866-487-2365'>1-866-487-2365</a><br> <a href='https://www.dol.gov/general/contact-phonecallcenter'>TTY</a><br> <a href='http://www.dol.gov/'>www.dol.gov </a></p>

toc_about_footers:
  - <li><a href="https://www.dol.gov/general/foia">Freedom of Information Act</a></li>
  - <li><a href="https://www.dol.gov/general/privacynotice">Privacy &amp; Security Statement</a></li>
  - <li><a href="https://www.dol.gov/general/disclaim">Disclaimers</a></li>
  - <li><a href="https://www.dol.gov/general/aboutdol/website-policies">Important Web Site Notices</a></li>
  - <li><a href="https://www.dol.gov/general/aboutdol/plug-ins">Plug-ins Used by DOL</a></li>
  - <li><a href="https://www.dol.gov/rss">RSS Feeds from DOL</a></li>
  - <li><a href=" https://www.dol.gov/general/aboutdol/accessibility">Accessibility Statement</a></li>

toc_developer_footers:
  - <li><a href="https://opendata.stackexchange.com/questions/ask?tags=labor">Ask Questions</a></li>
  - <li><a href="https://github.com/USDepartmentofLabor/DOLAPI/issues/new">Report Bugs</a></li>
  - <li><a href="/terms-of-service">Terms of Service</a></li>
  - <li><a href="https://github.com/USDepartmentofLabor">Fork this site on Github</a></li>
  - <li><a href="/release-notes">Changelog</a></li>

includes:
  - ErrorMessage
  - RateLimit
  - API
  - Example
  - Support
  - APINotifications  

search: true
---
# Authentication

To use the API you must register at [https://devtools.dol.gov/developer](https://devtools.dol.gov/developer) and request an API key for each application that will access the API. Registration and API keys are free.

## Registration process
* Visit [https://devtools.dol.gov/developer](https://devtools.dol.gov/developer)
* Click the Register here.
* Fill in the registration form and submit it.
* A confirmation email will be sent to the address you provided during registration.
* Click on the link in the email to activate your developer account.

## API Key (Token) Creation Process
* Visit [https://devtools.dol.gov/developer](https://devtools.dol.gov/developer)
* Go to the login page and enter your username and password
* Click on the My Tokens link
* Click "Create New Token"
* Provide a Shared Secret, Application Name, and a Description
* The token value will be auto-generated and added to your tokens list.

<aside class="notice">
<strong>Note:</strong> Once the API key (token) is generated, it takes some time to activate (~few hours).
</aside>

## How to Access API
The API is exposed as an [http://www.odata.org/](OData producer), with the addition of request authorizations. We are providing SDK's for some platforms that abstract the OData and request signing process and provides you with an easy to use method call. Please visit the [http://developer.dol.gov/sdk/](SDKs Page) to learn more about the DOL Data SDKs.

<strong>Example:</strong> Assume that you want to read data from the agencies table found in the dataset named DOLAgency. The request URL is:
<div class="guide_note">
  http://api.dol.gov/V1/DOLAgency/Agencies
</div>

Your API Key (Token) is d9c6c290-da4c-424e-a378-fb4bd027b58z
<div class="guide_note">
  <strong>note:</strong> This token is only an example. It is not usable.
</div>

Your direct link to Agency data using the input above is:
<div class="guide_note">
  http://api.dol.gov/V1/DOLAgency/Agencies/?KEY=d9c6c290-da4c-424e-a378-fb4bd027b58z
</div>

### Result Format
By default, the DOL   (V1) (api.dol.gov) API's responses are in XML format. To receive the data in JSON, send an "Accept" header with "application/json."

Your API Key (Token) is d9c6c290-da4c-424e-a378-fb4bd027b58z

Your authentication header would contain the key/value of:
<div class="guide_note">
X-API-KEY: d9c6c290-da4c-424e-a378-fb4bd027b58z
</div>

**Result Format**

Data.dol.gov sends responses by default in JSON format. To customize the return format, simply add /format/xml or /format/json to the request URL. For example:
<div class="guide_note">
https://data.dol.gov/get/inspection/format/xml
</div>