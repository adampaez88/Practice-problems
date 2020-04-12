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





# This is a beginner friendly kata especially for UFC/MMA fans.

# It's a fight between the two legends: Conor McGregor vs George Saint Pierre in Madison Square Garden. 
# Only one fighter will remain standing, and after the fight in an interview with Joe Rogan the 
# winner will make his legendary statement. It's your job to return the right statement 
# depending on the winner!

# If the winner is George Saint Pierre he will obviously say:

# "I am not impressed by your performance."
# If the winner is Conor McGregor he will most undoubtedly say:

# "I'd like to take this chance to apologize.. To absolutely NOBODY!"
# Good Luck!


def quote(fighter)
    fighter.downcase == "george saint pierre" ? "I am not impressed by your performance." 
    : "I'd like to take this chance to apologize.. To absolutely NOBODY!"
end



def quote(fighter)
    {
      'george saint pierre' => 'I am not impressed by your performance.',
      'conor mcgregor'      => "I'd like to take this chance to apologize.. To absolutely NOBODY!"
    }[fighter.downcase]
  end


  def quote(fighter)
    fighter.casecmp("george saint pierre") == 0 ? "I am not impressed by your performance." : "I'd like to take this chance to apologize.. To absolutely NOBODY!"
  end



  def quote(fighter)
    winner = fighter.downcase
    if winner == 'george saint pierre'
      return "I am not impressed by your performance."
    else
      return "I'd like to take this chance to apologize.. To absolutely NOBODY!"
    end
  end







  # Complete the solution so that it reverses the string value passed into it.
  # solution('world') # returns 'dlrow'
  def reverse_string(str)
    str.reverse
  end


  #alternate
  def reverse_string(str)
    str.reverse! #reverse! reverses a string in place
  end