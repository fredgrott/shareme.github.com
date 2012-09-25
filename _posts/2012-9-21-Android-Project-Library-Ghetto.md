---
layout: post
title:Android Projec Library Ghetto
description: APL rant coming
tagline: I can rant
categories: blog
tags: [java, android, androdi project library]
---

Before I being my rant, everyone likes the hard work everyon has put into 
developing android project libraris to make our android application development 
lives easier.  Also, I am guilty as charged for what I am about to rant about.

Android development projects are gettingmroe complex where you have at least one 
android project libraries orseveral chained to your android application project.
This is coming from a Java enterpsie Server Side point of view. Why not have 
proper logging of the android project library?

What do I mean by proper logging?  You log the start entry point of a method and 
the state and values of objects as they change in the method. Why do this?
Because it just MIGHT REDUCE DEBUGGING BY 90 PERCENT, would not that be a good
goal to reach?

So you do not use a better log system like logback or log4j, that is still not 
a very good excuse think of the added debug load you are placing on the developers 
using your android project library.

But, it passed MY TESTS...you really want to stick with that? In a complex 
systems there is no such thing as your tests will not always more often than not
pick up how the end devloper uses the library.

Not to mention the side benefit of your own debugging load being reduced as well 
if you  just added some log statements. Why not join me in making the 
android application developer the hero by putting some log statements in your 
android project library rather than just a token few today.
