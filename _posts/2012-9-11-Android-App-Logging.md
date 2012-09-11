---
layout: post
title: Android App Logging
tagline: can haz log
description: Android App Logging
categories: blog
tags:[java, android logging]
---

Part of the context is missing when just relying upon unit testing alone 
as we are testing mobile GUIs. So one of the last steps in completing the
alpha version of GWSAntDroid is coming up with a decent Logging 
of the application strategies.

Logbackandroid seems up to date and ready to serve that purpose. But I think
I may have to add an extra tweak to it in the form of some extra classes.
Let me explain.

In android logging we have the log levels as containers if you will and I 
certainly could setup logback-android to save alog file for each level.
A better set up would be since I will be using a special log class to 
get and log method traces and heap allocations to track view optimization it 
it would be handy to have the log files be stored by the classname rather than 
by log level as far as log files, than of course also include the date-stamp and 
time-stamp in the file name.

And the last part have it detect where to save it external SD card if it exits or
internal Sdcard if its say a tablet.

Than when I execute the instrumented unit testing I can match up that set of tests
to the app log files and that gives me a QA context of the view classes 
per the measurements of heap sizes, allocations, etc.

So I get to play with logback-android for the next few days.
