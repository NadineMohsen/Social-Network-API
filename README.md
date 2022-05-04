# Social-Network-API
  ![MIT License](https://img.shields.io/badge/license-MIT-blue)

## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Test-Instructions](#test-instructions)
  - [License](#license)
  - [Repository](#repository)
  - [Link](#link)
  - [Questions](#questions)

## Description
```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database

WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON

WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database

WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Installation

Clone the repo and Use the following command lines:

 `npm i`

 `node index.js`


## Usage

Uses the [Mongoose package](https://www.npmjs.com/package/mongoose) to connect to a MongoDB database.

  * Includes User and Thought models

  * Includes schema settings for User and Thought models

  * Includes Reactions as the `reaction` field's subdocument schema in the Thought model.

  * Uses functionality to format queried timestamps properly.
* 
## Contribution

If you would like to contribute to this project reach out to me. Contact Information can be found below.

## Test-Instructions
No test 

## License
This application is licensed under the MIT license.

[MIT License](https://opensource.org/licenses/BSD-3-Clause)

## Repository
https://github.com/NadineMohsen/Social-Network-API

## Questions
For any questions you can reach me on github or by email
- Github [My Profile on Github](https://github.com/NadineMohsen)
- Email nadine.mohsen@hotmail.com

## Link
[Part 1](https://drive.google.com/file/d/1yY5yurfLZdgaVnG9fZoth6hmgJgLnELi/view)


[Part 2](https://drive.google.com/file/d/1yY5yurfLZdgaVnG9fZoth6hmgJgLnELi/view)







