# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer: 
One of the object-oriented programming languages that I have been exposed to is Ruby. Object-oriented programming or OOP are object and method based that is used to group similar things. These collection of things can be accessed through iteration, invocation calls, looping, and allows mutation through its elements. The objects which are made of key:value pairs are identified as the real things. Depending on how you want to return the objects, OOP can enclose these objects based on the conditions that you put the objects into and can only be accessed by the method you use. I assumed Functional programming, on the other hand, makes use of functions. 

Researched answer: 
Based on what I read from resources online, Functional programming is based on pure function. It takes an input, applies a process and returns a certain output or value. Unlike, Object-Oriented Programming, Functional programming doesn't use state because it functions in its own scope. It works independetly and avoids mutable data. This way, it can avoid what they say "side effects" but can take inputs and still reusable. While Functional Programming is based on pure functions, Object-Oriented Programming is based on objects and classes. OOP code can be encapsulated depending on how you set it. JavaScript makes use of both OOP and Functional Programming.

2. What is the difference between a Float and an Integer in Ruby?
Your answer:
A float takes decimal values, however it needs to be declared when writing the method to print the decimal numbers. An example is: 
p 9.0 / 5
output ---> 1.8

An integer, on the other hand, are whole numbers and can return negative or positive. Example:
p 9 / 5
output ---> 1

p 2 - 10
output ---> -8

Researched answer:
Based on what I read from resources online, float and integer are both numerical data. However, integers doesn't numbers with decimal points. It will just round it down. Float, on the other hand, return the numbers with the decimal points, giving an more detailed response.

3. Ruby has an implicit return. What does that mean?

Your answer: Implicit return means giving an output without having to include the word "return". In Ruby, for example:

def baby_name
    'PJ'
end
p baby_name
output --> "PJ"

Researched answer: 
Based on what I read from resources online, I found the same definition as I have that it gives an output without having to include the word "return". In addition to that definition, I also have read that Ruby automatically returns the value of the last line and writing the "return" is not necessary. Although it accepts the word "return", for best practice and keeping the code cleaner, the word "return" is not included.

4. What is a block in Ruby?

Your answer: The block in Ruby are defined with the use of do and end or curly braces and includes argument inside pipes |argument|. There are a lot of different methods that can be attached with "do" depending on what you want to return. For example: 

momkids = ['Cassie', 'PJ']

momkids.each do |value|
    p value
  end

output --> "Cassie"
            "PJ"

Researched answer:
Based on what I read from resources online, it was the same as my definition which is it is defined with the use of do and end or curly braces and includes argument inside pipes |argument|. In addition, I found that it can take multiple arguments.

5. What is an instance variable in Ruby?

Your answer:
An instance variable in Ruby pertains to where object can be stored. Object is an instance of a class, instance variable is where to place them. The variables are identified with the use of "@". An example is:

def initialize student, grade
        @student = student
        @grade = grade
end

Researched answer:
Based on our LEARN academy lecture notes, instance variables are identified by having the @ sign. It is used for the class where it belongs to, meaning it's inside the scope in between def and end. 

## Looking Ahead: Terms for Next Week

1. PostgreSQL: PostgreSQL is an open-source relational database management system. According to sources online, it has been very stable and is widely used by a lot of known online companies. Being an open-source makes it easy to upgrade.

2. Ruby on Rails:  Ruby on Rails is an open source framework for Web development. According to sources online, it allows you to easily launch a web application. It's ability to be used by both front-end and back-end makes it a complete tool in building a web application.

3. ORM:ORM or Object Relational Mapping connects code objects to databases. According to sources online, it allows you to build queries to access the database.

4. Active Record: Active Record is an ORM. This means that it can perform queries on databases showing that there is data and logic.

5. Migrations: Migration in databdase means transfering data from one source to another database. This means that once a migration is established it can be used for another databasae.
