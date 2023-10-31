# Zero Origin Numbers

## Introduction

One of the topics new programmers often struggle with is the concept of zero origin numbers. 
This is a fancy way of saying that the first item in a list is item 0, not item 1. 
This is a concept that is used in many programming languages, and it is important to understand it.

## Why Zero Origin Numbers?

There are two basic concepts to how things are numbered.  When counting items, if there is nothing 
at all, that's zero.  If there is one item, that's one.  If there are two items, that's two.  And so on.

Counting is all about "how many".

The other concept is about location.  Where on the list is the first item?  This is called the index.
You could also say the offset.  The first item on the list is at offset 0.  Meaning that it is in the 
very first position, so offset is zero.  The second item is at offset 1.  The third item is at offset 2.

The offset is all about "where".

Computers look at data as being stored at a particular location in memory.  Then they add the offset to 
find the specific element you need.  So if you want the first item, you add 0 to the location of the list
because the first item is at the original memory location.  The second item is next in line, so you have
to read the next space in memory.  That's the data address plus 1. The location of the data plus 1 position
further.  The address plus the offset gives you the exact element you are looking for.

How many positions past the beginning? The first element is at the beginning, so the offset is zero.  The
second element is one position past the beginning, so the offset is one.

## Why is this important?

When you are working with lists, you need to know where the items are.  If you want to get the first item,
you need to know that it is at offset 0.  If you want to get the second item, you need to know that it is
at offset 1.  

When you create a list of items with ten items, there are ten items in the list.  But the last item is at
offset 9.  The first item is at offset 0.  The second item is at offset 1.  The third item is at offset 2.

## The key distinction

The key distinction is that when you are counting items, you start at 1.  When you are looking for the
location of an item, you start at 0.  

Humans like to think of "it's in the first position".  But computers like to think of "it's in the zeroth
position".  This is a very important distinction to understand.

The count is how many.  the index, or offset, is where.

## Examples

Let's look at some examples.  Let's say you have a list of items.  The list has 10 items in it.  The first
item is at offset 0.  The last item is at offset 9.  The count of items is 10.  The count is how many.  The
offset is where it is stored on the list.

Here's a common example.

```my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]```

How many items are on this list?  The answer is 10.  The count is 10.  The count is how many.

Where are they stored?  In my_list - at offsets 0 through 9.  That is the index, or offset.  The offset is
where.  

Once you get the hang of offsets, it's easy.  Just don't confuse the count with the offset

## Conclusion

A common mistake is for new programmers to look in position 10 for tenth item on the list.  But the tenth
really 9 positions past the first element.  So you need to look in position 9.  The tenth item is at offset 9
because the first item is at offset 0.

Count = 10;
Offset = 9;

When you say things like "Computers count from 0", that's not really true.  Computers count from 1.  But
offsets start at 0 because offsets are added to the base position.  The first item is at the base position,
so  you add 0 to the base position to get the first item.  The second item is one position past the base 
so you add 1. 

The count is how many.  The offset is "how far from the base", otherwise, the index position.
 