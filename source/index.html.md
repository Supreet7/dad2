---
title: API Reference

language_tabs: # must be one of https://git.io/vQNgJ
  - shell
  - ruby
  - python
  - javascript

toc_footers:
  - <a href='https://devtools.dol.gov/developer'>DOL Public API</a>

includes:
  - ExploreOurData
  - errors

search: true
---
# User's Guide
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

## How to Access API (V1)
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

##How to Access API (V2)
The API is exposed as a RESTful interface. We require you to authenticate by placing your token in the header. We are providing SDK's for some platforms in order to provide you with an easy to use method call. Please visit the SDKs Page to learn more about the DOL Data SDKs.

<strong>Example:</strong> Assume that you want to read data from the incidents table found in the OSHA Enforcement dataset. The request URL is:
<div class="guide_note">
https://data.dol.gov/get/inspection
</div>

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
