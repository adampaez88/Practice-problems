# Create a method max that accepts a list and a block, and returns the item that is the maximum using 
# the block as the comparator.
def max list, &block
    list.max(&block)
end




# Create a method count that accepts a list and a block, and returns the total number of items 
# for which the block returns true.
def count list, &block
    list.count(&block)
end




# Create a method map that accepts a list and a block, runs the block for each item in the list, 
# and returns a new array with the block return values.
def map list, &block
    list.map(&block)
end




# Create a method minmax_by that accepts a list and a block. The method should return an array 
# containing the min and max list elements, based on their return values from the block
def minmax_by list, &block
    list.minmax_by(&block)
end




# Create a method drop_while that accepts a list and a block, and returns a copy of the list that skips 
# over elements from the left, for as long as the given block returns true.
def drop_while list, &block
    list.drop_while(&block)
end




# Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the 
# list of size n, like so:
each_cons([1,2,3,4], 2)
  #=> [[1,2], [2,3], [3,4]]
each_cons([1,2,3,4], 3)
  #=> [[1,2,3],[2,3,4]]
# As you can see, the lists are cascading; ie, they overlap, but never out of order.
def each_cons list, n
    list.each_cons(n).to_a
end





# Create a method first that accepts a list and an optional parameter n. If n is unspecified, it returns 
# just the first element of the list. If n is specified, it returns up to that number of elements 
# from the beginning of the list.
def first list, n=nil
    n ? list.first(n) : list.first
end






# Create a method zip that accepts two lists of the same length, and combines 
# their result into a single array, like so:
first = ['a', 'c', 'e']
second = ['b', 'd', 'f']
zip(first, second)
    #=> ['a', 'b', 'c', 'd', 'e', 'f']
def zip first, second
    first.zip(second).flatten()
end