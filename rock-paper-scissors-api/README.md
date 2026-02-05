# Rock Paper Scissors API #

Simple interactive API providing game capabilities for the old school "Rock Paper Scissors" game.

## User interaction: ##

1. Register and obtain Rapid API key
2. Required headers: X-RapidAPI-Host and X-RapidAPI-Key
2. X-RapidAPI-Host: https://vadym-rock-paper-scissors-api.p.rapidapi.com
3. Choices are(string):
    - rock
    - paper
    - scissors

(e.g. https://vadym-rock-paper-scissors-api.p.rapidapi.com/?choice={your_selected_choice})

### Response example: ###
```
{
  user: { name: 'paper', counter: 'scissors' },
  ai: { name: 'scissors', counter: 'rock' },
  result: 'You win!'
}
```