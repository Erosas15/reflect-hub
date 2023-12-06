[33mcommit 0f143e2bc038cadb3dcbe0d14a3f50081ae22664[m[33m ([m[1;36mHEAD -> [m[1;32mmaster[m[33m, [m[1;31morigin/master[m[33m, [m[1;31morigin/HEAD[m[33m)[m
Author: Ashvin Loghashankar <49613752+ashvinl@users.noreply.github.com>
Date:   Tue Dec 5 00:51:38 2023 -0800

    Adding a title to the journal entries

[33mcommit f0d6562fb89c0a0ccf18e4311f1592e7db76b95e[m
Author: Kaitlyn Srinivasan <kaitlynsrinivasan@Kaitlyns-MacBook-Pro.local>
Date:   Sun Dec 3 14:08:31 2023 -0800

    Changed messages to not have a recipient.

[33mcommit 6756528b1489a4bb5af7fdb017fa38a79f45e0ac[m
Author: Sragvi Vadali <reachsragvi@gmail.com>
Date:   Sun Dec 3 13:28:47 2023 -0800

    add shellscript

[33mcommit 594853649d5e146b4d531cea455751caaebed970[m
Author: Sragvi Vadali <reachsragvi@gmail.com>
Date:   Sun Dec 3 13:27:52 2023 -0800

    made single command to run webapp client and server

[33mcommit 4f52c134bcd98c89b3dde1afb86f67f8d1e65aa9[m
Author: Kaitlyn Srinivasan <kaitlynsrinivasan@Kaitlyns-MacBook-Pro.local>
Date:   Sun Dec 3 13:14:51 2023 -0800

    Successfully sent sign out request
    
    Added cors option into server.js, and connected sign out request to server in landing-page.js. Added error handling

[33mcommit babdda2fb8db72a35870eb9d9b38eedf29b66387[m
Author: Ashvin Loghashankar <ashvinloghs@Ashvins-MacBook-Air-2.local>
Date:   Sun Dec 3 12:50:21 2023 -0800

    Adding express router for journal

[33mcommit 8b101457ab19822b8bf4e330b307836c4e452b0b[m
Author: Ashvin Loghashankar <ashvinloghs@Ashvins-MacBook-Air-2.local>
Date:   Sun Dec 3 12:49:20 2023 -0800

    Adding journal service. Including the code for both adding journal entries and removing journal entries.

[33mcommit ea7220a9de5271c4e043b58d89812f55984099ef[m
Author: Erosas15 <rosaserick15@ucla.edu>
Date:   Sun Dec 3 11:45:22 2023 -0800

    integrated signin form with firebase
    
    Successfully sent requests to server to sign up, and sign in. Basic error handling

[33mcommit 5afba540598ccdc34ac86e7eecf30b219bf8d0fc[m
Author: Sragvi Vadali <reachsragvi@gmail.com>
Date:   Sat Dec 2 16:08:00 2023 -0800

    fix bug in authService

[33mcommit fbc458a51bec07f126102dfdc0b8194c361ef58f[m
Author: Kaitlyn Srinivasan <kaitlynsrinivasan@Kaitlyns-MacBook-Pro.local>
Date:   Sat Dec 2 15:27:50 2023 -0800

    Adding messaging functionality to post to forum

[33mcommit 5713b5c6c3f42264b644939839383b7c7340db7e[m
Author: Sragvi Vadali <reachsragvi@gmail.com>
Date:   Sat Dec 2 14:11:34 2023 -0800

    added start for langchain

[33mcommit c4479892c8e820d34c23d92df8e134657e7dfac1[m
Author: Sragvi Vadali <reachsragvi@gmail.com>
Date:   Sat Dec 2 14:06:17 2023 -0800

    added aliasing to server

[33mcommit 573b4a7a38bf2a8fcbe019c25e35a77815a9695a[m
Merge: 42ee6c6 3d086a9
Author: Sragvi Vadali <58544815+sragvivadali@users.noreply.github.com>
Date:   Thu Nov 30 22:36:46 2023 -0800

    Merge pull request #4 from Erosas15/connectfrontback
    
    Connectfrontback

[33mcommit 3d086a9defbee1a8bc67bc97c1f33352212a7ca4[m[33m ([m[1;31morigin/connectfrontback[m[33m)[m
Author: Sragvi Vadali <reachsragvi@gmail.com>
Date:   Thu Nov 30 22:35:54 2023 -0800

    merging branch to connect server port

[33mcommit a64d315566ed6b84b34d0224e6fe1fa54eb226f0[m
Merge: 06dc1cc 42ee6c6
Author: Sragvi Vadali <reachsragvi@gmail.com>
Date:   Thu Nov 30 22:33:26 2023 -0800

    Merge branch 'master' into connectfrontback

[33mcommit 42ee6c63ea79b723defc95e7b960c53211be9079[m
Author: Erosas15 <rosaserick15@ucla.edu>
Date:   Mon Nov 27 10:52:28 2023 -0800

    Revamped Journal Page
    
    - update the format to match the rest of the pages
    - allowed you to select previous journals
    - allowed you to create a new journal

[33mcommit cc98524632199cb61bcaace2a52d125275981b72[m
Author: Erosas15 <rosaserick15@ucla.edu>
Date:   Sun Nov 26 22:13:55 2023 -0800

    changed journal component
    
    -Implement Journal component with basic structure.
    - Introduce NewJournalEntry, JournalEntry, and JournalEditor subcomponents.
    - Add initial styling for a clean and organized journal display.

[33mcommit 7572808cf14ee09efda8d815afc6ff62ded05fb8[m
Merge: b7ef048 9971bd2
Author: Erosas15 <rosaserick15@ucla.edu>
Date:   Sun Nov 26 21:28:12 2023 -0800

    Merge branch 'pages'

[33mcommit 9971bd25d4ebee35fcfe38feb33082a81fabb7f7[m
Author: Erosas15 <rosaserick15@ucla.edu>
Date:   Sun Nov 26 21:28:02 2023 -0800

    made header dynamic
    
    made the button option to be dynamic so if we are signed in, we can signout instead. if we are signedout, we can signin

[33mcommit b7ef04831bf00e0b2f09625c5db33e748bec15a0[m
Merge: 9d6e703 5d41ad3
Author: Erosas15 <rosaserick15@ucla.edu>
Date:   Sun Nov 26 21:04:54 2023 -0800

    Merge branch 'master' of github.com:Erosas15/reflect-hub

[33mcommit 9d6e7033d6b543f4fd0d9f925d8cbcf9a44d5fd3[m
Author: Erosas15 <rosaserick15@ucla.edu>
Date:   Sun Nov 26 21:04:16 2023 -0800

    made the footer and header into components
    
    Organize project structure: move 'Header' and 'Footer' components into separate directories, and update 'LandingPage' and Signin Page to use new components

[33mcommit 00e592ce887421e46ad322421c901f452eb1ab7b[m
Author: Erosas15 <rosaserick15@ucla.edu>
Date:   Sun Nov 26 20:46:29 2023 -0800

    Updated formatting for signin page and index
    
    I changed the format of signin page to fit the format of the rest of the website. i updated index.css file because other files were inherting bad traits

[33mcommit dbafcd8a1629157624318fd49710cb831ffd4970[m
Author: Erosas15 <rosaserick15@ucla.edu>
Date:   Sun Nov 26 20:38:56 2023 -0800

    Change landing page layout
    
    I changed the landing page layout. I made it cleaner and added css. changed the colors to a pastel blue and dark grey color font.

[33mcommit 5d41ad3da221cdd0c5c8fb44983f315a1309dc8f[m
Author: X_Laptop <xandnea@gmail.com>
Date:   Sun Nov 26 18:24:15 2023 -0800

    Added SupportGroup page for group chat feature, also made stylistic changes to the journal

[33mcommit 06dc1ccb8dac51e16b7c3d2ed046f242c7cdb491[m
Author: Sragvi Vadali <reachsragvi@gmail.com>
Date:   Sun Nov 19 22:56:18 2023 -0800

    code to connect frontend and backend

[33mcommit 2bd2d3765275900525c645c233158412d48e7bf7[m
Author: Erosas15 <rosaserick15@ucla.edu>
Date:   Sun Nov 19 14:26:10 2023 -0800

    organized files, set up link for pages
    
    I moved my pages and their appropriate css files into their own directory. I set up App.js to figure out the routing between the pages using react-router-dom. Changed the button clicked so that it would switch to a page instead of rerender a different page - allows for better user experience.

[33mcommit d1a04d07b4c979dc991ffe0565d4a75289e687e3[m
Author: Erosas15 <rosaserick15@ucla.edu>
Date:   Sun Nov 19 13:53:47 2023 -0800

    restored removed files
    
    when i firsted create app, i deleted the report reportWebVitals and setupTests.js files

[33mcommit 9a0010af191a4a41d479b32036b5023e4ab60c96[m
Author: X_Laptop <xandnea@gmail.com>
Date:   Sat Nov 18 15:22:36 2023 -0800

    Created a basic Journal with a save button.

[33mcommit 052c08d9e5e98fd86a6a5dcd350f1320412091a5[m
Author: Sragvi Vadali <reachsragvi@gmail.com>
Date:   Thu Nov 16 13:21:02 2023 -0800

    changing the package.json and README with updated information

[33mcommit f6f727c3aecc216efcc8e0d686fa010bd9de62f4[m
Author: kaitlynsrinivasan <137968637+kaitlynsrinivasan@users.noreply.github.com>
Date:   Thu Nov 16 21:09:52 2023 +0000

    Incorporated user database/encryption into auth.js

[33mcommit f8241a5150c4e9bde5c62c55e12954df689427e4[m
Author: Ashvin Loghashankar <ashvinloghs@Ashvins-MacBook-Air-2.local>
Date:   Thu Nov 16 13:05:57 2023 -0800

    Adding a simple encryption file for the user data

[33mcommit 4ac30b8c86cba70923f4bd86db63e491f26df40c[m
Author: Ashvin Loghashankar <ashvinloghs@Ashvins-MacBook-Air-2.local>
Date:   Thu Nov 16 13:05:23 2023 -0800

    Added the code for adding a journal entry to the newly setup databse

[33mcommit b482566890e8266fd43b1a64ddcf79235e13fdd1[m
Author: Sragvi Vadali <reachsragvi@gmail.com>
Date:   Thu Nov 16 13:04:01 2023 -0800

    Changed file to export the database and give admin rights

[33mcommit 9219ad623348bc4abfd721c8177773a8a842441b[m
Author: Sragvi Vadali <reachsragvi@gmail.com>
Date:   Thu Nov 16 13:00:17 2023 -0800

    Initialized a basic database for the users

[33mcommit 29303439ec2705b5d6e67b091610f0996751aa2b[m
Author: Sragvi Vadali <reachsragvi@gmail.com>
Date:   Thu Nov 16 12:55:21 2023 -0800

    changed gitignore

[33mcommit 21f16db329c684b12037e4fe965c7582e87b30e6[m
Author: Ashvin Loghashankar <ashvinloghs@Ashvins-MacBook-Air-2.local>
Date:   Sun Nov 12 18:13:59 2023 -0800

    Backend DB functionality for Journal

[33mcommit fb10936426237facccae94b765435b3efcc20fed[m
Author: X_Laptop <xandnea@gmail.com>
Date:   Sun Nov 12 12:28:06 2023 -0800

    Set up and added stylization to landing-page as well as connected the login button on landing page to the login-signup page

[33mcommit 76f25135b62d9d6ba09ac4f5b1a74b03e0933f61[m
Merge: c8cefe2 6f79e83
Author: Erosas15 <rosaserick15@ucla.edu>
Date:   Sat Nov 11 17:09:10 2023 -0800

    Merge branch 'master' of github.com:Erosas15/reflect-hub

[33mcommit c8cefe2ea4214e4e8350953645afb32776bb11cd[m
Author: Erosas15 <rosaserick15@ucla.edu>
Date:   Sat Nov 11 17:08:38 2023 -0800

    Created login/signup form structure
    
    I created a signup form with ways to switch between the sign up and login. Set up basic structure and color using css.

[33mcommit 6f79e8300d3de9faff76d9746222f1f82e5f729d[m
Merge: 396b3e3 34878ec
Author: Sragvi Vadali <58544815+sragvivadali@users.noreply.github.com>
Date:   Sat Nov 11 15:58:20 2023 -0800

    Kaitlyn Srinivasan - Added firebase for authentication
    
    Added firebase for authentication

[33mcommit 34878ec20f89d5ebc6e837253b1a84a27e0e6d17[m[33m ([m[1;31morigin/Firebase-Authentication[m[33m)[m
Author: kaitlynsrinivasan <137968637+kaitlynsrinivasan@users.noreply.github.com>
Date:   Sat Nov 11 23:54:52 2023 +0000

    Added sign in/out functionality for authentication

[33mcommit 396b3e3e95b22256d74b8b7d7181fdb457add3c7[m
Merge: 33ba780 ae5bfb3
Author: Sragvi Vadali <58544815+sragvivadali@users.noreply.github.com>
Date:   Sat Nov 11 15:50:36 2023 -0800

    Merge pull request #1 from sragvivadali/firebase-init
    
    initialize firebase connection

[33mcommit ae5bfb3df9692334310016be70fd363672cba33e[m
Author: Sragvi Vadali <reachsragvi@gmail.com>
Date:   Sat Nov 11 15:02:19 2023 -0800

    initialize firebase connection

[33mcommit 33ba780cdbdcf4f5d6e08b6a49a7b34c2a3f8500[m
Author: Erosas15 <rosaserick15@ucla.edu>
Date:   Tue Nov 7 15:57:31 2023 -0800

    untracked and ignored client/nodemodules

[33mcommit 291f27770f88fa37a3b53e1b472eee6a46f34c2b[m
Merge: ef6221e 0cef6aa
Author: Erosas15 <rosaserick15@ucla.edu>
Date:   Tue Nov 7 12:53:49 2023 -0800

    Merge branch 'master' of github.com:Erosas15/reflect-hub

[33mcommit ef6221ed12dfb89c125ccc584964ebd07b030d12[m
Author: Erosas15 <rosaserick15@ucla.edu>
Date:   Tue Nov 7 12:53:21 2023 -0800

    I set up the basic folders and dependecies needed for the client side
    
    I created an index.html and index.js file for initial structure. I set up a basic structure for my teamate to work on. I linked it to some app js

[33mcommit 0cef6aa5ac2e7b6c9eebdd596cd2f563ffe32bed[m
Author: Erick Rosas <126840347+Erosas15@users.noreply.github.com>
Date:   Mon Oct 30 23:50:23 2023 -0700

    Update README.md

[33mcommit d227d16fa07bd00b8415535af9457c3b66936ed6[m
Author: Erosas15 <rosaserick15@ucla.edu>
Date:   Mon Oct 30 23:49:38 2023 -0700

    initial commit

[33mcommit f78da148e5a85bdeef93dd7ba86a2e0302ee1277[m
Author: Erosas15 <rosaserick15@ucla.edu>
Date:   Mon Oct 30 23:35:24 2023 -0700

    create repo
