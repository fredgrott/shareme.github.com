---
layout:post
title:UI Perfection
description: UI perfection 
tagline: UI perfection impossible?
categories: blog
tags:[android, java]
---

Now on the last major steps of developing a Holo UI Integration library.
It combines some 3rd party libs with my own classes to enable a predictable 
look and feel across mulitple android OS versions with the same exact 
method calls in android 2.x and android 3.x as in android 4.x.

It also will contain enough helper classes to make fast android application 
prototyping a breeze while at the saem time maintaining best practices so that 
the application prototype is a good representation of a well behaved and good 
performance behaving android application.

The challenge now is to find that one firm or company that understands the value 
of having this completed in enabling fast android application prototyping. The 
startups I have recently interviewed with all have this we do not want you to do side or 
3d party projects, not tometnion the lying game about funding.

You would think a marketing agency would be the perfect fit for something like this in 
that they have to fast prptotype android applications for clients. But, I have found at 
least in previous investigations of firms that they want to push iPhone 
application development best practices down android developoers throats rather than 
adopt best development practices that are actually beneficial to a mobile UI that 
happens to be java VM based.

In such cases TDD is really a damper on things as it over produces testing  feedback that 
has no bearing on the optimization of the mobile UI in the android application.
Not to mention that a mobile UI should in fact have such things as predictiable 
AsynTask behavior and execution, an event bus, and a Cache for application objects 
as a set of standard best practices.

Its not just graphical look in the mobile UI on android as you have to pay attention 
to some java best practices for applications as those best practices become the underlying 
foundation of why that android application UI has predictable behavior across multiple 
android OS version while maintaining the same exact look.

For those who might want to follow along in code, the alpha project is at:

[GWSHoloIntegration]('https://bitbucket.org/fredgrott/gwsholointegration')

Keep in mind that in its alpha state that I am re-loading 3rd party libraries and 
than modifiying code to integrate them together so we get one set of method calls to 
use on all android OS versions. As far as production ready I do not expect to be 
or have it production ready until I resolve finding a firm that appreciates this 
type of off-time android development passion and work. Hopefully, that is soon as 
I really want this library in production ready mode to be used as much as possible.


