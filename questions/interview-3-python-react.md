## Part 1

React Hooks and Component State
about the purpose and behavior of React hooks.

Role-Based Timesheet and Chatbot Capabilities

Python Data Structures and Performance
to explain the differences among lists, tuples, sets, and dictionaries.

Mutable Default Arguments
to predict the output of a Python function that appends values to a default list
Shallow and Deep Copy
Database Experience and Flash-Sale Design
flash-sale scenario requiring database stability under heavy traffic and protection against duplicate purchases;

RxJS and Infinite-Scroll State Management
how you would manage state and rendering for an infinite-scroll table receiving 500 records from an API while displaying only 25 at a time.
⁠

## Part 2

Reviewed RAG chatbot and localization challenges
⁠Identified Python data-structure misconceptions
⁠Explored database design and flash-sale concurrency
⁠Assessed Angular virtual scrolling and state management

## Part 3

React Filtering and JavaScript Fundamentals

Anywhere we can use use memo for filtering or like caching the results or calculations. Can we use use memo for that?

do you know the concept of event loop and event loop in the JavaScript or? Basically event loop. Hello? How do you understand what is event loop and where we are using that?

Concept of ISP in the JavaScript

Do you know the list comprehension and next comprehension in Python?

what what authentication methods you have used in your current project or data?

so do you know the REST API methods

me the basic difference between the patch versus put method.

You need to map the role with user. And one table is for permissions for the particular role. So there are total three tables: roles, permissions, and users. Define a schema for three of them.

Just write over there in JavaScript or any Python compiler, all fields and with types. What uh and how you map those with each other in two ways. First by using SQL and second by using NoSQL schema. Have you heard about the pre-flight request?

HTTP Requests, CORS, and Content Types;

Which method you are using for those requests? Method of pre-flight request. Do you know course in development front and back-end development? Do you have ever heard about course?

Content type content type which you know, API content type, list down uh content type whichever you know Is it probably six?

*SQL Joins and Database Indexing:
*Okay, or do you know indexing in the database? Indexing concept in your database?

Okay. Yeah. Have you work uh work on embeddings or uh Elastic search. Do you have embeddings? What is embeddings? Elasticsearch.

## Part 4

Can you explain something about like your understanding of hooks?

the difference between list, tuple, set and dictionary.
Which one is the fastest?

Code
there are two print statements, so there would be two outputs. So both will be one and two like this.

Database Experience and Flash-Sale Design

suppose a flash sale is going on and there are you know many users which are trying to surf through our website and they are trying to buy items. So how will you implement the DB? Wherein you don't want the DB to crash in between the flash sale and also maintain the check that a single item, sorry, an item is purchased by a single user only. It's not sold to two people.

how will you design the database to not crash it? I don't want the infra response. I want the DB design.

I mean for each okay and also we have subjects so there are different type of subjects like behavioral subject replace replay subject async subject observables is also part of RHS and then we can have the service and through service we will manage this this okay um so assume I am implementing uh infinite scroll table uh and um for infinite scroll table we have applied the pagination through API um the DB contains one lakh documents but in first API response uh you receive uh five hundred records but on UI, you only show 25 records.
So, on scroll, how would you manage the rendering and how would you manage the state change? Like the backend API pagination has 500 records, so you cannot make the API call after 25 rows are completed. You will have to handle it on the UI. After 25 records, how will you handle the interchange between the screen rendering? So API has given us the 500 records and you are allowed to show only 25 and it's an infinite scroll table.
So once you reach the 20 means for infinite scroll table, obviously you won't make the API call when you complete 500 records.
It will be with a second API call.
So how will you manage the state there?
after 25 records, there will be an interchange between states, right? Because you have 500 records, you are rendering 25 rows at one time. So once you scroll down, how will you handle the interchange between the state manager? Basically, how do you manage state when the user is continuously scrolling up and down?
