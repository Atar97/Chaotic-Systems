# Visualiztion of Chaotic Systems (N-Body Problem to start)

## N-Body Problem 
The n-body problem is a classic problem in physics concerning the relationship of n gravitational bodies of similar mass. If n <= 2 then the problem is explicitly solvable but once n reaches 3 the system becomes chaotic - meaning that it is so sensitive to initial conditions that it becomes unpredictable. To understand how our universe moves it is important to be able to model these systems. 

## MVPs

### 1. Physics Engine

- **1.1 Vector Class**

    - basically just all the functionality from an *R***2** vector
    - addition, unit vectors, length, direction

- **1.2 Body Class** 

    - Each body will have mass (in solar masses) position, velocity, acceleration. 
    - To find the force acting on each object we will use the classic newtonian eq. Gm1m2/(r12)^2 
    - at each time iteration we will need to recalculate position, velocity, acceleration and force of each of the bodies 
    - this will require creating a class and each of the vector properties will be an instance of that class 

- **1.3 Space Class**

    - Holds all the bodies 
    - Calculates the force on each body 
    - Keeps track of when to calculate all forces and re-render all the bodies  

### 2. Canvas Representation 

- **2.1 Drawing the Bodies**
    - each one will be sized proportionally to it's mass 
    - each one will be a different color 
- **2.2 Start with 2 or 3 bodies**
    - Have an initializier that looks good 
- **2.3 Drawing Tails**
    - each body leaves behind a tail showing where it was
    - tails are the same color as their creating bodies 
- **2.4 BONUS! Use sprites for planets/suns/black-holes**

### 3. User Manipulation 

- **3.1 Basic Functions**
    - start
    - stop
    - reset 

### 4. User Created Bodies 

- **4.1 New Body at random xi, vi, set mass**
    - A simple form that creates a new body with a random color and a user set mass 

- **4.2 New body at user created xi, vi, mass**
    - Have a form to create a new body with user input mass, xi, vi 

### 5. Bonuses (there are a lot)
- **Show the position, velocity and force constantly updating**
- **Use a less brute force algorithm to compute forces**

## Schedule 

### Monday
- Vector Class Finished and working 

### Tuesday 
- Create Body class 
- Create Space class 

### Wednesday 
- Start Canvas showing the bodies 

### Thursday 
- Canvas Showing the Bodies 
- Start User created bodies 

### Friday 
- Drawing Tails for bodies 

### Saturday/Sunday 
- Add links to github and linkedin on page 
- production readme
- host on heroku
- Create snippets to explain why I chose this project and how chaotic systems work 
- Add another chaotic system if I am able 


## Technologies

- React, Redux 
    - only utilized to pass user input to the component rendering all the 

- Canvas 
    - For Drawing bodies in a box 
