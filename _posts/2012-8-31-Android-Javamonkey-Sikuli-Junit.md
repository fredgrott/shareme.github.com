---
layout: post
title: Android Javamonkey Sikuli Junit
description an addition to Sikuli for android
tagline: haz sikuli
categories: blog
tags: [java, android, sikuli]
---

So we have this nice Java api interface to monkeyrunner. What is the obvious missing 
part? How about a junit set of classes that setsup and runs unit test through 
sikuli and generates the reports in xml and html formats?

So that is one of the side libraries being developed to be used with GWSAntDroid. 
Why? I did not want to always have to change contexts and do it in python and since 
we accessing Sikuli in java anyway the test report outputs might as well be in junit style 
as xml and html right?

So what is this good for?  Well, you have this nice User Interface Development Director.
While he or she may undrstnad iphone he or she might not understand android too well and 
he or she only might know how to visually setup a regression test in sikuli for a use case.

So you as the person working on the java android code want the ability to get a test report 
back in junit style in xml or html that shows the excution of that use case regession test 
and any new regression testing use cases you come up with. Makes it easier on you and 
I might even be able to re-use what I learned about cucumber-jvm and gherkin to re-use it 
on the java monkey side to have BDD testing the sikuli way to than make the unit 
test reporting English like to the User Interface Development Director.

With modern junit we already have access to hamcrest so If I add fest assertions, than 
cucumber gherkin I should be able to get fully get the junit tests in full English but 
coupled to the Sikuli visual way of testing.
