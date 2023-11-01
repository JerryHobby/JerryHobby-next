# Application Code Testing

## What is application code testing?

All popular programming tools support automated testing. These tools require you to write code just to test other code
that you have, or will, write for you application.

This sounds like an excessive amount of work as it requires a lot of extra code that does nothing but check other code
for bugs. Nobody wants to spend that much time writing code that doesn’t actually reduce the costs of developing
software.

## How code testing works?

The method every programmer uses is to test their code as the develop it. When they write a function that adds numbers
together, they quickly examine the routine and maybe put some print statements in there to confirm the desired results.

This method works very well for scenarios that are really easy to understand. If a user supplies two numbers, it adds
them together and returns the result.

But what if the user supplies an empty value or a non-numeric value? These unexpected parameters cause problems. If the
programmer did not think of these particular exceptions, then the code could fail.

This “as you go” testing method is not always complete and may not factor in every potential scenario.

## Code Testing Frameworks

Code testing frameworks allow you to create code that calls your function with a wide variety of parameters just to see
if it handles everything correctly.

When you run those tests, it tests every function in the application to make sure it does exactly what it’s supposed to
do. Then at every release, all tests can be run against the entire application to make sure nothing was broken.

That way, even if the code used to work, if new problems get introduced, they are caught before they cause application
failures.

## My Biggest Coding Bug Ever

One of the applications I developed years ago had a component that took data from a report, extracted it, and charged
the customer based on what was on the provided invoice.

The challenge of this particular application is that it had to scan the document and find the items and prices to
invoice. We had code that did this before, so not so tough.

The problem came about when they generated the documents, they had a small problem with the format of the document. For
example:

```
Item 1: 1234.00
```

That was what my code was looking for. That’s what previous software was also looking for. It’s computer generated, so
it’s a reliable format and should work 100% of the time.

But when they wrote their documents, they inadvertently changed it by eliminating the space between the : and the
number. So my application would skip the first number and extract the rest. I captured 234.00.

Technically the bug was on their end. But the point is, I never caught that mistake. My code went into production and it
costs the company a huge amount of lost revenue. Potentially in the millions of dollars over time.

When I developed my code, the tests worked because I was relying on the documented formats. My testing was good. But
never went back and retested everything.

## Use Code Testing Frameworks

Had I used a proper testing framework, then I would have rerun all the tests whenever anything changed in the
application. From end-to-end. Every single component would be evaluated by the testing code. While it worked fine when
the code was written, it would break when the other component was introduced. That would have been caught.

It is virtually impossible to test every component of an application without using comprehensive testing programs like
this. Thousands of small scripts that verify all the details of the code every time anything changes.

Yes, it costs more up-front. But it saves a fortune trying to find and fix problems after the code goes into production.

Testing frameworks won’t catch everything, however, they will catch all the most important things such as calculations,
data manipulation, etc. There are even testing frameworks that control what the screen looks like at any given time so
they can flag errors that affect the appearance of the app.

## Conclusion

Code testing frameworks and methodologies will save you money in the long run by creating a far more reliable product.
This saves you from issue like my example above, but also in the reporting, tracking, and fixing of other errors after
release. Not to mention the customer confidence impact of releasing buggy code into production.

