---
layout: post
title: Agile Android Build System
tagline: can haz agile androids
description: goals of an agile android build system
categories: blog
tags: [java, android, agile]
---

I am somewhat excited I wil have an alpha version of my build tool or system  out this 
next week.  Let me tell you why. 

Have you interviewed for an Android Developer position in Chicago lately? Everything from
out Mythical beliefs such as you canntot do TDD using Dalvik. For one, there is a collection of 
unit tests in the android SDK framework that are non-instrumented for that purpose of 
testing the logic of an application. And for two, there are a lot of developers out there 
that do not understand the relationship between a better Virtual Machine via both JIT 
and multi-cor emobiel devices and the ability to use interface pattern frameworks on such 
mobile devices to separate parts of concerns of an application.

We have two uses cases for being agile in our mobile development. In one case we need 
to refactor the UI implementation rapdialy due to the process of defining a mobile product 
that migth be new, a startup for example. In the othe use case we have a need to 
rapidly refactor the UI to add a new set of features to get it into the market before 
our compeitior does.

These use cases and others normally are the opposite of how a normal consultancy or
design agency works as their thing is that big set of hours and the large dollar amount of that
inflated-by-developer-ignorance client billing.

But let us instead focus on removing our ignorance by examing some trends.

# Multi-Core Mobile CPUs

In 2008 when HTC launched the G1, there were no android devices with multi-core 
cpus. As you know if you had exposure to JavaMe the Golden Rule was avoid interfaces 
as they are a performance hit on single mobile cpu cores.

Currently we are at 75% of the market having multi-core cpu android devices. What does 
that mean in terms of android application development?

# New Improved JIT

With the 2.x series of Android OS a new JIT for the Dalvik VM was introduced that out 
performed Sun Microsystems own VMs in the mobile space. With that speed increase 
we could start to make use of more interfaces in our coding. Not fuly as in a full 
MVC framework but more than we had before.


# The OOP Interface Innovation

Part of the innovation of OOP interfaces is somewhat non-obvious. We are able to decouple
the User Interface from the data layer, and the business logic layer. That in turn means less 
mocking of objects during unit testing it also means that each time something changes in the 
application code often you will not have oto rewrite a unit test.

# Annotations, Dependency Injection, oh my

To further separate layers and concerns and avoid repeating boilerplate code we can use 
a combination of annotations and dependency injection frameworks.  Not just on the 
application side as we can re-use a dependency injection framework in writing 
instrumented tests so we have gains on both sides of where development time is spent.

# The Little Side Selenium inspired project Native Driver.

Did you know that if you switch the unit test data to being TAP format you can 
than use the NativeDriver parts to collect that data upon repeated testing runs and have 
it sent to a local java web application that presents it in a more stastically and analysis
firendly way. Now that is the Instrumented Test side. With a little more work you can 
send the javamonkey test results to the same local web app using the same nativedriver
bridge.

# The Current Android Build Mess

I did not rewrite the Google Android SDK build scripts. Instead I did surgery taken 
parts of it moving it around and than adding some needed parts. The big part with a 
combination of over documentation and integrating Log4ANT I wil be able to change 
it when Google makes achange rather quickly and have debug output to see and veify 
the changes are correct instead of say waiting on someone hacking Buildr or Gradle or Gant 
to do the same as its less rewriting because I am not stuck rewriting the android sdk build macros.

# What will be in the Alpha Release

GWSAntDroid features include dependency managment using Apache IVY, use of Log4Ant and 
Antxtras to take some pain out of having to change it each time when Google updates the sdk.
Project modules suported will be App, Test(instrumented), Library(Android Project Library), and
JavaMonkey(Java and Sikuli support).  I ended up treating the libs folder synching via the 
Eclipse IDE ADT plugin as a mistake on Googlers part and thus have the developer use the 
ext-libs folder instead and than have that gitignored but some extra power comes in as I treat the sdk as a repo so the 
extra jars you normally use beyond the support jar are just a flag setting to include the 
project(hopefully I do not get bitten by that decision).

Thus with the exception of the jars to bootstrap the build system, most of the dependency 
libs of the projects are now in dependency management either IVY or in the fresh install or 
update of the android sdk.

In closing a word to all those developers publishing android project libraries, that
includes me as guilty party also which means I need to do it as well, since Google gave us 
the ability to have an android project library as a jar file it would be nice if everyone 
could at bare minimum put the jar in theirrepo as a download as than we do not have to worry
about one developer uses this Maven thing and another one uses gradle and another ones ant, etc.
It will not get rid of all the issues about the android application build system, but it will help.

Lets change things and make every Android Applicaiton Developer a hero and knock it '
out of the park.

