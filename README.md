Link: https://cs50.harvard.edu/x/2023/psets/8/homepage/

Create a simple homepage that introduces yourself, your favorite hobby or extracurricular, or anything else of interest to you.


### Specification

Implement in your home page directory a website that must:
- [x]  Contain at least four different .html pages, at least one of which is index.html (the main page of your website), and it should be possible to get from any page on your website to any other page by following one or more hyperlinks.
- [x] Use at least ten (10) distinct HTML tags besides <html>, <head>, <body>, and <title>. Using some tag (e.g., <p>) multiple times still counts as just one (1) of those ten!
- [x] Integrate one or more features from Bootstrap into your site.
- [x] Have at least one stylesheet file of your own creation, styles.css, which uses at least five (5) different CSS selectors (e.g. tag (example), class (.example), or ID (#example)), and within which you use a total of at least five (5) different CSS properties, such as font-size, or margin;
- [x] Integrate one or more features of JavaScript into your site to make your site more interactive. For example, you can use JavaScript to add alerts, to have an effect at a recurring interval, or to add interactivity to buttons, dropdowns, or forms. Feel free to be creative! 
- [x] Ensure that your site looks nice on browsers both on mobile devices as well as laptops and desktops.


What I've learned 


```css
.navbar-expand{-sm|-md|-lg|-xl|-xxl}
```
This means in bootstrap that the items in a navbar will turn vertical at a specific break-point. 


How to read a notion database using JavaScript?


Helpful article: https://www.twilio.com/blog/manipulate-notion-database-using-node-js

YouTube Tutorial: 

https://www.youtube.com/watch?v=_NssNFvQDlc&ab_channel=BrianMorrison

```javascript
const { Client } = require('@notionhq/client');
const notion = new Client({ auth: 'secret_oiSO7K8gn0JFk4qL5nghLMJtexixZaf0NVoytcCX3Ly'});
(async () => {
  const response = await notion.databases.query({
    database_id: 'de9e6f2935014800b7d6bcaad0592146'
  })
  console.log(response);
})();
```

require() is a function we use to import modules: programs written by other people. 

```javascript
const { Client } = require('@notionhq/client');
```

The syntax above means: create an object named Client and assign the returned value from the require function to it. 

The new keyword means: create a new object for me.

The Internal Integration Secret allow us to access my notion account to any database or page connected to this integration.  


async/await, promises and asynchronous programming


Tutorial to learn promises: 
https://www.youtube.com/watch?v=2d7s3spWAzo&t=91s&ab_channel=FunFunFunction

A Promise is an object representing the completion or failure of an asynchronous operation. 

Unlike callbacks you can compose promises and deal with multiple functions.

Learn the difference between Synchronous and Asynchronous programming (video in Arabic): 

https://www.youtube.com/watch?v=cJIH3qPR_B8&ab_channel=ElzeroWebSchool

Synchronous Programming is when the computer execute one task at a time and Asynchronous programming is when multiple tasks runs at the same time. 


Helpful YouTube tutorial to learn Async/Await:

https://www.youtube.com/watch?v=568g8hxJJp4&t=223s&ab_channel=FunFunFunction
Async functions always returns a promise. 
