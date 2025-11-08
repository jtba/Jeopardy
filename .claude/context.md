# Jeopardy Game Project - Claude Context

## Project Overview

This is a Jeopardy-style trivia game web application called "Disheopardy". It's a simple, frontend-only game that allows teams to compete by answering trivia questions organized by categories and point levels.

## Tech Stack

- **Framework**: AngularJS 1.x
- **UI Framework**: Bootstrap 3.x with Bootstrap theme
- **Dependencies**:
  - jQuery 2.2.2
  - UI Bootstrap 1.2.5 (for modals)
  - Angular Cookies (for state persistence)
- **No Backend**: Pure client-side application

## Project Structure

```
/
├── app/
│   ├── app.module.js           # Main Angular module definition
│   ├── app.controller.js       # Main game controller with Q&A data
│   └── questionCtrl.js         # Modal controller for question display
├── assets/
│   ├── css/                    # Bootstrap and custom styles
│   └── js/                     # Third-party libraries
├── docs/
│   └── screenshot1.png         # Project screenshot
├── index.html                  # Main game board page
├── questionboard.html          # Modal template for questions
└── README.md                   # Project documentation
```

## Key Components

### 1. app.module.js
- Defines the main Angular module `atmGame`
- Includes dependencies: `ui.bootstrap` and `ngCookies`

### 2. app.controller.js
- Main controller: `atmGameCtrl`
- Contains the game data structure (categories, questions, answers, points)
- Manages game state, team switching, and score tracking
- Key functions:
  - `show_question()`: Opens modal with question
  - `switchTeam()`: Cycles through teams
  - `addPoints()`: Updates team scores
  - `GameManager()`: Central game state manager

### 3. questionCtrl.js
- Modal controller for displaying individual questions
- Handles answer reveal and scoring

### 4. index.html
- Main game board UI
- Displays category grid with point values
- Shows team scores and active player indicator

### 5. questionboard.html
- Modal template for question/answer display

## Game Data Structure

Questions and answers are stored as a JSON object in `/app/app.controller.js`:

```javascript
$scope.data = {
  categories: [
    {
      title: "Category Name",
      data: [
        { level: 100, question: "Q", answer: "A", disabled: false },
        // ... more questions
      ]
    }
  ],
  players: [
    { name: "Team Name", score: 0, is_turn: false }
  ]
}
```

## Customization

To customize the game:
1. Edit the JSON object in `/app/app.controller.js`
2. Modify categories, questions, answers, and point values
3. Add or remove teams in the players array
4. Adjust styling in `/assets/css/custom.css`

## Running the Application

1. Serve the directory with any web server
2. Open `index.html` in a browser
3. No build process or dependencies installation required

## Development Notes

- The app uses AngularJS 1.x patterns (controller-based, not components)
- State management is done through Angular scopes and cookies
- Questions are disabled after being selected (one-time use)
- Modal system uses UI Bootstrap for question display
- No external API calls or server communication

## Author

- Jason Baldwin (JTBA)
- Licensed under MIT License

## Future Enhancements Considerations

- Convert to modern framework (React, Vue, Angular 2+)
- Add persistent storage (localStorage or backend)
- Implement sound effects and animations
- Add timer functionality for questions
- Create admin interface for easier game setup
- Add Daily Double functionality
- Implement Final Jeopardy round
