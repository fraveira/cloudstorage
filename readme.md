# Cloud Storage Subscription

4-Steps subscription process to a Cloud Storage Service. 

## Getting Started

As per https://create-react-app.dev/docs/getting-started/

```
npm start

```


### First Page - Selecting the service

Default values are 5GB, 12 Months and not upfront payment. 
The default buttons are already highlighted when opening the page. 
The prices dynamically render by switching the GygaBytes selector buttons.

### Second Page - Entering User Data

A series of fields that take name/last name, e-mail and user address. 
No field can be empty to continue to the next step.
The e-mail has to be .com, and include a "@", otherwise, it won't enable the button. 

If you come back to this step, the value previously selected is kept as "defaultValue", it can be modified and submitted again.

### Third Page - Entering CC Information

There's a manual validation of the credit card number (length of 16).
There's a manual validation of the CC expiration date (not accepted if expiration data is before 2020).
Card security code needs at least to include 3 numbers. 

All the fields need to follow these guidelines in order to be able to get to the next step. 


### Fourth Page - Order Confirmation. 

Confirmation of the order. It renders all the values previously entered so that the user can read them and decide to purchase of not.
The user can also go back to the previous steps.
If the user doesn't accept the terms, the button to submit the data appears disabled. 

Data is submitted with Axios through a POST request. 
If the request is succesful, the user is redirected to a /thankyou page. 

If the user happens to arrive to /summary page without any of the required values, the user will be redirected to the first step. 

