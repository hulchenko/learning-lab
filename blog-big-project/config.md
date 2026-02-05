1. src folder is for the initial code.
2. node/webpack/babel setup
3. web server wouldn't run with default settings, used following:
   #1 "start": "webpack serve --mode development --open"
   #2 devServer: {hot: true,},
4. chrome would give 2 errors:
   #1 'Resource interpreted as Stylesheet but transferred with MIME type text/html'. Fixed by indicating local path to CSS file
   #2 'DevTools failed to load SourceMap'. Seems like a bug - hid with Console/Selected context only
5. Header component creation
6. Header removal logic
7. Navigation component creation
8. Navigation tabs switch logic
9. Form creation
   1. Component creation
   2. Form initialization
      data gathering
      data sending to server
10. Add validators (forbidding empty field and requiring minimum required characters) to the form.
11. Add validation errors to the user
12. Add clear form upon valid submission
13. Firebase project setup (hulchenko-blog-project-js)
14. Add form submission to Firebase server DataBase
    1. Create dir Services > api.service.js file
    2. Pull Firebase project URL inside Realtime DB
    3. Compile created form into an object, import into create.component.js
    4. Test it through console>network>posts.json>headers/preview and response tabs
15. Receiving data from the server
    1. Receive list of posts from DB, pull IDs for each post, compile objects into an array
    2. Show received data in HTML 'Posts' section
    3. Add news/note color difference
    4. Add button 'save'
    5. Add empty HTML on tab switch to prevent posts duplicates
16. Add loader animation to Posts tab(need to be mindful of the positioning of the variable and element)
17. Add 'Save' button functionality(saves to local storage)
18. Add name/color change, remain proper color after reload/tab switch on action
19. Show saved posts to 'Favorites' tab
20. Create responsiveness on Favorites post click
21. Add loader animation on Favorites post click
22. Export post template into a separate folder/file to minimize the code
23. Remove button in Favorites posts
24. Minimize project's size with Webpack Production mode
25. Minor tweaks and fixes
26. Fix list.length error in console upon uploading (add list && list.length)
27. Fix CSS Mustard UI framework (type="text" is not included by default)
28. Replace post ID with post's name in Favorites tab list
29. Deploy project to Firebase
    1. npm install -g firebase-tools
    2. firebase login
    3. firebase init > Hosting > Existing Project > hulchenko-blog-project-js > dist(Public Folder) > Yes(single-page app) > No (GitHub auto deploy) > No (index.html rewrite)
    4. firebase deploy
    5. Firebase URL: https://hulchenko-blog-project-js.web.app/
30. Reset Realtime Database. Add first/default post.
