---
layout: post
title: Android Device ID
tagline: Can Haz ID?
description: Getting that unique Android Device ID
categories: articles
tags: [android, java, mobile]
---

Its important to obfuscate and prevent privacy leaks while at the same time 
being able to identify a unique device so represent our unique application user.
With some general knowledge I show you how.

# Every OS has a device ID 

Despite some error prone information every OS that implements a URI scheme does
in face have aunique ID called an UUID. This includes MS WinPhone, Apple iphone,
Android OS, Symbian, etc.  And just like that ID that mobile operators use 
for devices its something that you want to keep obscured to avoid privacy leaks 
and avoid security breaches.

# Hash versus Random

Android OS among those mobile OSes that use java is unique in that it has multiple 
Virtual Machine instances in which case Hash will cause an ID collision given enough
time. What we can do instead is randomize the UUID to obscure it. Warning, this is not
fool proof to fully prevent a determined criminal from illegal hacking attempts 
to guess that un randomized UUID. If you are not limiting its use than you really should
encrypt that randomized UUID.

The edge case of a stolen device is not applicable as the criminal can get root
to get the full un-randomized UUID in the first place. I am referring more to the 
privacy leak when the randomized-UUID I am using say to record application diagnostics
uploaded to a server or using the randomized UUID as an ID for analytics tracking gets
leaked out to someone that is not suppose to see it. Because its still not linked 
to someone's real name or mobile cell number, etc its somewhat less troubling.

# Factory Reset

Because we store the randomized UUID in application preferences obiovusly a 
factory reset will start over with new randomized UUID even though the raw 
un-randomized UUID is still the same. That edge use case probalby is best handled 
by using the backup agent ot back up application preferences.

# The CODE, I can Haz Code

Now, before I show code notice that I did not talk about whether the device had
mobile operator telephony access. Why? becuas eby using the real UUID you by pass all
those error prone methods to have a way that it works on all devices no matter if its
a mobile phone, tablet,or googleTV. Okay, here is the code:

<script src="https://gist.github.com/2759664.js?file=android_deviceID.java"></script>

Basically, if null we first check our preferences. If not null than we randomize the 
UUID before storing it in preferences. The usual way you would use this type of class
is to make a call in the application class to initialize it that way the 
randomized UUID is computed when the application starts.

# Final Thoughts

Works only with non-sensitive databeing associated with the randomized UUID.If you need
to associate sensitive data with the UUID than you need to both randomize and encrypt 
that UUID.