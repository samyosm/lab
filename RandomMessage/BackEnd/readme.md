# Objective

My objective was to become more acquainted with MongoDb and with a new working startegy. I.e. in a more planned way. Moreover, I wanted to practice the principe of encapsulation.

# Completion

First of all, I did everything with MangoDb as a database to train my MongoDb skill. The only mistake I made this time was to mispell MongoDb with MangoDb the entire project.

To continue, I wanted to complete my project in a planned way. However, I did not want to plan everything up to the line of code. As such I did this. On paper, I only planned how the general concept would look like. Instead of creating a file when I needed to do so, I created all the files I would need upfront. Moreover, instead of testing after I finished coding a little bit of the project, I know tested only after completing a big part such as the entire Database implmentation or the entire API implementation.

Finally, as to make it as simple as possible for other developers, I wanted to hide the little details in my code. As such, there is only two endpoints.

- GET v1/message
- POST v1/message

# Surprises

Even if unplanned, I finished by learning a little about NGNIX, Proxy Servers, and IPV6. I really wanted to make the endpoints to all my projects a subdomain and only use 1 server. Moreover, I wanted all of them to use PORT 80 so no one would have to precise the port when using the API. I ran into the problem that multiple apps couldn't use the same PORT.

At first, I tried something using IPV6, but that failed miserably.

Then, I learned about proxy servers and about how I could redirect a request to a different port based on the url using them. I opted for NGNIX and it worked perfectly.

# Attestation

If you would like to try my little api, you could test it by sending request to the following url: http://randomms.samyos.live.