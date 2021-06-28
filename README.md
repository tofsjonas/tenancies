# README

This is a simple web application, built as a work test. Feel free to check out the [demo](https://tofsjonas.github.io/tenancies/)!

Yeah, so I didn't get the job (I got another one instead!). I'm still quite pleased with my solution and I've been updating it every now and then.

## Solution

I use DAWA's autocomplete API to fetch address data and store the user data in Google's Firestore. Data integrity is maintained by simply not letting the user manually edit the address data.

### 3rd-party libraries

- I decided to use [React Bootstrap](https://react-bootstrap.github.io/), mainly because I have been curious about bootstrap for a long time, and because styling components manually takes forever.
- [React Bootstrap Typeahead](https://github.com/ericgio/react-bootstrap-typeahead) was perfect, doing exactly what I wanted it to. 😊
- [Emotion Styled Components](https://emotion.sh/docs/styled) because I am familiar with it and I like it.
- [axios](https://github.com/axios/axios) rather than [fetch](https://www.w3schools.com/js/js_api_fetch.asp). Better browser support, as well as (imho) easier to use.
- I chose [react-i18next](https://react.i18next.com/) over [react-intl](https://formatjs.io/docs/react-intl/), due to fewer dependencies, smaller size, and I just liked it more.
- I've used [Google Firebase Firestore](https://firebase.google.com/docs/firestore) before, but never with React, so I figured it was time!

### Features

- Pagination (rather than infinity scroll)
- Internationalization (English and Swedish atm)
- Google Street View
- Search my tenancies

### Caveats

#### 1. It looks like crap

I am not a designer, and that is not what I am applying as. If you give me a design and tell me to make it happen, sure, but building things from scratch? Nah. (I can do it ironically... 🤪 ) I can download free templates, that's about it.

Hm. How would that work with react/bootstrap? 🤔 Some day...

#### 2. MVP (no more!)

~~Apart from the design being crap I would call this an mvp, *based on the requirements* (...at least at the time of writing). Any less would be unusable, any more would be bonus material.~~

It is now beyond the scope of an mvp (based on the requirements) 🦸‍♂️
