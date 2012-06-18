---
layout: post
title: Small Android Agile Steps
tagline: One small step for developers, one giant leap for users
description: Agile android app dev tips
categories: blog
tags: [android, mobile, java, agile]
---

Want to get more agile in your android application development? Here are some easy steps.

# Do  not run PMD and Checkstyle through your IDE

Do not run PMD and Checkstyle through your IDE sounds like unsound advice, but hear me out. 
Both PMD and Checkstyle bomb out after getting over 500 items, if you run a codeqa 
dashboard with its own ant run script than you do nto have this problem(see my ActiveWallpaper bitbucket for an example).

I execute mine 3 times duuring the workday and than have a nice todo list to work off of cleaning up
and improving my code.

# Make sound OOP and Performance choices

What makes TDD sweet on serverside java is that you can do fancy code patterns that
not only hide code complexity but also allow you to test the interface without the 
unit tests being broken every time you change the underlying codebase. Due to mobile 
developers not using interfaces in  mobile due to the lack of market dominance of 
high performance multi-core devices it makes TDD somewhat useless you are really using
a code pattern with heavy use of interfaces. Expect that to change as multi-core 
android devices dominate the market and as we get better MVC and MVP frameworks.

Simple things like integer comparions evaluate to boolean and thus you can use them to 
eliminate heavy if and then statement bloat. 

# Little things become Big things

You can load things in the raw subfolder of the res folder as files with txt entensions and 
have them show up with R class references for easier manipulation, I use it to load openGL shadders. 
There are all sorts of little things like this that come in handy.


