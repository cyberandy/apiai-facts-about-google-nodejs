// Copyright 2017, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * This file contains the constant strings to be used in the code logic to allow for easy editing
 * Below are eslint comments to enforce JSON like syntax since strings are usually stored in JSON
 * They are written in JavaScript for easier organization of the data and in case functions are used
 */

/* eslint quote-props: ["error", "always"] */
/* eslint quotes: ["error", "double"] */

// eslint-disable-next-line quotes
const deepFreeze = require('deep-freeze');

const categories = {
  "WordLift": {
    "category": "WordLift",
    "suggestion": "WordLift",
    "facts": [
      "WordLift is a plugin for WordPress that uses AI to organize content.",
      "WordLift development began in 2011.",
      "There are already 404190 entities created by users with WordLift."
    ],
    "factPrefix": "Okay, here's a WordLift fact."
  },
  "Scott": {
    "category": "Scott",
    "suggestion": "Scott Abel",
    "facts": [
      "Scott Abel is an American author, content strategist and technology evangelist.",
      "Scott is CEO and co-founder of The Content Wrangler.",
      "Scott is co-author of two books: Intelligent Content: A Primer and The Language of Content Strategy."
    ],
    "factPrefix": "Okay, here's something about Scott."
  }
};

const content = {
  "images": [
    [
      "https://wordlift.io/blog/en/wp-content/uploads/sites/3/2017/04/PASO-Google-Assistant.jpg",
      "What is WordLift"
    ],
    [
      "http://docs.wordlift.io/en/latest/_images/wordlift-publish-entity-lodlive.png",
      "WordLift's graph on LodLive"
    ],
    [
      "https://wordlift.io/blog/en/wp-content/uploads/sites/3/2017/01/wordlift_outside.png",
      "Our offices in via Giulia 117, in the heart of Rome"
    ],
    [
      "https://wordlift.io/blog/en/wp-content/uploads/sites/3/2017/04/wordlift-nap-assistant.png",
      "WordLift's phone number"
    ],
    [
      "https://wordlift.io/blog/en/wp-content/uploads/sites/3/2017/03/publisher-settings.gif",
      "Publisher's settings"
    ]
  ],
  "link": "https://wordlift.io"
};

const cats = {
  "suggestion": "Cats",
  "facts": [
    "Cats are animals.",
    "Cats have nine lives.",
    "Cats descend from other cats."
  ],
  "images": [
    [
      "https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/imgs/160204193356-01-cat-500.jpg",
      "Gray Cat"
    ]
  ],
  /**
   * This sample uses a sound clip from the Actions on Google Sound Library
   * https://developers.google.com/actions/tools/sound-library
   */
  "sounds": [
    "https://actions.google.com/sounds/v1/animals/cat_purr_close.ogg"
  ],
  "link": "https://www.google.com/search?q=cats",
  "factPrefix": "Alright, here's a cat fact. <audio src=\"%s\"></audio>"
};

const transitions = {
  "content": {
    "heardItAll": "Looks like you've heard all there is to know about %s. I could tell you about %s instead.",
    "alsoCats": "By the way, I can tell you about cats too."
  },
  "cats": {
    "heardItAll": "Looks like you've heard all there is to know about cats. Would you like to hear about WordLift?"
  }
};

const general = {
  "heardItAll": "Actually it looks like you heard it all. Thanks for listening!",
  /** Used to give responses for no inputs */
  "noInputs": [
    "I didn't hear that.",
    "If you're still there, say that again.",
    "We can stop here. See you soon."
  ],
  "suggestions": {
    /** Google Assistant will respond to more confirmation variants than just these suggestions */
    "confirmation": [
      "Sure",
      "No thanks"
    ]
  },
  "nextFact": "Would you like to hear another fact?",
  "linkOut": "Learn more",
  "wantWhat": "So what would you like to hear about?",
  "unhandled": "Welcome to Facts about WordLift! I'd really rather not talk about %s. Wouldn't you rather talk about WordLift? I can tell you about WordLift or introduce you Scott Abel. Which do you want to hear about?"
};

// Use deepFreeze to make the constant objects immutable so they are not unintentionally modified
module.exports = deepFreeze({
  categories,
  content,
  cats,
  transitions,
  general
});
