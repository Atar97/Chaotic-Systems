import solver

sun = solver.CelestialBody((0, 0, 0), (0, 0, 0), 2e30, 'sun')
mercury = solver.CelestialBody((0, 5e10,0), (47000, 0, 0), 3.285e23, 'mercury')
venus = solver.CelestialBody((0, 1e11, 0), (35000, 0, 0), 4.8e24, 'venus')
earth = solver.CelestialBody((0, 1.5e11, 1e10), (30000, 0, 0), 6e24, 'earth')
mars = solver.CelestialBody((0, 2.2e11, 0), (24000, 0, 0), 6.4e23, 'mars')
jupiter = solver.CelestialBody((0, 7.7e11, 0), (13000, 0, 0), 1e28, 'jupiter')
saturn = solver.CelestialBody((0, 1.4e12, 0), (9000, 0, 0), 5.7e26, 'saturn')
uranus = solver.CelestialBody((0, 2.8e12, 0), (6935, 0, 0), 8.7e25, 'uranus')
neptune = solver.CelestialBody((0, 4.5e12, 0), (5477, 0, 0), 1e26, 'neptune')


bodies = [sun, mercury, venus, earth, mars, jupiter, saturn, uranus, neptune]

sim = solver.Simulator(bodies, 100)

for i in range(int(3e100)):
    if i % 100 == 0:
        sim.plot()
    sim.verletUpdate()

input()
