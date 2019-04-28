<h1>Immfly Front-end Developer Test</h1>

## Live Admin Panel

<a href="https://immfly-frontend-test.herokuapp.com/"> Click Here for Live Demo </a>

## Questions and Answers

### 1. In the browser runtime, Javascript is a ...
a. ... compiled language
b. ... transpiled language
c. ... interpreted language

#### Answer
Depends on some developers, it's an interpreted language actually because while runtime its interpreted by the client browser but, thanks to JIT compiles code just before execution we can think about it as compiled/interpreted hybrid too. (JIT === Just in Time Compiler)

### 2. How would you or which tool would you use ECMAScript6 in a project in order to make it backwards compatible with all/old browsers?

#### Answer

Ofcourse with Babel.js ---> It's a toolchain to help us convert ES2015 code to make it usable and be recognized by all/old browsers. It's already bundled in <strong>create-react-app</strong> 

### 3. How would you structure this page into components? Use common sense.

#### Answer

You can find the folder structure above in the repository. Besides, i've already built it and deployed on Heroku, its prototype version. You can check the live demo on <a href="https://immfly-frontend-test.herokuapp.com/"> Click Here for Live Demo </a>

** Logos and the corporate colors will be changed with dummy content after the test due to copyright issues.
** Please wait for a while after clicking the link, it can take a while because of its free tier on Heroku.
** It can also built by OracleJET easily. I'm still learning the core concepts of OracleJET. Mostly its used on Admin Panels and Graphs. 

### 4. Do you know what the frontend testing pyramid is?

#### Answer

I'm aware the concept but don't know the pyramid, until i got that question. So, what i learned are as follows:
* On React, for example components and functions are units.
* Unit tests are fastest and not time consuming, budget solutions.
* Writing lots of small unit test cost less time and money when compared with others.
* Integration or snapshot tests are slower and we need to use them less. (component vs component comparison)
* E2E test are end to end tests(it opens browser and)
* Use very few high level tests.
* Avoid for ice-cream cone formation.
* If you are using minimal unit tests and much manual tests with E2E too, your project is going to be very complicated.

### 5. In your company there are three frontend developers working on the same react project, and each one is using a different version of NodeJS and there are packages that depend on the NodeJS version:
a. Ricard is using 10.0.6 version.
b. Nico is using 8.11.4 version.
c. Albert is using 6.14.1 version.

Do you think it is a problem? Why?
If you think it is a problem, tell us how would you solve this dependency.

#### Answer

Using different versions of Node can create severe issues according to dependencies of the package. We need to use one stable version by entire team. We can manage it by "nvm" or reinstall the latest stable version by all team.

### 6. We have this project structure (it is simplified).If you have to add a new component Button and a new service/class/manager for authorization, and both will be used on login and dashboard section, how would you structure those new features in the project ?

#### Answer

I add <strong>"authorizations"</strong> / <strong>"components"</strong> folders under <strong>"sections"</strong> folder. Add the <strong>Button.jsx</strong> and <strong>Button.scss</strong> under that folder.

### 8. What is the output of this code?
``` function compare (a) {
return a == false ? 'A' : 'B'
}
console.log(compare((1 - 1).toString()))
