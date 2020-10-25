# jkeane.me Portfolio Frontend

This is the codebase for my portfolio frontend. Some of the basic components of a portfolio exist, like quick links to other media and a collection of my work. I also included some components to help viewers get a better idea of who I am. To achieve this, I added some prompts to the main page, where I discuss some topics of technology. I also have an "interests" page to link articles I found interesting.

Some of the information is hard coded in. However, as I am inherently lazy, I do not want to update this page whenever I am developing something new. To amend this issue, I run a scheduled task in the backend using the Heroku Scheduler plug-in, which uses the GitHub API to get and process data from my repositories. While I was at this, I figured I could use another API to perform a similar task. So, I also use the Reddit API to get data from my personal subreddit, where I cross-post articles that I find interest in.

## TODO

- Make images in project page adaptable to amount of content.
- Add contact me page.
- Implement more thoughtful UI/UX design.
- "Load in" animations?

## Links

- View the [website](http://jakeane.surge.sh/)
- View the [backend repo](https://github.com/jakeane/portfolio_server)

## Screenshot

![website screenshot](https://raw.githubusercontent.com/jakeane/jkeane.me/gh-pages/src/img/portfolio_preview.png)



