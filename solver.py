import math
import random

import time
import multiprocessing
from functools import partial
import itertools

def import_or_install(package):
    try:
        __import__(package)
    except ImportError:
        from pip._internal import main as pip
        pip(['install', '--user', package])

import_or_install('numpy')
import_or_install('pygame')

import numpy as np
#import matplotlib.pyplot as plot
#from mpl_toolkits.mplot3d import Axes3D
import pygame

class CelestialBody:
    def __init__(self, position, velocity, mass, name=''):
        self.position = np.array(position)
        self.velocity = np.array(velocity)
        self.mass = mass
        self.name = name

        if name == 'sun':
            self.color = (252, 212, 64)
        elif name == 'mercury':
            self.color = (219, 206, 202)
        elif name == 'venus':
            self.color = (165, 124, 27)
        elif name == 'earth':
            self.color = (91, 93, 223)
        elif name == 'mars':
            self.color = (198, 68, 14)
        elif name == 'jupiter':
            self.color = (201, 144, 57)
        elif name == 'saturn':
            self.color = (234, 214, 184)
        elif name == 'uranus':
            self.color = (198, 211, 227)
        elif name == 'neptune':
            self.color = (39, 70, 135)
        else:
            self.color = (random.randrange(0, 255), random.randrange(0, 255), random.randrange(0, 255))

        self.positions = [self.position]

    def updatePosition(self, position):
        self.position = position
        self.positions.append(self.position)

class Simulator:
    def __init__(self, bodies, time_step=0.1):
        self.bodies = bodies
        self.dt = time_step
        self.G = 6.67408e-11 # meters cubed per (kilogram seconds squared)
        self.accelerations = None

        size = [600, 600]
        self.screen = pygame.display.set_mode(size)
        self.screen.fill((0, 0, 0))

        self.max_range = 0
        for body in self.bodies:
            for body2 in self.bodies:
                self.max_range = max(self.max_range, np.linalg.norm(body.position - body2.position))
        self.max_range *= 1.1

    def calcAcceleration(self, i):
        movingBody = self.bodies[i]
        accel = 0

        for body in self.bodies: # Sum the accelerations from the other bodies
            if body == movingBody: # We don't exert a force on ourself!
                continue
            r = body.position - movingBody.position # The direction towards the other body
            rMag = math.sqrt(np.dot(r, r)) # The distance between the two bodies

            accel += self.G*body.mass*r/rMag**3 # Newton's law of universal gravitation

        self.accelerations[i] = accel

    def calcAccelerations(self):
        for i in range(len(self.bodies)): # We need the index of the body so we can match the accelerations
           self.calcAcceleration(i)



    def verletUpdate(self):
        if self.accelerations is None:
            self.accelerations = [0 for i in range(len(self.bodies))]
            self.calcAccelerations()

        for i in range(len(self.bodies)):
            body = self.bodies[i]
            a = self.accelerations[i]

            body.updatePosition(body.position + body.velocity*self.dt + 0.5*a*self.dt*self.dt)

        oldAccelerations = self.accelerations[:]

        self.calcAccelerations()

        for i in range(len(self.bodies)):
            body = self.bodies[i]
            a = oldAccelerations[i]
            aNew = self.accelerations[i]

            body.velocity = body.velocity + 0.5*(a + aNew)*self.dt


    def plot(self, drawTail=True):
        if not drawTail:
            temp = pygame.Surface(self.screen.get_size())
            temp.fill((1, 1, 1))
            self.screen.blit(temp, (0,0), special_flags=pygame.BLEND_SUB)
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                exit()


        max_range = self.max_range
        for body in self.bodies:
            position = body.position
            #pygame.draw.circle(self.screen, (0, 0, 0), [int(self.screen.get_width()*(position[0]+max_range)/(2*max_range)), int(self.screen.get_height()*(position[1]+max_range)/(2*max_range))], 6)
            #if drawTail:
            #    for p in body.positions[-1000:-600:10]:
            #        pygame.draw.circle(self.screen, (255-body.color[0], 255-body.color[1], 255-body.color[2]), [int(self.screen.get_width()*(p[0]+max_range)/(2*max_range)), int(self.screen.get_height()*(p[1]+max_range)/(2*max_range))], 2)
            pygame.draw.circle(self.screen, body.color, [int(self.screen.get_width()*(position[0]+max_range)/(2*max_range)), int(self.screen.get_height()*(position[1]+max_range)/(2*max_range))], 5)

        pygame.display.flip()
