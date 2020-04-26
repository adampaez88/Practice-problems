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






# As you may know, once some people pass their teens, they jokingly only 
# celebrate their 20th or 21st birthday, forever. With some maths skills, 
# that's totally possible - you only need to select the correct number base!
# For example, if they turn 32, that's exactly 20 - in base 16... Already 39? 
# That's just 21, in base 19!
# Your task is to translate the given age to the much desired 20 (or 21) years, 
# and indicate the number base, in the format specified below.
# Note: input will be always > 21

def womens_age(n)
  "#{n}? That's just #{20 + n%2}, in base #{n/2}!"
end


def womens_age(n)
  "#{n}? That's just #{n.even? ? 20 : 21}, in base #{n / 2}!"
end

def womens_age(n)  
  "%d? That's just 2%d, in base %d!" % [ n, n-n/2*2, n/2 ]
end

def womens_age(n)
  b = n/2
  m = n%2 > 0 ? 21 : 20
  "#{n}? That's just #{m}, in base #{b}!"
end










# In the following 6 digit number:

# 283910
# 91 is the greatest sequence of 2 consecutive digits.

# In the following 10 digit number:

# 1234567890
# 67890 is the greatest sequence of 5 consecutive digits.

# Complete the solution so that it returns the greatest sequence of five 
# consecutive digits found within the number given. The number will be passed 
# in as a string of only digits. It should return a five digit integer. The 
# number passed may be as large as 1000 digits.

def solution(digits)
  result = 0
  digits.size.times do |n|
    new_number = digits[n...(n + 5)].to_i
    result = new_number if new_number > result
  end
  result
end

def solution(digits)
  digits.chars.each_cons(5).max_by(&:itself).join.to_i
end

def solution(digits)
  values = []
  for i in 0...digits.length - 5
    values.push digits.slice(i, 5).to_i
  end
  return values.max
end

def solution(digits)
  arr = []
  str = digits.to_s
  (0..digits.size - 5).each do |i|
    arr << str[i...i+5]
  end
  result = arr.max.to_i
 end












#  The function is not returning the correct values. Can you figure out why?
# get_planet_name(3) # should return 'Earth'

#broken code
def get_planet_name(id)
  # This doesn't work; Fix it!
  name = ''
  case id
    when 1: name = "Mercury";
    break;
    when 2: name = "Venus";
    break;
    when 3: name = "Earth";
    break;
    when 4: name = "Mars";
    break;
    when 5: name = "Jupiter";
    break;
    when 6: name = "Saturn";
    break;
    when 7: name = "Uranus";
    break;
    else 8: name = "Neptune";
    break;
  end
  return name
end


# solution
 def get_planet_name(id)
  %w[0 Mercury Venus Earth Mars Jupiter Saturn Uranus Neptune][id]
end