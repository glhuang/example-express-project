Twitter Reputation Analyzer

This project consists in building an API and a web page to search for Twitter profiles and return augmented data about them.
At Checkr, we love eating our own dog food, that’s why the only requirement is to separate the front-end from the backend you will build. (ie the back-end can only serve JSON and the front-end is a JS/HTML app that will call the API to get dynamic data)

You’re free to use the languages, frameworks and libraries of your choice. There is no need to setup a database.

Here are the different steps of completion of the project:
1) Build the initial API and the web page that allow users to search for a twitter handle and returns its profile info and latest tweets
2) Deploy it online
3) Allow users to filter tweets by number of re-tweets, by dates, with or without picture.
4) Write tests for it
5) Create a numeric “reputation score” (eg 650pts) for each profile. This score should be based on the # of followers, the content of the tweets and the followers scores.
6) Write a simple document that describes the scoring strategy you used.
Here is a list of positive words that will have a positive influence on the score:https://github.com/jeffreybreen/twitter-sentiment-analysis-tutorial-201107/blob/master/data/opinion-lexicon-English/positive-words.txt

And here is a list of negative words: https://github.com/jeffreybreen/twitter-sentiment-analysis-tutorial-201107/blob/master/data/opinion-lexicon-English/negative-words.txt
