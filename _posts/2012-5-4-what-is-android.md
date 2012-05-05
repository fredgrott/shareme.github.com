---
layout: post
title: What is Android
tagline: of the mobile deevice kind
description:  A description of What the Android OS is and the Android Application system
categories: articles
tags: [android, java, iphone, javaME, Google]
---

So with all this talk about Android market share and the copyright/IP trial it might be helpful to understand
what the Android OS and Android Application System is and their relationship to the Mobile Device Indsutry
as far as new innovations are concerned.

## Mobile Industry Background

Although there were many mobile OSes in the beginning years before year 2000, mobile did not really take off
until Nokia partnered with some of its competitors to come up with a new mobile operating system. 
Right before and during that time Motorola came up with a way to run java on a mobile device by stripping
out  major parts of java and getting Sun Microsystems to declare a new java edition catering to mobile devices.

While Java2Me gave us an application system to build on multiple OSes it was hamstrung by the OEMs into
this we will never update the JVM/Application part of the OS and thus was a nightmare to develop 
and maintain mobile applications.  Some middleware firms saw this road block as an opportunity to
develop a new JavaOS for mobile outlook. Sun even bought one of the firms and its IP became javaFX.

## Competing Smartphone Definitions

Its at this point that two firms decide to not rely on OEMs and comeupwith their own versions of
Mobile OSes and redefine what a Smartphone is as Nokia originally defined the smartphone in its
first release of a Series60 device sometime ago. Apple of course came up with a Mobile OS that
mimic their MacOSX in the mobile context with a embedded Webkit Webview, GPS, etc;.

Of course Google at the same time came up with their own definition after having bought
the startup Android INC.  

## What is Android?

Android is thinking about the mobile OS as the empowering the human user operating as the
a human recognized mobile computing device serving humans hence the term android which ,means
a robot like computer in a recognizeable human form.  But how does that go beyond say
just embedding webkit into a mobile OS for touch-based mobile devices?

## The Android Operating System

We have some layers:

<ul>
<li>Application Layer</li>
<li>Application Framework Layer</li>
<li>Core Librariues in C and an Android Core runtime library along with the Virtual Machine Dalvik</li>
<li>Linux Kernel andmobile device drivers</li>
</ul>

<img src="{{ site.base_url }}assets/img/android-system-architecture.jpg"/>

Everything in blue is what the developer relies on in the form of APIs to write the Android mobile application.
Everything in the yellow layer is the Virtual Machine called Dalvik. Everything in green is in C++ and 
provides such things as OpenGL WebkitWebview and other media libraries. Everything in red is the 
OS kernel.

## Android Magic:  Application Structure

Themagic that Google added to Android is in the application components. 
First and foremost, each application runs in ina dalvik VM instance and as a separate Linux process and 
under a separate user. This is why we do not have a traditional multi-user with mobile android devices
amd its a security quirk you have to be aware of when designing mobile applications as most 
people from time to time hand over their device to their friends to show an application.

In an android application we have these possible components:

<ul>
<li>Activities</li>
<li>Services</li>
<li>Content Providers</li>
<li>Broadcast Receivers</li>
<li>Intents</li>
</ul>

These components allow us not only to talk to the indiidual components of the application but to talk to other
installed applications and components. If you will, an android nervous sytem interface in the same way that 
a human organ hooks into our own nervous system.

### Activities

Each androdi application is broken down into manageabe activity units with one main activity identified 
in the androidi manifest as the applicaiton starting main activity. Activities represent single user screens
and are often indepentn of one another.

### Services

You saw the IPC component in the Linux Kernel of the Android Architecture diagram, right? The services 
component of android applications allows us to integrae with the IPC and run things in background, for 
example file downloads such as a downloaded application. Its just a service and no user interface is
provided.

### Content Providers

A content provider is an abstract of application data that happens to be tied to the SQlite component
of the android OS system. Because we have a multi-user system where each application is its own user,
each application with the right user set permissions can query this application data through the content
provider.

### Broadcast Receivers

Its actually the object that receives notifications in form of Intent Objects. The notification bar on your android 
device displays results of receiving such Intent Objects. These are special Intents known as system wide
boradcast annoucements. However, applications can also receive broadcasts from other applications
to start an application component. 

### Intents

An Android Intent is this magical application call,notice I said application call?  For example, Webkit Webview can send
an intent upon receiving a user click on a mobile telephone link and open the dialer to make the call. But that is not
all, you can as an indvidual developer send intents to user installed applications.

## Android Nervous System

Its the Android Nervous System that connects application components to each other and other applications
both system applications and user installed applications that makes the Android OS unique among Mobile
Operating Systems.  Other Smartphone Operating Systems are less human or if you prefer less social.